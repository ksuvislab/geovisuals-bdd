import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { rgb } from "d3";
import {
    query_find_intersection
} from "./query";
import { util_generate_accuracy } from "./utils";

// Public variables
export let map_main = undefined;
export let map_draw = undefined;

// Private Variables
let access_token = 'pk.eyJ1IjoiZGlnaXRhbGtpIiwiYSI6ImNqNXh1MDdibTA4bTMycnAweDBxYXBpYncifQ.daSatfva2eG-95QHWC9Mig';
export var map_model_colors = {
    //train: 'rgb(255, 89, 143)',
    //val: 'rgb(21, 178, 211)'
    train: 'rgb(202,0,42)',
    val: 'rgb(0,43,198)'
}

// Initialize map
export function map_initialize(container_id)
{
    // Add access token
    mapboxgl.accessToken = access_token;
    // Initialize map
    map_main = new mapboxgl.Map({
        container: container_id,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-74.0060, 40.7128],
        zoom: 10,
        minZoom:  10,
        maxZoom: 15,
    });
}

// Add draw controls
export function map_add_draw_controls()
{
    // Initialize map draw controls
    map_draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }
    });
    // Add controls to current map
    map_main.addControl(map_draw, 'top-left');
}

export function map_show_all_trips (data) {
    let trajectory = [];

    for (var i = 0; i < data.length; ++i) {
        let feature = turf.feature(data[i].locations, {
            color: map_model_colors[data[i].model_type],
            opacity: (data[i].model_type == 'train')? 0.2 : 0.4,
            model: data[i].model_type,
            time_of_day: data[i].time_of_day,
            scene: data[i].scene,
            weather: data[i].weather
        });
        trajectory.push(feature);
    }

    let feature_collection = turf.featureCollection(trajectory);

    map_remove_layer('trip-trajectory');
    map_main.addSource('trip-trajectory', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: 'trip-trajectory',
        type: 'line',
        source: 'trip-trajectory',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': ['get', 'color'],
            'line-width': 1.5,
            'line-opacity': ['get', 'opacity']
        }
    }

    return map_main.addLayer(trajectory_layer);
}

export function map_filter_all_trips(models)
{
    var features = map_main.queryRenderedFeatures({ layers: ['trip-trajectory'] });
    /*
    if (features) {
        var uniqueFeatures = getUniqueFeatures(features, models);
    }

    function getUniqueFeatures(array, comparatorProperty) {

        var uniqueFeatures = array.filter(function (el) {
        if (existingFeatureKeys[el.properties[comparatorProperty]]) {
            return false;
        } else {
            existingFeatureKeys[el.properties[comparatorProperty]] = true;
            return true;
        }
        });

        return uniqueFeatures;
    }*/
}

// Remove map layer by ids
export function map_remove_layer(id)
{
    if (map_main.getLayer(id)) {
        map_main.removeLayer(id);
    }

    if (map_main.getSource(id)) {
        map_main.removeSource(id);
    }

    return;
}

// Get map viewport bounding box
export function map_get_bbox_polygon()
{
    let bounds = map_main.getBounds();
    var corner_coordinatees = turf.multiPoint([[bounds._ne.lng, bounds._ne.lat], [bounds._sw.lng, bounds._sw.lat]]);
    var bbox = turf.bbox(corner_coordinatees);
    var bbox_polygon = turf.bboxPolygon(bbox);
    return bbox_polygon;
}

export function map_draw_trajectory(data)
{
    let model = $('#filter-models').val();
    let action = $('#filter-actions').val();
    let accuracy = $('#filter-accuracy').val();

    util_generate_accuracy(data, model, action, accuracy);

    let trajectories = []; let all_accuracy = [];

    for (var i = 0; i < data.length; ++i) {
        if ('accuracy' in data[i]) {
            all_accuracy.push(data[i].accuracy);
        }
    }

    let line_color = d3.scaleSequential()
        .interpolator(d3.interpolateRdYlGn)
        .domain([0, 1]);

    for (var i = 0; i < data.length; ++i) {
        if ('accuracy' in data[i]) {
            let trip_feature = turf.feature(data[i].locations, {
                color: line_color(data[i].accuracy)
            });
            trajectories.push(trip_feature);
        }
    }

    console.log(trajectories);

    let feature_collection = turf.featureCollection(trajectories);

    map_remove_layer('trip-trajectory');
    map_main.addSource('trip-trajectory', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: 'trip-trajectory',
        type: 'line',
        source: 'trip-trajectory',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': ['get', 'color'],
            'line-width': 4,
            'line-opacity': 1
        }
    }

    map_main.addLayer(trajectory_layer);
}