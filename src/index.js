import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import './css/main.css';

import {
    map_main,
    map_initialize,
    map_add_draw_controls,
    map_events
} from './js/map';
import {
    util_axios_interceptors
} from './js/utils';

// Initialize map
map_initialize('map');
// Fire when map finished loading
map_main.on('load', function() {
    // Initialize all map components
    map_add_draw_controls();
    map_events();
    util_axios_interceptors();
});