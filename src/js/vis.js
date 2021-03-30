import {symbolOctagonAlt} from 'd3-symbol-extra';
import {
    map_draw_point,
    map_remove_layer,
    map_draw_all_points,
    map_show_filtered_trips,
    map_main,
    map_draw_trip_in_radius,
    map_draw_selected_trips,
} from "./map";
import './plugin/d3-parsets';

import {
    util_compute_performance
} from './utils';

import { view_trip_filter_mode } from './view';

export var vis_is_parallelsets_filter = false;
let CAR_ACTIONS = ['straight', 'slow_or_stop', 'turn_left', 'turn_right', 'turn_left_slight', 'turn_right_slight'];
export var vis_selected_nodes = [];
let model_colors = {
    actual: '#9d9d9d',
    tcnn1: '#e41a1c',
    fcn_lstm: '#377eb8',
    cnn_lstm: '#4daf4a',
};

export var vis_marker = undefined;

export function vis_global_view (trips, container_id) {
    // Clear current view
    $('#' + container_id).empty();

    let selection_div = create_selection_div(container_id);
    let performance_colors = ['#6baed6','#fb6a4a','#cb181d','#a50f15','#d73027'];

    let width = 0;
    let height = 0;
    let margin = {top: 20, right: 40, bottom: 10, left: 20};
    let selection = {
        parameter: 'time_of_day',
        performances: ['accuracy', 'entropy']
        //performances: ['accuracy', 'precision', 'recall', 'f1', 'entropy']
    }

    // TODO: Need to have default one
    //add_trip_number(selection_div, trips);
    add_parameter_legend(selection_div);
    add_performance_legend(selection_div);
    init_chart(container_id);
    update_chart(selection);

    // Create drop down list
    function create_selection_div(container_id) {
        let div = d3.select('#' + container_id).append('div')
            .style('width', '100%')
            .style('height', '60px')
            .style('position', 'relative')
            .style('box-sizing', 'border-box');
        return div;
    }

    function add_trip_number (div, trips) {
        div.append('div')
            .style('width', 'auto')
            .style('height', 'auto')
            .style('position', 'absolute')
            .style('top', 0)
            .style('right', '5px')
            .style('background-color', '#C9D2D3')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px')
            .html('<strong>' + trips.length + ' Trips</strong>');
    }

    // Add select option to dropdown list
    function add_dropdown(div) {

        let parameters_str = ['Time Of Day', 'Street Type', 'Weather', 'Action'];
        let parameters_value = ['time_of_day', 'scene', 'weather', 'action'];
        let actions_str = ['Straight', 'Slow Or Stop', 'Turn Left', 'Turn Right'];
        let actions_value = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];

        let dropdown_div = div.append('div')
            .style('width', '100%')
            .style('height', '20px')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px');

        let dropdown_label = dropdown_div.append('label')
            .style('width', 'auto')
            .style('height', '100%')
            .style('float', 'left')
            .html('Attributes:&nbsp;&nbsp;');

        let dropdown_select = dropdown_div.append('select')
            .attr('id', 'parameter-dropdown')
            .style('width', '100px')
            .style('height', '100%')
            .style('border', 'none')
            .style('border-bottom', '1px solid #000')
            .style('background-color', '#f0f0f0')
            .style('float', 'left');

        for (let i = 0; i < parameters_value.length; ++i) {
            dropdown_select.append('option')
                .attr('value', parameters_value[i])
                .html(parameters_str[i]);
        }

        dropdown_select.on('change', function () {
            let parameter = $('#parameter-dropdown').val();
            selection.parameter = parameter;
            // Redraw barchart
            update_chart(selection);
        });

        // Set default value
        dropdown_select.node().value = 'action';
    }

    // Add performance legends
    function add_parameter_legend(div) {

        let parameters_str = ['Time Of Day', 'Street Type', 'Weather', 'Action'];
        let parameters_value = ['time_of_day', 'scene', 'weather', 'action'];

        let parameter_div = div.append('div')
            .style('width', '100%')
            .style('height', '20px')
            .style('line-height', '20px')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px')
            .style('padding-left', '5px')
            .style('text-align', 'center');

        for (let i = 0; i < parameters_value.length; ++i) {

            let legend_div = parameter_div.append('div')
                .style('width', 'auto')
                .style('height', '20px')
                .style('line-height', '20px')
                .style('cursor', 'pointer')
                .style('float', 'left')
                .style('font-size', '14px')

            let legend_icon = legend_div.append('i')
                .attr('id', 'parameter-checkbox-' + i)
                .attr('class', 'fas fa-square')
                .style('cursor', 'pointer')
                .style('color', '#969696');

            let legend_text = legend_div.append('label')
                .style('cursor', 'pointer')
                .html('&nbsp;' + parameters_str[i] + '&nbsp;&nbsp;');

            legend_div.on('click', function() {

                for (let i = 0; i < parameters_value.length; ++i) {
                    d3.select('#parameter-checkbox-' + i)
                        .attr('class', 'fas fa-square');
                }

                selection.parameter = parameters_value[i];
                legend_icon.attr('class', 'fas fa-check-square');

                update_chart(selection);
            });
        }

        // Select time_of_day as default
        d3.select('#parameter-checkbox-' + parameters_value.indexOf('time_of_day'))
            .attr('class', 'fas fa-check-square');

        return;
    }

    // Add performance legends
    function add_performance_legend(div) {

        //let performace_str = ['Accuracy', 'Precision', 'Recall', 'F1', 'Perplexity'];
        //let performance_value = ['accuracy', 'precision', 'recall', 'f1', 'entropy'];
        let performace_str = ['Accuracy', 'Perplexity'];
        let performance_value = ['accuracy', 'entropy'];

        let performance_div = div.append('div')
            .style('width', '100%')
            .style('height', '40px')
            .style('line-height', '40px')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px')
            .style('padding-left', '5px')
            .style('text-align', 'center');

        for (let i = 0; i < performance_value.length; ++i) {

            let legend_div = performance_div.append('div')
                .attr('class', 'active')
                .style('width', 'auto')
                .style('height', '40px')
                .style('line-height', '40px')
                .style('cursor', 'pointer')
                .style('float', 'left')
                .style('font-size', '14px')

            let legend_icon = legend_div.append('i')
                .attr('class', 'fas fa-check-square')
                .style('cursor', 'pointer')
                .style('color', performance_colors[i]);

            let legend_text = legend_div.append('label')
                .style('cursor', 'pointer')
                .html('&nbsp;' + performace_str[i] + '&nbsp;&nbsp;');

            legend_div.on('click', function() {

                if (legend_div.classed('active')) {

                    let pos = selection.performances.indexOf(performance_value[i]);
                    selection.performances.splice(pos, 1);

                    legend_icon.attr('class', 'fas fa-square');
                    legend_div.classed('active', false);
                } else {
                    selection.performances.push(performance_value[i]);
                    legend_icon.attr('class', 'fas fa-check-square');
                    legend_div.classed('active', true);
                }

                // Redraw
                update_chart(selection);
            })
        }

        return;
    }

    function init_chart(container_id) {

        let div_height = $('#' + container_id).height() - 100;

        d3.select('#' + container_id).append('div')
            .attr('id', 'global-chart')
            .style('width', 'calc(100% - 40px)')
            .style('height', div_height + 'px')
            .style('box-sizing', 'border-box');

        return;
    }

    function update_chart(filter) {

        let result = get_performances(filter, trips);
        //console.log(result);

        let keys = Object.keys(result);
        let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];

        width = $('#global-chart').width(); - margin.left - margin.right;
        height = $('#global-chart').height(); - margin.top - margin.bottom;

        $('#global-chart').empty();

        let svg = d3.select('#global-chart').append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let x0_scale = d3.scaleBand()
            .range([0, width])
            .paddingInner(0.1);

        let x1_scale = d3.scaleLinear();

        let y0_scale = d3.scaleBand()
            .range([0, height])
            .paddingInner(0.2);

        let y1_scale = d3.scaleBand()
            .padding(0.2);
        // ['accuracy', 'precision', 'recall', 'f1', 'entropy']
        let color_scale = d3.scaleOrdinal()
            .domain(['accuracy', 'entropy'])
            .range(performance_colors);

        x0_scale.domain(models);
        x1_scale.domain([0, 1]).range([0, x0_scale.bandwidth()]);
        y0_scale.domain(keys);
        y1_scale.domain(filter.performances).range([0, y0_scale.bandwidth()]);

        // Draw Y axis
        svg.append("g")
            .attr("class", "axis")
            .call(d3.axisLeft(y0_scale))
            .selectAll('text')
            .style('font-size', '11px')
            .attr("text-anchor", "middle")
            .attr('transform', function(d) {
                return 'translate(-13, -8) rotate(270)'
            });

        // Draw X axis
        svg.append("g")
            .attr("class", "axis")
            .style('font-size', '12px')
            .call(d3.axisTop(x0_scale));

        for (let i = 0; i < keys.length; ++i) {
            for (let j = 0; j < models.length; ++j) {

                let g = svg.append("g")
                    .style('opacity', 1)
                    .attr('transform', "translate(" + x0_scale(models[j]) + "," + y0_scale(keys[i]) + ")");

                for (let k = 0; k < filter.performances.length; ++k) {

                    let value = result[keys[i]][models[j]][[filter.performances[k]]];

                    g.append('rect')
                        .attr('x', 0)
                        .attr('y', y1_scale(filter.performances[k]))
                        .attr('width', x1_scale(1))
                        .attr('height', y1_scale.bandwidth())
                        .attr('fill', '#C9D2D3')
                        .style("stroke", '#252525')
                        .style("stroke-width", "0.5px")
                        .attr('fill-opacity', '0.8')
                        .style("stroke-opacity", 1);

                    let bar_scale = d3.scaleLinear()
                        .domain([0, 1]);

                    if (filter.performances[k] === 'accuracy') {
                        bar_scale.range(['#f7fbff','#9ecae1']);
                    } else {
                        bar_scale.range(['#fff5f0','#fc9272']);
                    }

                    g.append('rect')
                        .attr('x', 0)
                        .attr('y', y1_scale(filter.performances[k]))
                        .attr('height', y1_scale.bandwidth())
                        .transition()
                        .duration(500)
                        .attr('width', (value) ? x1_scale(value) : x1_scale(0))
                        .attr('fill', (value) ? bar_scale(value) : bar_scale(0))
                        .style("stroke", '#252525')
                        .style("stroke-width", "0.5px")
                        .attr('fill-opacity', '0.8')
                        .style("stroke-opacity", 1);

                    g.append('text')
                        .attr("y", y1_scale(filter.performances[k]) + (y1_scale.bandwidth() / 2))
                        .transition()
                        .duration(500)
                        .attr("x", x1_scale(value) - 2)
                        .attr("dy", "0.32em")
                        .attr("fill", '#252525')
                        .attr('font-size', '12px')
                        .attr("text-anchor", "end")
                        .text( (value) ? (value * 100).toFixed(0) + '%' : 0 + '%');
                }
            }
        }

        return;
    }

    function get_performances(filter, data) {

        let group_data = {};
        let parameter = filter.parameter;

        for (let i = 0; i < data.length; ++i) {
            let trip = data[i];

            if (parameter === 'action') {
                if (!('all_trips' in group_data)) {
                    group_data['all_trips'] = [];
                    group_data['all_trips'].push(trip);
                } else {
                    group_data['all_trips'].push(trip);
                }
            } else {
                if (!(trip[parameter] in group_data)) {
                    group_data[trip[parameter]] = [];
                    group_data[trip[parameter]].push(trip);
                } else {
                    group_data[trip[parameter]].push(trip);
                }
            }
        }

        let result = {};

        Object.keys(group_data).forEach(function (group) {
            // Compute entropy
            let performances = util_compute_performance(group_data[group]);

            if (parameter !== 'action') {
                result[group] = {};
            } else {
                result = {
                    'straight': {},
                    'slow_or_stop': {},
                    'turn_left': {},
                    'turn_right': {}
                }
            }

            Object.keys(performances).forEach(function (model) {

                let accuracy = [], precision = [], recall = [], f1 = [], entropy = [];

                Object.keys(performances[model]).forEach(function (action) {
                    if (action) {
                        if (parameter === 'action') {
                            result[action][model] = {
                                accuracy: performances[model][action].accuracy,
                                precision: performances[model][action].precision,
                                recall: performances[model][action].recall,
                                f1: performances[model][action].f1,
                                entropy: performances[model][action].entropy,
                            }
                        } else {
                            accuracy.push(performances[model][action].accuracy);
                            precision.push(performances[model][action].precision);
                            recall.push(performances[model][action].recall);
                            f1.push(performances[model][action].f1);
                            entropy.push(performances[model][action].entropy);
                        }
                    }
                });

                if (parameter !== 'action') {
                    result[group][model] = {
                        accuracy: d3.mean(accuracy),
                        precision: d3.mean(precision),
                        recall: d3.mean(recall),
                        f1: d3.mean(f1),
                        entropy: d3.mean(entropy),
                    }
                }
            });
        });

        return result;
    }
}

