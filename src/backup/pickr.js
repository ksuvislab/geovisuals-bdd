/*
        let colorpicker = div.append('div')
            .attr('id', 'trip-color-picker')
            .style('width', '20px')
            .style('height', '15px')
            .style('float', 'left')
            .style('line-height', '14px')
            .style('font-size', '14px');

        const pickr = Pickr.create({
            el: '#trip-color-picker',
            theme: 'nano',
            default: 'blue',
            swatches: [],
            components: {
                preview: true, opacity: false, hue: true
            },
            interaction: {
                hex: true, rgba: false, hsla: false, hsva: false,
                cmyk: false, input: false, clear: false, save: false
            }
        });
        $('.pickr button').css({ width: '100%', height: '20px' });
        $('.pickr').off().on('click', function(e) { e.stopPropagation(); });
        pickr.on('change', function(instance) {
            // Change transcript colors
            let hex_color = instance.toHEXA().toString();
            pickr.setColor(hex_color);
            if (map_main.getLayer('trip-filtered-trajectory')) {
                map_main.setPaintProperty('trip-filtered-trajectory', 'line-color', hex_color);
            }
        });*/