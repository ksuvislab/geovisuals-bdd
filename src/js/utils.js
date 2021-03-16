import { map_access_token } from "./map";
import { view_close_loading, view_show_loading } from "./view";

// Set axios interceptor when query from MongoDB
export function util_axios_interceptors()
{
    axios.interceptors.request.use(function (config) {
        // Show loading screen
        view_show_loading();
        return config;
    }, function(error) {
        return error;
    });


    axios.interceptors.response.use(function (response) {
        // Close loading screen
        view_close_loading();
        return response;
    }, function (error) {
        return error;
    });
}

// Random generator from the interval
export function util_random_number_interval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Preprocess only training datasets
export function util_preprocess_data (data) {
    let result = [];
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < data.length; ++i) {
            let trip = data[i];
            // Check exist location
            if (trip.locations) {
                result.push(trip);
            }
        }
        resolve(result);
    });
}

// Compute boolean cases expression
export function util_compute_cases(data)
{
    for (let i = 0; i < data.length; ++i) {

        let trip = data[i];

        trip.cases = {};
        trip.cases['0000'] = []; // not sure
        trip.cases['1000'] = [];
        trip.cases['1001'] = [];
        trip.cases['1010'] = [];
        trip.cases['1011'] = [];
        trip.cases['1100'] = [];
        trip.cases['1101'] = [];
        trip.cases['1110'] = [];
        trip.cases['1111'] = [];

        for (let j = 0; j < trip.actual.no_slight.length; ++j) {
            let actual = trip.actual.no_slight[j]; // A
            let tcnn1 = trip.predict.tcnn1[j].indexOf(d3.max(trip.predict.tcnn1[j])); // B
            let fcn_lstm = trip.predict.fcn_lstm[j].indexOf(d3.max(trip.predict.fcn_lstm[j]));// C
            let cnn_lstm = trip.predict.cnn_lstm[j].indexOf(d3.max(trip.predict.cnn_lstm[j])); // D

            //console.log(actual + " " + tcnn1 + " " + fcn_lstm + " " + cnn_lstm);
            if (actual !== tcnn1 && actual !== fcn_lstm && actual !== cnn_lstm) {
                trip.cases['1000'].push(j);
            }  else if (actual !== tcnn1 && actual !== fcn_lstm && actual === cnn_lstm) {
                trip.cases['1001'].push(j);
            } else if (actual !== tcnn1 && actual === fcn_lstm && actual !== cnn_lstm) {
                trip.cases['1010'].push(j);
            } else if (actual !== tcnn1 && actual === fcn_lstm && actual === cnn_lstm) {
                trip.cases['1011'].push(j);
            } else if (actual === tcnn1 && actual !== fcn_lstm && actual !== cnn_lstm) {
                trip.cases['1100'].push(j);
            } else if (actual === tcnn1 && actual !== fcn_lstm && actual === cnn_lstm) {
                trip.cases['1101'].push(j);
            } else if (actual === tcnn1 && actual === fcn_lstm && actual !== cnn_lstm) {
                trip.cases['1110'].push(j);
            } else if (actual === tcnn1 && actual === fcn_lstm && actual === cnn_lstm) {
                trip.cases['1111'].push(j);
            }
        }
    }
}

