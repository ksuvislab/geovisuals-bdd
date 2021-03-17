import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { main_trip_study_init } from "..";
import MiniMap from './plugin/mapboxgl-minimap';
import {util_random_number_interval} from './utils';

import {
    query_find_intersection
} from "./query";
//import { util_generate_accuracy } from "./utils";

// Public variables
export let map_main = undefined;
export let map_draw = undefined;
export let map_minimap = undefined;
export let map_circle_polygon = undefined;
export let map_selected_line = undefined;

// Private Variables
export var map_access_token = 'pk.eyJ1IjoiZGlnaXRhbGtpIiwiYSI6ImNqNXh1MDdibTA4bTMycnAweDBxYXBpYncifQ.daSatfva2eG-95QHWC9Mig';
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
    mapboxgl.accessToken = map_access_token;
    // Initialize map
    map_main = new mapboxgl.Map({
        container: container_id,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-122.2730, 37.8715],
        zoom: 10,
        minZoom:  10,
        maxZoom: 15,
    });
}

//-74.0060, 40.7128 NY
// -122.2730, 37.8715 CA


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

export function map_add_minimap() {
    map_minimap = new MiniMap();
    map_main.addControl(map_minimap, 'top-right');
    return;
}

export function map_draw_outter_trips (id, data) {
    let color = ['#ffffcc','#c2e699','#78c679','#31a354','#006837'];
    let trajectory = [];
    // Set all feature property
    for (var i = 0; i < data.length; ++i) {
        let feature = turf.feature(data[i].locations, {
            color: '#252525',
            opacity: 1,
            //model: data[i].model_type,
            time_of_day: data[i].time_of_day,
            scene: data[i].scene,
            weather: data[i].weather
        });
        trajectory.push(feature);
    }
    // Remove outter trips
    map_remove_layer(id);
    // Create feature collection and add to source
    let feature_collection = turf.featureCollection(trajectory);
    map_main.addSource(id, {
        type: 'geojson',
        data: feature_collection
    });

    // Create trajectory layer
    let trajectory_layer = {
        id: id,
        type: 'line',
        source: id,
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': ['get', 'color'],
            'line-width': 1,
            'line-opacity': ['get', 'opacity']
        }
    }
    // Add new layer
    map_main.addLayer(trajectory_layer);
    return;
}

export function map_draw_inner_trips (id, data) {
    let trajectory = [];
    // Set all feature property
    for (var i = 0; i < data.length; ++i) {
        let feature = turf.feature(data[i].locations, {
            color: '#252525',
            opacity: 0.2,
            model: data[i].model_type,
            time_of_day: data[i].time_of_day,
            scene: data[i].scene,
            weather: data[i].weather
        });
        trajectory.push(feature);
    }
    // Remove outter trips
    map_remove_layer(id);
    // Create feature collection and add to source
    let feature_collection = turf.featureCollection(trajectory);
    map_main.addSource(id, {
        type: 'geojson',
        data: feature_collection
    });
    // Create trajectory layer
    let trajectory_layer = {
        id: id,
        type: 'line',
        source: id,
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': ['get', 'color'],
            'line-width': 1,
            'line-opacity': ['get', 'opacity']
        }
    }
    // Add new layer
    return map_main.addLayer(trajectory_layer);
}

export function map_set_paint_property (id, property, value) {
    return map_main.setPaintProperty(id, property, value);
}

export function map_show_all_trips (id, data) {
    let trajectory = [];

    for (var i = 0; i < data.length; ++i) {
        let feature = turf.feature(data[i].locations, {
            color: map_model_colors[data[i].model_type],
            opacity: (data[i].model_type == 'train')? 0.1 : 0.1,
            model: data[i].model_type,
            time_of_day: data[i].time_of_day,
            scene: data[i].scene,
            weather: data[i].weather
        });
        trajectory.push(feature);
    }

    let feature_collection = turf.featureCollection(trajectory);

    map_remove_layer(id);
    map_main.addSource(id, {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: id,
        type: 'line',
        source: id,
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': 'rgb(202,0,42)',
            'line-width': 1,
            'line-opacity': ['get', 'opacity']
        }
    }

    return map_main.addLayer(trajectory_layer);
}

