import express from 'express';
import {
    query_all,
    query_count,
    query_find_intersection
} from './query';

const router = express.Router();
router.route('/queryCount').get(query_count);
router.route('/queryFindIntersection').get(query_find_intersection);
router.route('/queryAll').get(query_all);

export default router;