export function util_compute_entropy (data) {

    for (let i = 0; i < data.length; ++i) {
        let trip = data[i];

        let true_labels = trip.actual.slight;
        let tcnn1_probs = trip.predict.tcnn1;
        let cnn_lstm_probs = trip.predict.cnn_lstm;
        let fcn_lstm_probs = trip.predict.fcn_lstm;

        let tcnn1_entropy = [];
        let cnn_lstm_entropy = [];
        let fcn_lstm_entropy = [];

        for (let j = 0; j < true_labels.length; ++j) {

            let true_label = [1e-14,1e-14,1e-14,1e-14,1e-14,1e-14];
            true_label[true_labels[j]] = 1;

            tcnn1_probs[j] = util_normalize(tcnn1_probs[j], [1e-14, 1]);
            cnn_lstm_probs[j] = util_normalize(cnn_lstm_probs[j], [1e-14, 1]);
            fcn_lstm_probs[j] = util_normalize(fcn_lstm_probs[j], [1e-14, 1]);

            tcnn1_entropy.push(tcnn1_probs[j].reduce(function (sum, prob, index) {
                let p = true_label[index];
                let q = isFinite(Math.log(prob) / Math.log(2)) ? Math.log(prob) / Math.log(2) : 0;
                return sum - (p * q);
            }, 0));

            cnn_lstm_entropy.push(cnn_lstm_probs[j].reduce(function (sum, prob, index) {
                let p = true_label[index];
                let q = isFinite(Math.log(prob) / Math.log(2)) ? Math.log(prob) / Math.log(2) : 0;
                return sum - (p * q);
            }, 0));

            fcn_lstm_entropy.push(fcn_lstm_probs[j].reduce(function (sum, prob, index) {
                let p = true_label[index];
                let q = isFinite(Math.log(prob) / Math.log(2)) ? Math.log(prob) / Math.log(2) : 0;
                return sum - (p * q);
            }, 0));
        }

        trip.entropy = {
            tcnn1: tcnn1_entropy.map(function (value, index) {
                let min = d3.min(tcnn1_entropy);
                let max = d3.max(tcnn1_entropy);
                let normalize = d3.scaleLinear()
                    .domain([min, max])
                    .range([0, 1]);
                return normalize(value);
            }),
            cnn_lstm: cnn_lstm_entropy.map(function (value, index) {
                let min = d3.min(cnn_lstm_entropy);
                let max = d3.max(cnn_lstm_entropy);
                let normalize = d3.scaleLinear()
                    .domain([min, max])
                    .range([0, 1]);
                return normalize(value);
            }),
            fcn_lstm: fcn_lstm_entropy.map(function (value, index) {
                let min = d3.min(fcn_lstm_entropy);
                let max = d3.max(fcn_lstm_entropy);
                let normalize = d3.scaleLinear()
                    .domain([min, max])
                    .range([0, 1]);
                return normalize(value);
            })
        };
    }
}

// Normalize vector in a set of interval
export function util_normalize (vectors, range) {

    let min = d3.min(vectors);
    let max = d3.max(vectors);

    let normalize = d3.scaleLinear()
        .domain([min, max])
        .range(range);

    return vectors.map(function (value, index) {
        let shift_value = value - min;
        return normalize(shift_value);
    });
}

// Compute performances of all trip data
export function util_compute_performance (data) {

    let car_actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];
    let model_performance = {};
    let confusion_matrix = {};
    let entropy_by_actions = {};

    // Create confusion matrix
    for (let i = 0; i < data.length; ++i) {

        let true_label = data[i].actual.no_slight;
        let predicts = data[i].predict;
        let entropies = data[i].entropy;

        Object.keys(predicts).forEach(function (key) {
            // Get prediction label
            let predict_label = predicts[key];
            // Add compute entropy
            let entropy_label = entropies[key];

            if (!(key in confusion_matrix)) { confusion_matrix[key] = {}; }

            for (let  j = 0; j < predict_label.length; ++j) {

                let true_action = car_actions[true_label[j]];
                let predict_action = car_actions[predict_label[j].indexOf(d3.max(predict_label[j]))];

                if (!(true_action in confusion_matrix[key])) {
                    confusion_matrix[key][true_action] = {
                        'straight': 0,
                        'slow_or_stop': 0,
                        'turn_left': 0,
                        'turn_right': 0
                    };
                }

                confusion_matrix[key][true_action][predict_action] += 1;

                if (!(key in entropy_by_actions)) {
                    entropy_by_actions[key] = {};
                }

                if (!(true_action in entropy_by_actions[key])) {
                    entropy_by_actions[key][true_action] = [];
                }

                entropy_by_actions[key][true_action].push(entropy_label[j]);
            }
        });
    }

    // Debugging
    //console.log(confusion_matrix);
    //console.log(entropy_by_actions);

    // Calculate all performance metrices
    Object.keys(confusion_matrix).forEach(function (model) {

        model_performance[model] = {};
        delete confusion_matrix[model][undefined];

        Object.keys(confusion_matrix[model]).forEach(function (main_class) {

            let tp = 0; let tn = 0; let fp = 0; let fn = 0;

            Object.keys(confusion_matrix[model][main_class]).forEach(function (predict_class) {
                if (predict_class !== main_class) {
                    fn += confusion_matrix[model][main_class][predict_class];
                } else {
                    tp = confusion_matrix[model][main_class][predict_class];
                }
            });

            Object.keys(confusion_matrix[model]).forEach(function (sub_class) {
                if (main_class !== sub_class) {
                    Object.keys(confusion_matrix[model][sub_class]).forEach(function (predict_class) {
                        if (predict_class === main_class) {
                            fp += confusion_matrix[model][sub_class][predict_class];
                        } else {
                            tn += confusion_matrix[model][sub_class][predict_class];
                        }
                    });
                }
            });

            /*
            console.log('tp: ' + tp);
            console.log('tn: ' + tn);
            console.log('fp: ' + fp);
            console.log('fn: ' + fn);*/

            model_performance[model][main_class] = {};

            let accuracy = (tp + tn) / (tp + tn + fp + fn);
            let precision = tp / (tp + fp);
            let recall = tp / (tp + fn);
            let f1 = (2 * tp) / ((2 * tp) + fp + fn);

            model_performance[model][main_class]['accuracy'] = (isNaN(accuracy))? 0 : accuracy;
            model_performance[model][main_class]['precision'] = (isNaN(precision))? 0 : precision;
            model_performance[model][main_class]['recall'] = (isNaN(recall))? 0 : recall;
            model_performance[model][main_class]['f1'] = (isNaN(f1))? 0 : f1;
            // Compute average entropy
            model_performance[model][main_class]['entropy'] = d3.mean(entropy_by_actions[model][main_class]);
        });
    });

    return model_performance;
}

