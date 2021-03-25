import express from 'express';
import {
    query_all,
    query_bbox_trips,
    query_all_streets,
    query_steets_by_tripids,
    query_count,
    query_find_intersection,
    query_find_roadnetwork_intersection
} from './query';

const router = express.Router();
router.route('/queryCount').get(query_count);
router.route('/queryFindIntersection').get(query_find_intersection);

// Trip queries
router.route('/queryAll').get(query_all);
router.route('/queryBboxTrips').get(query_bbox_trips);

// Street queries
router.route('/queryAllStreets').get(query_all_streets);
router.route('/queryStreetByTripIds').get(query_steets_by_tripids);


router.route('/queryRoadnetwork').get(query_find_roadnetwork_intersection);

export default router;