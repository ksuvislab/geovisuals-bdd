import { default as train_model } from '../data-models/train';
import { default as val_model } from '../data-models/val';
import { default as street_model } from '../data-models/streets';
import { default as road_network_model } from '../data-models/road_network';
import * as JSONStream from 'JSONStream'

export function query_all (req, res, err)
{
    var query = req.query;
    var model = (query.model_type == 'train') ? train_model : val_model;

    model.find({
        'predict' : { $exists: true },
        'actual': { $exists: true }
    })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
}

// Query trips inside bounding box
// Requirements: actual and prediction need to be exists
export function query_bbox_trips(req, res, err)
{
    let query = req.query;
    let model = train_model;
    let bounding_box = JSON.parse(query.bbox);

    model.find({
        locations: {
            $geoIntersects: {
                $geometry: bounding_box
            }
        },
        $and: [
            {'predict' : { $exists: true }},
            { 'actual': { $exists: true }}
        ]
    })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
}

export function query_all_streets (req, res, err)
{
    var model = street_model;

    model.aggregate([])
        .cursor()
        .exec()
        .pipe(JSONStream.stringify())
        .pipe(res);
}

export function query_steets_by_tripids(req, res, err)
{
    let data = req.data;
    let model = street_model;
    let trip_ids = data.trip_ids;

    model.find({
        trip_id: {
            $in: trip_ids
        }
    })
    .exec(function (err, result) {
        if (err) return res.end(err);
        res.json(result);
    });
}

export function query_count(req, res, err)
{
    let query = req.query;
    let model = (query.model_type == 'train') ? train_model : val_model;
    let key = query.key;
    let value = query.value;

    let query_obj = {};
    query_obj[key] = value;

    model.count(query_obj)
    .exec(function (err, result) {
        if (err) return res.end(err);
        res.json(result);
    });
}

// Find any trip that intersect inside the bounding box
// Example query to find both values
// db.getCollection('train').find({'time_of_day':{ $in: ["night", "daytime"]}});
export function query_find_intersection(req, res, err)
{

    let query = req.query;
    let model = (query.model_type == 'train') ? train_model : val_model;
    let bounding_box = JSON.parse(query.bbox);
    //let weather = query.weather;
    //let scene = query.scene;
    //let time_of_day = query.time_of_day;

    model.find({
        locations: {
            $geoIntersects: {
                $geometry: bounding_box
            }
        }
        //,
        /*
        $and: [
            /*{ 'predict': { $exists: true }},*/
            /*{ actual: { $exists: true }},*/
            //{ 'weather': (weather !== 'all') ? weather : { $exists: true }},
            //{ 'scene': (scene !== 'all') ? scene : { $exists: true }},
            //{ 'time_of_day': (time_of_day !== 'all') ? time_of_day : { $exists: true }}
            /*
            { 'weather': (weather[0] !== 'all') ? { $in: weather } : { $exists: true }},
            { 'scene': (scene[0] !== 'all') ? { $in: scene } : { $exists: true }},
            { 'time_of_day': (time_of_day[0] !== 'all') ? { $in: time_of_day } : { $exists: true }}*/
        //]
    })
    .exec(function (err, result) {
        if (err) return res.end(err);
        res.json(result);
    });

}

export function query_find_roadnetwork_intersection(req, res, err)
{
    let model = road_network_model;
    model.find({
        'trip_ids': { $exists: true }
    })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'))
}