export function vis_draw_trip_filter(trips)
{
    let condition_keys = ['time_of_day', 'scene', 'weather'];
    let performance_keys = ['accuracy', 'perplexity']
    let condition_keys_text = ['Time Of Day', 'Street Type', 'Weather'];
    let performance_keys_text = ['Accuracy (%)', 'Perplexity (%)'];

    let processed_trips = preprocess(trips);

    if (view_trip_filter_mode.condition) {
        create_filter(processed_trips, condition_keys, condition_keys_text, 'trip-filter-body-condition');
    } else if (view_trip_filter_mode.performance) {
        create_filter(processed_trips, performance_keys, performance_keys_text, 'trip-filter-body-performance');
    } else {
        alert('error no mode selected');
    }

    function create_filter(data, keys, key_values, container_id) {

        let graph = get_graph(keys, data);
        // Container to empty
        $('#' + container_id).empty();

        let nodes = graph.nodes;
        let width = $('#' + container_id).width();
        let height = $('#' + container_id).height();
        let color_range = d3.scaleLinear()
            .domain([0, data.length])
            .range(['#efedf5','#54278f']);

        //console.log(width);
        //console.log(height);

        let sub_height = 70;
        let filter = {};

        for (let i = 0, len = Object.keys(keys).length; i < len; i++) {

            let counts = {};
            graph.key_list[keys[i]].forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

            filter[keys[i]] = [];

            let key_container = d3.select('#' + container_id).append('div')
                .style('width', width)
                .style('height', sub_height + 'px')
                .style('box-sizing', 'border-box');

            // Key header
            let key_header = key_container.append('div')
                .style('width', '100%')
                .style('height', '25px')
                .style('box-sizing', 'border-box')
                .style('font-size', '14px')
                .style('line-height', '25px')
                .style('text-align', 'center')
                .html(key_values[i]);

            let key_body = key_container.append('div')
                .style('width', '100%')
                .style('height', 'calc(100% - 25px)')
                .style('box-sizing', 'border-box');

            let key_items = [];
            for (let j = 0, j_len = nodes.length; j < j_len; j++) {
                if (nodes[j].key === keys[i]) {
                    key_items.push(nodes[j].name);
                }
            }

            key_items.sort();

            let sub_width = width / key_items.length;
            for (let k = 0, k_len = key_items.length; k < k_len; k++) {

                let item_container = key_body.append('div')
                    .style('width', sub_width + 'px')
                    .style('height', '100%')
                    .style('box-sizing', 'border-box')
                    .style('float', 'left')
                    .style('display', 'inline-block');

                let item_header = item_container.append('div')
                    .style('width', '100%')
                    .style('height', '20px')
                    .style('box-sizing', 'border-box')
                    .style('font-size', '12px')
                    .style('line-height', '20px')
                    .style('text-align', 'center')
                    .style('overflow-x', 'hidden')
                    .style('color', '#525252')
                    .html(key_items[k]);

                let item_body = item_container.append('div')
                    .style('width', '100%')
                    .style('height', 'calc(100% - 20px)')
                    .style('padding-left', '3px')
                    .style('padding-right', '3px')
                    .style('box-sizing', 'border-box');

                let item_rect = item_body.append('div')
                    .attr('class', 'active')
                    .style('width', '100%')
                    .style('height', '20px')
                    .style('cursor', 'pointer')
                    .style('text-align', 'center')
                    .style('background-color', color_range(counts[key_items[k]]))
                    .style('border', '1px solid #252525');

                item_rect.on('click', function() {
                    if (item_rect.classed('active')) {
                        item_rect.style('border', '1px solid #d0d0d0');
                        item_rect.classed('active', false);

                        filter[keys[i]].splice(filter[keys[i]].indexOf(key_items[k]), 1);

                        if (filter[keys[i]].length === 0) { delete filter[keys[i]] }
                        update_filter(filter, trips);

                    } else {
                        item_rect.style('border', '1px solid #252525');
                        item_rect.classed('active', true);

                        if (!(keys[i] in filter)) {
                            filter[keys[i]] = [];
                            filter[keys[i]].push(key_items[k]);
                        } else {
                            filter[keys[i]].push(key_items[k]);
                        }
                        update_filter(filter, trips);
                    }
                });
                // Adding all filter here
                filter[keys[i]].push(key_items[k]);
            }
        }

    }

    function preprocess(data) {

        // Need to categorize entropy
        for (let i = 0; i < data.length; ++i) {
            let trip = data[i];
            let accuracy = [], entropy = [];
            let performance = util_compute_performance([trip]);

            Object.keys(performance).forEach(function (model) {
                Object.keys(performance[model]).forEach(function (action) {
                    accuracy.push(performance[model][action].accuracy);
                    entropy.push(performance[model][action].entropy);
                });
            });

            trip.performances = {
                accuracy: d3.mean(accuracy),
                perplexity: d3.mean(entropy)
            }

            trip.accuracy = get_value_category(d3.mean(accuracy));
            trip.perplexity = get_value_category(d3.mean(entropy));

        }

        return data;
    }

    function get_value_category(value) {
        let category = ['0 - 10','20 - 30','30 - 40','30 - 40','40 - 50','50 - 60','60 - 70','70 - 80', '80 - 90', '90 - 100'];
        let range = [0,.1,.2,.3,.4,.5,.6,.7,.8,.9];

        for (let i = 0; i < range.length; ++i) {
            if (value > range[i] && value <= range[i] + 0.10) {
                return category[i];
            }
        }
    }

    function get_graph(keys, data) {
        let index = -1;
        const nodes = [];
        const nodeByKey = new Map;
        const indexByKey = new Map;
        const links = [];
        const key_list = {};

        for (const k of keys) {

            if (!(k in key_list)) {
                key_list[k] = [];
            }

            for (const d of data) {
                const key = JSON.stringify([k, d[k]]);
                key_list[k].push(d[k]);
                if (nodeByKey.has(key)) continue;
                const node = {name: d[k], key: k};
                nodes.push(node);
                nodeByKey.set(key, node);
                indexByKey.set(key, ++index);
            }
        }

        for (let i = 1; i < keys.length; ++i) {
            const a = keys[i - 1];
            const b = keys[i];
            const prefix = keys.slice(0, i + 1);
            const linkByKey = new Map;
            for (const d of data) {
                const names = prefix.map(k => d[k]);
                const key = JSON.stringify(names);
                const value = d.value || 1;
                let link = linkByKey.get(key);
                if (link) { link.value += value; continue; }
                link = {
                    source: indexByKey.get(JSON.stringify([a, d[a]])),
                    target: indexByKey.get(JSON.stringify([b, d[b]])),
                    names,
                    value
                };
                links.push(link);
                linkByKey.set(key, link);
            }
        }

        return {nodes, links, key_list};
    }

    // Update other views here
    function update_filter(filter, trips) {
        console.log(filter)
        let filtered_trips = [];
        for (let i = 0, len = trips.length; i < len; i++) {
            let trip = trips[i];
            let has = true;
            Object.keys(filter).forEach(function(attribute) {
                if (filter[attribute].indexOf(trip[attribute]) < 0) {
                    has = false;
                }
            });
            if (has) {
                filtered_trips.push(trip);
            }
        }


        //$('#dataview-summary').html(display_summary);

        // Draw map here
        vis_draw_histogram(filtered_trips);
        map_show_filtered_trips(filtered_trips);
        vis_model_cases(filtered_trips, 'model-cases-body');

        return;
    }

    return;
}

