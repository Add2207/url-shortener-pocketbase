import express from 'express';
import { batchShorten } from '../controllers/batchController.js';

const router = express.Router();
router.post('/batch', batchShorten);

export default router;
