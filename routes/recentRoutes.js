import express from 'express';
import { getRecentUrls } from '../controllers/recentController.js';

const router = express.Router();
router.get('/recent', getRecentUrls);

export default router;
