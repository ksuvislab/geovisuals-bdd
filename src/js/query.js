import axios from "axios";

export function query_find_intersection(bounding_box) {

    return new Promise(function(resolve, reject) {
        axios.get('/queryFindIntersection', {
            params: {
                bbox: bounding_box.geometry,
                model_type: 'train'
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