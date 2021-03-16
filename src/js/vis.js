import {
    map_model_colors,
    map_filter_all_trips,
    map_draw_point,
    map_remove_layer,
    map_draw_all_points,
    map_show_filtered_trips,
    map_main,
    map_draw_trip_in_radius,
    map_draw_selected_trips,
    map_circle_polygon,
    map_selected_line
} from "./map";
import './plugin/d3-parsets';

import {
    sankey as d3Sankey,
    sankeyLinkHorizontal
} from 'd3-sankey';

import {
    util_compute_performance
} from './utils';

import {main_set_maplayer_index } from "..";
import {compare} from 'image-ssim';

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
    let performance_colors = ['#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d']
    let width = 0;
    let height = 0;
    let margin = {top: 20, right: 40, bottom: 10, left: 20};
    let selection = {
        parameter: 'action',
        performances: ['accuracy', 'precision', 'recall', 'f1', 'entropy']
    }

    // TODO: Need to have default one
    add_trip_number(selection_div, trips);
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

        let parameters_str = ['Time Of Day', 'Scene', 'Weather', 'Action'];
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

        let parameters_str = ['Time Of Day', 'Scene', 'Weather', 'Action'];
        let parameters_value = ['time_of_day', 'scene', 'weather', 'action'];

        let parameter_div = div.append('div')
            .style('width', '100%')
            .style('height', '20px')
            .style('line-height', '20px')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px')
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
                .style('color', '#7f0000');

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

        // Select action as default
        d3.select('#parameter-checkbox-' + parameters_value.indexOf('action'))
            .attr('class', 'fas fa-check-square');

        return;
    }

    // Add performance legends
    function add_performance_legend(div) {

        let performace_str = ['Accuracy', 'Precision', 'Recall', 'F1', 'Perplexity'];
        let performance_value = ['accuracy', 'precision', 'recall', 'f1', 'entropy'];

        let performance_div = div.append('div')
            .style('width', '100%')
            .style('height', '40px')
            .style('line-height', '40px')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px')
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

        let color_scale = d3.scaleOrdinal()
            .domain(['accuracy', 'precision', 'recall', 'f1', 'entropy'])
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
            .style('font-size', '14px')
            .attr("text-anchor", "middle")
            .attr('transform', function(d) {
                return 'translate(-13, -8) rotate(270)'
            });

        // Draw X axis
        svg.append("g")
            .attr("class", "axis")
            .style('font-size', '14px')
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
                        .style("stroke", '#C9D2D3')
                        .style("stroke-width", "0.5px")
                        .attr('fill-opacity', '0.8')
                        .style("stroke-opacity", 1);

                    g.append('rect')
                        .attr('x', 0)
                        .attr('y', y1_scale(filter.performances[k]))
                        .attr('height', y1_scale.bandwidth())
                        .transition()
                        .duration(500)
                        .attr('width', (value) ? x1_scale(value) : x1_scale(0))
                        .attr('fill', color_scale(filter.performances[k]))
                        .style("stroke", color_scale(filter.performances[k]))
                        .style("stroke-width", "0.5px")
                        .attr('fill-opacity', '0.8')
                        .style("stroke-opacity", 1);

                    g.append('text')
                        .attr("y", y1_scale(filter.performances[k]) + (y1_scale.bandwidth() / 2))
                        .transition()
                        .duration(500)
                        .attr("x", x1_scale(value) - 2)
                        .attr("dy", "0.32em")
                        .attr("fill", '#fff')
                        .attr('font-size', '12px')
                        .attr("text-anchor", "end")
                        .text( (value) ? value.toFixed(2) : 0);
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

/*
export function vis_draw_model_table(trips, container_id) {


    let trip_count = 0;
    let car_actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];
    let action_symbols = ['GO', 'SS', 'TL', 'TR'];

    // Create table data
    let preprocessed_data = preprocess(trips);
    let data = preprocessed_data[0];
    let filtered_data = preprocessed_data[1];

    if (vis_is_parallelsets_filter) {

        let summary = preprocessed_data[0];

        Object.keys(summary).forEach(function (model) {
            Object.keys(summary[model]).forEach(function (action) {

                let filter_total = summary[model][action];
                let total = $('#column-' + model + '-' + action).html();
                let html_str = "";

                if (total) {
                    if (total.indexOf('/') > -1) {
                        total = total.split('/')[2];
                        html_str = '<font color="#a50f15">' + filter_total + '</font>' + ' /' + total;
                        d3.select('#column-' + model + '-' + action)
                            .style('font-size', '12px')
                            .html(html_str);
                    } else {
                        html_str = '<font color="#a50f15">' + filter_total + '</font>' + ' /' + total;
                        d3.select('#column-' + model + '-' + action)
                            .style('font-size', '12px')
                            .html(html_str);
                    }
                }
            });
        });
        return;
    }

    // Clear current container
    $('#' + container_id).empty();
    // Start drawing table here
    let table = d3.select('#' + container_id)
        .append('table')
        .style('width', '100%')
        .style('height', '100%');

    let header_row = table.append('tr');
    header_row.append('th').html(trip_count + ' Trips');
    header_row.append('th').html('actual')
    header_row.append('th').html('tcnn1')
    header_row.append('th').html('cnn_lstm')
    header_row.append('th').html('fcn_lstm');

    for (let i = 0; i <  car_actions.length; ++i) {
        let body_row = table.append('tr')
            .attr('class', 'dataview-rows')
            .style('cursor', 'pointer');
        body_row.append('td').html(action_symbols[i]);
        Object.keys(data).forEach(function (model) {
            if (car_actions[i] in data[model]) {
                body_row.append('td')
                    .attr('id', 'column-' + model + '-' + car_actions[i])
                    .html(data[model][car_actions[i]]);
            } else {
                body_row.append('td')
                    .html(0);
            }
        });

        body_row.on('click', function() {

            d3.selectAll('.dataview-rows').style('opacity', 0.1);

            if (body_row.classed('active')) {

                //body_row.style('opacity', 1);
                d3.selectAll('.dataview-rows').style('opacity', 1);

                d3.selectAll('.performance-bar').style('opacity', 1);
                body_row.classed('active', false);
            } else {

                d3.selectAll('.dataview-rows').classed('active', false);
                body_row.style('opacity', 1);

                let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];

                d3.selectAll('.performance-bar').style('opacity', 0.2);

                models.forEach(function (model) {
                    d3.select('#' + model + '-' + car_actions[i]).style('opacity', 1);
                });
                body_row.classed('active', true);
            }

        });
    }

    function preprocess (data) {
        let filtered_trips = [];
        let result = {};
        for (var i = 0; i < data.length; ++i) {
            // Get prediction action
            if (data[i].actual && data[i].predict && Object.keys(data[i].predict).length === 3 && data[i].actual.no_slight) {
                if (!('actual' in result)) { result['actual'] = {}; }
                // Get actual label actions
                for (var j = 0; j < data[i].actual.no_slight.length; ++j) {
                    let action = data[i].actual.no_slight[j];
                    if (car_actions[action] in result['actual']) {
                        result['actual'][car_actions[action]] += 1;
                    } else {
                        result['actual'][car_actions[action]] = 1;
                    }
                }
                // Get other model actions
                Object.keys(data[i].predict).forEach(function (model) {
                    if (model in result) {
                        for (var j = 0; j < data[i].predict[model].length; ++j) {
                            let prediction = data[i].predict[model][j];
                            let action = prediction.indexOf(d3.max(prediction));
                            if (car_actions[action] in result[model]) {
                                result[model][car_actions[action]] += 1;
                            } else {
                                result[model][car_actions[action]] = 1;
                            }
                        }
                    } else {
                        result[model] = {};
                        for (var j = 0; j < data[i].predict[model].length; ++j) {
                            let prediction = data[i].predict[model][j];
                            let action = prediction.indexOf(d3.max(prediction));
                            if (car_actions[action] in result[model]) {
                                result[model][car_actions[action]] += 1;
                            } else {
                                result[model][car_actions[action]] = 1;
                            }
                        }
                    }
                });

                trip_count += 1;
                filtered_trips.push(data[i]);
            }
        }

        return [result, filtered_trips];
    }

    return filtered_data;
}*/

export function vis_parallelsets (trips, container_id) {

    // need to preprocess this
    let data = preprocess(trips);
    vis_selected_nodes = [];

    // 'accuracy', 'perplexity'

    // Select keys
    let provide_keys = ['time_of_day', 'scene', 'weather', 'accuracy', 'entropy'];
    let keys = ['time_of_day', 'scene', 'weather'];

    let color = d3.scaleOrdinal(d3.schemeCategory10).domain(['daytime', 'night', 'dawn/dusk']).unknown('#C9D2D3');

    /*
    let graph = get_graph(keys, data);
    //console.log(graph);

    let sankey = d3Sankey()
        .nodeSort(null)
        .linkSort(null)
        .nodeWidth(4)
        .nodePadding(20)
        .nodeSort(null)
        .extent([[0, 5], [width, height - 5]]);

    const {nodes, links} = sankey({
        nodes: graph.nodes.map(d => Object.assign({}, d)),
        links: graph.links.map(d => Object.assign({}, d))
    });*/

    //console.log(nodes);
    //console.log(links);

    // Remove current svg;
    d3.select('#' + container_id).empty();

    // Add dimension selector
    add_dimension_list(data, keys, container_id);
    update_chart(data, keys);

    function add_dimension_list( data, dimensions, container_id) {
        let dimension_div = d3.select('#' + container_id).append('div')
            .style('width', 'auto')
            .style('height', 'auto')
            .style('cursor', 'pointer')
            .style('position', 'absolute')
            .style('top', '-20px')
            .style('left', '0px')
            .style('background-color', '#C9D2D3')
            .style('box-sizing', 'border-box')
            .style('line-height', '14px')
            .style('font-size', '14px')
            .style('padding', '2px')
            .html('Dimensions')
            .on('click', function () {

                if (dimension_div.classed('active')) {
                    console.log('removed');
                    d3.select('#dimension-selector').remove();
                    dimension_div.classed('active', false);
                    return;
                }

                let selector_div = d3.select('#' + container_id).append('div')
                    .attr('id','dimension-selector')
                    .style('width', 'auto')
                    .style('height', 'auto')
                    .style('cursor', 'pointer')
                    .style('position', 'absolute')
                    .style('top', '-20px')
                    .style('right', '0px')
                    .style('background-color', '#C9D2D3')
                    .style('box-sizing', 'border-box')
                    .style('line-height', '14px')
                    .style('font-size', '14px')
                    .style('padding', '2px')

                for (let i = 0; i < provide_keys.length; ++i) {
                    let select_div = selector_div.append('div')
                        .attr('class', (dimensions.indexOf(provide_keys[i]) >= 0) ? 'active' : '')
                        .style('width', 'auto')
                        .style('height', '14px')
                        .style('line-height', '14px')
                        .style('cursor', 'pointer')
                        .style('font-size', '14px');

                    let select_icon = select_div.append('i')
                        .attr('class', (dimensions.indexOf(provide_keys[i]) >= 0) ? 'fas fa-check-square' : 'fas fa-square')
                        .style('cursor', 'pointer')
                        .style('color', '#000');

                    let select_text = select_div.append('label')
                        .style('cursor', 'pointer')
                        .html('&nbsp;' + provide_keys[i]);

                    select_div.on('click', function() {

                        if (select_div.classed('active')) {
                            keys.splice(keys.indexOf(provide_keys[i]), 1);
                            select_icon.attr('class', 'fas fa-square')
                            select_div.classed('active', false);
                        } else {
                            keys.push(provide_keys[i]);
                            select_icon.attr('class', 'fas fa-check-square')
                            select_div.classed('active', true);
                        }

                        update_chart(data, keys);
                    });

                    dimension_div.classed('active', true);
                }
            });
    }

    function update_chart(data, dimensions) {

        vis_selected_nodes = [];

        //console.log(dimensions);
        let margin = {top: 0, right: -30, bottom: 50, left: 0};
        let width = $('#' + container_id).width() - margin.left - margin.right;
        let height = $('#' + container_id).height() - margin.top - margin.bottom;

        var chart = d3.parsets()
            .width(height)
            .height(width)
            .dimensions(dimensions)
            .tension(0.7);

        d3.select('#' + container_id).select('svg').remove();

        let svg = d3.select('#' + container_id).append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
            .append('g')
                .attr('transform', 'translate(-40, ' + height + ')rotate(-90)');

        svg.datum(data).call(chart);

        chart.on('sortDimensions', function () {
            change_dimensions();
        });

        chart.on('sortCategories', function () {
            change_categories();
        });

        svg.selectAll(".category text")
            .attr('font-size', '14px')
            .attr("dy", "0.7em")
            .attr("transform", "rotate(90)")
            .attr("dx", function (d) {
                return (d.dimension.name === keys[keys.length - 1]) ? -5 : 5;
            })
            .attr('text-anchor', function (d) {
                return (d.dimension.name === keys[keys.length - 1]) ? 'end' : 'start';
            });

        svg.selectAll(".category rect")
            .attr("y", 0);
        svg.selectAll("text.dimension")
            .attr("dy", "2em")
            .attr('font-size', '14px')
            .attr("transform", "rotate(90)")
            .attr('text-anchor', function (d) {
                return (d.name === keys[keys.length - 1]) ? 'end' : 'start';
            });

        svg.selectAll("text.dimension .sort.alpha")
            .attr("x", 0)
            .attr("dx", 0)
            .attr("dy", "1.5em")
            .attr('opacity', '0');

        svg.selectAll("text.dimension .sort.size")
            .attr("dx", "1em")
            .attr('opacity', 0);

        svg.selectAll('text')
            .on('click', function (d) {

                if (d3.select(this).classed('selected-text')) {
                    d3.select(this)
                        .attr('fill', '#000')
                        .attr('font-size', '14px');
                    d3.select(this).classed('selected-text', false);
                } else {
                    d3.select(this)
                        .attr('fill', 'rgb(202,0,42)')
                        .attr('font-size', '14px');
                    d3.select(this).classed('selected-text', true);
                }

                highlight(d, true);
            });

    }

    function highlight(d, ancestors) {

        // Check is a nodes
        if (!d.nodes) { return; }

        var highlight = [];
        d.nodes.forEach(function (node) {
            (function recurse(x) {
              highlight.push(x);
              for (var k in x.children) recurse(x.children[k]);
            })(node);
            //highlight.shift();
            if (ancestors) while (node) highlight.push(node), node = node.parent;
        });

        let pos = vis_selected_nodes.map(function (x) {
            return x.parent;
        }).indexOf(d.name);

        if (pos >= 0) {
            vis_selected_nodes.splice(pos, 1);
        } else {
            vis_selected_nodes.push({
                parent: d.name,
                dimension: d.dimension.name,
                highlight: highlight
            });
        }

        update_selection();
    }

    function update_selection() {
        // Reset all selection path
        d3.select('.ribbon').selectAll('path').classed('selected', false);
        // Highlight selection
        d3.select('.ribbon').selectAll('path').classed('selected', function (d) {
            const found = vis_selected_nodes.some(item => item.highlight.indexOf(d.node) >= 0);
            return (found) ? true : false;
        });

        //
        update_by_selection();
    }

    function change_categories() {
        // Reset all selection path
        vis_selected_nodes = [];
        d3.selectAll('.selected-text')
            .attr('fill', '#000')
            .attr('font-size', '14px');
        d3.selectAll('.selected-text').classed('selected-text', false);

        // Reset filter
        reset_filter();
    }

    function change_dimensions() {
        // Reset all selection path
        vis_selected_nodes = [];
        d3.selectAll('.selected-text')
            .attr('fill', '#000')
            .attr('font-size', '14px');
        d3.selectAll('.selected-text').classed('selected-text', false);

        reset_filter();
    }

    function update_by_selection() {
        //data, selected_nodes;
        let filter = {};
        vis_selected_nodes.forEach(function (node) {
            let key = node.dimension;
            let value = node.parent;
            if (!(key in filter)) {
                filter[key] = [];
            }

            if (filter[key].indexOf(value) < 0) {
                filter[key].push(value);
            }
        });

        let filtered_trips = [];
        for (let i = 0; i < trips.length; ++i) {

            let trip = trips[i];

            let meet = true;
            Object.keys(filter).forEach(function (key) {
                if (filter[key].indexOf(trip[key]) < 0) {
                    meet = false;
                }
            });

            if (meet) {
                filtered_trips.push(trip);
            }
        }

        // Need to set filtered_trips

        //vis_area_study(filtered_trips, 'tripview-body');
        vis_model_cases(filtered_trips, 'model-cases-body');
        vis_representative_images(filtered_trips, undefined, 'streetview-body');

        map_show_filtered_trips(filtered_trips);
        main_set_maplayer_index();
    }

    function reset_filter() {
        //vis_area_study(trips, 'tripview-body');
        vis_model_cases(trips, 'model-cases-body');
        vis_representative_images(trips, undefined, 'streetview-body');

        map_show_filtered_trips(trips);
        main_set_maplayer_index();
        return;
    }




    /*
    svg.append("g").selectAll("rect")
        .data(nodes)
        .join("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .style('cursor', 'pointer')
        .on('click', highlight_nodes)
    .append("title")
        .text(d => `${d.name}\n${d.value.toLocaleString()}`);


    svg.append("g")
        .attr("fill", "none")
    .selectAll("g")
        .data(links)
        .join("path")
        .attr("d", sankeyLinkHorizontal())
        .attr('class', 'link')
        .attr("id", function(d,i){
            d.id = i;
            return "link-"+i;
        })
        .attr("stroke", '#fb6a4a')
        .attr("stroke-width", d => d.width)
        .attr('stroke-opacity', 0.5)
        .style("mix-blend-mode", "multiply")
    .append("title")
        .text(d => `${d.names.join(" → ")}\n${d.value.toLocaleString()}`);

    svg.append("g")
        .style('font-weight', 'bold')
        .style("font-size", "12px")
      .selectAll("text")
      .data(nodes)
      .join("text")
        .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
        .text(d => d.name)
      .append("tspan")
        .attr("fill-opacity", 0.7)
        .text(d => `: ${d.value.toLocaleString()}`);

    function highlight_nodes(node, i) {

        d3.selectAll('.link').style('stroke', '#C9D2D3');
        d3.selectAll('.link').style('stroke-opacity', 0.5);

        var remainingNodes=[],
            nextNodes=[];

        var stroke_opacity = 0.5;

        var traverse = [{
            linkType : "sourceLinks",
            nodeType : "target"
        },{
            linkType : "targetLinks",
            nodeType : "source"
        }];

        // Create parallelset filter
        var filter = [[], [], [], [], [], []];

        traverse.forEach(function(step){

            if (filter[node.layer].indexOf(node.name) === -1) {
                filter[node.layer].push(node.name);
            }

            node[step.linkType].forEach(function(link) {
                remainingNodes.push(link[step.nodeType]);
                highlight_link(link.id, stroke_opacity);
            });

            while (remainingNodes.length) {
                nextNodes = [];
                remainingNodes.forEach(function(node) {

                    if (filter[node.layer].indexOf(node.name) === -1) {
                        filter[node.layer].push(node.name);
                    }

                    node[step.linkType].forEach(function(link) {
                    nextNodes.push(link[step.nodeType]);
                    highlight_link(link.id, stroke_opacity);
                    });
                });
                remainingNodes = nextNodes;
            }
        });

        vis_parallelsets_filter(data, filter);
    }

    function highlight_link (id, opacity){
        d3.select("#link-"+id)
            .style('stroke', '#fb6a4a')
            .style("stroke-opacity", opacity);
    }

    function get_graph(keys, data) {
        let index = -1;
        const nodes = [];
        const nodeByKey = new Map;
        const indexByKey = new Map;
        const links = [];

        for (const k of keys) {
            for (const d of data) {
                const key = JSON.stringify([k, d[k]]);
                if (nodeByKey.has(key)) continue;
                const node = {name: d[k]};
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

        return {nodes, links};
    }*/

    function preprocess(data) {

        // Need to categorize entropy
        for (let i = 0; i < data.length; ++i) {
            let trip = data[i];
            let performance = util_compute_performance([trip]);

            let accuracy = [], precision = [], recall = [], f1 = [], entropy = [];

            Object.keys(performance).forEach(function (model) {
                Object.keys(performance[model]).forEach(function (action) {
                    accuracy.push(performance[model][action].accuracy);
                    precision.push(performance[model][action].precision);
                    recall.push(performance[model][action].recall);
                    f1.push(performance[model][action].f1);
                    entropy.push(performance[model][action].entropy);
                });
            });

            trip.performances = {
                accuracy: d3.mean(accuracy),
                precision: d3.mean(precision),
                recall: d3.mean(recall),
                f1: d3.mean(f1),
                perplexity: d3.mean(entropy)
            }

            trip.accuracy = get_value_category(d3.mean(accuracy));
            trip.precision = get_value_category(d3.mean(precision));
            trip.recall = get_value_category(d3.mean(recall));
            trip.f1 = get_value_category(d3.mean(f1));
            trip.perplexity = get_value_category(d3.mean(entropy));
        }

        return data;
    }

    function get_value_category(value) {
        let category = ['0,10','20,30','30,40','30,40','40,50','50,60','60,70','70,80', '80,90', '90,100'];
        let range = [0,.1,.2,.3,.4,.5,.6,.7,.8,.9];

        for (let i = 0; i < range.length; ++i) {
            if (value > range[i] && value <= range[i] + 0.10) {
                return category[i];
            }
        }
    }

    return;
}

export function vis_model_performance (data, container_id) {

    let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
    let performance = preprocess(data);

    if (vis_is_parallelsets_filter) {

        d3.selectAll('.performance-text').style('opacity', 0.2)
        d3.selectAll('.filter-performance-bar').remove();

        for (let i = 0; i < models.length; ++i) {

            let model = models[i];
            let filter_performance = performance[model];

            let svg = d3.select('#performance-' + models[i]);
            let margin = {top: 40, right: 20, bottom: 30, left: 40};
            let width = +svg.attr("width") - margin.left - margin.right;
            let height = +svg.attr("height") - margin.top - margin.bottom;
            let g = svg.append("g")
                .attr('class', 'filter-performance-bar')
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            let colors = ['#fee5d9','#fcae91','#fb6a4a','#cb181d'];
            let matrices = ['accuracy', 'precision', 'recall', 'f1'];
            let x0 = d3.scaleBand()
                .rangeRound([0, width])
                .paddingInner(0.1);

            let x1 = d3.scaleBand()
                .padding(0.05);

            let y = d3.scaleLinear()
                .rangeRound([height, 0]);

            x0.domain(Object.keys(filter_performance));
            x1.domain(matrices).rangeRound([0, x0.bandwidth()]);
            y.domain([0, 1]).nice();

            Object.keys(filter_performance).forEach(function (key, index) {

                let bar = g.append("g")
                    .style('opacity', 1)
                    .attr('transform', "translate(" + x0(key) + ",0)");

                for (let i = 0; i < matrices.length; ++i) {

                    bar.append("rect")
                        .attr("x", x1(matrices[i]))
                        .attr("width", x1.bandwidth())
                        .attr("y", y(0))
                        .attr("height", 0)
                        .transition()
                        .duration(500)
                        .attr("y", y(filter_performance[key][matrices[i]]))
                        .attr('height',  height - y(filter_performance[key][matrices[i]]))
                        .attr('fill', 'transparent')
                        .style("stroke", '#252525')
                        .style("stroke-width", "0.5px")
                        .style("stroke-opacity", 1);

                    bar.append('text')
                        .attr("x", x1(matrices[i]))
                        .attr("y", y(filter_performance[key][matrices[i]]) - 5)
                        .attr("dy", "0.32em")
                        .attr("fill", '#000')
                        .attr('font-size', '9px')
                        .attr("text-anchor", "start")
                        .text(filter_performance[key][matrices[i]].toFixed(2));
                }
            });
        }

        return;
    }

    d3.select('#' + container_id).selectAll('svg').remove();
    for (let i = 0; i < models.length; ++i) {
        let svg = create_svg(container_id, models[i]);
        draw_group_barchart(svg, performance[models[i]], models[i]);
    }

    function draw_group_barchart(svg, data, model_name) {

        let matrices = ['accuracy', 'precision', 'recall', 'f1'];
        let colors = ['#fee5d9','#fcae91','#fb6a4a','#cb181d'];

        let margin = {top: 40, right: 20, bottom: 30, left: 40};
        let width = +svg.attr("width") - margin.left - margin.right;
        let height = +svg.attr("height") - margin.top - margin.bottom;
        let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let x0 = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.1);

        let x1 = d3.scaleBand()
            .padding(0.05);

        let y = d3.scaleLinear()
            .rangeRound([height, 0]);

        x0.domain(Object.keys(data));
        x1.domain(matrices).rangeRound([0, x0.bandwidth()]);
        y.domain([0, 1]).nice();

        // Adding circle color legend
        if (model_name === 'tcnn1') {
            for (let i = 0; i < matrices.length; ++i) {
                svg.append("circle")
                    .attr("cx", i * (width / 4) + 50)
                    .attr("cy", 10).attr("r", 6)
                    .style("fill", colors[i])
                    .attr('opacity', 1)
                    .style("stroke", '#252525')
                    .style("stroke-width", "0.5px")
                    .style("stroke-opacity", 1);
                svg.append("text").attr("x", i * (width / 4) + 60).attr("y", 10).text(matrices[i]).style("font-size", "15px").attr("alignment-baseline","middle");
            }
        }

        Object.keys(data).forEach(function (key, index) {

            let bar = g.append("g")
                .attr('class', 'performance-bar')
                .attr('id', model_name + '-' + key)
                .attr('transform', "translate(" + x0(key) + ",0)");

            for (let i = 0; i < matrices.length; ++i) {

                bar.append("rect")
                    .attr("x", x1(matrices[i]))
                    .attr("y", y(data[key][matrices[i]]))
                    .attr("width", x1.bandwidth())
                    .attr('height',  height - y(data[key][matrices[i]]))
                    .attr('opacity', 1)
                    .attr('fill', colors[i])
                    .style("stroke", '#252525')
                    .style("stroke-width", "0.5px")
                    .style("stroke-opacity", 1);

                bar.append('text')
                    .attr('class', 'performance-text')
                    .attr("x", x1(matrices[i]))
                    .attr("y", y(data[key][matrices[i]]) - 5)
                    .attr("dy", "0.32em")
                    .attr("fill", "#000")
                    .attr('font-size', '9px')
                    .attr("text-anchor", "start")
                    .text(data[key][matrices[i]].toFixed(2));
            }
        });

        g.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x0));


        g.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(y).ticks(2, 's'));

        /*
        g.append("text")
            .attr("x", width / 2)
            .attr("y", -3)
            .attr("dy", "0.32em")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr('font-size', '14px')
            .attr("text-anchor", "middle")
            .text(model_name);*/

        return;
    }

    function create_svg(container_id, model) {

        let container_width = $('#' + container_id).width();
        let container_height = ($('#' + container_id).height()) / 3;

        let container = d3.select('#' + container_id)
            .append('div')
            .style('width', container_width)
            .style('height', container_height);

        let svg = container.append('svg')
            .attr('id', 'performance-' + model)
            .attr('width', container_width)
            .attr('height', container_height);

        return svg;
    }

    // Calculate confuse matrix
    function preprocess (data) {

        let car_actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];
        let model_performance = {};
        let confusion_matrix = {};

        for (let i = 0; i < data.length; ++i) {

            let true_label = data[i].actual.no_slight;
            let predicts = data[i].predict;

            Object.keys(predicts).forEach(function (key) {
                let predict_label = predicts[key];

                if (!(key in confusion_matrix)) { confusion_matrix[key] = {}; }

                for (let  j = 0; j < predict_label.length; ++j) {

                    let true_action = car_actions[true_label[j]];
                    let predict_action = car_actions[predict_label[j].indexOf(d3.max(predict_label[j]))];

                    if (!(true_action in confusion_matrix[key])) {
                        confusion_matrix[key][true_action] = {
                            'straight': 0,
                            'slow_or_stop': 0,
                            'turn_left': 0,
                            'turn_right': 0
                        };
                    }

                    confusion_matrix[key][true_action][predict_action] += 1;
                    /*
                    if (predict_action in confusion_matrix[key][true_action]) {
                        confusion_matrix[key][true_action][predict_action] += 1;
                    } else {
                        confusion_matrix[key][true_action][predict_action] = 1;
                    }*/
                }
            });
        }

        Object.keys(confusion_matrix).forEach(function (model) {

            model_performance[model] = {};
            delete confusion_matrix[model][undefined];

            Object.keys(confusion_matrix[model]).forEach(function (main_class) {

                let tp = 0; let tn = 0; let fp = 0; let fn = 0;

                Object.keys(confusion_matrix[model][main_class]).forEach(function (predict_class) {
                    if (predict_class !== main_class) {
                        fn += confusion_matrix[model][main_class][predict_class];
                    } else {
                        tp = confusion_matrix[model][main_class][predict_class];
                    }
                });

                Object.keys(confusion_matrix[model]).forEach(function (sub_class) {
                    if (main_class !== sub_class) {
                        Object.keys(confusion_matrix[model][sub_class]).forEach(function (predict_class) {
                            if (predict_class === main_class) {
                                fp += confusion_matrix[model][sub_class][predict_class];
                            } else {
                                tn += confusion_matrix[model][sub_class][predict_class];
                            }
                        });
                    }
                });
                /*
                console.log('tp: ' + tp);
                console.log('tn: ' + tn);
                console.log('fp: ' + fp);
                console.log('fn: ' + fn);*/

                model_performance[model][main_class] = {};

                let accuracy = (tp + tn) / (tp + tn + fp + fn);
                let precision = tp / (tp + fp);
                let recall = tp / (tp + fn);
                let f1 = (2 * tp) / ((2 * tp) + fp + fn);

                model_performance[model][main_class]['accuracy'] = (isNaN(accuracy))? 0 : accuracy;
                model_performance[model][main_class]['precision'] = (isNaN(precision))? 0 : precision;
                model_performance[model][main_class]['recall'] = (isNaN(recall))? 0 : recall;
                model_performance[model][main_class]['f1'] = (isNaN(f1))? 0 : f1;
            });
        });

        return model_performance;
    }
}

