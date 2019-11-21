import express from 'express';
import extracttimesideController from './extracttimeside.controller.js';

const router = express.Router();

// API for python
router.get('/:idSong', extracttimesideController.getAnalysis);

export default router;