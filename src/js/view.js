import { map_all_points_data, map_legend_filter, map_main, map_visualize_background } from './map';
import { main_processed_trips, main_region, main_init_visualization } from '..';
import { filter_by_polygon } from './filter';

export var view_trip_filter_mode = {
    condition: true,
    performance: false
}

let $loading_screen = $('#loading');

export function view_show_loading()
{
    return $loading_screen.css({ display: 'flex '});
}

export function view_close_loading()
{
    return $loading_screen.hide();
}

// Zipcode region as map legend
export function view_zipcode_legend(map_container_id, zipcode_data)
{
    // Create main map legend container
    let container = d3.select('#' + map_container_id).append('div')
        .attr('id', 'zipcode-legend')
        .style('position', 'absolute')
        .style('font-family', 'Barlow, sans-serif')
        .style('width', 'auto')
        .style('height', 'auto')
        .style('background', 'rgba(255, 255, 255, 0.8)')
        .style('padding', '5px')
        .style('top', '10px')
        .style('left', '50px')
        .style('border-radius', '5px')
        .style('border', '2px solid #737373');

    // Add legend header
    let legend = container.append('div')
        .attr('class', 'active')
        .style('width', '100%')
        .style('height', '15px')
        .style('line-height', '15px')
        .style('font-size', '14px');

    let icon = legend.append('i')
        .style('cursor', 'pointer')
        .style('color', '#737373')
        .attr('class', 'fas fa-check-circle');

    let label = legend.append('label')
        .style('cursor', 'pointer')
        .html('&nbsp;' + '<strong>Region Heatmap</strong>');

    // Legend events
    legend.on('click', function() {
        if (legend.classed('active')) {
            icon.classed('fas fa-check-circle', 'false');
            icon.classed('fas fa-circle', 'true');
            // Hide zipcode map layer
            if (map_main.getLayer('roads-highlight')) {
                map_main.setPaintProperty('roads-highlight', 'fill-opacity', 0);
            }

            $('#zipcode-control').hide();
            legend.classed('active', false);
        } else {
            icon.classed('fas fa-circle', false);
            icon.classed('fas fa-check-circle', true);
            // Show zipcode map layer
            if (map_main.getLayer('roads-highlight')) {
                map_main.setPaintProperty('roads-highlight', 'fill-opacity', 0.5);
            }

            $('#zipcode-control').show();
            legend.classed('active', true);
        }
    });


    // Add legend controls
    let legend_control = container.append('div')
        .attr('id', 'zipcode-control')
        .style('width', '100%')
        .style('height', 'auto');

    // Model controls
    let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
    let model_labels = ['TCNN1', 'CNN LSTM', 'FCN LSTM'];
    let model_colors = ['#e41a1c', '#377eb8', '#4daf4a'];

    let model_control = legend_control.append('div')
        .style('width', '100%')
        .style('height', '15px')
        .style('padding-top', '10px')
        .style('line-height', '15px')
        .style('font-size', '14px');

    // Model label
    model_control.append('label')
        .style('float', 'left')
        .html('Models:&nbsp;');

    // Create all model checkboxes
    for (let i = 0, len = models.length; i < len; i++) {
        let models_selection = model_control.append('div')
            .attr('class', 'active')
            .style('cursor', 'pointer')
            .style('width', 'auto')
            .style('height', '100%')
            .style('float', 'left')
            .style('padding-left', '2px')
            .style('padding-right', '2px');
            //.style('color', model_colors[i]);

        let model_icon = models_selection.append('i')
            .style('cursor', 'pointer')
            .style('color', '#737373')
            .attr('class', 'fas fa-check-square');

        let model_label = models_selection.append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + model_labels[i] + '&nbsp;');

        models_selection.on('click', function() {
            if (models_selection.classed('active')) {
                model_icon.classed('fas fa-check-square', false);
                model_icon.classed('fas fa-square', true);

                // Filter and redraw map
                let legends_filter = map_legend_filter;
                legends_filter.models.splice(legends_filter.models.indexOf(models[i]),1);
                map_visualize_background(legends_filter, zipcode_data);

                models_selection.classed('active', false);
            } else {
                model_icon.classed('fas fa-square', false);
                model_icon.classed('fas fa-check-square', true)

                // Filter and redraw map
                let legends_filter = map_legend_filter;
                legends_filter.models.push(models[i]);
                map_visualize_background(legends_filter, zipcode_data);

                models_selection.classed('active', true);
            }
        });
    }

    let layers = ['Density', 'Accuracy', 'Perplexity'];
    let layer_values = ['Density', 'accuracy', 'entropy'];

    let layer_radio = legend_control.append('div')
        .style('width', '100%')
        .style('height', '14px')
        .style('line-height', '14px')
        .style('padding-top', '5px')
        .style('font-size', '14px')
        .html('Attributes: ');

    for (let i = 0; i < layer_values.length; ++i) {

        let radio_input = layer_radio.append('input')
            .attr('id', 'radio-' + layer_values[i])
            .attr('type', 'radio')
            .attr('name', 'segment-layer')
            .attr('value', layer_values[i])
            .style('cursor', 'pointer')
            .property('checked', (i == 0) ? true : false);

        let radio_label = layer_radio.append('label')
            .attr('for', 'radio-' + layer_values[i])
            .html(layers[i]);

        let color_range = ['#1a9850','#fee08b','#d73027'];

        radio_input.on('change', function() {

            if (layer_values[i] === 'entropy') {
                color_range = ['#1a9850','#fee08b','#d73027'];
            } else if (layer_values[i] === 'accuracy') {
                color_range = ['#1a9850','#fee08b','#d73027'];
            }

            let new_label = "";
            for (let i = 0, len = color_range.length; i < len; i++) {
                new_label += '<i style="color:' + color_range[i] + '" class="fas fa-square-full"></i>';
            }

            label.html('&nbsp;' + '<strong>Region Heatmap</strong> &nbsp;&nbsp;&nbsp;Low ' + new_label + ' High');

            let legends_filter = map_legend_filter;
            legends_filter.layers = layer_values[i];
            map_visualize_background(legends_filter, zipcode_data);
        });

        // Create default color ranges
        let new_label = "";
        for (let i = 0, len = color_range.length; i < len; i++) {
            new_label += '<i style="color:' + color_range[i] + '" class="fas fa-square-full"></i>';
        }

        label.html('&nbsp;' + '<strong>Region Heatmap</strong> &nbsp;&nbsp;&nbsp;Low ' + new_label + ' High');
    }

    return;

}

