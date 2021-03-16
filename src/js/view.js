import { map_visualize_background } from './map';

let $loading_screen = $('#loading');

export function view_show_loading()
{
    return $loading_screen.css({ display: 'flex '});
}

export function view_close_loading()
{
    return $loading_screen.hide();
}

export function view_create_map_legends(map_container_id, street_data)
{

    let models = ['tcnn1', 'cnn_lstm', 'fcn_lstm'];
    let model_colors = ['#e41a1c', '#377eb8', '#4daf4a'];
    let action_labels = ['straight(▲)', 'slow/stop(●)', 'turn left(◀)', 'turn right(▶)'];
    let actions = ['straight', 'slow_or_stop', 'turn_left', 'turn_right'];
    let layers = ['Density', 'Accuracy', 'F1', 'Perplexity'];
    let layer_values = ['Density', 'accuracy', 'f1', 'entropy'];

    let legends_filter = {
        models: Array.from(models),
        actions: Array.from(actions),
        layers: layers[0]
    }

    let legends = d3.select('#' + map_container_id).append('div')
        .style('position', 'absolute')
        .style('width', 'auto')
        .style('height', 'auto')
        .style('background', 'rgba(255, 255, 255, 0.8)')
        .style('padding', '5px')
        .style('top', '7px')
        .style('left', '50px');

    for (let i = 0; i < models.length; ++i) {

        let models_selection = legends.append('div')
            .attr('class', 'active')
            .style('cursor', 'pointer')
            .style('width', 'auto')
            .style('font-size', '14px')
            .style('height', '16px')
            .style('float', 'left')
            .style('padding-left', '2px')
            .style('padding-right', '2px')
            .style('line-height', '16px')
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
                update_map();
            } else {
                models_selection.classed('active', true);
                model_icon.classed('fas fa-square', false);
                model_icon.classed('fas fa-check-square', true)
                legends_filter.models.push(models[i]);
                update_map();
            }
        });
    }

    // Add new line
    legends.append('br');

    // Add actions selection
    for (let i = 0; i < actions.length; ++i) {

        let actions_selection = legends.append('div')
            .attr('class', 'active')
            .style('cursor', 'pointer')
            .style('width', 'auto')
            .style('font-size', '14px')
            .style('height', '16px')
            .style('float', 'left')
            .style('padding-left', '2px')
            .style('padding-right', '2px')
            .style('line-height', '16px');

        let action_icon = actions_selection.append('i')
            .attr('class', 'fas fa-check-square')
            .style('color', '#000');

        let action_label = actions_selection.append('label')
            .style('cursor', 'pointer')
            .html('&nbsp;' + action_labels[i]);

        actions_selection.on('click', function() {
            if (actions_selection.classed('active')) {
                actions_selection.classed('active', false);
                action_icon.classed('fas fa-check-square', false);
                action_icon.classed('fas fa-square', true);
                legends_filter.actions.splice(legends_filter.actions.indexOf(actions[i]),1);
                update_map();
            } else {
                actions_selection.classed('active', true);
                action_icon.classed('fas fa-square', false);
                action_icon.classed('fas fa-check-square', true);
                legends_filter.actions.push(actions[i]);
                update_map();
            }
        });
    }

    legends.append('br');

    // Add drop down
    let dropdown_div = legends.append('div')
            .style('width', 'auto')
            .style('height', '16px')
            .style('line-height', '16px')
            .style('box-sizing', 'border-box')
            .style('font-size', '14px');

    let dropdown_label = dropdown_div.append('label')
        .style('width', 'auto')
        .style('height', '100%')
        .style('float', 'left')
        .html('Layers:&nbsp;&nbsp;');

    let dropdown_select = dropdown_div.append('select')
        .attr('id', 'layer-dropdown')
        .style('width', '100px')
        .style('height', '100%')
        .style('border', 'none')
        .style('float', 'left')
        .style('border-bottom', '1px solid #000')
        .style('background-color', '#f0f0f0')
        .style('float', 'left');

    for (let i = 0; i < layer_values.length; ++i) {
        dropdown_select.append('option')
            .attr('value', layer_values[i])
            .html(layers[i]);
    }

    dropdown_select.on('change', function () {
        let value = $('#layer-dropdown').val();
        legends_filter.layers = value;
        update_map();
    });

    // Set default value
    dropdown_select.node().value = layer_values[0];
    // Call to visualize map
    update_map();

    function update_map() {
        map_visualize_background(legends_filter, street_data);
    }

    return;
}