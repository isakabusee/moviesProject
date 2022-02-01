import express from 'express';

import { getTitles } from '../controllers/movies.js';
const router = express.Router();

router.get('/', getTitles);

export default router;