import { default as train_model } from '../data-models/train';
import { default as val_model } from '../data-models/val';

// Find any trip that intersect inside the bounding box
export function query_find_intersection(req, res, err)
{

    let query = req.query
    let model = (query.model_type == 'train') ? train_model : val_model;
    let bounding_box = JSON.parse(query.bbox);

    model.find({
        locations: {
            $geoIntersects: {
                $geometry: bounding_box
            }
        }
    })
    .exec(function (err, result) {
        if (err) return res.end(err);
        res.json(result);
    });

}