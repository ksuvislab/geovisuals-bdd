import { map_get_bbox_polygon } from "./map";

export function filter_bbox_trips(trips)
{
    let bbox = map_get_bbox_polygon();
    let filtered_trips = [];
    for (let i = 0; i < trips.length; ++i) {
        let trip = trips[i];
        let trajectory = trip.locations;
        if (turf.booleanContains(bbox, trajectory)) {
            filtered_trips.push(trip);
        }
    }
    return filtered_trips;
}

/**
 * Filter trips by polygon
 * @param {*} polygon
 * @param {*} trips
 */
export function filter_by_polygon (polygon, trips) {

    let filtered_trips = [];

    for (let i = 0; i < trips.length; ++i) {
        let trajectory_geometry = trips[i].locations;
        if (turf.booleanContains(polygon, trajectory_geometry)) {
            filtered_trips.push(trips[i]);
        }
    }

    return filtered_trips;
}

// Get trip that have all these 3 predictions
export function filter_predicted_trips(trips) {
    let filtered_trips = [];
    for (var i = 0; i < trips.length; ++i) {
        // Get prediction action
        if (trips[i].actual && trips[i].predict && Object.keys(trips[i].predict).length === 3 && trips[i].actual.no_slight) {
            filtered_trips.push(trips[i]);
        }
    }

    return filtered_trips;
}

export function filter_by_nodes(trips, selected_nodes) {
    let filter = {};
    selected_nodes.forEach(function (node) {
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

    return filtered_trips;
}

export function filter_point_on_trips(trips, point) {

    let filtered_trips = [];

    for (let i = 0; i < trips.length; ++i) {

        let trajectory = trips[i].locations.coordinates;
        let line = turf.lineString(trajectory);
        let distance = turf.pointToLineDistance(point, line, {units: 'miles'});
        if (distance >= 0 && distance < 0.05 ) {
            filtered_trips.push(trips[i]);
        }
    }

    return filtered_trips;
}

export function filter_trip_in_radius(trips, polygon) {
    let filtered_trips = [];
    for (let i = 0; i < trips.length; ++i) {
        let trip = trips[i];
        let trajectory = trip.locations;
        if (turf.booleanContains(polygon, trajectory)) {
            filtered_trips.push(trip);
        }
    }
    return filtered_trips;
}