export function vis_draw_histogram(trips)
{
    //let processed_trips = preprocess(trips);
    $('#histogram-condition').remove();
    $('#histogram-performance').remove();

    if (view_trip_filter_mode.condition) {
        let keys = ['accuracy', 'perplexity'];
        let key_values = ['Accuracy', 'Perplexity'];
        let processed_data = preprocess(trips, keys);
        add_histogram_container_1('trip-filter-body-condition', keys, key_values, processed_data, trips);
    } else if (view_trip_filter_mode.performance) {
        let keys = ['time_of_day', 'weather', 'scene'];
        let key_values = ['Time Of Day', 'Weather', 'Street Type'];
        let processed_data = preprocess(trips, keys);
        add_histogram_container_2('trip-filter-body-performance', keys, key_values, processed_data, trips);
    }

    function add_histogram_container_1(container_id, keys, key_values, data, all_trips) {

        let body_height = 70 * 3;

        let histogram_body = d3.select('#' + container_id).append('div')
            .attr('id', 'histogram-condition')
            .style('width', '100%')
            .style('height', 'calc(100% - ' + body_height + 'px)')
            .style('border-top', '1px solid #BCCFD3');

        let histogram_height = ($('#histogram-condition').height() / keys.length);
        let histogram_width = $('#histogram-condition').width();

        for (let i = 0, len = keys.length; i < len; i++) {

            let histogram_container = histogram_body.append('div')
                .style('width', '100%')
                .style('height', histogram_height + 'px')
                .style('box-sizing', 'border-box');

            var margin = {top: 40, right: 20, bottom: 20, left: 40},
                width = histogram_width - margin.left - margin.right,
                height = histogram_height - margin.top - margin.bottom;

            var x = d3.scaleBand()
                    .range([0, width])
                    .padding(0.1);
            var y = d3.scaleLinear()
                    .range([height, 0]);

            let svg = histogram_container.append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            let values = [];
            let items = [];
            Object.keys(data[keys[i]]).forEach(function(item) {
                items.push(item);
                values.push(data[keys[i]][item]);
            });

            x.domain(items);
            y.domain([0, d3.max(values)]);

            Object.keys(data[keys[i]]).forEach(function(item, index) {
                svg.append("rect")
                    .attr('id', 'histogram-' + keys[i] + '-' + index)
                    .attr("class", "histogram-bar")
                    .attr("x", x(item))
                    .attr("width", x.bandwidth())
                    .attr('fill', '#fdb863')
                    .attr('stroke', '#BCCFD3')
                    .attr('cursor', 'pointer')
                    .attr('y', function(d) { return y(0); })
                    .attr('height', function(d) { return height - y(0); })
                    .on('click', function() {
                        clicked_on_bar(data[keys[i] + '_trips'][item], index, keys[i], all_trips);
                    })
                    .transition()
                    .delay(function(d) { return Math.random() * 500; })
                    .duration(500)
                    .attr("y", y(data[keys[i]][item]))
                    .attr("height", height - y(data[keys[i]][item]));

                svg.append('text')
                    .attr('class', 'histogram-text')
                    .attr('x', x(item) + (x.bandwidth() / 2))
                    .attr('y', y(data[keys[i]][item]) - 2)
                    .style('fill', '#252525')
                    .style('text-anchor', 'middle')
                    .style('cursor', 'pointer')
                    .style('font-size', '12px')
                    .text(data[keys[i]][item])
                    .on('click', function() {
                        clicked_on_bar(data[keys[i] + '_trips'][item], index, keys[i], all_trips);
                    });
            });

            // add the x Axis
            svg.append("g")
                .attr('class', 'x axis')
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // add the y Axis
            svg.append("g")
                .attr('class', 'y axis')
                .call(d3.axisLeft(y).ticks(7));

            // Y title
            svg.append('text')
                .attr('x', 4)
                .attr('y', -10)
                .attr('dy', '.35em')
                .style('font-size', '12px')
                .style('text-anchor', 'end')
                .style('fill', '#252525')
                .text('Trips');

            // Chart title
            svg.append('text')
                .attr('x', width / 2)
                .attr('y', -20)
                .attr('dy', '.35em')
                .style('font-size', '14px')
                .style('text-anchor', 'middle')
                .style('fill', '#252525')
                .text(key_values[i] + ' Distribution');

        }
    }

    function add_histogram_container_2(container_id, keys, key_values, data, all_trips) {

        let body_height = 70 * 2;

        let histogram_body = d3.select('#' + container_id).append('div')
            .attr('id', 'histogram-performance')
            .style('width', '100%')
            .style('height', 'calc(100% - ' + body_height + 'px)')
            .style('border-top', '1px solid #BCCFD3');

        let histogram_height = ($('#histogram-performance').height() / keys.length);
        let histogram_width = $('#histogram-performance').width();

        for (let i = 0, len = keys.length; i < len; i++) {

            let histogram_container = histogram_body.append('div')
                .style('width', '100%')
                .style('height', histogram_height + 'px')
                .style('box-sizing', 'border-box');

            var margin = {top: 40, right: 20, bottom: 20, left: 40},
                width = histogram_width - margin.left - margin.right,
                height = histogram_height - margin.top - margin.bottom;

            var x = d3.scaleBand()
                    .range([0, width])
                    .padding(0.1);
            var y = d3.scaleLinear()
                    .range([height, 0]);

            let svg = histogram_container.append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            let values = [];
            let items = [];
            Object.keys(data[keys[i]]).forEach(function(item) {
                items.push(item);
                values.push(data[keys[i]][item]);
            });

            x.domain(items);
            y.domain([0, d3.max(values)]);

            Object.keys(data[keys[i]]).forEach(function(item, index) {
                svg.append("rect")
                    .attr('id', 'histogram-' + keys[i] + '-' + index)
                    .attr("class", "histogram-bar")
                    .attr("x", x(item))
                    .attr("width", x.bandwidth())
                    .attr('fill', '#fdb863')
                    .attr('stroke', '#BCCFD3')
                    .attr('cursor', 'pointer')
                    .attr('y', function(d) { return y(0); })
                    .attr('height', function(d) { return height - y(0); })
                    .on('click', function() {
                        // highlight trips
                        clicked_on_bar(data[keys[i] + '_trips'][item], index, keys[i], all_trips);
                    })
                    .transition()
                    .delay(function(d) { return Math.random() * 500; })
                    .duration(500)
                    .attr("y", y(data[keys[i]][item]))
                    .attr("height", height - y(data[keys[i]][item]));

                svg.append('text')
                    .attr("class", "histogram-text")
                    .attr('x', x(item) + (x.bandwidth() / 2))
                    .attr('y', y(data[keys[i]][item]) - 2)
                    .style('fill', '#252525')
                    .style('text-anchor', 'middle')
                    .style('cursor', 'pointer')
                    .style('font-size', '12px')
                    .text(data[keys[i]][item])
                    .on('click', function() {
                        clicked_on_bar(data[keys[i] + '_trips'][item], index, keys[i], all_trips);
                    });
            });

            // add the x Axis
            svg.append("g")
                .attr('class', 'x axis')
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // add the y Axis
            svg.append("g")
                .attr('class', 'y axis')
                .call(d3.axisLeft(y).ticks(7));

            // Y title
            svg.append('text')
                .attr('x', 4)
                .attr('y', -10)
                .attr('dy', '.35em')
                .style('font-size', '12px')
                .style('text-anchor', 'end')
                .style('fill', '#252525')
                .text('Trips');

            // Chart title
            svg.append('text')
                .attr('x', width / 2)
                .attr('y', -20)
                .attr('dy', '.35em')
                .style('font-size', '14px')
                .style('text-anchor', 'middle')
                .style('fill', '#252525')
                .text(key_values[i] + ' Distribution');

        }
    }

    function preprocess(trips, keys) {

        // compute accuracy and perplexity
        if (keys.length == 2) {

            let value_category = ['0 - 10','20 - 30','30 - 40','30 - 40','40 - 50','50 - 60','60 - 70','70 - 80', '80 - 90', '90 - 100'];

            let category_data = {
                accuracy: {},
                perplexity: {},
                accuracy_trips: {},
                perplexity_trips: {}
            }

            for (let i = 0, len = value_category.length; i < len; i++) {
                category_data.accuracy[value_category[i]] = 0;
                category_data.perplexity[value_category[i]] = 0;
                category_data.accuracy_trips[value_category[i]] = [];
                category_data.perplexity_trips[value_category[i]] = [];
            }

            for (let i = 0, len = trips.length; i < len; i++) {
                category_data.accuracy[trips[i].accuracy] += 1;
                category_data.perplexity[trips[i].perplexity] += 1;
                category_data.accuracy_trips[trips[i].accuracy].push(trips[i]);
                category_data.perplexity_trips[trips[i].perplexity].push(trips[i]);
            }

            return category_data;

        } else {

            let category_data = {}
            for (let i = 0, len = trips.length; i < len; i++) {
                let trip = trips[i];
                for (let j = 0, j_len = keys.length; j < j_len; j++) {
                    let key = keys[j]

                    if (!(key in category_data)) {
                        category_data[key] = {};
                        category_data[key + '_trips'] = {};
                    }

                    if (!(trip[key] in category_data[key])) {

                        category_data[key][trip[key]] = 1;
                        category_data[key + '_trips'][trip[key]] = [];
                        category_data[key + '_trips'][trip[key]].push(trips[i]);
                        //category_data[key][trip[key]]['accuracy'].push(trip['performances']['accuracy']);
                        //category_data[key][trip[key]]['perplexity'].push(trip['performances']['perplexity']);
                    } else {
                        category_data[key][trip[key]] += 1;
                        category_data[key + '_trips'][trip[key]].push(trips[i]);
                        //ategory_data[key][trip[key]]['accuracy'].push(trip['performances']['accuracy']);
                        //category_data[key][trip[key]]['perplexity'].push(trip['performances']['perplexity']);
                    }
                }
            }
            return category_data;
        }

    }

    function clicked_on_bar(filtered_trips, index, key, all_trips) {

        if (d3.select('#histogram-' + key + '-' + index).classed('active')) {

            d3.selectAll('.histogram-bar').style('stroke', '#BCCFD3');
            d3.selectAll('.histogram-bar').classed('active', false);
            d3.select('#histogram-' + key + '-' + index).classed('active', false);

            map_show_filtered_trips(all_trips);
            vis_model_cases(all_trips, 'model-cases-body');
        } else {
            d3.selectAll('.histogram-bar').style('stroke', '#BCCFD3');
            d3.selectAll('.histogram-bar').classed('active', false);
            d3.select('#histogram-' + key + '-' + index).style('stroke', '#252525');
            d3.select('#histogram-' + key + '-' + index).classed('active', true);

            map_show_filtered_trips(filtered_trips);
            vis_model_cases(filtered_trips, 'model-cases-body');
        }
    }
}

