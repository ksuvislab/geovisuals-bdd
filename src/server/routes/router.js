import express from 'express';
import {
    query_find_intersection
} from './query';

const router = express.Router();
router.route('/queryFindIntersection').get(query_find_intersection);

export default router;