export function vis_model_relation (data, container_id) {

    let relation = preprocess(data);
    console.log(relation);

    d3.select('#' + container_id).selectAll('svg').remove();

    Object.keys(relation).forEach(function (model) {
        let svg = create_svg(container_id);
        draw_pieglyph(svg, relation[model], model);
    });

    function draw_pieglyph (svg, data, model) {

        let models = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];

        let margin = {top: 50, right: 20, bottom: 50, left: 20};
        let width = +svg.attr("width") - margin.left - margin.right;
        let height = +svg.attr("height") - margin.top - margin.bottom;
        let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var color = ["#C9D2D3", "rgb(202,0,42)"];

        let x = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.1);

        x.domain(models);


        if (model === 'actual') {
            g.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + (-35) + ")")
                .call(d3.axisTop(x));
        }

        g.append("text")
            .attr("x", 20)
            .attr("y", height / 2)
            .text(model)
            .style("font-size", "12px")
            .attr("transform", "translate(0, 40)rotate(270)");

        for (let i = 0; i < models.length; ++i) {

            let pie_group = g.append("g")
                .attr('class', 'pie')
                .attr('transform', "translate(" + (x(models[i]) + 40)  + "," + ((height / 2) + 2) + ")");

            if (data[models[i]]) {
                var pie = d3.pie()
                    .value(function(d) {return d.value; });

                var data_ready = pie(d3.entries(data[models[i]]));
                pie_group.selectAll('glyph')
                .data(data_ready)
                .enter()
                .append('path')
                    .attr('d', d3.arc()
                        .innerRadius(0)
                        .outerRadius(25)
                    )
                    .attr('fill', function(d, i){ return(color[i]); })
                    .attr("stroke", function(d, i){ return(color[i]); })
                    .style("stroke-width", "2px")
                    .style("stroke-opacity", 1)
                    .style("opacity", .5)

                pie_group.selectAll('glyph-text')
                .data(data_ready)
                .enter()
                .append('text')
                .attr('transform', function (d) {
                    d.innerRadius = 0;
                    d.outerRadius = 25;

                    let pos = d3.arc()
                        .innerRadius(0)
                        .outerRadius(25)
                        .centroid(d);

                    return 'translate(' + pos + ')';
                })
                .attr("text-anchor", "middle")
                .attr('font-size', '9px')
                .text(function (d) { return d.value; });
            }
        }
    }

    function create_svg (container_id) {

        let container_width = $('#' + container_id).width();
        let container_height = ($('#' + container_id).height()) / 4;

        let container = d3.select('#' + container_id)
            .append('div')
            .style('width', container_width)
            .style('height', container_height);

        let svg = container.append('svg')
            .attr('width', container_width)
            .attr('height', container_height);

        return svg;
    }

    function preprocess (data) {

        let models = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];

        let relation = {};
        for (let i = 0; i < models.length; ++i) {
            relation[models[i]] = {};
            for (let j = 0; j < models.length; ++j) {
                if (models[i] !== models[j]) {
                    relation[models[i]][models[j]] = {
                        same: 0,
                        different: 0
                    };
                }
            }
        }

        for (let i = 0; i < data.length; ++i) {
            let predicts = data[i].predict;
            let actual = data[i].actual.no_slight;

            Object.keys(predicts).forEach(function (model) {
                for (let  i = 0; i < predicts[model].length; ++i) {
                    if (predicts[model][i].indexOf(d3.max(predicts[model][i])) !== actual[i]) {
                        relation['actual'][model].different += 1;
                    } else {
                        relation['actual'][model].same += 1;
                    }
                }
            });

            Object.keys(predicts).forEach(function (main_model) {

                for (let  i = 0; i < predicts[main_model].length; ++i) {
                    if (predicts[main_model][i].indexOf(d3.max(predicts[main_model][i])) !== actual[i]) {
                        relation[main_model]['actual'].different += 1;
                    } else {
                        relation[main_model]['actual'].same += 1;
                    }
                }

                Object.keys(predicts).forEach(function (sub_model) {
                    if (sub_model !== main_model) {
                        for (let  i = 0; i < predicts[sub_model].length; ++i) {
                            if (predicts[main_model][i].indexOf(d3.max(predicts[main_model][i])) !== predicts[sub_model][i].indexOf(d3.max(predicts[sub_model][i]))) {
                                relation[main_model][sub_model].different += 1;
                            } else {
                                relation[main_model][sub_model].same += 1;
                            }
                        }
                    }
                });
            });
        }

        return relation;
    }
}