// Trip and critical location as map legend
export function view_trip_critical_location_legend(map_container_id)
{
    // Create main map legend container
    let container = d3.select('#' + map_container_id).append('div')
        .attr('id', 'trip-critical-legend')
        .style('position', 'absolute')
        .style('width', 'auto')
        .style('height', 'auto')
        .style('font-family', 'Barlow, sans-serif')
        .style('background', 'rgba(255, 255, 255, 0.8)')
        .style('padding', '5px')
        .style('top', '10px')
        .style('right', '10px')
        .style('border-radius', '5px')
        .style('border', '2px solid #737373');

    // Add Trip Heatmap
    let trip_heatmap = container.append('div')
            .attr('class', 'active')
            .style('width', '100%')
            .style('height', '15px')
            .style('line-height', '15px')
            .style('font-size', '14px');

    let trip_heatmap_icon = trip_heatmap.append('i')
        .style('cursor', 'pointer')
        .style('color', '#737373')
        .attr('class', 'fas fa-check-circle');

    let trip_heatmap_label = trip_heatmap.append('label')
        .style('cursor', 'pointer')
        .html('&nbsp;' + '<strong>Video Trips</strong>');

    trip_heatmap.on('click', function() {
        if (trip_heatmap.classed('active')) {
            trip_heatmap_icon.classed('fas fa-check-circle', 'false');
            trip_heatmap_icon.classed('fas fa-circle', 'true');
            if (map_main.getLayer('trip-filtered-trajectory')) {
                map_main.setPaintProperty('trip-filtered-trajectory', 'heatmap-opacity', 0);
            }
            trip_heatmap.classed('active', false);
        } else {
            trip_heatmap_icon.classed('fas fa-circle', false);
            trip_heatmap_icon.classed('fas fa-check-circle', true);
            if (map_main.getLayer('trip-filtered-trajectory')) {
                map_main.setPaintProperty('trip-filtered-trajectory', 'heatmap-opacity', 0.7);
            }
            trip_heatmap.classed('active', true);
        }
    });

    // Add critical location
    // TODO: need to add ocatagon ⬣
    let action_labels = ['straight ▲', 'slow/stop ⬣', 'turn left ◀', 'turn right ▶'];
    let actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];

    let point_container = container.append('div')
        .attr('class', 'active')
        .style('width', '100%')
        .style('height', 'auto')
        .style('padding-top', '10px')
        .style('line-height', '15px')
        .style('font-size', '14px');

    let point_icon = point_container.append('i')
        .style('cursor', 'pointer')
        .style('color', '#737373')
        .attr('class', 'fas fa-check-circle');

    let point_label = point_container.append('label')
        .style('cursor', 'pointer')
        .html('&nbsp;' + '<strong>Critical Locations</strong>');

    let point_checkboxes = container.append('div')
        .style('width', '100%')
        .style('height', 'auto')
        .style('padding-top', '10px')
        .style('font-size', '14px')
        .style('line-height', '14px');

    for (let i = 0, len = actions.length; i < len; i++) {

        let checkbox_input = point_checkboxes.append('input')
            .attr('id', 'checkbox-' + actions[i])
            .attr('type', 'checkbox')
            .attr('name', 'point-action-' + actions[i])
            .attr('value', actions[i])
            .property('checked', true);

        let checkbox_label = point_checkboxes.append('label')
            .attr('for', 'point-action-' + actions[i])
            .html(action_labels[i] + '<br/>');

        checkbox_input.on('change', function() {

            let legends_filter = map_legend_filter;

            if ($(checkbox_input.node()).is(':checked')) {
                legends_filter.actions.push(actions[i]);
                update_map_points(legends_filter.actions);
            } else {
                legends_filter.actions.splice(legends_filter.actions.indexOf(actions[i]),1);
                update_map_points(legends_filter.actions)
            }
        });
    }

    point_container.on('click', function() {
        if (point_container.classed('active')) {
            point_icon.classed('fas fa-check-circle', 'false');
            point_icon.classed('fas fa-circle', 'true');
            // Show map layer

            if (map_main.getLayer('trip-points')) {
                map_main.setPaintProperty('trip-points', 'circle-opacity', 0);
            }

            //$(radios.node()).hide();
            point_container.classed('active', false);
        } else {
            point_icon.classed('fas fa-circle', false);
            point_icon.classed('fas fa-check-circle', true);

            if (map_main.getLayer('trip-points')) {
                map_main.setPaintProperty('trip-points', 'circle-opacity', 0.9);
            }

            // Hide map layer
            //$(radios.node()).show();
            point_container.classed('active', true);
        }
    });

    function update_map_points(actions) {
        //console.log(actions);
        if (map_main.getSource('trip-points')) {
            // Filter points
            let filtered_points = [];
            // Get all point the match that action
            for (let j = 0; j < map_all_points_data.length; j++) {
                actions.forEach(function(action) {
                    if (action === map_all_points_data[j].properties.action) {
                        filtered_points.push(map_all_points_data[j]);
                    }
                })
            }
            // Filter all points over map
            let feature_collection = turf.featureCollection(filtered_points);
            map_main.getSource('trip-points').setData(feature_collection);
        }
    }

    return;
}

