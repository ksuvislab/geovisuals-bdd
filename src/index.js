import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import './css/main.css';
import './css/left.css';
import './css/middle.css';
import './css/right.css';
import './css/parsets.css';

import {
    map_main,
    map_initialize,
    map_add_draw_controls,
    map_show_all_trips,
    map_get_bbox_polygon,
    map_show_filtered_trips,
    map_remove_layer,
    map_draw_outter_trips,
    map_set_paint_property,
    map_draw_inner_trips,
    map_draw,
    map_add_minimap,
    map_minimap,
    map_create_circle_radius,
    map_query_rendered_features,
    map_draw_background
} from './js/map';

import {
    util_axios_interceptors,
    util_merge_street_roadnetwork,

    util_compute_cases,
    util_compute_entropy,
    util_compute_street_data,
    util_map_matching,
    util_preprocess_data,
    util_read_geojson
} from './js/utils';

import {
    query_all,
    query_all_streets,
    query_all_roadnetworks
} from './js/query';

import {
    vis_draw_model_table,
    vis_filter,
    vis_model_performance,
    vis_model_relation,
    vis_parallelsets,
    vis_streetview,
    vis_model_cases,
    vis_summary,
    vis_global_view,
    vis_representative_images,
    vis_area_study,
    vis_selected_nodes,
    vis_trips_study,
    vis_trip_list,
    vis_marker
} from './js/vis';

import {
    filter_bbox_roadnetwork,
    filter_bbox_trips,
    filter_by_nodes,
    filter_by_polygon,
    filter_point_on_trips,
    filter_predicted_trips,
    filter_trip_in_radius
} from './js/filter';
import { view_create_map_legends } from './js/view';

export var main_regions = undefined;
export var main_all_trips = undefined;
//export var main_all_streets = undefined;
export var main_predicted_trips = undefined;
export var main_mouse_coord = undefined;

// Public datasets
export var main_all_roadnetworks = undefined;
export var main_all_streets = undefined;
export var main_predicted_streets = undefined;

