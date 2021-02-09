import { map_model_colors, map_filter_all_trips } from "./map";

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