export function view_create_map_legends(map_container_id, zipcode_data)
{
    let legends_filter = {
        models: ['tcnn1', 'cnn_lstm', 'fcn_lstm'],
        actions: ['straight', 'slow_or_stop', 'turn_left', 'turn_right'],
        layers: 'Density'
    };

    let container = create_container();
    add_model_selection(container);
    add_zipcode_regions(container);
    add_trip_color(container);
    add_points(container);

    function create_container() {

        // Create div conntainer
        let container = d3.select('#' + map_container_id).append('div')
            .style('position', 'absolute')
            .style('width', 'auto')
            .style('height', '165px')
            .style('background', 'rgba(255, 255, 255, 0.8)')
            .style('padding', '5px')
            .style('top', '15px')
            .style('border-radius', '5px')
            .style('right', '10px');

        // Add header container
        container.append('div')
            .style('width', 'auto')
            .style('height', '18px')
            .style('line-height', '18px')
            .style('font-size', '16px')
            .style('text-align', 'center')
            .style('background-color', '#bababa')
            .html('Attributes');

        return container;
    }

    function add_model_selection(div) {

        let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
        let model_colors = ['#e41a1c', '#377eb8', '#4daf4a'];

        let container = div.append('div')
            .style('width', '100%')
            .style('height', '15px')
            .style('padding-top', '10px')
            .style('line-height', '15px')
            .style('font-size', '14px');

        container.append('label')
            .style('float', 'left')
            .html('Models:&nbsp;');

        for (let i = 0; i < models.length; ++i) {
            let models_selection = container.append('div')
                .attr('class', 'active')
                .style('cursor', 'pointer')
                .style('width', 'auto')
                .style('height', '100%')
                .style('float', 'left')
                .style('padding-left', '2px')
                .style('padding-right', '2px')
                .style('color', model_colors[i]);

            let model_icon = models_selection.append('i')
                .attr('class', 'fas fa-check-square');

            let model_label = models_selection.append('label')
                .style('cursor', 'pointer')
                .html('&nbsp;' + models[i]);

            models_selection.on('click', function() {
                if (models_selection.classed('active')) {
                    models_selection.classed('active', false);
                    model_icon.classed('fas fa-check-square', false);
                    model_icon.classed('fas fa-square', true);
                    legends_filter.models.splice(legends_filter.models.indexOf(models[i]),1);
                    map_visualize_background(legends_filter, zipcode_data);
                } else {
                    models_selection.classed('active', true);
                    model_icon.classed('fas fa-square', false);
                    model_icon.classed('fas fa-check-square', true)
                    legends_filter.models.push(models[i]);
                    map_visualize_background(legends_filter, zipcode_data);
                }
            });
        }
    }

    function add_zipcode_regions(div) {

        let layers = ['Density', 'Accuracy', 'F1', 'Perplexity'];
        let layer_values = ['Density', 'accuracy', 'f1', 'entropy'];

        let container = div.append('div')
            .attr('class', 'active')
            .style('width', '100%')
            .style('height', '15px')
            .style('padding-top', '10px')
            .style('line-height', '15px')
            .style('font-size', '14px');

        let icon = container.append('i')
            .style('cursor', 'pointer')
            .attr('class', 'fas fa-check-square');

        let label = container.append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + 'Zipcode Regions');

        let radios = div.append('div')
            .style('width', '100%')
            .style('height', '14px')
            .style('line-height', '14px')
            .style('font-size', '14px');

        for (let i = 0; i < layer_values.length; ++i) {
            let radio_input = radios.append('input')
                .attr('id', 'radio-' + layer_values[i])
                .attr('type', 'radio')
                .attr('name', 'segment-layer')
                .attr('value', layer_values[i])
                .property('checked', (i == 0) ? true : false);

            let radio_label = radios.append('label')
                .attr('for', 'radio-' + layer_values[i])
                .html(layers[i]);

            radio_input.on('change', function() {

                legends_filter.layers = layer_values[i];
                let color_range = ['#fc8d59','#ffffbf','#91cf60'];
                if (layer_values[i] === 'Density' || layer_values[i] === 'entropy') {
                    color_range.reverse();
                }

                let new_label = "";
                for (let i = 0, len = color_range.length; i < len; i++) {
                    new_label += '<i style="color:' + color_range[i] + '" class="fas fa-square-full"></i>';
                }

                label.html('&nbsp;' + 'Zipcode Regions:&nbsp;&nbsp;&nbsp;Low ' + new_label + ' High');

                map_visualize_background(legends_filter, zipcode_data);
            })
        }


        container.on('click', function() {
            if (container.classed('active')) {
                icon.classed('fas fa-check-square', 'false');
                icon.classed('fas fa-square', 'true');
                // Show map layer

                if (map_main.getLayer('roads-highlight')) {
                    map_main.setPaintProperty('roads-highlight', 'fill-opacity', 0);
                }

                //$(radios.node()).hide();
                container.classed('active', false);
            } else {
                icon.classed('fas fa-square', false);
                icon.classed('fas fa-check-square', true);

                if (map_main.getLayer('roads-highlight')) {
                    map_main.setPaintProperty('roads-highlight', 'fill-opacity', 0.5);
                }

                // Hide map layer
                //$(radios.node()).show();
                container.classed('active', true);
            }
        });

        // Draw background here
        map_visualize_background(legends_filter, zipcode_data);
    }

    function add_trip_color(div) {
        let container = div.append('div')
            .attr('class', 'active')
            .style('width', '100%')
            .style('height', '15px')
            .style('line-height', '15px')
            .style('padding-top', '10px')
            .style('font-size', '14px');

        let icon = container.append('i')
            .style('cursor', 'pointer')
            .attr('class', 'fas fa-check-square');

        let label = container.append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + 'Trip Density Heatmap');

        container.on('click', function() {
            if (container.classed('active')) {
                icon.classed('fas fa-check-square', 'false');
                icon.classed('fas fa-square', 'true');
                if (map_main.getLayer('trip-filtered-trajectory')) {
                    map_main.setPaintProperty('trip-filtered-trajectory', 'heatmap-opacity', 0);
                }
                container.classed('active', false);
            } else {
                icon.classed('fas fa-square', false);
                icon.classed('fas fa-check-square', true);
                if (map_main.getLayer('trip-filtered-trajectory')) {
                    map_main.setPaintProperty('trip-filtered-trajectory', 'heatmap-opacity', 0.7);
                }
                container.classed('active', true);
            }
        });
    }

    function add_points(div) {

        let action_labels = ['straight(▲)', 'slow/stop(&#11203;)', 'turn left(◀)', 'turn right(▶)'];
        let actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];

        let container = div.append('div')
            .attr('class', 'active')
            .style('width', '100%')
            .style('height', '15px')
            .style('padding-top', '10px')
            .style('line-height', '15px')
            .style('font-size', '14px');

        let icon = container.append('i')
            .style('cursor', 'pointer')
            .attr('class', 'fas fa-check-square');

        let label = container.append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + 'Critical Locations');

        let radios = div.append('div')
            .style('width', '100%')
            .style('height', '14px')
            .style('line-height', '14px')
            .style('font-size', '14px');

        for (let i = 0; i < actions.length; ++i) {
            let radio_input = radios.append('input')
                .attr('id', 'radio-' + actions[i])
                .attr('type', 'radio')
                .attr('name', 'point-layer')
                .attr('value', actions[i])
                .property('checked', true);

            let radio_label = radios.append('label')
                .attr('for', 'radio-' + actions[i])
                .html(action_labels[i]);

            radio_input.on('change', function() {

                let filtered_points = [];

                for (let j = 0; j < map_all_points_data.length; ++j) {
                    if (actions[i] === map_all_points_data[j].properties.action) {
                        filtered_points.push(map_all_points_data[j]);
                    }
                }

                let feature_collection = turf.featureCollection(filtered_points);
                map_main.getSource('trip-points').setData(feature_collection);
            })
            if (i == 1) { radios.append('br'); };
        }


        container.on('click', function() {
            if (container.classed('active')) {
                icon.classed('fas fa-check-square', 'false');
                icon.classed('fas fa-square', 'true');
                // Show map layer

                if (map_main.getLayer('trip-points')) {
                    map_main.setPaintProperty('trip-points', 'circle-opacity', 0);
                }

                //$(radios.node()).hide();
                container.classed('active', false);
            } else {
                icon.classed('fas fa-square', false);
                icon.classed('fas fa-check-square', true);

                if (map_main.getLayer('trip-points')) {
                    map_main.setPaintProperty('trip-points', 'circle-opacity', 0.9);
                }

                // Hide map layer
                //$(radios.node()).show();
                container.classed('active', true);
            }
        });
    }

    return;
}