export var main_states = {
    global: true,
    trip: false
}

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

    // Need to fix query


    main_get_all_datasets().then(function() {
        // Preprocess data
        util_preprocess_data(main_all_trips).then(function (processed_data) {
            // Compute trip data
            main_all_trips = filter_bbox_trips(processed_data);
            console.log(main_all_trips);
            map_draw_outter_trips('outter-trips', main_all_trips);

            let json_file = "";
            for (let i = 0; i < main_all_trips.length; ++i) {
                let trip = main_all_trips[i];
                json_file += trip.trip_id + " ";
            }

            // Start file download.
            download("CA_TRIP_ID.txt", json_file);

            /*
            main_predicted_trips = main_preprocess(main_all_trips);
            // Compute street and road network
            main_all_streets = util_compute_street_data(main_all_streets, main_predicted_trips);
            main_all_roadnetworks = filter_bbox_roadnetwork(main_all_roadnetworks);

            console.log(main_all_streets);
            main_predicted_streets = util_merge_street_roadnetwork(main_all_roadnetworks, main_all_streets);
            console.log(main_predicted_streets);

            // Create drawable background
            // TODO: need to show gradient
            view_create_map_legends('map', main_predicted_streets);

            map_show_filtered_trips(main_predicted_trips);
            main_update_dataview(main_predicted_trips);*/
        });
    });

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    map_main.on('dragend', function(e) {
        if (main_states.global) {
            if (main_all_trips) {
                // Filter all trips inside bounding box
                let trips = filter_bbox_trips(main_all_trips);
                main_redraw_map(trips);
            }
        }
    });

    map_main.on('zoomend', function(e) {
        if (main_states.global) {
            if (main_all_trips) {
                // Filter all trips inside bounding box
                let trips = filter_bbox_trips(main_all_trips);
                main_redraw_map(trips);
            }
        }

        if (main_states.trip) {
            if (main_predicted_trips) {
                // Do something here
            }
        }
    });

    map_main.on('click', function (e) {
        let coords = e.lngLat.wrap();
        main_mouse_coord = [coords.lng, coords.lat];
    });

    map_main.on('click', 'trip-points', function (e) {

        var coordinates = e.features[0].geometry.coordinates.slice();

        let target_point = turf.point(main_mouse_coord);
        let coords = [];

        for (let i = 0; i < coordinates.length; ++i) {
            coords.push(turf.point(coordinates[i]));
        }

        let points = turf.featureCollection(coords);
        let nearest_point = turf.nearestPoint(target_point, points);
        let trips = filter_point_on_trips(main_predicted_trips, nearest_point);

        // Start trip states
        // some to layer
        main_states.global = false;
        main_states.trip = true;
        main_trip_study(trips);
    });

    map_main.on('zoomend', function(e) {
        if (main_states.global) {
            if (main_all_trips) {
                // Filter all trips inside bounding box
                let trips = filter_bbox_trips(main_all_trips);
                main_redraw_map(trips);
            }
        }

        if (main_states.trip) {
            if (main_predicted_trips) {
                //main_trip_study_init(main_predicted_trips[0]);
            }
        }
    });

    map_main.on('draw.create', function (e) {

        let polygon = e.features[0];
        // Need to remove and set new data
        let trips = filter_by_polygon(polygon, main_all_trips);

        if (main_regions) {
            // Remove previous selection area
            map_draw.delete([main_regions.id])
            map_remove_layer('inner-trips');
            main_regions = undefined;
        }

        // Draw new trips
        map_draw_inner_trips('inner-trips', trips);
        // Change outter trajectory
        map_set_paint_property('outter-trips', 'line-color' ,'#525252');
        // Assign new polygon area
        main_regions = polygon;

        main_predicted_trips =  main_preprocess(trips);
        map_show_filtered_trips(main_predicted_trips);
        main_update_dataview(main_predicted_trips);

    });

    map_main.on('draw.delete', function () {
        if (main_regions) {
            // Remove previous selection area
            map_draw.delete([main_regions.id])
            map_remove_layer('inner-trips');
            main_regions = undefined;
            // Re preprocessing trip and visualize it
            let trips = filter_bbox_trips(main_all_trips);
            main_redraw_map(trips);
        }
    });

    // Get all trips from database
    /*
    main_get_dataset().then(function (trip_data) {
        util_preprocess_data(trip_data).then(function (processed_data) {

            // Set global of all trips
            main_all_trips = processed_data;

            main_get_streets().then(function(street_data) {
                main_all_streets = util_compute_street_data(street_data);
                console.log(main_all_streets);
                let trips = filter_bbox_trips(processed_data);
                //map_draw_outter_trips('outter-trips', trips);
                main_predicted_trips =  main_preprocess(trips);
                //console.log(main_predicted_trips);

                map_show_filtered_trips(main_predicted_trips);
                main_update_dataview(main_predicted_trips);

            });
        });
    });
    // On map drag
    map_main.on('dragend', function(e) {
        if (main_states.global) {
            if (main_all_trips) {
                // Filter all trips inside bounding box
                let trips = filter_bbox_trips(main_all_trips);
                main_redraw_map(trips);
            }
        }
    });

    // On map zoom

    map_main.on('zoomend', function(e) {
        if (main_states.global) {
            if (main_all_trips) {
                // Filter all trips inside bounding box
                let trips = filter_bbox_trips(main_all_trips);
                main_redraw_map(trips);
            }
        }

        if (main_states.trip) {
            if (main_predicted_trips) {
                //main_trip_study_init(main_predicted_trips[0]);
            }
        }
    });

    map_main.on('draw.create', function (e) {

        let polygon = e.features[0];
        // Need to remove and set new data
        let trips = filter_by_polygon(polygon, main_all_trips);

        if (main_regions) {
            // Remove previous selection area
            map_draw.delete([main_regions.id])
            map_remove_layer('inner-trips');
            main_regions = undefined;
        }

        // Draw new trips
        map_draw_inner_trips('inner-trips', trips);
        // Change outter trajectory
        map_set_paint_property('outter-trips', 'line-color' ,'#525252');
        // Assign new polygon area
        main_regions = polygon;

        main_predicted_trips =  main_preprocess(trips);
        map_show_filtered_trips(main_predicted_trips);
        main_update_dataview(main_predicted_trips);

    });

    map_main.on('draw.delete', function () {
        if (main_regions) {
            // Remove previous selection area
            map_draw.delete([main_regions.id])
            map_remove_layer('inner-trips');
            main_regions = undefined;
            // Re preprocessing trip and visualize it
            let trips = filter_bbox_trips(main_all_trips);
            main_redraw_map(trips);
        }
    });

    map_main.on('click', function (e) {
        let coords = e.lngLat.wrap();
        main_mouse_coord = [coords.lng, coords.lat];
    });

    map_main.on('click', 'trip-points', function (e) {

        var coordinates = e.features[0].geometry.coordinates.slice();

        let target_point = turf.point(main_mouse_coord);
        let coords = [];

        for (let i = 0; i < coordinates.length; ++i) {
            coords.push(turf.point(coordinates[i]));
        }

        let points = turf.featureCollection(coords);
        let nearest_point = turf.nearestPoint(target_point, points);
        let trips = filter_point_on_trips(main_predicted_trips, nearest_point);

        // Start trip states
        // some to layer
        main_states.global = false;
        main_states.trip = true;
        main_trip_study(trips);
    });*/
}