// Group street data into a datasets
export function util_compute_street_data(data, trips) {

    let street_group = []
    for (let i = 0; i < data.length; ++i) {

        let trip_id = data[i].trip_id;
        let matchings = data[i]['matchings'];

        for (let j = 0; j < matchings.length; ++j) {
            matchings[j]['street_names'].forEach(function(name) {

                let pos = street_group.map(function(x) {
                    return x.name;
                }).indexOf(name);

                let trip_pos = trips.map(function(x) {
                    return x.trip_id;
                }).indexOf(trip_id);

                if (pos >= 0) {
                    street_group[pos]['trip_ids'].push(trip_id);
                    if (trip_pos >= 0) {
                        street_group[pos]['predicted_trips'].push(trips[trip_pos]);
                    }
                } else {

                    let street = {
                        name: name,
                        trip_ids: [trip_id], // For counting density
                        predicted_trips: []
                    }

                    if (trip_pos >= 0) {
                        street['predicted_trips'].push(trips[trip_pos]);
                    }

                    street_group.push(street);
                }
            });
        }
    }

    //  Compute performance for streets
    for (let i = 0; i < street_group.length; ++i) {
        let street = street_group[i];
        if (['predicted_trips'].length > 0) {
            street['performance'] = util_compute_performance(street['predicted_trips']);
        } else {
            street['performance'] = undefined;
        }
    }

    return street_group;
}

// Merge mapmatching street to roadnetwork with trip ids
export function util_merge_street_roadnetwork(roadnetwork_data, street_data)
{
    let selected_streets = [];
    //let trip_counts = [];
    for (let i = 0; i < street_data.length; ++i) {
        let name = street_data[i].name;
        let pos = roadnetwork_data.map(function(x) {
            return x.name;
        }).indexOf(name);

        if (pos >= 0) {
            //trip_counts.push(street_data[i]['trip_ids'].length);
            roadnetwork_data[pos]['count'] = street_data[i]['trip_ids'].length;
            roadnetwork_data[pos]['trips'] = street_data[i]['predicted_trips'];
            roadnetwork_data[pos]['performance'] = street_data[i]['performance'];
            /*
            let multi_line_string = [];
            roadnetwork_data[i].features.forEach(function(feature) {
                multi_line_string.push(feature.geometry.coordinates);
            });

            roadnetwork_data[pos]['multiLineString'] = turf.multiLineString(multi_line_string);*/

            selected_streets.push(roadnetwork_data[pos]);
        }
    }

    return selected_streets;
}

/*
export function util_map_matching(trip)
{
    var profile = "driving";
    var coords = trip.locations.coordinates;
    var newCoords = coords.join(';')
    var radius = [];
    coords.forEach(element => {
      radius.push(25);
    });
    getMatch(newCoords, radius, profile);

    function getMatch(coordinates, radius, profile) {

        var radiuses = radius.join(';')
        // Create the query
        var query = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=true&access_token=' + map_access_token;

        $.ajax({
            method: 'GET',
            url: query
        }).done(function(data) {
            console.log(data);
            // Get the coordinates from the response
            //var coords = data.matchings[0].geometry;
            //console.log(coords);
        });
    }
}*/