export function view_init_trip_filter_tab()
{
    let condition_tab = $('#trip-filter-tab-condition');
    let performance_tab = $('#trip-filter-tab-performance');
    let condition_body = $('#trip-filter-body-condition');
    let performance_body = $('#trip-filter-body-performance');

    condition_tab.on('click', function() {
        view_trip_filter_mode.condition = true;
        view_trip_filter_mode.performance = false;
        condition_tab.css({ 'background-color': '#C9D2D3'});
        performance_tab.css({ 'background-color': 'transparent'});
        performance_body.hide();
        condition_body.show();
        // draw
        if (main_region) {
            let trips = filter_by_polygon(main_region, main_processed_trips);
            main_init_visualization(trips);
            //vis_draw_trip_filter(trips);
            //vis_draw_histogram(trips);
        } else {
            //let trips = filter_bbox_trips(main_processed_trips);
            main_init_visualization(main_processed_trips);
            //vis_draw_trip_filter(trips);
            //vis_draw_histogram(trips);
        }
    });

    performance_tab.on('click', function() {
        view_trip_filter_mode.performance = true;
        view_trip_filter_mode.condition = false;
        condition_tab.css({ 'background-color': 'transparent'});
        performance_tab.css({ 'background-color': '#C9D2D3'});
        condition_body.hide();
        performance_body.show();
        // draw
        if (main_region) {
            let trips = filter_by_polygon(main_region, main_processed_trips);
            main_init_visualization(trips);
            //vis_draw_trip_filter(trips);
            //vis_draw_histogram(trips);
        } else {
            //let trips = filter_bbox_trips(main_processed_trips);
            main_init_visualization(main_processed_trips);
            //vis_draw_trip_filter(trips);
            //vis_draw_histogram(trips);
        }
    });

    return;
}