// 1. Get all datasets from mongodb
function main_get_all_datasets()
{
    return new Promise(function(resolve, reject) {
        query_all('train').then(function(trip_data) {
            main_all_trips = trip_data;
            //console.log('Done query trip data');
            query_all_streets().then(function(street_data) {
                main_all_streets = street_data;
                //console.log('Done query street data');
                query_all_roadnetworks().then(function(roadnetwork_data) {
                    main_all_roadnetworks = roadnetwork_data;
                    //console.log('Done query roadnetwork data');
                    resolve();
                });
            });
        });
    });
}

// 2. preprocess datasets
function main_preprocess(trips)
{
    let preprocessed_trips = filter_predicted_trips(trips);
    util_compute_cases(preprocessed_trips);
    util_compute_entropy(preprocessed_trips);
    return preprocessed_trips;
}


export function main_redraw_map(trips) {

    //map_draw_outter_trips('outter-trips', trips);
    //map_draw_background(trips, main_all_streets);

    // Draw all trips
    if (main_regions) {
        let filtered_trips = filter_by_polygon(main_regions, trips);
        // Draw new trips
        map_draw_inner_trips('inner-trips', filtered_trips);
        // Change outter trajectory
        //map_set_paint_property('outter-trips', 'line-color' ,'#525252');

        // Draw filtered trips
        main_predicted_trips =  main_preprocess(filtered_trips);
        if (vis_selected_nodes.length > 0) {
            main_predicted_trips = filter_by_nodes(main_predicted_trips, vis_selected_nodes);
        }
        map_show_filtered_trips(main_predicted_trips);

    } else {
        main_predicted_trips =  main_preprocess(trips);
        main_update_dataview(main_predicted_trips);
        // Draw filtered trips
        if (vis_selected_nodes.length > 0) {
            main_predicted_trips = filter_by_nodes(main_predicted_trips, vis_selected_nodes);
        }
        map_show_filtered_trips(main_predicted_trips);
    }

    main_set_maplayer_index();
    return;
}

// Move z-position of map layers
export function main_set_maplayer_index() {
    /*
    map_main.moveLayer('trip-points-border', 'trip-points');
    map_main.moveLayer('trip-filtered-trajectory', 'trip-points-border');

    if (main_regions) {
        map_main.moveLayer('inner-trips', 'trip-filtered-trajectory');
        //map_main.moveLayer('outter-trips', 'inner-trips');
        map_main.moveLayer('roads-highlight', 'inner-trips');
    } else {
        //map_main.moveLayer('outter-trips', 'trip-filtered-trajectory');
        map_main.moveLayer('roads-highlight', 'inner-trips');
    }*/

    return;
}

// Update dataview
function main_update_dataview(trips) {

    if (map_minimap) {
        $('#mapboxgl-minimap').css({ opacity: 0 });
        $('#mapboxgl-minimap').off('click');
    }

    //console.log(trips);

    map_remove_layer('trip-point');
    map_remove_layer('trip-points');

    vis_global_view(trips, 'globalview-body');
    vis_parallelsets(trips, 'dataview-parallelsets');
    //vis_area_study(trips,'tripview-body');
    vis_model_cases(trips, 'model-cases-body');
    //vis_representative_images(trips, undefined, 'streetview-body');

    return;
}

// Create trip study view
export function main_trip_study(trips)
{
    // Show minimap
    if (map_minimap) {
        $('#mapboxgl-minimap').css({ opacity: 1 });
    }

    //map_remove_layer('trip-points');
    //map_remove_layer('trip-points-border');
    //map_remove_layer('trip-filtered-trajectory');
    //map_remove_layer('inner-trips');
    //map_remove_layer('outter-trips');

    // let create polygon
    //let circle_polygon = map_create_circle_radius(trips[0]);

    main_trip_study_init(trips[0]);


    // Set on click listener
    $('#mapboxgl-minimap').off().on('click', function () {
        // Go back to main-strip view
        if (main_all_trips) {
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

            let trips = filter_bbox_trips(main_all_trips);
            main_redraw_map(trips);
        }
    });
}

export function main_trip_study_init(selected_trip) {
    //let filtered_trips = filter_trip_in_radius(main_predicted_trips, circle_polygon);
    // Need to draw trip for more selected points
    let filtered_trips = filter_bbox_trips(main_predicted_trips);
    vis_model_cases(filtered_trips, 'model-cases-body');

    // Remove that selected_trip
    let pos = filtered_trips.map(function (x) {
        return x.trip_id;
    }).indexOf(selected_trip.trip_id);
    filtered_trips.splice(pos, 1);
    filtered_trips.unshift(selected_trip);

    vis_trip_list(filtered_trips);
    return;
}