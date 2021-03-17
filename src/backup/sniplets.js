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