/*s
export function vis_streetview (data, container_id) {

    $('#' + container_id).empty();
    let width = $('#' + container_id).width();
    let height = $('#' + container_id).height();

    // Create trip containers
    for (let i = 0; i < data.length; ++i) {
        let div = d3.select('#' + container_id)
            .append('div')
            .style('width', width)
            .style('height', '100')
            .style('border', '1px solid #C9D2D3')
            .style('overflow-x', 'auto')
            .style('overflow-y', 'hidden')
            .style('white-space', 'nowrap');

        // Random and put images
        let random_count = 0;

        while (random_count < 15) {
            let random_index = Math.floor(Math.random() * data[i].actual.no_slight.length);
            div.append('img')
                .attr('alt', '')
                .attr('src', '/frames/' + data[i].trip_id + '/' + random_index + '.png')
                .style('width', '150px')
                .style('height', '100px')
                .style('border', '1px solid #C9D2D3')
                .style('display', 'inline-block');
            random_count += 1;
        }
    }
}*/


export function vis_summary (data, container_id) {
    let trips = data;
    let processed_trips = preprocess(trips);

    draw_model(processed_trips.model, container_id, processed_trips);

    var svg_time_of_day = create_svg(container_id);
    var svg_scene = create_svg(container_id);
    var svg_weather = create_svg(container_id);

    var time_of_day_xy = draw_group_barchart(svg_time_of_day, processed_trips.time_of_day, 'time_of_day');
    var scene_xy = draw_group_barchart(svg_scene, processed_trips.scene, 'scene');
    var weather_xy = draw_group_barchart(svg_weather, processed_trips.weather, 'weather');



    function draw_group_barchart(svg, data, data_type) {

        let margin = {top: 10, right: 20, bottom: 30, left: 40};
        let width = +svg.attr("width") - margin.left - margin.right;
        let height = +svg.attr("height") - margin.top - margin.bottom;
        let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let x0 = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.1);

        let x1 = d3.scaleBand()
            .padding(0.05);

        let y = d3.scaleLinear()
            .rangeRound([height, 0]);

        let values = [];
        Object.keys(data).forEach(function (key) {
            values.push(data[key].train);
            values.push(data[key].val);
        });

        x0.domain(Object.keys(data));
        x1.domain(['train', 'val']).rangeRound([0, x0.bandwidth()]);
        y.domain([0, d3.max(values)]).nice();

        Object.keys(data).forEach(function (key) {

            let key_str = (key == 'dawn/dusk') ? 'dawn_dusk' : key.replaceAll(' ', '_');

            let bar = g.append("g")
                .attr('class', 'bar')
                .attr('transform', "translate(" + x0(key) + ",0)");

            bar.append("rect")
                .attr('id', 'bar-train-' + data_type + '-' + key_str)
                .attr("x", x1('train'))
                .attr("y", y(data[key].train))
                .attr("width", x1.bandwidth())
                .attr('height',  height - y(data[key].train))
                .attr('fill', map_model_colors.train);

            bar.append("rect")
                .attr('id', 'bar-val-' + data_type + '-' + key_str)
                .attr("x", x1('val'))
                .attr("y", y(data[key].val))
                .attr("width", x1.bandwidth())
                .attr('height',  height - y(data[key].val))
                .attr('fill', map_model_colors.val);
        });

        g.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x0));


        g.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(y).ticks(2, 's'));

        g.append("text")
            .attr("x", width / 2)
            .attr("y", 0)
            .attr("dy", "0.32em")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr('font-size', '14px')
            .attr("text-anchor", "middle")
            .text(data_type.replaceAll('_', ' '));



        return [x0, x1, y, height];
    }

    function update_group_barchart(xy, model_filter, attribute_filter, data, svg, data_type) {

        console.log(data);

        // x1 , y
        let x0 = xy[0], x1 = xy[1], y = xy[2], height = xy[3];
        x1.domain(model_filter).rangeRound([0, x0.bandwidth()]);

        let values = [];
        Object.keys(data).forEach(function (key) {
            for (let i = 0; i < model_filter.length; ++i) {
                let pos =  attribute_filter.indexOf(key);
                if (pos !== -1) values.push(data[key][model_filter[i]]);
            }
        });

        y.domain([0, d3.max(values)]).nice();

        svg.select(".y")
            .transition()
            .call(d3.axisLeft(y).ticks(2, "s"))
            .duration(500);

        Object.keys(data).forEach(function (key) {

            let key_str = (key == 'dawn/dusk') ? 'dawn_dusk' : key.replaceAll(' ', '_');

            if (model_filter.indexOf('train') !== -1) {
                svg.select('#bar-train-' + data_type + '-' + key_str)
                    .transition()
                    .attr("x", x1('train'))
                    .attr("y", y(data[key].train))
                    .attr("width", x1.bandwidth())
                    .attr('height',  height - y(data[key].train))
                    .attr('fill', map_model_colors.train)
                    .duration(500);
            } else {
                svg.select('#bar-train-' + data_type + '-' + key_str)
                    .transition()
                    .attr("x", function() {
                        return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;
                    })
                    .attr("y", function() { return height; })
                    .attr("width", 0)
                    .attr('height',  0)
                    .attr('fill', map_model_colors.train)
                    .duration(500);
            }

            if (model_filter.indexOf('val') !== -1) {
                svg.select('#bar-val-' + data_type + '-' + key_str)
                    .transition()
                    .attr("x", x1('val'))
                    .attr("y", y(data[key].val))
                    .attr("width", x1.bandwidth())
                    .attr('height',  height - y(data[key].val))
                    .attr('fill', map_model_colors.val)
                    .duration(500);
            } else {
                svg.select('#bar-val-' + data_type + '-' + key_str)
                    .transition()
                    .attr("x", function() {
                        return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;
                    })
                    .attr("y", function() { return height; })
                    .attr("width", 0)
                    .attr('height',  0)
                    .attr('fill', map_model_colors.val)
                    .duration(500);
            }

        });
    }

    function create_svg(container_id) {

        let container_width = $('#' + container_id).width();
        let container_height = ($('#' + container_id).height() - 30) / 3;

        let container = d3.select('#' + container_id)
            .append('div')
            .style('width', container_width)
            .style('height', container_height);

        let svg = container.append('svg')
            .attr('width', container_width)
            .attr('height', container_height);

        return svg;
    }

    function draw_model(data, div_id, full_data) {
        let container = d3.select('#' + div_id)
            .append('div')
            .style('width', '100%')
            .style('height', '30px')
            .style('line-height', '30px')
            .style('text-align', 'center');

        Object.keys(data).forEach(function (key) {
            let square = container.append('i')
                .attr('class', 'fas fa-square-full')
                .style('cursor', 'pointer')
                .style('color', map_model_colors[key]);

            let label = container.append('label')
                .attr('class', 'label-' + key + ' active')
                .style('color', map_model_colors[key])
                .style('cursor', 'pointer')
                .html('&nbsp;&nbsp;' + key + ': ' + data[key] + '&nbsp;&nbsp;');

            label.on('click', function() {

                let model_filter = ['train', 'val'];

                if (label.classed('active')) {
                    label.classed('active', false)
                        .style('color', '#d9d9d9');
                    square.style('color', '#d9d9d9');

                    // Filter
                    model_filter.splice(model_filter.indexOf(key), 1);
                    update_group_barchart(scene_xy, model_filter,Object.keys(full_data.scene), full_data.scene, svg_scene, 'scene');
                    update_group_barchart(time_of_day_xy, model_filter,Object.keys(full_data.time_of_day), full_data.time_of_day, svg_time_of_day, 'time_of_day');
                    update_group_barchart(weather_xy, model_filter,Object.keys(full_data.weather), full_data.weather, svg_weather, 'weather');

                    map_filter_all_trips(model_filter);
                } else {
                    label.classed('active', true)
                        .style('color', map_model_colors[key]);
                    square.style('color', map_model_colors[key]);

                     // Filter
                     update_group_barchart(scene_xy, model_filter,Object.keys(full_data.scene), full_data.scene, svg_scene, 'scene');
                     update_group_barchart(time_of_day_xy, model_filter,Object.keys(full_data.time_of_day), full_data.time_of_day, svg_time_of_day, 'time_of_day');
                     update_group_barchart(weather_xy, model_filter,Object.keys(full_data.weather), full_data.weather, svg_weather, 'weather');

                     map_filter_all_trips(model_filter);
                }
            });
        });

        container.append('label')
            .html('&nbsp;' + '/ ' + (data.train + data.val) + '&nbsp; Total trips');
    }

    function preprocess (data) {
        let result = {
            model: {},
            weather: {},
            scene: {},
            time_of_day: {}
        };

        for (let i = 0; i < data.length; ++i) {
            let trip = data[i];
            Object.keys(result).forEach(function (key) {

                if (key === 'model') {
                    if (!(trip.model_type in result[key])) {
                        result[key][trip.model_type] = 1;
                    } else {
                        result[key][trip.model_type] += 1;
                    }
                }  else {
                    if (trip[key] != null && trip[key] != 'undefined') {
                        if (!(trip[key] in result[key])) {
                            result[key][trip[key]] = {};
                            result[key][trip[key]][trip.model_type] = 1;
                        } else {
                            if (result[key][trip[key]][trip.model_type]) {
                                result[key][trip[key]][trip.model_type] += 1;
                            } else {
                                result[key][trip[key]][trip.model_type] = 1;
                            }
                        }
                    }
                }
            });
        }

        return result;
    }
}