// TODO: need to add d3 here
export function vis_model_cases(trips, container_id)
{
    // Need to remove thumbnails and markers
    d3.selectAll('.thumbnail-container').classed('active', false);
    d3.selectAll('.thumbnail-viewer').remove();
    d3.selectAll('.thumbnail-action').remove();
    if (vis_marker) { vis_marker.remove(); }

    // Summarize all cases
    let cases = preprocess(trips);

    $('.trip-cases').remove();

    d3.select("#" + container_id).append("div")
        .attr("class", "trip-cases")
        .style("width", '100%')
        .style("height", '100%');

    let width = $('.trip-cases').width();
    let height = $('.trip-cases').height();

    let table = d3.select('.trip-cases')
        .append('table')
        .attr('width', '100%')
        .attr('height', '100%');

    let table_colors = ['#252525', '#e41a1c', '#377eb8', '#4daf4a', '#252525'];
    let table_headers = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm', 'count'];

    let table_header_row = table.append('tr');
    for (let i = 0; i < table_headers.length; ++i) {
        table_header_row.append('th')
            .style('color', table_colors[i])
            .html(table_headers[i]);
    }

    Object.keys(cases).forEach(function(item, index) {

        if (item !== '0000') {
            let row = table.append('tr')
                .attr('class', 'row-cases')
                .style('cursor', 'pointer')
                .style('text-align', 'center');

            let boolean_expression = item.split('');

            for (let i = 0; i < boolean_expression.length; ++i) {
                row.append('td')
                    .style('color', (boolean_expression[i] === '1') ? table_colors[i] : '#C9D2D3')
                    .style('font-size', '24px')
                    .style('text-align', 'center')
                    .append('div')
                    .style('height', '20px')
                    .style('width', '20px')
                    .style('margin', 'auto')
                    .style('border', '1px solid #C9D2D3')
                    .style('border-radius', '50%')
                    .style('box-shadow', (boolean_expression[i] === '1') ? 'none' : 'inset 0px 0px 5px #737373')
                    .style('background-color', (boolean_expression[i] === '1') ? table_colors[i] : '#C9D2D3');
            }

            // Show count
            row.append('td')
                .html(cases[item]);

            row.on('click', function() {
                d3.selectAll('.thumbnail-container').classed('active', false);
                d3.selectAll('.thumbnail-viewer').remove();
                d3.selectAll('.thumbnail-action').remove();
                // For performance issues
                if (row.classed('active')) {
                    return;
                } else {
                    d3.selectAll('.row-cases').classed('active', false);
                    row.classed('active', true);
                    // Bg
                    d3.selectAll('.row-cases').style('background-color', 'transparent');
                    row.style('background-color', '#bababa');
                    // Draw new gallery
                    let coords = get_all_points(trips, item)
                    map_draw_all_points(coords);
                    vis_representative_images(trips, item, 'streetview-body');
                }
                //vis_representative_images(trips, item, 'streetview-body');

            });

            // Set first default representative images as default
            if (index === 0) {
                d3.selectAll('.row-cases').style('background-color', 'transparent');
                row.style('background-color', '#bababa');
                // Set style without highlight
                row.classed('active', true);
                // Show representative images
                let coords = get_all_points(trips, item)
                map_draw_all_points(coords);
                vis_representative_images(trips, item, 'streetview-body');
                //vis_representative_images(trips, item, 'streetview-body');
            }
        }
    });

    function preprocess(data) {
        let cases = {};
        for (let i = 0; i < data.length; ++i) {
            Object.keys(data[i].cases).forEach(function (key) {
                if (key in cases) {
                    cases[key] += data[i].cases[key].length;
                } else {
                    cases[key] = data[i].cases[key].length;
                }
            });
        }
        return cases;
    }

    function get_all_points(trips, expression) {
        let coords = [];
        if (expression  && expression !== '0000') {
            let actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];
            for (let i = 0; i < trips.length; ++i) {

                let trip = trips[i];
                let actual = trips[i].actual.no_slight;
                if (trip.cases[expression]) {
                    let indexes = trip.cases[expression];
                    for (let j = 0; j < indexes.length; ++j) {
                        coords.push({
                            action: (actual[indexes[j]] != -1) ? actions[actual[indexes[j]]] : 'not_sure',
                            coordinates: trip.locations.coordinates[Math.floor(indexes[j]/3)]
                        });
                    }
                }
            }
        }
        return coords;
    }

}

