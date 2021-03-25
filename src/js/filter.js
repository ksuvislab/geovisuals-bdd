import { map_get_bbox_polygon } from "./map";

// Filter trip in bounding box
export function filter_bbox_trips(trips)
{
    let bbox = map_get_bbox_polygon();
    let filtered_trips = [];
    for (let i = 0; i < trips.length; ++i) {
        let trip = trips[i];
        let trajectory = trip.locations;
        if (turf.booleanContains(bbox, trajectory)) {
            filtered_trips.push(trip);
        }
    }
    return filtered_trips;
}

// Filter zipcode region in bounding box
export function filter_bbox_zipcodes(zipcodes)
{
    let bbox = map_get_bbox_polygon();
    let filtered_zipcodes = [];

    for (let i = 0, len = zipcodes.features.length; i < len; i++) {
        let feature = zipcodes.features[i];
        if (feature.geometry.type === 'MultiPolygon') {
            let coordinates = feature.geometry.coordinates;
            coordinates.forEach(function(coord) {
                let new_polygon = turf.polygon(coord);
                /*
                if (turf.booleanContains(bbox, new_polygon)) {
                    filtered_zipcodes.push(new_polygon);
                }*/
                filtered_zipcodes.push(new_polygon);
            });
        } else {
            feature.properties = {};
            filtered_zipcodes.push(feature);
            /*
            if (turf.booleanContains(bbox, feature)) {
                feature.properties = {};
                filtered_zipcodes.push(feature);
            }*/
        }
    }

    return turf.featureCollection(filtered_zipcodes);
}

// Filter trip by polygon
export function filter_by_polygon (polygon, trips) {

    let filtered_trips = [];

    for (let i = 0; i < trips.length; ++i) {
        let trajectory_geometry = trips[i].locations;
        if (turf.booleanContains(polygon, trajectory_geometry)) {
            filtered_trips.push(trips[i]);
        }
    }

    return filtered_trips;
}

// Get trip that have all these 3 predictions
export function filter_predicted_trips(trips) {

    let filtered_trips = [];
    let temp_arr = [];
    for (var j = 0; j < 108; ++j) {
        temp_arr.push([0,0,0,0,0,0]);
    }

    for (var i = 0; i < trips.length; ++i) {
        // Get prediction action
        if (trips[i].actual && trips[i].predict && Object.keys(trips[i].predict).length === 3 && trips[i].actual.no_slight) {
            if (trips[i].predict['tcnn1'].length <= 0) {
                trips[i].predict['tcnn1'] = temp_arr;
            }
            if (trips[i].predict['cnn_lstm'].length <= 0) {
                trips[i].predict['cnn_lstm'] = temp_arr;
            }
            if (trips[i].predict['fcn_lstm'].length <= 0) {
                trips[i].predict['fcn_lstm'] = temp_arr;
            }
            filtered_trips.push(trips[i]);
        }
    }

    return filtered_trips;
}

// Filter by nodes
export function filter_by_nodes(trips, selected_nodes) {
    let filter = {};
    selected_nodes.forEach(function (node) {
        let key = node.dimension;
        let value = node.parent;
        if (!(key in filter)) {
            filter[key] = [];
        }

        if (filter[key].indexOf(value) < 0) {
            filter[key].push(value);
        }
    });

    let filtered_trips = [];
    for (let i = 0; i < trips.length; ++i) {

        let trip = trips[i];

        let meet = true;
        Object.keys(filter).forEach(function (key) {
            if (filter[key].indexOf(trip[key]) < 0) {
                meet = false;
            }
        });

        if (meet) {
            filtered_trips.push(trip);
        }
    }

    return filtered_trips;
}

export function filter_point_on_trips(trips, point) {

    let filtered_trips = [];

    for (let i = 0; i < trips.length; ++i) {

        let trajectory = trips[i].locations.coordinates;
        let line = turf.lineString(trajectory);
        let distance = turf.pointToLineDistance(point, line, {units: 'miles'});
        if (distance >= 0 && distance < 0.05 ) {
            filtered_trips.push(trips[i]);
            return filtered_trips;
        }
    }

    return;

   // return filtered_trips;
}

// Filter trip in radius
export function filter_trip_in_radius(trips, polygon) {
    let filtered_trips = [];
    for (let i = 0; i < trips.length; ++i) {
        let trip = trips[i];
        let trajectory = trip.locations;
        if (turf.booleanContains(polygon, trajectory)) {
            filtered_trips.push(trip);
        }
    }
    return filtered_trips;
}

// Filter roadnetwork inside bounding box
// Return roads with multilinestring geometry
export function filter_bbox_roadnetwork(roadnetwork)
{
    let bbox = map_get_bbox_polygon();
    //let filtered_road_network = [];
    let features = [];

    for (let i = 0; i < roadnetwork.length; ++i) {

        let has = false;
        let multi_line_string = [];
        // Get all linestring coordinates
        roadnetwork[i].features.forEach(function(feature) {
            if (turf.booleanContains(bbox, feature)) {
                has = true;
            }
            multi_line_string.push(feature.geometry.coordinates);
        });

        if (has) {
            //filtered_road_network.push(data[i]);
            features.push({
                name: roadnetwork[i].name,
                multiLineString: turf.multiLineString(multi_line_string)
            });
        }
    }

    return features;
}