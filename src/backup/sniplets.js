// Draw symbol scatter plot with legends
export function vis_scatter_plot(container_id)
{
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scaleLinear()
        .range([0, width]);

    var y = d3.scaleLinear()
        .range([height, 0]);

    // creates a generator for symbols
    var symbol = d3.symbol().size(100);

    var svg = d3.select("#" + container_id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var borderPath = svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", height)
        .attr("width", width)
        .style("stroke", '#000')
        .style("fill", "none")
        .style("stroke-width", 1);

    d3.json('./center_crime_locations_pca_tsne.json').then(function(data) {
        console.log(data);
        x.domain(d3.extent(data, function(d){
            return d.px;
        })).nice();

        y.domain(d3.extent(data, function(d){
            return d.py;
        })).nice();

        svg.selectAll(".symbol")
            .data(data)
        .enter().append("path")
            .attr('class', 'symbol')
            .attr('d', function(d) {
                return (d.label === 0) ? symbol.type(d3.symbolSquare)() : symbol.type(d3.symbolTriangle)();
            })
            .style('fill', function(d) {
                return (d.label === 0) ? '#d73027' : '#1a9850';
            })
            .style('opacity', 0.7)
            .attr("transform", function(d) {
                return "translate(" + x(d.px) + "," + y(d.py) +")";
            });

        var legend = svg.selectAll(".legend")
            .data([0, 1])
            .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) {
                    return 'translate(0' + ',' + i * 20 + ')'; });

        legend.append("path")
            .style("fill", function(d) { return (d === 0) ? '#d73027' : '#1a9850';  })
            .attr('d', function(d) {
                return (d === 0) ? symbol.type(d3.symbolSquare)() : symbol.type(d3.symbolTriangle)();
            })
            .style('opacity', 0.7)
            .attr("transform", function(d, i) {
                return "translate(" + (width -10) + "," + 10 + ")";
            });

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return (d === 0)? 'High crime' : 'Lower crime'; });
    });
}


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
}


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
}

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
}


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

export function vis_parallelsets (trips, container_id) {

    // need to preprocess this
    //let data = preprocess(trips);
    let data = trips;
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
    //add_dimension_list(data, keys, container_id);
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
        //let margin = {top: 20, right: 10, bottom: 20, left: 10};
        /*
        let width = $('#' + container_id).width();
        let height = $('#' + container_id).height();

        var chart = d3.parsets()
            .width(width)
            .height(height)
            .dimensions(dimensions)
            .tension(0.7);

        d3.select('#' + container_id).select('svg').remove();

        let svg = d3.select('#' + container_id).append('svg')
                .attr('width', chart.width())
                .attr('height', chart.height())

        svg.datum(data).call(chart);

        svg.selectAll(".category text")
            .attr('font-size', '10px');

        svg.selectAll("text.dimension")
            .attr('font-size', '12px')*/

        let margin = {top: 10, right: -30, bottom: 20, left: 0};
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

        /*
        chart.on('sortDimensions', function () {
            change_dimensions();
        });

        chart.on('sortCategories', function () {
            change_categories();
        });*/

        svg.selectAll(".category text")
            .attr('font-size', '10px')
            .attr("dy", "1em")
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
            .attr("dy", "1em")
            .attr('opacity', '0');

        svg.selectAll("text.dimension .sort.size")
            .attr("dx", "1em")
            .attr('opacity', 0);
            /*
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
            });*/

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
        //vis_representative_images(filtered_trips, undefined, 'streetview-body');

        map_show_filtered_trips(filtered_trips);
        main_set_maplayer_index();
    }

    function reset_filter() {
        //vis_area_study(trips, 'tripview-body');
        vis_model_cases(trips, 'model-cases-body');
        //vis_representative_images(trips, undefined, 'streetview-body');

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

export function vis_trip_filter(trips, container_id)
{
    //console.log(trips);
    let keys = ['time_of_day', 'scene', 'weather', 'accuracy', 'perplexity'];
    let key_values = ['Time Of Day', 'Street Type', 'Weather', 'Accuracy (%)', 'Perplexity (%)'];
    let processed_trips = preprocess(trips);
    let graph = get_graph(keys, processed_trips);

    // Clear container
    $('#' + container_id).empty();

    let nodes = graph.nodes;
    let width = $('#' + container_id).width();
    let height = $('#' + container_id).height();
    let color_range = d3.scaleLinear()
        .domain([0, trips.length])
        .range(['#dadaeb','#807dba']);

    // Create each container
    let sub_height = height / Object.keys(keys).length;
    let filter = {};

    $('#dataview-title').html('TRIP FILTER WITH SPATIAL CONDITION<br>Selected total <font color="blue">' + trips.length + '</font> trips');


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
            .style('height', '14px')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px')
            .style('line-height', '14px')
            .style('text-align', 'center')
            .html(key_values[i]);

        let key_body = key_container.append('div')
            .style('width', '100%')
            .style('height', 'calc(100% - 14px)')
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
                    update_filter(filter, trips, keys[i]);

                } else {
                    item_rect.style('border', '1px solid #252525');
                    item_rect.classed('active', true);

                    if (!(keys[i] in filter)) {
                        filter[keys[i]] = [];
                        filter[keys[i]].push(key_items[k]);
                    } else {
                        filter[keys[i]].push(key_items[k]);
                    }
                    update_filter(filter, trips, keys[i]);
                }
            });
            // Adding all filter here
            filter[keys[i]].push(key_items[k]);
        }
    }

    //console.log(filter);


    // Get selection
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

    // Update other views here
    function update_filter(filter, trips, key_type) {

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

        if (key_type !== 'accuracy' && key_type !== 'perplexity') {
            vis_parallelsets(filtered_trips, 'dataview-summary-body');
        }
        //$('#dataview-summary').html(display_summary);

        // Draw map here
        map_show_filtered_trips(filtered_trips);
        vis_model_cases(filtered_trips, 'model-cases-body');

        return;
    }
}

/*
export function util_map_matching(trip)
{
    var profile = "driving";
    var coords = trip.locations.coordinates;
    var newCoords = coords.join(';')
    var radius = [];
    coords.forEach(element => {
      radius.push(25);
    });
    getMatch(newCoords, radius, profile);

    function getMatch(coordinates, radius, profile) {

        var radiuses = radius.join(';')
        // Create the query
        var query = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=true&access_token=' + map_access_token;

        $.ajax({
            method: 'GET',
            url: query
        }).done(function(data) {
            console.log(data);
            // Get the coordinates from the response
            //var coords = data.matchings[0].geometry;
            //console.log(coords);
        });
    }
}*/