export function vis_representative_images(trips, expression, container_id) {
    //console.log(expression);
    $('#' + container_id).empty();

    let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
    let model_colors = ['#e41a1c', '#377eb8', '#4daf4a'];
    let car_action = ['▲', '⬣', '◀','▶'];
    let actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];

    let prev_image_data = undefined;
    let prev_trip_id = undefined;

    let all_images = [];
    //let count = 0;
    if (expression) {
        for (let i = 0; i < trips.length; ++i) {
            let trip = trips[i];
            let prev_action = undefined;
            if (trip.cases[expression]) {
                let indexes = trip.cases[expression];
                // TODO: hack this
                if (indexes.length > 0) {
                    for  (let j = 0, j_len = indexes.length; j < j_len; j++ ) {

                        let action = trip.actual.no_slight[indexes[j]];
                        let tcnn1 = trip.predict[models[0]][indexes[j]];
                        let cnn_lstm = trip.predict[models[1]][indexes[j]];
                        let fcn_lstm = trip.predict[models[2]][indexes[j]];

                        let actual_action = car_action[action];
                        let tcnn1_action = car_action[tcnn1.indexOf(d3.max(tcnn1))];
                        let cnn_lstm_action = car_action[cnn_lstm.indexOf(d3.max(cnn_lstm))];
                        let fcn_lstm_action = car_action[fcn_lstm.indexOf(d3.max(fcn_lstm))];

                        let image = {
                            trip_id: trip.trip_id,
                            index: indexes[j],
                            actual: actual_action,
                            tcnn1: tcnn1_action,
                            cnn_lstm: cnn_lstm_action,
                            fcn_lstm: fcn_lstm_action,
                            location: trip.locations.coordinates[Math.floor(indexes[j] / 3)],
                            path: '/frames/' + trip.trip_id + '/' + indexes[j] + '.png'
                        }

                        if (trip.actual.no_slight[indexes[j]] !== prev_action) {
                            all_images.unshift(image);
                            prev_action = trip.actual.no_slight[indexes[j]];
                        } else {
                            all_images.push(image);
                        }
                    }
                }
            }
        }
    }

    // Display images
    for (let i = 0, len = (all_images.length > 500) ? 1000 : all_images.length; i < len; i++) {
        let image = all_images[i];
        if (image) {
            let action_summary = image.actual + '&nbsp;&nbsp;<font color="#e41a1c">' + image.tcnn1 + '</font>&nbsp;&nbsp;<font color="#377eb8">' +  image.cnn_lstm + '</font>&nbsp;&nbsp;<font color="#4daf4a">' + image.fcn_lstm + '</font>';
            // Adding new div
            let image_path = image.path;
            let image_container = d3.select('#' + container_id).append('div')
                .attr('id', 'image-container-' + image.trip_id + '-' + image.index)
                .attr('class', 'thumbnail-container')
                .style('position', 'relative')
                .style('width', '147px')
                .style('height', '100px')
                .style('border', '1px solid #737373')
                .style('cursor', 'pointer')
                .style('float', 'left')
                .on('click', function () {

                    if (d3.select(this).classed('active')) {
                        d3.selectAll('.thumbnail-container').classed('active', false);
                        d3.selectAll('.thumbnail-viewer').remove();
                        d3.selectAll('.thumbnail-action').remove();
                        if (vis_marker) { vis_marker.remove(); }
                        d3.select(this).classed('active', false);
                    } else {
                        d3.selectAll('.thumbnail-container').classed('active', false);
                        d3.selectAll('.thumbnail-viewer').remove();
                        d3.selectAll('.thumbnail-action').remove();
                        let thumbnail_viewer = d3.select('#map').append('div')
                            .attr('class', 'thumbnail-viewer')
                            .style('width', '350px')
                            .style('height', '250px')
                            .style('position', 'absolute')
                            .style('z-index', '9999')
                            .style('top', '90px')
                            .style('left', '10px');
                        let thumbnail_action = d3.select('#map').append('div')
                        .attr('class', 'thumbnail-action')
                        .style('width', '350px')
                        .style('height', '20px')
                        .style('line-height', '20px')
                        .style('position', 'absolute')
                        .style('background', 'rgba(255,255,255,1)')
                        .style('text-align', 'center')
                        .style('font-size', '16px')
                        .style('z-index', '9999')
                        .style('top', '345px')
                        .style('left', '10px')
                        .html(action_summary);

                        thumbnail_viewer.append('img')
                            .attr('alt', '')
                            .attr('src', image_path)
                            .style('width', '100%')
                            .style('height', '100%')
                            .style('background', '#737373')
                            .style('border-radius', '5px')
                            .style('border', '1px solid #737373')
                            .style('opacity', 0)
                            .transition()
                            .duration(1000)
                            .style('opacity', 1);

                        // Show location
                        if (vis_marker) { vis_marker.remove(); }
                        vis_marker = new mapboxgl.Marker()
                            .setLngLat(image.location)
                            .addTo(map_main);

                        d3.select(this).classed('active', true);
                    }
                });

            image_container.append('img')
                .attr('id', 'image-' + image.trip_id + '-' + image.index)
                .attr('class', 'case-images')
                .attr('alt', '')
                .attr('src', image_path)
                .style('width', '100%')
                .style('height', '100%');

            image_container.append('div')
                .style('position', 'absolute')
                .style('width', '100%')
                .style('height', '16px')
                .style('line-height', '16px')
                .style('font-size', '14px')
                .style('bottom', '0px')
                .style('background', 'rgba(255,255,255,0.9)')
                .style('left', '0px')
                .style('text-align', 'center')
                .html(action_summary);
        }
    }

    return;
}

export function  vis_streetview_cases(trips, expression, container_id) {

    $('#' + container_id).empty();

    if (expression !== '0000') {

        let coordinates = [];

        for (let i = 0; i < trips.length; ++i) {
            let trip = trips[i];

            if (trip.cases[expression]) {
                let indexes = trip.cases[expression];
                for (let j = 0; j < indexes.length; ++j) {

                    coordinates.push(trip.locations.coordinates[Math.floor(indexes[j]/3)]);


                    d3.select('#' + container_id).append('img')
                        .attr('class', 'case-images')
                        .attr('alt', '')
                        .attr('src', '/frames/' + trip.trip_id + '/' + indexes[j] + '.png')
                        .style('width', '140px')
                        .style('height', '90px')
                        .style('cursor', 'pointer')
                        .style('border', '1px solid #C9D2D3')
                        .style('float', 'left')
                        .on('click', function() {

                            d3.selectAll('.case-images').style('opacity', 0.2);
                            d3.selectAll('.case-images')
                                .style('width', '140px')
                                .style('height', '90px');

                            $("#streetview-drawer-content").animate({ "margin-right": -500 }, "fast");

                            if (d3.select(this).classed('active')) {
                                map_remove_layer('point-layer');
                                d3.selectAll('.case-images').style('opacity', 1);
                                d3.selectAll('.case-images')
                                    .style('width', '140')
                                    .style('height', '90px');
                                d3.select(this).classed('active', false);

                                $("#streetview-drawer-content").animate({ "margin-right": -500 }, "fast");

                            } else {
                                let coord = trip.locations.coordinates[Math.floor(indexes[j]/3)];
                                map_draw_point(coord,trip.trip_id+'-'+indexes[j]);
                                d3.selectAll('.case-images').classed('active', false);
                                d3.select(this).style('opacity', 1);
                                d3.select(this)
                                    .style('width', '140px')
                                    .style('height', '90px');
                                d3.select(this).classed('active', true);

                                //vis_show_streetview(coord, '/frames/' + trip.trip_id + '/' + indexes[j] + '.png');
                            }
                        });
                }
            }
        }

        map_draw_all_points(coordinates);
    }
}

export function vis_show_streetview(coord, image_source) {

    $('#streetview-drawer-pano').empty();
    $('#streetview-drawer-image').empty();

    let googleServices = new google.maps.StreetViewService();
    let panorama = new google.maps.StreetViewPanorama(
        document.getElementById('streetview-drawer-pano'), {
            position: {lat: coord[1], lng: coord[0]},
            pov: {
                heading:  34,
                pitch: 5
            }
    });

    let options = {
        scrollwheel: true,
        disableDefaultUI: false,
        clickToGo: true
    }

    google.maps.event.trigger(panorama, 'resize');
    panorama.setOptions(options);

    d3.select('#streetview-drawer-image').append('img')
        .attr('alt', '')
        .attr('src', image_source)
        .style('width', '100%')
        .style('height', '100%');


    $("#streetview-drawer-content").animate({ "margin-right": 0 }, "fast");
    return;
}

