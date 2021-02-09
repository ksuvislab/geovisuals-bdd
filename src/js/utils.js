import { view_close_loading, view_show_loading } from "./view";

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

export function util_preprocess_data (data) {

    let result = [];

    return new Promise(function (resolve, reject) {

        for (var i = 0; i < data.train.length; ++i) {
            let trip = data.train[i];
            // Check exist location
            if (trip.locations) {
                trip.model_type = 'train';
                result.push(trip);
            }
        }

        for (var i = 0; i < data.val.length; ++i) {
            let trip = data.val[i];
            // Check exist location
            if (trip.locations) {
                trip.model_type = 'val';
                result.push(trip);
            }
        }

        resolve(result);
    });
}

export function util_generate_accuracy(data, model, action, accuracy)
{
    let car_actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right', 'turn_left_slight', 'turn_right_slight'];

    let parameters = {};
    for (let i = 0; i < car_actions.length; ++i) {
        parameters[car_actions[i]] = {};
        parameters[car_actions[i]].tp = 0;
        parameters[car_actions[i]].tn = 0;
        parameters[car_actions[i]].fp = 0;
        parameters[car_actions[i]].fn = 0;
    }

    for (let i = 0; i < data.length; ++i) {
        let actual = data[i].actual['no_slight'];
        let predict = data[i].predict[model];
        if (predict) {
            //console.log(predict);
            for (let j = 0; j < predict.length; ++j) {
                let actual_action = car_actions[actual[j]];
                let predict_action = car_actions[predict[j].indexOf(d3.max(predict[j]))];

                if (actual_action && predict_action) {
                    if (actual_action !== predict_action) {
                        parameters[predict_action].fp += 1;
                        parameters[actual_action].fn += 1;

                        Object.keys(parameters).forEach(function(key) {
                            if (key !== actual_action && key !== predict_action) {
                                parameters[key].tn += 1;
                            }
                        });


                    } else {
                        parameters[actual_action].tp += 1;
                        Object.keys(parameters).forEach(function(key) {
                            if (key !== actual_action) {
                                parameters[key].tn += 1;
                            }
                        });
                    }
                }

            }

            // Calculate precision and recall
            let precision = parameters[action].tp / (parameters[action].tp + parameters[action].fp);
            let recall = parameters[action].tp / (parameters[action].tp + parameters[action].fn);
            let f1 = 2 * ((precision * recall) / (precision + recall));

            if (accuracy === 'precision') {
                data[i].accuracy = (isNaN(precision)) ? 0 : precision;
            }
            if (accuracy === 'recall') {
                data[i].accuracy = (isNaN(recall)) ? 0 : recall;
            }
            if (accuracy === 'f1') {
                data[i].accuracy = (isNaN(f1)) ? 0 : f1;
            }
        }
    }

    return;
}