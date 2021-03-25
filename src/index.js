import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
//import '../node_modules/@simonwep/pickr/dist/themes/nano.min.css';
import './css/main.css';
import './css/left.css';
import './css/middle.css';
import './css/right.css';
//import './css/parsets.css';

import {
    map_main,
    map_initialize,
    map_add_draw_controls,
    map_show_filtered_trips,
    map_remove_layer,
    map_draw_outter_trips,
    map_draw,
    map_add_minimap,
    map_minimap,
    map_visualize_background,
    map_legend_filter
} from './js/map';

import {
    util_axios_interceptors,
    util_compute_cases,
    util_compute_entropy,
    util_preprocess_data,
} from './js/utils';

import {
    query_all
} from './js/query';

import {
    vis_model_cases,
    vis_global_view,
    vis_trip_list,
    vis_marker,
    vis_draw_trip_filter,
    vis_draw_histogram
} from './js/vis';

import {
    filter_bbox_trips,
    filter_by_polygon,
    filter_point_on_trips,
} from './js/filter';

import {
    view_init_trip_filter_tab,
    view_trip_critical_location_legend,
    view_zipcode_legend
} from './js/view';

// State of views
export var main_states = {
    global: true,
    trip: false
}

// Zipcode levels
export var main_all_zipcodes = undefined;
export var main_processed_zipcodes = undefined;
// Trip levels
export var main_all_trips = undefined;
export var main_processed_trips = undefined;
// Mouse coordinates
export var main_mouse_coord = undefined;
export var main_region = undefined;

// Initialize map
map_initialize('map');

// Fire when map finished loading
map_main.on('load', function() {
    main_init();
});


export function main_init() {

    // Initialize all map components
    map_add_draw_controls();
    map_add_minimap();

    // Set axios interceptors
    util_axios_interceptors();

    // Get map bouning box
    main_get_all_datasets().then(function() {

        // Compute prediction vectors
        util_preprocess_data(main_all_trips).then(function(processed_data) {
            main_all_trips = processed_data;
            main_processed_trips = main_preprocess(processed_data);

            // Show how download precomputed geojson
            //main_processed_zipcodes = filter_bbox_zipcodes(main_all_zipcodes);
            //main_processed_zipcodes = util_map_trip_in_zipcodes(main_processed_trips, main_processed_zipcodes);
            //util_downloadObject_asJson(main_processed_zipcodes, 'ny_zipcode_data');

            main_processed_zipcodes = main_all_zipcodes;

            // Draw all trips on minimap
            map_draw_outter_trips('minimap-trips', main_processed_trips);

            view_init_trip_filter_tab();

            // Map layer controls
            main_init_map_layers('map');
            main_init_map_draw();

            // Visualization
            // Get trip inside bounding box
            //let trips = filter_bbox_trips(main_processed_trips);
            main_init_visualization(main_processed_trips);
        });
    });

    // Map zoom behavior

    map_main.on('zoomend', function(e) {
        /*
        if (main_states.global) {
            // Visualization
            if (main_region) {
                let trips = filter_by_polygon(main_region, main_processed_trips);
                main_init_visualization(trips);
            } else {
                let trips = filter_bbox_trips(main_processed_trips);
                main_init_visualization(trips);
            }
        }*/
    });

    // Map drag behavior
    map_main.on('dragend', function(e) {
        /*
        if (main_states.global) {
            if (main_region) {
                let trips = filter_by_polygon(main_region, main_processed_trips);
                main_init_visualization(trips);
            } else {
                let trips = filter_bbox_trips(main_processed_trips);
                main_init_visualization(trips);
            }
        }*/
    });

    map_main.on('click', function (e) {
        let coords = e.lngLat.wrap();
        main_mouse_coord = [coords.lng, coords.lat];
    });

    map_main.on('click', 'trip-points', function (e) {

        let target_point = turf.point(main_mouse_coord);
        let coords = [];

        let features = e.features;

        for (let i = 0; i < features.length; ++i) {
            let coord_str = features[i].properties.loc.split(',');
            coords.push(turf.point([parseFloat(coord_str[0].slice(1)) ,parseFloat(coord_str[1].slice(0, -1))]));
        }

        let points = turf.featureCollection(coords);
        let nearest_point = turf.nearestPoint(target_point, points);
        let trips = filter_point_on_trips(main_processed_trips, nearest_point);

        // Start trip states
        // some to layer
        main_states.global = false;
        main_states.trip = true;
        main_trip_study(trips);
    });

    map_main.on('draw.create', function (e) {

        let polygon = e.features[0];
        // Need to remove and set new data
        let trips = filter_by_polygon(polygon, main_processed_trips);

        if (main_region) {
            // Remove previous selection area
            map_draw.delete([main_region.id])
            map_remove_layer('inner-trips');
            main_region = undefined;
        }

        // Assign new polygon area
        main_region = polygon;
        main_init_visualization(trips);

    });

    map_main.on('draw.delete', function () {
        if (main_region) {
            // Remove previous selection area
            map_draw.delete([main_region.id])
            map_remove_layer('inner-trips');
            main_region = undefined;
        }

        //let trips = filter_bbox_trips(main_processed_trips);
        main_init_visualization(main_processed_trips);
    });
}