export function vis_area_study(trips, container_id) {

    console.log(trips);

    $('#' + container_id).empty();

    // compute segment percentages
    let processed_data = preprocess(trips);

    let data = processed_data[0];
    let keys = processed_data[1];

    // add y axis
    let y_container = d3.select('#' + container_id).append('div')
        .style('width', '40px')
        .style('height', '100%')
        .style('border', '1px solid #C9D2D3')
        .style('font-size', '12px')
        .style('float', 'left')
        .html('Legend');

    // add trip_container
    let trip_container = d3.select('#' + container_id).append('div')
        .style('width', 'calc(100% - 50px)')
        .style('height', '100%')
        .style('border', '1px solid #C9D2D3')
        .style('float', 'left')
        .style('overflow-x', 'auto')
        .style('overflow-y', 'auto')
        .style('white-space', 'nowrap');


    for (let i = 0; i < data.length; ++i) {

        let container = trip_container.append('div')
            .attr('id', 'area-' + data[i].trip_id)
            .style('width', '150px')
            .style('height', '100%')
            .style('border', '1px solid #C9D2D3')
            .style('display', 'inline-block');

        draw_chart(container, data[i], keys);
    }

    function draw_chart(container, data, keys) {

        // Draw 3 line
        let margin = {top: 20, right: 0, bottom: 10, left: 10}
        let width = 150 - margin.left - margin.right;
        let height = $('#tripview-body').height() - margin.top - margin.bottom;

        var x = d3.scaleLinear().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);
        let value_scale = d3.scaleLinear().range([0, 100]).domain([0, 1]);

        var brushFn = d3.brushY()
            .extent([[-16, 0], [width, height]]);

        var line = d3.line()
            .x(function(d) { return x(d.value); })
            .y(function(d) { return y(d.index); })
            .curve(d3.curveBasis);

        let g = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
                .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");;

        y.domain([0, 108]);
        x.domain([0, 100]);

        g.append('g').call(brushFn);

        g.append("g")
            .attr("class", "axis axis--x")
            .call(d3.axisTop(x).tickFormat(d3.format('.0f')));

        Object.keys(data.entropy).forEach(function (model) {
            let line_data = [];
            for (let i = 0; i < data.entropy[model].length; ++i) {
                line_data.push({
                    index: i,
                    value: value_scale(data.entropy[model][i])
                });
            }
            // Draw line
            g.append("path")
                .datum(line_data)
                .attr("class", "line-" + model)
                .attr("d", line);
        });
    }

    function preprocess(data) {

        let default_dimension = 1280 * 720;
        let keys = [];

        for (let i = 0; i < data.length; ++i) {

            let segments = data[i].segments;

            segments.forEach(function (segment) {
                let width = segment.box2d.x2 - segment.box2d.x1;
                let height = segment.box2d.y2 - segment.box2d.y1;
                let category = segment.category;
                let dimension = width * height;
                let percentage = (dimension / default_dimension) * 100;

                if (!('segments_percentage' in data[i])) {
                    data[i]['segments_percentage'] = {};
                }

                if (!( category in data[i]['segments_percentage'])) {
                    data[i]['segments_percentage'][category] = percentage;
                } else {
                    data[i]['segments_percentage'][category] += percentage;
                }

                if (keys.indexOf(category) < 0) {
                    keys.push(category);
                }
            })
        }

        return [data, keys];
    }
}

export function vis_trip_list(trips)
{
    //console.log(trips);

    $('#trip-list').remove();
    // create trip list
    let div = d3.select('body').append('div')
        .attr('id', 'trip-list')
        .style('width', '400px')
        .style('height', 'calc(100% - 30px)')
        .style('position', 'absolute')
        .style('top', '30px')
        .style('left', '0px')
        .style('z-index', '5000')
        .style('background-color', '#f0f0f0')
        .style('box-sizing', 'border-box');

    let trip_header = div.append('div')
        .style('width', '100%')
        .style('height', '20px')
        .style('font-size', '14px')
        .style('line-height', '20px')
        .html('TRIP LIST: ');

    let trip_container = div.append('div')
        .style('width', '100%')
        .style('height', 'calc(100% - 20px)')
        .style('font-size', '12px')
        .style('overflow-x', 'hidden')
        .style('overflow-y', 'auto');

    let performances = ['accuracy', 'perplexity'];
    let performance_labels = ['Accuracy', 'Perplexity'];
    let performance_colors = ['#6baed6','#fb6a4a'];

    for (let i = performances.length - 1; i >=0; --i) {

        let performance_div = trip_header.append('div')
            .style('width', 'auto')
            .style('height', '20px')
            .style('float', 'right');

        let performance_icon = performance_div.append('i')
            .attr('class', 'fas fa-square')
            .style('color', performance_colors[i]);

        let performance_text = performance_div.append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;&nbsp;' + performance_labels[i] + '&nbsp;&nbsp;');
    }

    // 0 is the first one!
    for (let i = 0; i < trips.length; ++i) {

        let trip = trips[i];

        let trip_info = trip_container.append('div')
            .attr('id', 'trip-info-' + i)
            .attr('class', 'trip-info')
            .style('width', '100%')
            .style('height', '20px')
            .style('padding-left', '5px')
            .style('padding-right', '5px')
            .style('background-color', (i == 0) ? '#C9D2D3' : '#f0f0f0')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px')
            .style('line-height', '20px')
            .style('cursor', 'pointer')
            .on('click', function() {
                d3.selectAll('.trip-checkbox').classed('fas fa-check-square', false);
                d3.selectAll('.trip-checkbox').classed('fas fa-square', true);
                d3.select('#trip-checkbox-' + i).attr('class', 'fas fa-check-square trip-checkbox');
                d3.selectAll('.trip-info').style('background-color', '#f0f0f0')
                d3.select('#trip-info-' + i).style('background-color', '#C9D2D3');

                vis_trips_study(trip, i);
                vis_trip_viewer(trip, i);
                map_draw_trip_in_radius(trips, i);
                map_draw_selected_trips(trip);
            });

        let trip_selector = trip_info.append('div')
            .style('width', 'calc(100% - 180px)')
            .style('height', '20px')
            .style('font-size', '14px')
            .style('float', 'left')
            .style('line-height', '20px')
            .style('background', '#fff');

        let trip_icon = trip_selector.append('i')
            .attr('id','trip-checkbox-' + i)
            .attr('class', (i === 0) ? 'fas fa-check-square trip-checkbox' : 'fas fa-square trip-checkbox')
            .style('cursor', 'pointer')
            .style('color', '#000');

        let trip_text = trip_selector.append('label')
        .style('cursor', 'pointer')
        .html('&nbsp;Trip ID: ' + trip.trip_id);

        let value_scale = d3.scaleLinear()
            .domain([0, 1])
            .range([0, 100]);

        let width_scale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 90]);

        for (let i = 0; i < performances.length; ++i) {

            let value = value_scale(trip.performances[performances[i]]);

            let trip_performance = trip_info.append('div')
                .style('width', '90px')
                .style('height', '20px')
                .style('float', 'left')
                .style('font-size', '12px')
                .style('line-height', '20px')
                .style('background-color', '#fff');

            let svg = trip_performance.append('svg')
                .attr('width', '90')
                .attr('height', '20');

            svg.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('height', '20')
                .attr('fill', '#d9d9d9')
                .attr('stroke', '#fff')
                .attr('stroke-width', .5)
                .attr('width', width_scale(100));

            svg.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('height', '20')
                .attr('fill', performance_colors[i])
                .attr('stroke', '#fff')
                .attr('stroke-width', .5)
                .transition()
                .duration(500)
                .attr('width', width_scale(value));

            svg.append('text')
                .attr('x', 2)
                .attr('y', 10)
                .attr('font-size', '12px')
                .attr("text-anchor", "start")
                .attr('dy', '0.32em')
                .attr('fill', '#252525')
                .text(value.toFixed(2) + '%');

        }
    }

    vis_trips_study(trips[0], 0);
    vis_trip_viewer(trips[0], 0);
    map_draw_trip_in_radius(trips, 0);
    map_draw_selected_trips(trips[0]);
}

