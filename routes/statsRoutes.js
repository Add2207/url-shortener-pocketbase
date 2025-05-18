import express from 'express';
import { getActiveStats } from '../controllers/statsController.js';

const router = express.Router();
router.get('/active', getActiveStats);

export default router;