export function map_show_filtered_trips(data) {

    // Draw filtered trajectory
    let trajectory = [];

    for (var i = 0; i < data.length; ++i) {
        let feature = turf.feature(data[i].locations, {
            time_of_day: data[i].time_of_day,
            scene: data[i].scene,
            weather: data[i].weather
        });
        trajectory.push(feature);
    }

    let feature_collection = turf.featureCollection(trajectory);

    map_remove_layer('trip-filtered-trajectory');
    map_main.addSource('trip-filtered-trajectory', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: 'trip-filtered-trajectory',
        type: 'line',
        source: 'trip-filtered-trajectory',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': '#252525',
            'line-width': 2.5,
            'line-opacity': 1
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

/*
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
            'line-width': 8,
            'line-opacity': 1
        }
    }

    map_main.addLayer(trajectory_layer);
}*/

export function map_draw_point(coord) {

    let point = turf.point(coord);

    map_remove_layer('trip-point');

    map_main.addSource('trip-point', {
        type: 'geojson',
        data: point
    });

    // Create point
    let point_layer = {
        id: 'trip-point',
        type: 'circle',
        source: 'trip-point',
        paint: {
            'circle-radius': 12,
            'circle-color': '#D482A6',
            'circle-opacity': 0.8
        }
    }

    return map_main.addLayer(point_layer);
}

export function map_draw_all_points(coords) {

    let point = turf.multiPoint(coords);

    map_remove_layer('trip-points');
    map_remove_layer('trip-points-border');

    map_main.addSource('trip-points', {
        type: 'geojson',
        data: point
    });

    map_main.addSource('trip-points-border', {
        type: 'geojson',
        data: point
    });

    // Create point
    let point_border_layer = {
        id: 'trip-points-border',
        type: 'circle',
        source: 'trip-points-border',
        paint: {
            'circle-color': '#252525',
            'circle-opacity': 0.5,
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                5,
                15,
                9
            ]
        }
    }

    // Create point
    let point_layer = {
        id: 'trip-points',
        type: 'circle',
        source: 'trip-points',
        paint: {
            'circle-color': '#FF0000',
            'circle-opacity': 1,
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                4,
                15,
                8
            ]
        }
    }

    map_main.addLayer(point_border_layer);
    map_main.addLayer(point_layer);
    return
}