export function vis_filter (result, container_id) {

    // Clear filter
    $('#' + container_id).empty();

    let trips = preprocess(result);
    console.log(trips);


    let margin = {top: 30, right: 40, bottom: 10, left: 40};
    let width = $('#' + container_id).width() - margin.left - margin.right;
    let height = $('#' + container_id).height() - margin.top - margin.bottom;

    let svg = d3.select('#' + container_id).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




    // Preprocess and filter data

    let dimensions = [];
    let brushHeight = 25;
    const brush = d3.brushX()
        .extent([
            [0, -(brushHeight / 2)],
            [width, brushHeight / 2]
        ])
        .on("start brush end", brushed)
        .on("end.snap", brushended);

    Object.keys(trips[0]).forEach(function (key) {

        if (key === 'AVG_Speed') {
            dimensions.push({
                name: key,
                scale: d3.scaleLinear()
                    .domain([0, 50])
                    .range([0, width]).nice(),
                type: 'number'
            });
        }

        if (key === 'scene' || key === 'weather' || key === 'time_of_day') {
            dimensions.push({
                name: key,
                scale: d3.scalePoint().range([0, width]),
                type: 'string'
            });
        }
        /*
        if (key === 'start_time' || key === 'end_time') {
            dimensions.push({
                name: key,
                scale: d3.scaleTime()
                    .range([0, width])
                    .domain([new Date(2016, 0, 1, 0, 0, 0), new Date(2016, 0, 1, 23, 59, 59)])
                    .nice(),
                type: 'time'
            });
        }*/
    });

    var y = d3.scalePoint()
        .domain(dimensions.map(function(d) { return d.name; }))
        .range([0, height])
        .padding(1);

    var dragging = {};


    var line = d3.line()
        .defined(function(d) { return !isNaN(d[1]); }),
        axis = d3.axisBottom(),
        background,
        foreground;

    Object.keys(dimensions).forEach(function(key) {

        if (dimensions[key].type === "number") {
            dimensions[key].scale.domain(d3.extent(trips, function(d) { return +d[dimensions[key].name]; }));
        }

        if (dimensions[key].type === "string") {
            dimensions[key].scale.domain(trips.map(function(d) { return d[dimensions[key].name]; }).sort());
        }
    });



    // Add grey background lines for context.

    background = svg.append("g")
        .attr("class", "background")
        .selectAll("path")
        .data(trips)
        .enter().append("path")
        .attr("d", draw);

    // Add blue foreground lines for focus.
    foreground = svg.append("g")
        .attr("class", "foreground")
        .selectAll("path")
        .data(trips)
        .enter().append("path")
        .attr('stroke', '#D99200')
        .attr("d", draw);


    svg.selectAll(".dimension")
        .data(dimensions)
        .enter()
        .append("g")
        .each(function(d) {
            d3.select(this)
                .attr("transform", 'translate(0,' + y(d.name) + ')')
                .call(axis.scale(d.scale));
        })
        .call(brush)
        .call(g => g.selectAll("text")
        .clone(true).lower()
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke-linejoin", "round")
        .attr("stroke", "white"));

    function brushed(d) {
        let selection = d3.brushSelection(this);
        const range = d.scale.domain().map(d.scale);
        const i0 = d3.bisectRight(range, selection[0]);
        const i1 = d3.bisectRight(range, selection[1]);
        console.log([i0, i1]);
    }

    function brushended(d) {
        let selection = d3.brushSelection(this);
        const range = d.scale.domain().map(d.scale), dx = d.scale.step() / 2;
        const x0 = range[d3.bisectRight(range, selection[0])] - dx;
        const x1 = range[d3.bisectRight(range, selection[1]) - 1] + dx;
        console.log([x0, x1]);
        d3.select(this).transition().call(brush.move, x1 > x0 ? [x0, x1] : null);
    }



    function draw(d) {
        return line(dimensions.map(function(dimension) {
            return [dimension.scale(d[dimension.name]), y(dimension.name)];
        }));
    }

    function preprocess(data) {

        let filter_data = [];

        for (let i = 0; i < data.length; ++i) {
            let trip = data[i];
            if (trip['weather'] != null && trip['weather'] != 'undefined' && trip['scene'] != null && trip['scene'] != 'undefined' && trip['time_of_day'] != null && trip['time_of_day'] != 'undefined') {
                let avg_speed = d3.mean(trip['speeds']);
                if (avg_speed) {
                    trip['AVG_Speed'] = avg_speed;
                    filter_data.push(trip);
                }
            }
        }

        return filter_data;
    }
}

