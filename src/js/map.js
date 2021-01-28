import MapboxDraw from "@mapbox/mapbox-gl-draw";

// Public variables
export let map_main = undefined;
export let map_draw = undefined;

// Private Variables
let access_token = 'pk.eyJ1IjoiZGlnaXRhbGtpIiwiYSI6ImNqNXh1MDdibTA4bTMycnAweDBxYXBpYncifQ.daSatfva2eG-95QHWC9Mig';

// Initialize map
export function map_initialize(container_id)
{
    // Add access token
    mapboxgl.accessToken = access_token;
    // Initialize map
    map_main = new mapboxgl.Map({
        container: container_id,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-74.5, 40],
        zoom: 10,
        minZoom:  10,
        maxZoom: 15,
    });
}

// Add draw controls
export function map_add_draw_controls()
{
    // Initialize map draw controls
    map_draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }
    });
    // Add controls to current map
    map_main.addControl(map_draw, 'top-left');
}

// Set map events
export function map_events()
{
    // On drag ended
    map_main.on('dragend', function(e) {
        let bbox_polygon = map_get_bbox_polygon();
        console.log(bbox_polygon);
    });

    // On zoom ended
    map_main.on('zoomend', function(e) {
        let bbox_polygon = map_get_bbox_polygon();
        console.log(bbox_polygon);
        console.log(map_main.getZoom());
    });
}

// Get map viewport bounding box
export function map_get_bbox_polygon()
{
    let bounds = map_main.getBounds();
    var corner_coordinatees = turf.multiPoint([[bounds._ne.lng, bounds._ne.lat], [bounds._sw.lng, bounds._sw.lat]]);
    var bbox = turf.bbox(corner_coordinatees);
    var bbox_polygon = turf.bboxPolygon(bbox);
    return bbox_polygon;
}