export function map_create_circle_radius(selected_trip)
{
    $('#radius-control').remove();

    let center = selected_trip.locations.coordinates[0];
    let options = {
        steps: 50,
        units: 'kilometers',
        options: {}
    };
    let radius = 2;
    let circle_polygon = turf.circle(center, radius, options);
    let area = turf.area(circle_polygon);

    map_remove_layer('trip-radius');
    map_main.addSource('trip-radius', {
        type: 'geojson',
        data: circle_polygon
    });

    map_main.addLayer({
        'id': 'trip-radius',
        'type': 'line',
        "feature_type": "fill",
        'source': 'trip-radius',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-opacity': 1,
            'line-width': 2
        }
    });

    fit_bounds(circle_polygon);
    add_radius_control();
    map_circle_polygon = circle_polygon;
    return circle_polygon;

    function add_radius_control() {
        let radius_control = d3.select('#map').append('div')
            .attr('id', 'radius-control')
            .style('width', '200px')
            .style('height', '30px')
            .style('line-height','30px')
            .style('position', 'absolute')
            .style('top', '180px')
            .style('right', '15px')
            .style('z-index', '9999');

        let radius_text = radius_control.append('label')
        .attr('id', 'radius-text')
        .style('width', '100%')
        .style('height', '15px')
        .style('font-size', '14px')
        .html('Radius Area: ' + (area / 1000000).toFixed(2) + ' square km');

        let radius_slider = radius_control.append('input')
            .attr('id', 'radius-slider')
            .attr('class', 'custom-slider')
            .attr('type', 'range')
            .attr('min', 2)
            .attr('max', '10')
            .attr('step', '1')
            .attr('val', 0)
            .style('width', '100%')
            .style('height', '1px')
            .style('margin-top', '20px')
            .style('background', '#252525');

        d3.select('#radius-slider').property("value", 2);
        radius_slider.on('input', function() {
            let circle_polygon = turf.circle(center, this.value, options);
            map_main.getSource('trip-radius').setData(circle_polygon);
            fit_bounds(circle_polygon);
            let area = turf.area(circle_polygon);
            radius_text.html('Radius Area: ' + (area / 1000000).toFixed(2) + ' square km');
            main_trip_study_init(selected_trip, circle_polygon);
        });
    }

    function fit_bounds(geojson) {
        var coordinates = geojson.geometry.coordinates[0];
        var bounds = coordinates.reduce(function (bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

        map_main.fitBounds(bounds, {
            padding: 20
        });
    }
}

export function map_draw_selected_trips(trip)
{
    // Draw trip here
    let feature_collection = turf.feature(trip.locations);

    map_remove_layer('trip-selected-arrow');
    map_remove_layer('trip-selected-line');

    map_main.addSource('trip-selected-arrow', {
        type: 'geojson',
        data: feature_collection
    });
    map_main.addSource('trip-selected-line', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: 'trip-selected-line',
        type: 'line',
        source: 'trip-selected-line',
        layout: {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        paint: {
            'line-color': '#252525',
            'line-width': 4,
            'line-opacity': 0.7
        }
    }

    let arrow_layer = {
        id: 'trip-selected-arrow',
        type: 'symbol',
        source: 'trip-selected-arrow',
        layout: {
            'symbol-placement': 'line',
            'text-field': '▶',
            'text-size': [
                'interpolate',
                ['linear'], ['zoom'],
                10, 7, 15, 14
            ],
            'symbol-spacing': [
                'interpolate',
                ['linear'], ['zoom'],
                10, 7, 15, 20
            ],
            'text-keep-upright': false
        },
        paint: {
            'text-color': '#000',
            'text-halo-color': '#000',
            'text-halo-width': 2
        }
    }

    map_main.addLayer(trajectory_layer);
    map_main.addLayer(arrow_layer);

    map_main.moveLayer('trip-selected-arrow', 'trip-points-border');
    map_main.moveLayer('trip-selected-line', 'trip-points-border');

    map_selected_line = feature_collection;
    var coordinates = map_selected_line.geometry.coordinates;
    var bounds = coordinates.reduce(function (bounds, coord) {
        return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

    map_main.fitBounds(bounds, {
        zoom: 20,
    });
    return;
}

export function map_draw_trip_in_radius(trips, index)
{
    let start_points = [], end_points = [];
    let trajectory = [];
    for (let i = 0; i < trips.length; ++i) {
        if (i !== index) {
            let feature = trips[i].locations;
            let start = feature.coordinates[0];
            let end = feature.coordinates[feature.coordinates.length - 1];
            trajectory.push(turf.feature(feature));
            start_points.push(start);
            end_points.push(end);
        }
    }

    let feature_collection = turf.featureCollection(trajectory);
    let start_point = turf.multiPoint(start_points);
    let end_point = turf.multiPoint(end_points);


    map_remove_layer('trip-unselected-line');
    map_remove_layer('trip-unselected-start');
    map_remove_layer('trip-unselected-end');

    map_main.addSource('trip-unselected-line', {
        type: 'geojson',
        data: feature_collection
    });

    map_main.addSource('trip-unselected-start', {
        type: 'geojson',
        data: start_point
    });

    map_main.addSource('trip-unselected-end', {
        type: 'geojson',
        data: end_point
    });


    let trajectory_layer = {
        id: 'trip-unselected-line',
        type: 'line',
        source: 'trip-unselected-line',
        layout: {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        paint: {
            'line-color': '#252525',
            'line-width': 2,
            'line-opacity': 0.7
        }
    }

    let start_layer = {
        id: 'trip-unselected-start',
        type: 'circle',
        source: 'trip-unselected-start',
        paint: {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                2,
                15,
                6
            ],
            'circle-color': '#a6d96a',
            'circle-opacity': 0.7
        }
    }

    let end_layer = {
        id: 'trip-unselected-end',
        type: 'circle',
        source: 'trip-unselected-end',
        paint: {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                2,
                15,
                6
            ],
            'circle-color': '#fdae61',
            'circle-opacity': 0.7
        }
    }

    map_main.addLayer(trajectory_layer);
    map_main.addLayer(start_layer);
    map_main.addLayer(end_layer);


    map_main.moveLayer('trip-unselected-start', 'trip-points-border');
    map_main.moveLayer('trip-unselected-end', 'trip-points-border');
    map_main.moveLayer('trip-unselected-line', 'trip-unselected-end');
    return;
}

export function map_draw_background(trips, streets)
{
    /*
    let s = map_main.querySourceFeatures('composite', {
        'sourceLayer': 'road'
    });

    console.log(s);*/

    let bounds = map_main.getBounds();
    let features = map_main.queryRenderedFeatures(bounds);
    let roads = [];
    for (let i = 0; i < features.length; ++i) {
        let feature = features[i];
        if (feature.sourceLayer === 'road') {
            let road_name = (feature.properties.name) ? feature.properties.name : 'unknown'
            let road_geometry = feature.geometry;
            roads.push(turf.feature(road_geometry, {
                name: road_name,
                trip_count: 0
            }));
        }
    }

    //console.log(roads)

    let values = [];
    for (let i = 0; i < roads.length; ++i) {
        let pos = streets.map(function (x) {
            return x.name;
        }).indexOf(roads[i].properties.name);
        if (pos >= 0) {
            if (streets[pos]['trip_ids'].length > 0) {
                roads[i].properties['trip_count'] = streets[pos]['trip_ids'].length;
                values.push(streets[pos]['trip_ids'].length);
            }
        }
    }
    console.log(values);
    let color = d3.scaleLinear()
        .domain([0, (d3.max(values)) ? d3.max(values) : 0])
        .range(['transparent','#fee5d9','#fcae91','#fb6a4a','#de2d26','#a50f15']);

    let color_road = ['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#ffffbf','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837'];

    for (let i = 0; i < roads.length; ++i) {
        let index = util_random_number_interval(0, 10);
        roads[i].properties['line_color'] = color_road[index];
        //roads[i].properties['line_color'] = color(roads[i].properties['trip_count'])
    }

    //console.log(roads);
    let feature_collection = turf.featureCollection(roads);

    map_remove_layer('roads-highlight');
    if (map_minimap._miniMap.getLayer('roads-highlight')) {
        map_minimap._miniMap.removeLayer('roads-highlight');
    }

    if (map_minimap._miniMap.getSource('roads-highlight')) {
        map_minimap._miniMap.removeSource('roads-highlight');
    }

    map_main.addSource('roads-highlight', {
        type: 'geojson',
        data: feature_collection
    });
    map_minimap._miniMap.addSource('roads-highlight', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: 'roads-highlight',
        type: 'line',
        source: 'roads-highlight',
        layout: {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        paint: {
            'line-color': ['get', 'line_color'],
            'line-width': 1,
            'line-opacity': 0.5
        }
    }

    map_main.addLayer(trajectory_layer);
    map_minimap._miniMap.addLayer(trajectory_layer);
    return;
}

export function map_query_rendered_features(feature_layer)
{
    let bounds = map_main.getBounds();
    let features = map_main.queryRenderedFeatures(bounds);
    console.log(features);

    let roads = [];

    for (let i = 0; i < features.length; ++i) {
        let feature = features[i];
        if (feature.sourceLayer === feature_layer) {
            let road_name = (feature.properties.name) ? feature.properties.name : 'unknown'
            let road_geometry = feature.geometry;
            roads.push({
                name: road_name,
                geometry: road_geometry,
                trip_index: []
            });
        }
    }

    return roads;
    //console.log(trip_features_collection);

    /*
    let feature_collection = turf.featureCollection(roads);

    map_remove_layer('roads-highlight');

    map_main.addSource('roads-highlight', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: 'roads-highlight',
        type: 'line',
        source: 'roads-highlight',
        layout: {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        paint: {
            'line-color': 'green',
            'line-width': 1,
            'line-opacity': 0.5
        }
    }

    map_main.addLayer(trajectory_layer);
    return;*/
}

export function map_visualize_background(layer_filter, street_data)
{

    //console.log(layer_filter);

    let data = generate_data(street_data, layer_filter);
    let map_data = data[0];
    let map_range = data[1];

    //console.log(map_data);
    //console.log(map_range);

    let color_range = (layer_filter.layers === 'Density'  || layer_filter.layers === 'entropy') ? ['#14717F','#F5C677','#C13224'] : ['#C13224','#F5C677','#14717F'];

    let color = d3.scaleLinear()
        .domain([0, d3.mean(map_range), d3.max(map_range)])
        .range(color_range);

    let opacity = d3.scaleLinear()
        .domain([0, d3.mean(map_range), d3.max(map_range)])
        .range([0.4,0.5,1]);

    let display_features = [];
    map_data.forEach(function(street) {
        street.multiLineString.properties.color = color(street['value']);
        street.multiLineString.properties.opacity = opacity(street['value']);
        display_features.push(street.multiLineString);
    });

    let feature_collection = turf.featureCollection(display_features);

   // map_remove_layer('roads-highlight');

    if (map_main.getSource('roads-highlight')) {
        map_main.getSource('roads-highlight').setData(feature_collection);
        map_minimap._miniMap.getSource('roads-highlight').setData(feature_collection);
        return;
    }


    map_main.addSource('roads-highlight', {
        type: 'geojson',
        data: feature_collection
    });
    map_minimap._miniMap.addSource('roads-highlight', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        id: 'roads-highlight',
        type: 'line',
        source: 'roads-highlight',
        layout: {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        paint: {
            'line-color': ['get', 'color'],
            'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                1,
                15,
                4
            ],
            'line-opacity': ['get', 'opacity']
        }
    }

    map_minimap._miniMap.addLayer(trajectory_layer);
    map_main.addLayer(trajectory_layer);


    function generate_data(data, filter) {
        let map_data = [];
        let value_ranges = [];
        if (filter.layers === 'Density') {
            for (let i = 0; i < data.length; ++i) {
                map_data.push({
                    name: data[i].name,
                    multiLineString: data[i].multiLineString,
                    value: data[i].count
                });
                value_ranges.push(data[i].count);
            }
        } else {
            for (let i = 0; i < data.length; ++i) {
                let values = [];
                if (Object.keys(data[i]['performance']).length > 0) {
                    Object.keys(data[i]['performance']).forEach(function(model) {
                        if (filter.models.indexOf(model) >= 0) {
                            Object.keys(data[i]['performance'][model]).forEach(function(action) {
                                if (filter.actions.indexOf(action) >= 0) {
                                    let value = data[i]['performance'][model][action][filter.layers];
                                    if (value) {
                                        values.push(value);
                                    }
                                }
                            });
                        }
                    });
                    let avg = d3.mean(values);
                    map_data.push({
                        name: data[i].name,
                        multiLineString: data[i].multiLineString,
                        value: (avg) ? avg : 0
                    });
                    value_ranges.push((avg) ? avg : 0);
                } else {
                    map_data.push({
                        name: data[i].name,
                        multiLineString: data[i].multiLineString,
                        value: 0
                    });
                }
            }
        }
        return [map_data, value_ranges]
    }
}