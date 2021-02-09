import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import './css/main.css';
import './css/left.css';

import {
    map_main,
    map_initialize,
    map_add_draw_controls,
    map_draw_trajectory,
    map_show_all_trips,
    map_get_bbox_polygon
} from './js/map';
import {
    util_axios_interceptors, util_preprocess_data
} from './js/utils';

import {
    view_create_filters
} from './js/view';
import {
    query_all,
    query_count,
    query_find_intersection
} from './js/query';

import {
    vis_filter,
    vis_summary
} from './js/vis';

// Initialize map
map_initialize('map');
// Fire when map finished loading
map_main.on('load', function() {
    // Initialize all map components
    map_add_draw_controls()
    // Set axios interceptors
    util_axios_interceptors();

    main_get_dataset().then(function (data) {
        // Test drawing trajectory
        util_preprocess_data(data).then(function (result) {
            // Draw all trips
            map_show_all_trips(result);
            vis_summary(result, 'summary');

            main_get_bboxdata().then(function (bbox_data) {
                util_preprocess_data(bbox_data).then(function (process_data) {
                    vis_filter(process_data, 'filter');
                });
            });
        });
    });

    // On drag
    map_main.on('dragend', function(e) {
        main_get_bboxdata().then(function (bbox_data) {
            util_preprocess_data(bbox_data).then(function (process_data) {
                vis_filter(process_data, 'filter');
            });
        });
    });

    // On zoom
    map_main.on('zoomend', function(e) {
        main_get_bboxdata().then(function (bbox_data) {
            util_preprocess_data(bbox_data).then(function (process_data) {
                vis_filter(process_data, 'filter');
            });
        });
    });
});

function main_get_dataset() {
    return new Promise(function (resolve, reject) {
        var data = {};
        query_all('train').then(function (train_data) {
            data['train'] = train_data;
            query_all('val').then(function (val_data) {
                data['val'] = val_data;
                resolve(data);
            });
        });
    });
}

function main_get_bboxdata() {

    return new Promise(function (resolve, reject) {
        var data = {};
        // Draw vis_filter
        let bbox = map_get_bbox_polygon();
        query_find_intersection(bbox, 'train', 'all', 'all', 'all').then(function(train_data) {
            data['train'] = train_data;
            query_find_intersection(bbox, 'val', 'all', 'all', 'all').then(function(val_data) {
                data['val'] = val_data;
                resolve(data);
            });
        });
    });
}

