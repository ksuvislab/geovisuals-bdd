import express from 'express';
import {
    query_all,
    query_all_streets,
    query_count,
    query_find_intersection,
    query_find_roadnetwork_intersection
} from './query';

const router = express.Router();
router.route('/queryCount').get(query_count);
router.route('/queryFindIntersection').get(query_find_intersection);
router.route('/queryAll').get(query_all);
router.route('/queryAllStreets').get(query_all_streets);
router.route('/queryRoadnetwork').get(query_find_roadnetwork_intersection);

export default router;