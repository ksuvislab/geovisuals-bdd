import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { main_trip_study_init } from "..";
import MiniMap from './plugin/mapboxgl-minimap';
import {util_random_number_interval} from './utils';

// Public variables
export let map_main = undefined;
export let map_draw = undefined;
export let map_minimap = undefined;
export let map_circle_polygon = undefined;
export let map_selected_line = undefined;
export let map_all_points_data = undefined;


export var map_legend_filter = {
    models: ['tcnn1', 'cnn_lstm', 'fcn_lstm'],
    actions: ['straight', 'slow_or_stop', 'turn_left', 'turn_right'],
    layers: 'Density'
}

// Private Variables
export var map_access_token = 'pk.eyJ1IjoicGFybmRlcHUiLCJhIjoiY2ttZzNkbzMzMHdnajJwcHF5dWwwaTh0cCJ9.3yOfWlhXiUwXN2tjqJ6mmg';
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
        center: [-73.87485070755145, 40.78978271228149],
        zoom: 10,
        minZoom:  10,
        maxZoom: 15,
    });
}

//-74.0060, 40.7128 NY
// Good newyork center: -73.87485070755145, 40.78978271228149
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
    map_main.addControl(map_minimap, 'bottom-left');
    return;
}

export function map_draw_outter_trips (id, data) {

    let trajectory = [];
    // Set all feature property
    for (var i = 0; i < data.length; ++i) {
        let feature = turf.feature(data[i].locations);
        trajectory.push(feature);
    }
    // Remove outter trips
    //map_remove_layer(id);
    // Create feature collection and add to source
    let feature_collection = turf.featureCollection(trajectory);
    map_minimap._miniMap.addSource(id, {
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
            'line-color': '#252525',
            'line-width': 1,
            'line-opacity': 0.3,
        }
    }
    // Add new layer
    map_minimap._miniMap.addLayer(trajectory_layer);
    return;
}

