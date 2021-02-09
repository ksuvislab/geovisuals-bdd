import { query_find_intersection } from "./query";
import { map_draw_trajectory, map_get_bbox_polygon } from "./map";

let $loading_screen = $('#loading');

let weathers = ['all', 'clear', 'partly cloudy', 'overcast', 'rainy', 'snowy', 'foggy'];
let scenes = ['all', 'residential', 'highway', 'city street', 'parking lot', 'gas stations', 'tunnel'];
let time_of_days = ['all', 'dawn/dusk', 'daytime', 'night'];
let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
let actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right', 'turn_left_slight', 'turn_right_slight'];
let accuracy = ['precision', 'recall', 'f1'];

// Precision, Recall, F1 // for whole trips

export function view_show_loading()
{
    return $loading_screen.css({ display: 'flex '});
}

export function view_close_loading()
{
    return $loading_screen.hide();
}

// Create weather buttons
export function view_create_filters(container_id)
{
    view_create_filter_dropdown(container_id, 'weathers', weathers);
    view_create_filter_dropdown(container_id, 'scenes', scenes);
    view_create_filter_dropdown(container_id, 'time', time_of_days);
    view_create_filter_dropdown(container_id, 'models', models);
    view_create_filter_dropdown(container_id, 'actions', actions);
    view_create_filter_dropdown(container_id, 'accuracy', accuracy);
}

export function view_create_filter_dropdown(container_id, filter_type, filter_lists)
{
    let label =  $('<label/>', {
        for: filter_type
    }).html(filter_type + ' : ');

    let select = $('<select/>', {
        name: filter_type,
        id: 'filter-' + filter_type
    });

    for (let i = 0; i < filter_lists.length; ++i) {
        let option = $('<option/>', {
            value: filter_lists[i]
        }).html(filter_lists[i]);

        select.append(option);
    }

    select.on('change', function() {
        let bbox = map_get_bbox_polygon();
        let weather = $('#filter-weathers').val();
        let scene = $('#filter-scenes').val();
        let time_of_day = $('#filter-time').val();

        query_find_intersection(bbox, 'train', weather, scene, time_of_day).then(function(result) {
            map_draw_trajectory(result);
        })
    });

    return $(container_id).append(label).append(select).append("  ");
}