export function vis_trip_viewer(trip, index) {

    d3.select('#trip-slider-' + index).property("value", 0);

    if (vis_marker) { vis_marker.remove(); }
    vis_marker = new mapboxgl.Marker({
        draggable: true
    })
    .setLngLat(trip.locations.coordinates[0])
    .addTo(map_main);

    d3.selectAll('.trip-viewer').remove();

    let viewer = $('<div/>', {
        class: 'trip-viewer'
    }).css({
        width: '400px',
        height: '250px',
        'box-sizing': 'border-box',
        'border': '1px solid #f0f0f0',
        'position': 'relative'
    });

    let img  = $('<img/>', {
        id: 'trip-viwer-image',
        alt: '',
        src: '/frames/' + trip.trip_id + '/' + 0 + '.png'
    }).css({
        width: '100%',
        height: '100%'
    });

    viewer.append(img);
    viewer.insertAfter('#trip-info-' + index);
    add_trip_action(trip, index);

    let width = $('#tripview-body').width();
    let margin = {top: 20, right: 10, bottom: 20, left: 70}
    let svg_width = width - margin.left - margin.right;

    let x = d3.scaleLinear()
        .domain([0, 108])
        .range([0, svg_width]);

    d3.select('#trip-slider-' + index).on("input", function() {

        d3.select('#trip-viwer-image')
            .attr('src', '/frames/' + trip.trip_id + '/' + this.value + '.png');

        d3.selectAll('.trip-video-line')
            .attr("x1", x(this.value))
            .attr("y1", -15)
            .attr("x2", x(this.value))
            .attr("y2", 300);

        let slider_index = this.value;

        let keys = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];
        for (let i = 0, len = keys.length; i < len; i++) {
            d3.select('#trip-text-' + keys[i])
                .attr('x', (slider_index > 70) ? x(slider_index) - 2 : x(slider_index) + 2)
                .attr("text-anchor", (slider_index > 70) ? 'end' : 'start')
                .text(function() {
                    if (keys[i] === 'actual') {
                        return 'Speed: ' + trip.speeds[Math.floor(slider_index/3)].toFixed(2) +  ' mph';
                    } else {
                        return 'Perplexity: ' + trip.entropy[keys[i]][slider_index].toFixed(2);
                    }
                });
        }

        if (vis_marker) {
            vis_marker.setLngLat(trip.locations.coordinates[Math.floor(this.value / 3)]);
        }

        add_trip_action(trip, this.value, index);
    });

    function add_trip_action(trip, index, row_index) {

        $('#trip-action-summary').remove();

        let car_action = ['▲', '⬣', '◀','▶'];
        let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];

        let action = trip.actual.no_slight[index];
        let tcnn1 = trip.predict[models[0]][index];
        let cnn_lstm = trip.predict[models[1]][index];
        let fcn_lstm = trip.predict[models[2]][index];

        let tcnn1_value = trip.entropy[models[0]][index].toFixed(2);
        let cnn_lstm_value = trip.entropy[models[1]][index].toFixed(2);
        let fcn_lstm_value = trip.entropy[models[2]][index].toFixed(2);
        let speed = trip.speeds[Math.floor(index/3)].toFixed(2);

        let actual_action = car_action[action];
        let tcnn1_action = car_action[tcnn1.indexOf(d3.max(tcnn1))];
        let cnn_lstm_action = car_action[cnn_lstm.indexOf(d3.max(cnn_lstm))];
        let fcn_lstm_action = car_action[fcn_lstm.indexOf(d3.max(fcn_lstm))];

        let action_summary = '&nbsp;Speed:&nbsp;' + speed + '&nbsp;' + actual_action + '&nbsp;<font color="#e41a1c">' + tcnn1_action + '&nbsp' + tcnn1_value + '&nbsp</font>&nbsp;&nbsp;<font color="#377eb8">' +  cnn_lstm_action + '&nbsp' + cnn_lstm_value + '&nbsp;</font>&nbsp;&nbsp;<font color="#4daf4a">' + fcn_lstm_action + '&nbsp' + fcn_lstm_value + '&nbsp;</font>';

        // Create table
        let action_div = $('<div/>', {
            id: 'trip-action-summary'
        }).css({
            width: '400px',
            height: '70px',
            'font-size': '14px',
            'box-sizing': 'border-box',
            'background': 'rgba(255,255,255,0.9)',
            'text-align': 'center'
        });

        let action_table = $('<table/>', {
            width: '400px',
            height: '100%',
            'font-size': '12px'
        });

        let action_header = $('<tr/>');
        let data_row = $('<tr/>');
        let headers = ['Actual Action/Speed', 'TCNN1 Prediction', 'CNN_LSTM Prediction', 'FCN_LSTM Prediction'];
        let header_values = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];
        let data_attr = [actual_action + ' ' + speed + ' mph', '<font color="#e41a1c">' + tcnn1_action + '&nbsp' + d3.max(tcnn1).toFixed(2) + '</font>', '<font color="#377eb8">' + cnn_lstm_action + '&nbsp' + d3.max(cnn_lstm).toFixed(2) + '</font.', '<font color="#4daf4a">' + fcn_lstm_action + '&nbsp' + d3.max(fcn_lstm).toFixed(2) + '</font.'];

        for (let i = 0, len = headers.length; i < len; i++) {

            let action_head = $('<th/>').css({
                width: '100px',
                border: '1px solid #C9D2D3'
            }).html(headers[i]);
            let action_value = $('<td/>').css({
                width: '100px',
                border: '1px solid #C9D2D3',
                cursor: 'pointer'
            }).html(data_attr[i]);
            action_header.append(action_head);
            data_row.append(action_value);
            action_value.on('mouseover', function() {

                // Show all prediction
                let prediction_div = $('<div/>', {
                    id: 'prediction-summary'
                }).css({
                    width: 'auto',
                    height: 'auto',
                    'font-size': '14px',
                    'box-sizing': 'border-box',
                    'text-align': 'center',
                    'background': 'rgba(255, 255, 255, 0.8)',
                    'position': 'absolute',
                    'color': '#252525',
                    'top': '80px',
                    'left': '5px',
                    'z-index': '9999',
                });

                let prediction_table = $('<table/>').css({
                    width: '300px',
                    height: '200px',
                });
                // headers
                let prediction_headers = $('<tr/>');
                let model_colors = ['#000', '#e41a1c', '#377eb8', '#4daf4a'];
                let ths = ['Action', 'TCNN1', 'CNN-LSTM', 'FCN-LSTM'];
                for (let i = 0, len = ths.length; i < len; i++) {
                    prediction_headers.append($('<th/>').css({
                        'color': model_colors[i],
                        border: '1px solid #C9D2D3'
                    }).html(ths[i]));
                }

                prediction_table.append(prediction_headers);
                let actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];
                let action_symbols = ['▲', '⬣', '◀', '▶'];
                for (let j = 0, j_len = actions.length; j < j_len; j++) {
                    let action_row = $('<tr/>');
                    let action_td = $('<td/>').css({
                        border: '1px solid #C9D2D3'
                    }).html(action_symbols[j]);
                    action_row.append(action_td);
                    for (let k = 1, k_len = 4; k < k_len; k++) {
                        let max_index = trip.predict[header_values[k]][index].indexOf(d3.max(trip.predict[header_values[k]][index]));
                        let action_val = trip.predict[header_values[k]][index][j].toFixed(2);
                        let action_sub_td = $('<td/>').css({
                            background: (j === (max_index)) ? '#fee391': 'transparent',
                            border: '1px solid #C9D2D3',
                        }).html(action_val);
                        action_row.append(action_sub_td);
                    }
                    prediction_table.append(action_row);
                }

                prediction_div.append(prediction_table);
                $('#map').append(prediction_div);
            });
            action_value.on('mouseout', function () {
                $('#prediction-summary').remove();
            });
        }

        action_table.append(action_header);
        action_table.append(data_row);
        action_div.append(action_table);
        action_div.insertAfter('.trip-viewer');
    }


    vis_marker.on('drag', function() {
        let coord = vis_marker.getLngLat();
        let line = turf.lineString(trip.locations.coordinates);
        let point = turf.point([coord.lng, coord.lat]);
        let snapped = turf.nearestPointOnLine(line, point, { units: 'miles' });
        vis_marker.setLngLat(snapped.geometry.coordinates);

        let snapped_index = snapped.properties.index * 3;
        //console.log(snapped_index);
        $('#trip-slider-' + index).val(snapped_index);

        d3.select('#trip-viwer-image')
            .attr('src', '/frames/' + trip.trip_id + '/' + snapped_index + '.png');

        d3.selectAll('.trip-video-line')
            .attr("x1", x(snapped_index))
            .attr("y1", -15)
            .attr("x2", x(snapped_index))
            .attr("y2", 300);

        let keys = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];
        for (let i = 0, len = keys.length; i < len; i++) {
            d3.select('#trip-text-' + keys[i])
                .attr('x', (snapped_index > 70) ? x(snapped_index) - 2 : x(snapped_index) + 2)
                .attr("text-anchor", (snapped_index > 70) ? 'end' : 'start')
                .text(function() {
                    if (keys[i] === 'actual') {
                        return 'Speed: ' + trip.speeds[Math.floor(snapped_index/3)].toFixed(2) +  ' mph';
                    } else {
                        return 'Perplexity: ' + trip.entropy[keys[i]][snapped_index].toFixed(2);
                    }
                });
        }

        add_trip_action(trip, snapped_index, index);
    });

    return;
}