export function map_draw_inner_trips (id, data) {
    let trajectory = [];
    // Set all feature property
    for (var i = 0; i < data.length; ++i) {
        let feature = turf.feature(data[i].locations, {
            color: 'blue',
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
    let points = [];

    for (var i = 0, len = data.length; i < len; i++) {
        let coordinates = data[i].locations.coordinates;
        for (let j = 0, j_len = coordinates.length; j < j_len; j++) {
            points.push(turf.point(coordinates[j], {
                mag: util_random_number_interval(0, 6)
            }));
        }
    }




    let feature_collection = turf.featureCollection(points);

    if (map_main.getSource('trip-filtered-trajectory')) {
        map_main.getSource('trip-filtered-trajectory').setData(feature_collection);
        return;
    }

    map_main.addSource('trip-filtered-trajectory', {
        type: 'geojson',
        data: feature_collection
    });

    let trajectory_layer = {
        'id': 'trip-filtered-trajectory',
        'type': 'heatmap',
        'source': 'trip-filtered-trajectory',
        'maxzoom': 15,
        'paint': {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
                'interpolate',
                ['linear'],
                ['get', 'mag'],
                0,
                0,
                6,
                1
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                1,
                15,
                3
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                '#91cf60',
                0.4,
                '#d9ef8b',
                0.6,
                '#fee08b',
                0.8,
                '#fc8d59',
                1,
                '#d73027'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                4,
                15,
                10
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                0.5,
                15,
                0.5
            ]
        }
    }

    return map_main.addLayer(trajectory_layer);

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

    let point = [];
    for (let i = 0; i < coords.length; ++i) {
        let geometry = turf.point(coords[i].coordinates, {
            action: coords[i].action,
            loc: coords[i].coordinates
        });
        point.push(geometry);
    }

    let feature_collection = turf.featureCollection(point);
    //console.log(feature_collection);

    if (map_main.getSource('trip-points')) {
        map_main.getSource('trip-points').setData(feature_collection);
        return;
    }

    map_main.addSource('trip-points', {
        type: 'geojson',
        data: feature_collection
    });

    // Create point
    let point_layer = {
        id: 'trip-points',
        type: 'circle',
        source: 'trip-points',
        paint: {
            'circle-color': '#0570b0',
            'circle-opacity': 0.1,
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                3,
                15,
                6
            ]
        }
    }

    map_main.addLayer(point_layer);
    map_all_points_data = point;
    return;
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

    //map_main.moveLayer('trip-selected-arrow', 'trip-points-border');
    //map_main.moveLayer('trip-selected-line', 'trip-points-border');

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


    //map_main.moveLayer('trip-unselected-start', 'trip-points-border');
    //map_main.moveLayer('trip-unselected-end', 'trip-points-border');
    //map_main.moveLayer('trip-unselected-line', 'trip-unselected-end');
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

export function map_visualize_background(layer_filter, zipcode_data)
{

    //console.log(layer_filter);

    let data = generate_data(zipcode_data, layer_filter);
    let map_data = data[0];
    let map_range = data[1];

    //console.log(map_data);
    //console.log(map_range);

    let color_range = ['#1a9850','#fee08b','#d73027'];
    let domain = [0, d3.mean(map_range), d3.max(map_range)];
    let scale = d3.scaleLinear();

    if (layer_filter.layers === 'Density') {

        color_range = ['#1a9850','#fee08b','#d73027'];
        domain = [0, d3.mean(map_range), d3.max(map_range)];
        scale = d3.scaleLinear();

    }
    /*
    else if (layer_filter.layers === 'entropy') {
        color_range.reverse();
    }*/

    let color = scale.domain(domain).range(color_range);

    let display_features = [];

    for (let i = 0, len = map_data.length; i < len; i++) {
        let zipcode = map_data[i];
        zipcode.polygon.properties.color = color(zipcode['value']);
        //zipcode.polygon.properties.opacity = color(zipcode['value']);
        display_features.push(zipcode.polygon);
    }

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
        type: 'fill',
        source: 'roads-highlight',
        paint: {
            'fill-color': ['get', 'color'],
            'fill-opacity': 0.5
        }
    }

    //map_minimap._miniMap.addLayer(trajectory_layer);
    map_main.addLayer(trajectory_layer);


    function generate_data(data, filter) {
        let map_data = [];
        let value_ranges = [];
        if (filter.layers === 'Density') {

            //console.log(data.length);

            for (let i = 0, len = data.length; i < len; i++) {

                map_data.push({
                    polygon: data[i],
                    value: data[i].properties['trip_count']
                });

                value_ranges.push(data[i].properties['trip_count']);
            }

        } else {

            //console.log(data.length);

            for (let i = 0, len = data.length; i < len; i++) {

                let values = [];
                //console.log(Object.keys(data[i].properties['performance']));



                if (Object.keys(data[i].properties['performance']).length > 0) {

                    Object.keys(data[i].properties['performance']).forEach(function(model) {
                        if (filter.models.indexOf(model) >= 0) {
                            Object.keys(data[i].properties['performance'][model]).forEach(function(action) {
                                if (filter.actions.indexOf(action) >= 0) {
                                    let value = data[i].properties['performance'][model][action][filter.layers];
                                    if (value) {
                                        values.push(value);
                                    }
                                }
                            });
                        }
                    });

                    let avg = d3.mean(values);

                    map_data.push({
                        polygon: data[i],
                        value: (avg) ? avg : 0
                    });
                    value_ranges.push((avg) ? avg : 0);

                } else {
                    map_data.push({
                        polygon: data[i],
                        value: 0
                    });
                }
            }
        }

        function get_value_category(value) {
            let category = ['0 - 40','40 - 70','70 - 100']
            let range = [.5,.6,.8,.9];

            for (let i = 0; i < range.length; ++i) {
                if (i == range.length - 1) {
                    if (value > range[i]) {
                        return category[i];
                    }
                } else {
                    if (value > range[i] && value <= range[i + 1]) {
                        return category[i];
                    }
                }
            }
        }

        return [map_data, value_ranges]
    }
}