export function vis_parallelsets_filter(data, filter) {

    // Set boolean filter
    vis_is_parallelsets_filter = true;

    let trips = preprocess(data, filter);

    // filter table
    vis_draw_model_table(trips, 'dataview-table');
    vis_model_performance(trips, 'model_performance-body');

    // Set boolean back to default
    vis_is_parallelsets_filter = false;

    function preprocess(data, filter) {

        let trips = [];
        for (let i = 0; i < data.length; ++i) {

            let time_of_day = data[i].time_of_day;
            let scene = data[i].scene;
            let weather = data[i].weather;

            if (filter[0].indexOf(time_of_day) !== -1 && filter[1].indexOf(scene) !== -1 && filter[2].indexOf(weather) !== -1) {
                trips.push(data[i]);
            }
        }

        return trips;
    }
}

// TODO: need to add d3 here
export function vis_model_cases(trips, container_id)
{
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

    let table_headers = ['actual', 'tcnn1', 'fcn_lstm', 'cnn_lstm', 'count'];

    table.append('tr');
    for (let i = 0; i < table_headers.length; ++i) {
        table.append('th')
            .style('color', '#000')
            .html(table_headers[i]);
    }

    Object.keys(cases).forEach(function(item, index) {

        let row = table.append('tr')
            .attr('class', 'row-cases')
            .style('cursor', 'pointer')
            .style('text-align', 'center');

        let boolean_expression = item.split('');

        for (let i = 0; i < boolean_expression.length; ++i) {
            row.append('td')
                .style('color', (boolean_expression[i] === '1') ? '#FF0000' : '#C9D2D3')
                .style('font-size', '24px')
                .style('text-align', 'center')
                .append('div')
                .style('height', '20px')
                .style('width', '20px')
                .style('margin', 'auto')
                .style('border-radius', '50%')
                .style('box-shadow', (boolean_expression[i] === '1') ? 'none' : 'inset 0px 0px 5px #737373')
                .style('background-color', (boolean_expression[i] === '1') ? '#FF0000' : '#C9D2D3');
        }

        // Show count
        row.append('td')
            .html(cases[item]);

        row.on('click', function() {
            if (row.classed('active')) {
                d3.selectAll('.row-cases').classed('active', false);
                d3.selectAll('.row-cases').style('background-color', 'transparent');
                //vis_streetview(trips, 'streetview-body');
            } else {
                // Set class
                d3.selectAll('.row-cases').classed('active', false);
                row.classed('active', true);
                // Bg
                d3.selectAll('.row-cases').style('background-color', 'transparent');
                row.style('background-color', '#bababa');
                // Draw new gallery
                vis_representative_images(trips, item, 'streetview-body');
            }

        });

        // Set first default representative images
        if (index === 0) {
            d3.selectAll('.row-cases').style('background-color', 'transparent');
            row.style('background-color', '#bababa');
            // Set style without highlight
            row.classed('active', true);
            // Show representative images
            vis_representative_images(trips, item, 'streetview-body');
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

}

export function vis_representative_images(trips, expression, container_id) {

    $('#' + container_id).empty();

    let coords = [];

    if (expression  && expression !== '0000') {
        coords = [];
        let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
        let model_colors = ['#e41a1c', '#377eb8', '#4daf4a'];
        let car_action = ['▲', '●', '◀','▶'];

        let prev_context = undefined;
        for (let i = 0; i < trips.length; ++i) {
            let trip = trips[i];
            if (trip.cases[expression]) {
                let indexes = trip.cases[expression];
                for (let j = 0; j < indexes.length; ++j) {
                    if (Math.random() < 0.3) {
                        coords.push(trip.locations.coordinates[Math.floor(indexes[j]/3)]);

                        let action = trip.actual.no_slight[indexes[j]];
                        let tcnn1 = trip.predict[models[0]][indexes[j]];
                        let cnn_lstm = trip.predict[models[1]][indexes[j]];
                        let fcn_lstm = trip.predict[models[2]][indexes[j]];

                        let actual_action = car_action[action];
                        let tcnn1_action = car_action[tcnn1.indexOf(d3.max(tcnn1))];
                        let cnn_lstm_action = car_action[cnn_lstm.indexOf(d3.max(cnn_lstm))];
                        let fcn_lstm_action = car_action[fcn_lstm.indexOf(d3.max(fcn_lstm))];

                        let image_container = d3.select('#' + container_id).append('div')
                            .attr('id', 'image-container-' + trip.trip_id + '-' + indexes[j])
                            .style('position', 'relative')
                            .style('width', '140px')
                            .style('height', '90px')
                            .style('border', '1px solid #C9D2D3')
                            .style('cursor', 'pointer')
                            .style('float', 'left')
                            .on('click', function () {
                                clicked(trip, indexes[j]);
                            });

                        image_container.append('img')
                            .attr('id', 'image-' + trip.trip_id + '-' + indexes[j])
                            .attr('class', 'case-images')
                            .attr('alt', '')
                            .attr('src', '/frames/' + trip.trip_id + '/' + indexes[j] + '.png')
                            .style('width', '100%')
                            .style('height', '100%');

                        if (actual_action) {
                            image_container.append('div')
                                .style('position', 'absolute')
                                .style('width', '100%')
                                .style('height', '20px')
                                .style('bottom', '0px')
                                .style('background', 'rgba(255,255,255,0.9)')
                                .style('left', '0px')
                                .style('text-align', 'center')
                                .html(actual_action + '&nbsp;&nbsp;<font color="#e41a1c">' + tcnn1_action + '</font>&nbsp;&nbsp;<font color="#377eb8">' +  cnn_lstm_action + '</font>&nbsp;&nbsp;<font color="#4daf4a">' + fcn_lstm_action + '</font>');
                        }

                    }
                }
            }
        }
        /*
        if ($('#image-' + trip.trip_id + '-' + indexes[j]).length >= 1) {
            let current_img = get_image_data('image-' + trip.trip_id + '-' + indexes[j]);
            let prev_img = get_image_data('image-' + trip.trip_id + '-' + indexes[j - 1]);

            let res = compare(current_img, prev_img, 8, 0.01, 0.03, true);
            let ssim = Math.round(res.ssim * 1000) / 1000;
            //console.log(ssim);
        }*/

        map_draw_all_points(coords);

    } else {

        coords = [];

        for (let i = 0; i < trips.length; ++i) {
            let trip = trips[i];
            let actual_label = trip.actual.no_slight;
            let temp_action = "";
            for (let j = 0; j < actual_label.length; ++j) {

                let action = actual_label[j];

                // Math.random() < 0.1; --> 10% to getting true
                if (action && temp_action !== action && Math.random() < 0.3) {
                    coords.push(trip.locations.coordinates[Math.floor(j/3)]);
                    d3.select('#' + container_id).append('img')
                        .attr('id', 'image-' + trip.trip_id + '-' + j)
                        .attr('class', 'case-images')
                        .attr('alt', '')
                        .attr('src', '/frames/' + trip.trip_id + '/' + j + '.png')
                        .style('width', '140px')
                        .style('height', '90px')
                        .style('cursor', 'pointer')
                        .style('border', '1px solid #C9D2D3')
                        .style('float', 'left')
                        .on('click', function () {
                            clicked (trip, j);
                        });
                    temp_action = action;
                }

            }
        }

        map_draw_all_points(coords);
    }

    function clicked (trip, index) {
        d3.selectAll('.case-images').style('opacity', 0.2);
        d3.selectAll('.case-images')
            .style('width', '140px')
            .style('height', '90px');

        $("#streetview-drawer-content").animate({ "margin-right": -500 }, "fast");

        if (d3.select('#image-' + trip.trip_id + '-' + index).classed('active')) {
            map_remove_layer('point-layer');
            d3.selectAll('.case-images').style('opacity', 1);
            d3.selectAll('.case-images')
                .style('width', '140')
                .style('height', '90px');
            d3.select('#image-' + trip.trip_id + '-' + index).classed('active', false);

            $("#streetview-drawer-content").animate({ "margin-right": -500 }, "fast");

        } else {
            let coord = trip.locations.coordinates[Math.floor(index / 3)];
            map_draw_point(coord, trip.trip_id + '-' + index);
            d3.selectAll('.case-images').classed('active', false);
            d3.select('#image-' + trip.trip_id + '-' + index).style('opacity', 1);
            d3.select('#image-' + trip.trip_id + '-' + index)
                .style('width', '140px')
                .style('height', '90px');
            d3.select('#image-' + trip.trip_id + '-' + index).classed('active', true);

            vis_show_streetview(coord, '/frames/' + trip.trip_id + '/' + index + '.png');
        }

    }

    function get_image_data(image_id) {

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        let img = document.getElementById(image_id);
        canvas.width = img.width;
        canvas.height = img.height;

        var new_img = new Image();
        new_img.onload = function () {
            context.drawImage(new_img, 0, 0);
            var id = context.getImageData(0, 0, img.width, img.height);
            let img_obj = {width: canvas.width, height: canvas.height, data: id.data, channels: 4, canvas: canvas}
            console.log(img_obj);
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


/*
export function vis_trips_study(trips) {

    if (trips.length <= 0) return;

    let container_height = 190; // 150
    let max_height = 420;
    let total_height = trips.length * container_height;

    if (total_height < max_height) {
        max_height = total_height + 20;
    }

    // Move map and set senter
    d3.select('#map').style('height','calc(100% - ' + max_height + 'px)');
    d3.select('#tripview').style('max-height', max_height + 'px');
    $('#tripview-body').height('calc(' + max_height + 'px - 20px)');
    d3.select('#tripview').style('transition','max-height 0.25s ease-in');

    $('#tripview-body').empty();
    let trip_container = d3.select('#tripview-body').append('div')
        .style('width', '100%')
        .style('height', total_height + 'px')
        .style('box-sizing', 'border-box');

    vis_trip_detail(trips, trip_container);


    $('#tripview').on('transitionend', function () {
        vis_trip_detail(trips, trip_container);
    });

    $('#tripview-dropdown').off().on('change', function() {
        $('#tripview-body').empty();
        let trip_container = d3.select('#tripview-body').append('div')
            .style('width', '100%')
            .style('height', total_height + 'px')
            .style('box-sizing', 'border-box');

        vis_trip_detail(trips, trip_container);
    });
}*/

/*
export function vis_trip_detail (trips, div) {

    //console.log($('#tripview-dropdown').val());
    // get mode
    switch ($('#tripview-dropdown').val()) {
        case 'action': draw_action(trips, div); break;
        case 'perplexity': draw_perplexity(trips, div); break;
        case 'combine': vis_draw_action(trips, div); break;
        default: draw_action(trips, div); break;
    }

    function draw_action(trips, div) {

        for (let i = 0; i < trips.length; ++i) {

            vis_create_trip_info(trips[i], div, i);
            let trip = trips[i];
            let models = ['actual', 'tcnn1', 'fcn_lstm', 'cnn_lstm'];
            let car_actions = ['straight2', 'slow_or_stop2', 'turn_left2', 'turn_right2', 'turn_left_slight2', 'turn_right_slight2'];

            let width = $('#tripview-body').width();
            let height = 150;

            let container = div.append('div')
                .style('width', '100%')
                .style('box-sizing', 'border-box')
                .style('border-bottom', '1px solid #d9d9d9')
                .style('height', height + 'px');

            let row_height = height / models.length;

            let x = d3.scaleLinear()
                .range([0, width - 100])
                .domain([0, trip.actual.slight.length]);

            let svg = container.append('svg')
                .attr('class', 'trip-svg-' + i)
                .style('width', width)
                .style('height', height);

            let img_width = x(1) - x(0);

            var brushFn = d3.brushX()
                .extent([[-16, 0], [width, height]]);

            for (let i = 0; i < car_actions.length; ++i) {
                svg.append("defs")
                    .append("pattern")
                    .attr("id", 'rect-bg-' + car_actions[i])
                    .attr('patternUnits', 'objectBoundingBox')
                    .attr('width', img_width)
                    .attr('height', row_height)
                    .append("image")
                    .attr("xlink:href", 'signs/' + car_actions[i] + '.png')
                    .attr('width', img_width)
                    .attr('height', row_height);
            }

            for (let i = 0; i < models.length; ++i) {

                let model_g = svg.append('g')
                .attr("transform", "translate(0," + i * row_height + ")");

                model_g.append('text')
                    .attr("x", 10)
                    .attr("y", row_height / 2)
                    .attr("dy", ".35em")
                    .style('stroke', model_colors[models[i]])
                    .text(models[i]);

                let model_bg = model_g.append('g')
                    .attr("transform", "translate(100,0)");

                //console.log(trip);

                for (let j = 0; j < trip.actual.no_slight.length; ++j) {

                    let action = (models[i] === 'actual') ? trip.actual.no_slight[j] : trip.predict[models[i]][j].indexOf(d3.max(trip.predict[models[i]][j]));

                    model_bg.append('rect')
                        .attr('x', x(j))
                        .attr('class', 'sign-rect sign-rect-' + j)
                        .attr('y', 10)
                        .style('fill', model_colors[models[i]])
                        .style('opacity', 1)
                        .attr('width', img_width)
                        .attr('height', row_height - 20);

                    let sign = model_bg.append('rect')
                        .attr('x', x(j))
                        .style('fill', 'url(#rect-bg-' + car_actions[action] + ')')
                        .style('cursor', 'pointer')
                        .attr('width', img_width)
                        .attr('height', row_height)
                        .on('click', function() {
                        })
                        .on('mouseover', function() {
                        })
                        .on('mouseout', function() {
                        });
                }
            }

            svg.append('g').call(brushFn);

            let legend_models = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];
            let legend_model_colors = ['#9d9d9d', '#e41a1c', '#377eb8', '#4daf4a'];

            $('#tripview-legends').empty();

            for (let i = 0; i < legend_models.length; ++i) {

                let legend_icon = d3.select('#tripview-legends').append('i')
                    .attr('class', 'fas fa-square')
                    .style('cursor', 'pointer')
                    .style('color', legend_model_colors[i]);

                let legend_text = d3.select('#tripview-legends').append('label')
                    .style('cursor', 'pointer')
                    .html('&nbsp;' + legend_models[i] + '&nbsp;&nbsp;');
            }
        }
    }

    function draw_perplexity(trip, svg) {
        // Draw perplexity
        for (let i = 0; i < trips.length; ++i) {

            vis_create_trip_info(trips[i], div);
            let trip = trips[i];

            let width = $('#tripview-body').width();
            let height = 150;

            let container = div.append('div')
                .style('width', '100%')
                .style('height', height + 'px');

            let margin = {top: 20, right: 0, bottom: 20, left: 40};
            width = width - margin.left - margin.right;
            height = 150 - margin.top - margin.bottom;

            var x = d3.scaleLinear().range([0, width]);
            var y = d3.scaleLinear().range([height, 0]);
            let value_scale = d3.scaleLinear().range([0, 100]).domain([0, 1]);

            var brushFn = d3.brushX()
                .extent([[-16, 0], [width, height]]);

            var area = d3.area()
                .x(function(d) { return x(d.index); })
                .y0(y(0))
                .y1(function(d) { return y(d.value); })

            var line = d3.line()
                .x(function(d) { return x(d.index); })
                .y(function(d) { return y(d.value); })
                .curve(d3.curveBasis);

            let g = container.append('svg')
                .attr('class', 'trip-svg-' + i)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                    .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            y.domain([0, 100]);
            x.domain([0, 108]);

            g.append('g').call(brushFn);
            g.append("g")
                .attr("class", "axis axis--y")
                .call(d3.axisLeft(y).tickFormat(d3.format('.0f')));

            Object.keys(trip.entropy).forEach(function (model) {
                let line_data = [];
                for (let i = 0; i < trip.entropy[model].length; ++i) {
                    line_data.push({
                        index: i,
                        value: value_scale(trip.entropy[model][i])
                    });
                }
                // Draw line
                g.append("path")
                    .datum(line_data)
                    .attr("class", "line-" + model)
                    .attr("d", area);
            });

            g.append('rect')
                .attr('x', 0)
                .attr('y', y(50))
                .attr('width', width)
                .attr('height', height - y(50))
                .attr('fill', '#C9D2D3')
                .attr('fill-opacity', 0.6);

            g.append('circle')
                .attr('cx', 0)
                .attr('cy', y(50))
                .attr('r', 3)
                .attr('fill', '#252525');

            let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
            let model_colors = ['#e41a1c', '#377eb8', '#4daf4a'];

            $('#tripview-legends').empty();

            for (let i = 0; i < models.length; ++i) {

                let legend_icon = d3.select('#tripview-legends').append('i')
                    .attr('class', 'fas fa-square')
                    .style('cursor', 'pointer')
                    .style('color', model_colors[i]);

                let legend_text = d3.select('#tripview-legends').append('label')
                    .style('cursor', 'pointer')
                    .html('&nbsp;' + models[i] + '&nbsp;&nbsp;');
            }

        }
    }
}*/

/*
export function vis_draw_action(trips, div) {
    // Show nearest point on other trips

    let models = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];
    let model_colors = ['#9d9d9d', '#e41a1c', '#377eb8', '#4daf4a'];

    $('#tripview-legends').empty();

    for (let i = 0; i < models.length; ++i) {

        let legend_icon = d3.select('#tripview-legends').append('i')
            .attr('class', 'fas fa-square')
            .style('cursor', 'pointer')
            .style('color', model_colors[i]);

        let legend_text = d3.select('#tripview-legends').append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + models[i] + '&nbsp;&nbsp;');
    }

    let car_action = ['straight', 'slow_or_stop', 'turn_left', 'turn_right', 'turn_left_slight', 'turn_right_slight'];

    let width = $('#tripview-body').width();
    let height = 150;

    for (let i = 0; i < trips.length; ++i) {

        vis_create_trip_info(trips[i], div, i);
        let keys = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];

        let container = div.append('div')
            .style('width', '100%')
            .style('height', height + 'px');

        let margin = {top: 20, right: 10, bottom: 20, left: 50}
        let svg_width = width - margin.left - margin.right;
        let svg_height = height - margin.top - margin.bottom;

        let svg = container.append('svg')
            .attr('class', 'trip-svg-' + i)
            .attr('width', svg_width + margin.left + margin.right)
            .attr('height', svg_height + margin.left + margin.right)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let actual_action = trips[i].actual.no_slight;

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
            actual: trips[i].actual.no_slight,
            tcnn1: trips[i].predict.tcnn1,
            cnn_lstm: trips[i].predict.cnn_lstm,
            fcn_lstm: trips[i].predict.fcn_lstm
        }

        var brushFn = d3.brushX()
            .extent([[0, 0], [svg_width, svg_height]]);

        svg.append('g').call(brushFn);
        svg.append("g")
            .attr("class", "axis")
            .call(d3.axisLeft(y));

        for (let k = 0; k < keys.length; ++k) {

            let g = svg.append("g")
                .style('opacity', 1)
                .attr('transform', "translate(" + 0 + "," + y(keys[k]) + ")");

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
            if (keys[k] !== 'actual') entropy = trips[i].entropy[keys[k]]

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

                            //g.append('line')
                              //  .style("stroke", model_colors[k])
                                //.style("stroke-width", 2)
                                //.attr("x1", x(j+1))
                                //.attr("y1", 4)
                                //.attr("x2", x(j+1))
                                //.attr("y2", y.bandwidth() - 4);
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

                        //g.append('line')
                          //  .style("stroke", model_colors[k])
                            //.style("stroke-width", 1)
                            //.attr("x1", x(j+1))
                            //.attr("y1", 4)
                            //.attr("x2", x(j+1))
                            //.attr("y2", y.bandwidth() - 4);
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
    }

    function draw_symbol(g, action, x, y, color) {

        let symbol = undefined;
        let rotate = 0;

        if (action === 'slow_or_stop') {
            symbol = d3.symbolCircle;
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
            .attr('d', d3.symbol().size(40).type(symbol))
            .attr('fill', color)
            .attr('stroke', color)
            .attr('stroke-width', 1)
            .attr('transform', function(d) {
                return "translate(" + x + "," + y + ") rotate(" + rotate + ")";
            });
    }
}*/

/*
export function vis_create_trip_info(trip, div, index) {

    let trip_info = div.append('div')
        .style('width', '100%')
        .style('height', '20px')
        .style('font-size', '14px')
        .style('padding-left', '5px')
        .style('line-height', '20px');

    let trip_icon = trip_info.append('i')
        .attr('class', (index === 0) ? 'fas fa-check-square trip-checkbox' : 'fas fa-square trip-checkbox')
        .style('cursor', 'pointer')
        .style('color', '#000')
        .on('click', function() {
            d3.selectAll('.trip-checkbox').classed('fas fa-check-square', false);
            d3.selectAll('.trip-checkbox').classed('fas fa-square', true);

            d3.select(this).attr('class', 'fas fa-check-square trip-checkbox');
            vis_trip_viewer(trip, div, index);
        });

    let trip_text = trip_info.append('label')
        .style('cursor', 'pointer')
        .html('&nbsp;Trip ID: ' + trip.trip_id + '&nbsp;&nbsp;');

    let performances = ['accuracy', 'perplexity', 'f1'];
    let performance_labels = ['Accuracy', 'Perplexity', 'F1'];
    let performance_colors = ['#fb6a4a','#67000d','#a50f15'];

    for (let i = 0; i < performances.length; ++i) {
        let performance = trip[performances[i]].split(',')[0];
        trip_info.append('label')
            .style('margin-left', '2px')
            .style('border-radius', '2px')
            .style('background-color', performance_colors[i])
            .style('color', '#fff')
            .html('&nbsp;' + performance_labels[i] + ': ' + performance + "&nbsp;");
    }

    let others = ['time_of_day', 'scene', 'weather'];
    let other_labels = ['Time', 'Scene', 'Weather'];

    for (let i = 0; i < others.length; ++i) {
        trip_info.append('label')
            .style('margin-right', '2px')
            .style('border-radius', '2px')
            .style('float', 'right')
            .style('background-color', '#C9D2D3')
            .style('color', '#252525')
            .html('&nbsp;' + other_labels[i] + ': ' + trip[others[i]] + "&nbsp;");
    }

    let trip_slider_container = div.append('div')
        .style('width', '100%')
        .style('height', '20px')
        .style('font-size', '14px')
        .style('line-height', '20px')

    let trip_slider = trip_slider_container.append('input')
        .attr('id', 'trip-slider-' + index)
        .attr('class', 'custom-slider')
        .attr('type', 'range')
        .attr('min', 0)
        .attr('max', '107')
        .attr('step', '1')
        .attr('val', 0)
        .style('float', 'left')
        .style('width', 'calc(100% - 60px)')
        .style('height', '1px')
        .style('margin-top', '20px')
        .style('margin-left', '50px')
        .style('margin-right', '10px')
        .style('background', '#252525');

    if (index == 0) {
        vis_trip_viewer(trip, div, index);
    }
}*/

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
        .style('z-index', '9999')
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

    let performances = ['accuracy', 'perplexity', 'f1'];
    let performance_labels = ['Accuracy', 'Perplexity', 'F1'];
    let performance_colors = ['#fb6a4a','#67000d','#a50f15'];

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
            .range([0, 60]);

        for (let i = 0; i < performances.length; ++i) {

            let value = value_scale(trip.performances[performances[i]]);

            let trip_performance = trip_info.append('div')
                .style('width', '60px')
                .style('height', '20px')
                .style('float', 'left')
                .style('font-size', '12px')
                .style('line-height', '20px')
                .style('background-color', '#fff');

            let svg = trip_performance.append('svg')
                .attr('width', '60')
                .attr('height', '20');

            /*
            svg.append('defs')
                .append('pattern')
                    .attr('id', 'diagonalHatch')
                    .attr('patternUnits', 'userSpaceOnUse')
                    .attr('width', 4)
                    .attr('height', 4)
                .append('path')
                    .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
                    .attr('stroke', '#f0f0f0')
                    .attr('stroke-width', 1);*/

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
                .style('font-size', '10px')
                .attr("text-anchor", "start")
                .attr("dy", "0.32em")
                .attr("fill", "#fff")
                .text(value.toFixed(2) + '%');

            /*
            svg.append("rect")
                .attr("x", 0)
                .attr("width", width_scale(value))
                .attr("height", 20)
                .attr('fill', 'url(#diagonalHatch)')
                .attr('stroke', '#f0f0f0')
                .attr('stroke-width', .5);*/
        }
    }

    vis_trips_study(trips[0], 0);
    vis_trip_viewer(trips[0], 0);
    map_draw_trip_in_radius(trips, 0);
    map_draw_selected_trips(trips[0]);
}

export function vis_trip_viewer(trip, index) {

    d3.select('#trip-slider-' + index).property("value", 0);
    //d3.selectAll('.custom-slider').property("disabled", true);
    //d3.select('#trip-slider-' + index).property("disabled", false);

    if (vis_marker) { vis_marker.remove(); }
    vis_marker = new mapboxgl.Marker()
        .setLngLat(trip.locations.coordinates[0])
        .addTo(map_main);

    d3.selectAll('.trip-viewer').remove();

    let viewer = $('<div/>', {
        class: 'trip-viewer'
    }).css({
        width: '400px',
        height: '250px',
        'box-sizing': 'border-box',
        'border': '10px solid #f0f0f0'
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

    //map_main.flyTo({center: trip.locations.coordinates[0], essential: true, zoom:15 });

    let x = d3.scaleLinear()
        .domain([0, 108])
        .range([50, $('#tripview-body').width()]);

    d3.select('#trip-slider-' + index).on("input", function() {

        d3.select('#trip-viwer-image')
            .attr('src', '/frames/' + trip.trip_id + '/' + this.value + '.png');

        d3.selectAll('.trip-video-line').remove();
        d3.selectAll('.trip-svg-' + index).append('line')
            .attr('class', 'trip-video-line')
            .style("stroke", '#fff')
            .style("stroke-opacity", 0.8)
            .style("stroke-width", 1)
            .attr("x1", x(this.value))
            .attr("y1", 10)
            .attr("x2", x(this.value))
            .attr("y2", 300);

        if (vis_marker) { vis_marker.remove(); }
        vis_marker = new mapboxgl.Marker()
            .setLngLat(trip.locations.coordinates[Math.floor(this.value / 3)])
            .addTo(map_main);

        //map_main.flyTo({center: trip.locations.coordinates[Math.floor(this.value / 3)], essential: true, zoom: 15 });
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

    $('#tripview').off('mouseenter').on('mouseover', function () {

    });

    $('#tripview').off('mouseout').on('mouseout', function() {
        /*
        var coordinates = map_circle_polygon.geometry.coordinates[0];
        var bounds = coordinates.reduce(function (bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

        map_main.fitBounds(bounds, {
            zoom: 11
        });*/
    });

    /*
    $('#tripview').on('transitionend', function () {
        vis_trip_detail(trips, trip_container);
    });*/

    /*
    $('#tripview-dropdown').off().on('change', function() {
        $('#tripview-body').empty();
        let trip_container = d3.select('#tripview-body').append('div')
            .style('width', '100%')
            .style('height', total_height + 'px')
            .style('box-sizing', 'border-box');

        //vis_trip_detail(trips, trip_container);
    });*/
}

export function vis_draw_action(trip, div, index) {
    // Show nearest point on other trips

    let models = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];
    let model_colors = ['#9d9d9d', '#e41a1c', '#377eb8', '#4daf4a'];

    $('#tripview-legends').empty();

    for (let i = 0; i < models.length; ++i) {

        let legend_icon = d3.select('#tripview-legends').append('i')
            .attr('class', 'fas fa-square')
            .style('cursor', 'pointer')
            .style('color', model_colors[i]);

        let legend_text = d3.select('#tripview-legends').append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + models[i] + '&nbsp;&nbsp;');
    }

    let car_action = ['straight', 'slow_or_stop', 'turn_left', 'turn_right', 'turn_left_slight', 'turn_right_slight'];

    let width = $('#tripview-body').width();
    let height = 200;

    vis_create_trip_info(trip, div, index);
    let keys = ['actual', 'tcnn1', 'cnn_lstm', 'fcn_lstm'];

    let container = div.append('div')
        .style('width', '100%')
        .style('height', height + 'px');

    let margin = {top: 20, right: 10, bottom: 20, left: 50}
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

    /*
    var brushFn = d3.brushX()
        .extent([[0, 0], [svg_width, svg_height]]);*/
    /*
    svg.append('g').call(brushFn);*/
    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y));

    for (let k = 0; k < keys.length; ++k) {

        let g = svg.append("g")
            .style('opacity', 1)
            .attr('transform', "translate(" + 0 + "," + y(keys[k]) + ")");

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
                        /*
                        g.append('line')
                            .style("stroke", model_colors[k])
                            .style("stroke-width", 2)
                            .attr("x1", x(j+1))
                            .attr("y1", 4)
                            .attr("x2", x(j+1))
                            .attr("y2", y.bandwidth() - 4);*/
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
                    /*
                    g.append('line')
                        .style("stroke", model_colors[k])
                        .style("stroke-width", 1)
                        .attr("x1", x(j+1))
                        .attr("y1", 4)
                        .attr("x2", x(j+1))
                        .attr("y2", y.bandwidth() - 4);*/
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

        if (action === 'slow_or_stop') {
            symbol = d3.symbolCircle;
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
            .attr('d', d3.symbol().size(60).type(symbol))
            .attr('fill', color)
            .attr('stroke', color)
            .attr('stroke-width', 1)
            .attr('transform', function(d) {
                return "translate(" + x + "," + y + ") rotate(" + rotate + ")";
            });
    }
}

export function vis_create_trip_info(trip, div, index)
{

    let others = ['time_of_day', 'scene', 'weather'];
    let other_labels = ['Time', 'Scene', 'Weather'];

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
        .style('width', 'calc(100% - 60px)')
        .style('height', '1px')
        .style('margin-top', '19px')
        .style('margin-left', '50px')
        .style('margin-right', '10px')
        .style('background', '#252525');

    return;
}