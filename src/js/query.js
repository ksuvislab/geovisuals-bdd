import axios from "axios";

export function query_find_intersection(bounding_box, model, weather, scene, time_of_day) {

    return new Promise(function(resolve, reject) {
        axios.get('/queryFindIntersection', {
            params: {
                bbox: bounding_box.geometry,
                model_type: model,
                weather: weather,
                scene: scene,
                time_of_day: time_of_day
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