// 1. Get all datasets from mongodb
function main_get_all_datasets()
{
    return new Promise(function(resolve, reject) {

        // Get all datasets
        query_all('train').then(function(trip_data) {
            main_all_trips = trip_data;

            // Get ny zipcode regions
            d3.json('ny_zipcode_data.json').then(function(zipcode_data) {
                main_all_zipcodes = zipcode_data;
                resolve();
            });
        });
    });
}

// 2. preprocess datasets
function main_preprocess(trips)
{
    //let preprocessed_trips = filter_predicted_trips(trips);
    util_compute_cases(trips);
    util_compute_entropy(trips);
    return trips;
}

// 3.
function main_init_map_layers(map_container_id)
{
    view_zipcode_legend(map_container_id, main_processed_zipcodes);
    view_trip_critical_location_legend(map_container_id);
    //view_trip_critcal_location_legend(map_container_id);
    return;
}

// 4.
function main_init_map_draw()
{
    // Draw background
    //console.log(main_processed_zipcodes);
    map_visualize_background(map_legend_filter, main_processed_zipcodes);
}

// 5.
export function main_init_visualization(trips)
{
    // Draw global view
    vis_global_view(trips, 'globalview-body');
    // Draw trip filter
    //vis_trip_filter(trips, 'dataview-parallelsets');
    // Draw parallelsets
    //vis_parallelsets(trips, 'dataview-summary-body');
    vis_draw_trip_filter(trips);
    vis_draw_histogram(trips);
    // Draw trips
    map_show_filtered_trips(trips);
    // Draw trips cases
    vis_model_cases(trips, 'model-cases-body');

    return;
}

// Create trip study view
export function main_trip_study(trips)
{
    $('#trip-critical-legend').hide();
    $('#zipcode-legend').hide();
    $('#header-title').html('AutoDrive VIZ - Drill Down Study');
    // Show minimap
    if (map_minimap) {
        $('#mapboxgl-minimap').css({ opacity: 1 });
    }

    d3.select('#right').style('width', '0px');
    d3.select('#middle').style('width', 'calc(100% - 400px)');

    if (map_main.getLayer('roads-highlight')) {
        map_main.setPaintProperty('roads-highlight', 'fill-opacity', 0);
    }

    if (map_main.getLayer('trip-filtered-trajectory')) {
        map_main.setPaintProperty('trip-filtered-trajectory', 'heatmap-opacity', 0);
    }

    if (map_main.getLayer('trip-points')) {
        map_main.setPaintProperty('trip-points', 'circle-opacity', 0);
    }


    main_trip_study_init(trips[0]);
    map_main.resize();
    // Hide legends

    // Set on click listener
    $('#mapboxgl-minimap').off().on('click', function () {
        // Change header
        $('#header-title').html('AutoDrive VIZ');
        d3.select('#right').style('width', '300px');
        d3.select('#middle').style('width', 'calc(100% - 700px)');
        $('#mapboxgl-minimap').css({ opacity: 0 });
        $('#trip-critical-legend').show();
        $('#zipcode-legend').show();

        // Go back to main-strip view
        if (main_processed_trips) {
            // Filter all trips inside bounding box
            main_states.global = true;
            main_states.trip = false;

            $('#trip-list').remove();
            $('#radius-control').remove();
            //map_remove_layer('trip-radius');
            map_remove_layer('trip-unselected-line');
            map_remove_layer('trip-unselected-start');
            map_remove_layer('trip-unselected-end');
            map_remove_layer('trip-selected-arrow');
            map_remove_layer('trip-selected-line');
            // Reset middle view
            d3.select('#map').style('height','calc(100% - ' + 0 + 'px)');
            d3.select('#tripview').style('max-height', 0 + 'px');
            vis_marker.remove();

            //let trips = filter_bbox_trips(main_processed_trips);
            main_init_visualization(main_processed_trips);
            if (map_main.getLayer('roads-highlight')) {
                map_main.setPaintProperty('roads-highlight', 'fill-opacity', 0.5);
            }

            if (map_main.getLayer('trip-filtered-trajectory')) {
                map_main.setPaintProperty('trip-filtered-trajectory', 'heatmap-opacity', 0.7);
            }

            if (map_main.getLayer('trip-points')) {
                map_main.setPaintProperty('trip-points', 'circle-opacity', 0.5);
            }
            map_main.resize();
        }
    });
}

export function main_trip_study_init(selected_trip) {
    //let filtered_trips = filter_trip_in_radius(main_predicted_trips, circle_polygon);
    // Need to draw trip for more selected points

    let filtered_trips = filter_bbox_trips(main_processed_trips);
    //vis_model_cases(filtered_trips, 'model-cases-body');

    // Remove that selected_trip
    let pos = filtered_trips.map(function (x) {
        return x.trip_id;
    }).indexOf(selected_trip.trip_id);

    filtered_trips.splice(pos, 1);
    filtered_trips.unshift(selected_trip);

    vis_trip_list(filtered_trips);
    return;
}

/*
// Move z-position of map layers
export function main_set_maplayer_index() {

    map_main.moveLayer('trip-points-border', 'trip-points');
    map_main.moveLayer('trip-filtered-trajectory', 'trip-points-border');

    if (main_regions) {
        map_main.moveLayer('inner-trips', 'trip-filtered-trajectory');
        //map_main.moveLayer('outter-trips', 'inner-trips');
        map_main.moveLayer('roads-highlight', 'inner-trips');
    } else {
        //map_main.moveLayer('outter-trips', 'trip-filtered-trajectory');
        map_main.moveLayer('roads-highlight', 'inner-trips');
    }

    return;
}
*/