export function vis_trips_study(trip, index) {

    let container_height = 300; // 150
    let max_height = 320;
    // Move map and set senter
    d3.select('#map').style('height','calc(100% - ' + 250 + 'px)');
    d3.select('#tripview').style('max-height', 250 + 'px');
    $('#tripview-body').height('calc(' + 250 + 'px - 20px)');
    d3.select('#tripview').style('transition','max-height 0.25s ease-in');

    $('#tripview-body').empty();
    let trip_container = d3.select('#tripview-body').append('div')
        .style('width', '100%')
        .style('height', 230 + 'px')
        .style('box-sizing', 'border-box');

    vis_draw_action(trip, trip_container, index);
    return;
}

export function vis_draw_action(trip, div, index) {
    // Show nearest point on other trips

    let models = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];
    let model_colors = ['#252525', '#e41a1c', '#377eb8', '#4daf4a'];

    let actions = ['▲ Straight', '⬣ Slow/Stop', '<font size="3px">◀</font> Turn Left', '<font size="3px">▶</font> Turn Right'];

    $('#tripview-legends').empty();

    for (let i = 0; i < actions.length; ++i) {
        /*
        let legend_icon = d3.select('#tripview-legends').append('i')
            .attr('class', 'fas fa-square')
            .style('cursor', 'pointer')
            .style('color', model_colors[i]);*/
        /*
        let legend_text = d3.select('#tripview-legends').append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + models[i] + '&nbsp;&nbsp;');*/
        let legend_text = d3.select('#tripview-legends').append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + actions[i] + '&nbsp;');
    }

    let car_action = ['straight', 'slow_or_stop', 'turn_left', 'turn_right', 'turn_left_slight', 'turn_right_slight'];

    let width = $('#tripview-body').width();
    let height = 200;

    vis_create_trip_info(trip, div, index);
    let keys = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];

    let container = div.append('div')
        .style('width', '100%')
        .style('height', height + 'px');

    let margin = {top: 20, right: 10, bottom: 20, left: 70}
    let svg_width = width - margin.left - margin.right;
    let svg_height = height - margin.top - margin.bottom;

    let svg = container.append('svg')
        .attr('class', 'trip-svg-' + index)
        .attr('width', svg_width + margin.left + margin.right)
        .attr('height', svg_height + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let actual_action = trip.actual.no_slight;

    let x = d3.scaleLinear()
        .range([0, svg_width]);
    let y = d3.scaleBand()
        .range([0, svg_height])
        .paddingInner(0.2);

    let y1_scale = d3.scaleLinear();

    x.domain([0, actual_action.length])
    y.domain(keys);
    y1_scale.domain([0, 1]).range([y.bandwidth(), 0]);

    //console.log(trips[i]);

    let data = {
        actual: trip.actual.no_slight,
        tcnn1: trip.predict.tcnn1,
        cnn_lstm: trip.predict.cnn_lstm,
        fcn_lstm: trip.predict.fcn_lstm
    }

    svg.append("g")
        .attr("class", "axis")
        .style('font-size', '14px')
        .call(d3.axisLeft(y));

    svg.append('line')
        .attr('class', 'trip-video-line')
        .style("stroke", '#252525')
        .style("stroke-opacity", 0.8)
        .style("stroke-width", 1)
        .attr("x1", x(0))
        .attr("y1", -15)
        .attr("x2", x(0))
        .attr("y2", 300);

    for (let k = 0; k < keys.length; ++k) {

        let g = svg.append("g")
            .style('opacity', 1)
            .attr('transform', "translate(" + 0 + "," + y(keys[k]) + ")");

        g.append('text')
            .attr('id', 'trip-text-' + keys[k])
            .attr("x", x(0) + 2)
            .attr('y', -3)
            .attr("dy", "0.32em")
            .attr("fill", model_colors[k])
            .attr('font-size', '12px')
            .attr("text-anchor", "start")
            .text(function() {
                if (keys[k] === 'actual') {
                    return 'Speed: ' + trip.speeds[0].toFixed(2) +  ' mph';
                } else {
                    return 'Perplexity: ' + trip.entropy[keys[k]][0].toFixed(2);
                }
            });


        g.append('line')
            .style("stroke", model_colors[k])
            .style("stroke-width", 1.5)
            .style("stroke-dasharray", ("3, 3"))
            .attr("x1", x(0))
            .attr("y1", y.bandwidth() / 2)
            .attr("x2", x(data[keys[k]].length - 1))
            .attr("y2", y.bandwidth() / 2);

        let temp_action = undefined;
        let count = 0;
        let pos = 0;

        let predict_action = data[keys[k]];
        let entropy = undefined;
        if (keys[k] !== 'actual') entropy = trip.entropy[keys[k]]

        let entropy_data = [];

        // find median
        for (let j = 0; j < predict_action.length; ++j) {

            let action = (keys[k] === 'actual') ? car_action[predict_action[j]] : car_action[predict_action[j].indexOf(d3.max(predict_action[j]))];

            entropy_data.push({
                index: j,
                value: (entropy) ? entropy[j] : undefined
            });

            if (action !== temp_action) {

                // Draw last line
                if (j == 0) {
                    g.append('line')
                        .style("stroke", model_colors[k])
                        .style("stroke-width", 2)
                        .attr("x1", x(j))
                        .attr("y1", 4)
                        .attr("x2", x(j))
                        .attr("y2", y.bandwidth() - 4);
                } else {
                    if (count >= 3) {
                        g.append('line')
                            .style("stroke", model_colors[k])
                            .style("stroke-width", 2)
                            .attr("x1", x(j))
                            .attr("y1", 4)
                            .attr("x2", x(j))
                            .attr("y2", y.bandwidth() - 4);
                        // Draw symbol
                        let symbol_index = (j + pos) / 2;
                        draw_symbol(g, temp_action, x(symbol_index), y.bandwidth() / 2, model_colors[k]);
                    } else {
                        draw_symbol(g, temp_action, x(j), y.bandwidth() / 2, model_colors[k]);
                    }
                }

                temp_action = action;
                count = 0;
                pos = j;
            }

            if (j == actual_action.length - 1) {
                if (count >= 3) {
                    g.append('line')
                        .style("stroke", model_colors[k])
                        .style("stroke-width", 2)
                        .attr("x1", x(j))
                        .attr("y1", 4)
                        .attr("x2", x(j))
                        .attr("y2", y.bandwidth() - 4);
                    // Draw symbol
                    let symbol_index = (j + pos) / 2;
                    draw_symbol(g, temp_action, x(symbol_index), y.bandwidth() / 2, model_colors[k]);
                } else {
                    draw_symbol(g, temp_action, x(j), y.bandwidth() / 2, model_colors[k]);
                }
            }

            count += 1;
        }

        var area = d3.area()
            .x(function(d) { return x(d.index); })
            .y0(y1_scale(0))
            .y1(function(d) { return y1_scale(d.value); });

        if (keys[k] !== 'actual') {
            // Draw line
            g.append("path")
                .datum(entropy_data)
                .attr("class", "line-" + keys[k] + "-1")
                .attr("d", area);
        }
    }


    function draw_symbol(g, action, x, y, color) {

        let symbol = undefined;
        let rotate = 0;
        let size = 60;

        if (action === 'slow_or_stop') {
            symbol = symbolOctagonAlt;
            size = 100
            //color = '#fbb4ae';
        } else {
            symbol = d3.symbolTriangle;
            //color = '#ccebc5';
            if (action === 'turn_left') {
                rotate = 270;
                //color = '#b3cde3'
            }
            if (action === 'turn_right') {
                rotate = 90;
                //color = '#b3cde3'
            }
        }

        g.append('path')
            .attr('d', d3.symbol().size(size).type(symbol))
            .attr('fill', color)
            .attr('stroke', color)
            .attr('stroke-width', 1)
            .attr('transform', function(d) {
                return "translate(" + x + "," + y + ") rotate(" + rotate + ")";
            });

        return;
    }
}

export function vis_create_trip_info(trip, div, index)
{

    let others = ['time_of_day', 'scene', 'weather'];
    let other_labels = ['Time', 'Street Type', 'Weather'];

    for (let i = 0; i < others.length; ++i) {
        d3.select('#tripview-legends').append('label')
            .style('margin-right', '5px')
            .style('border-radius', '2px')
            .style('float', 'left')
            .style('background-color', '#C9D2D3')
            .style('color', '#252525')
            .html('&nbsp;' + other_labels[i] + ': ' + trip[others[i]] + "&nbsp;");
    }

    let trip_slider_container = div.append('div')
        .style('width', '100%')
        .style('height', '20px')
        .style('font-size', '14px')
        .style('line-height', '20px');

    let trip_slider = trip_slider_container.append('input')
        .attr('id', 'trip-slider-' + index)
        .attr('class', 'custom-slider')
        .attr('type', 'range')
        .attr('min', 0)
        .attr('max', '107')
        .attr('step', '1')
        .attr('val', 0)
        .style('float', 'left')
        .style('width', 'calc(100% - 81px)')
        .style('height', '1px')
        .style('margin-top', '19px')
        .style('margin-left', '63px')
        .style('margin-right', '18px')
        .style('background', '#252525');

    return;
}