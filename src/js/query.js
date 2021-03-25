import axios from "axios";

// Query all trips
export function query_all(model)
{
    return new Promise(function (resolve, reject) {
        axios.get('/queryAll', {
            params: {
                model_type: model
            }
        })
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

// Query all trips inside bouningbox
export function query_bbox_trips(bounding_box)
{
    return new Promise(function(resolve, reject) {
        axios.get('/queryBboxTrips', {
            params: {
                bbox: bounding_box.geometry
            }
        })
        .then(function(response) {
            resolve(response.data);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

// Query all streets
export function query_all_streets()
{
    return new Promise(function (resolve, reject) {
        axios.get('/queryAllStreets', {})
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

// Query all street by tripids
export function query_street_by_tripids(trip_ids)
{
    return new Promise(function(resolve, reject) {
        axios.get('/queryStreetByTripIds', {
            data: {
                trip_ids: trip_ids
            }
        })
        .then(function(response) {
            resolve(response.data);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

// Query all road networks
export function query_all_roadnetworks() {
    return new Promise(function(resolve, reject) {
        axios.get('/queryRoadnetwork', {})
        .then(function(response) {
            resolve(response.data);
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

// Query count
export function query_count(model, key, value)
{
    return new Promise(function(resolve, reject) {
        axios.get('/queryCount', {
            params: {
                model_type: model,
                key: key,
                value: value
            }
        })
        .then(function(response) {
            resolve(response);
        })
        .catch(function(error) {
            resolve(error);
        });
    });
}

// Query by intersection
export function query_find_intersection(bounding_box, model) {
    return new Promise(function(resolve, reject) {

        axios.get('/queryFindIntersection', {
            params: {
                bbox: bounding_box.geometry,
                model_type: model
                //weather: weather,
                //scene: scene,
                //time_of_day: time_of_day
            }
        })
        .then(function(response) {
            resolve(response.data);
        })
        .catch(function(error) {
            reject(error)
        });
    });
}