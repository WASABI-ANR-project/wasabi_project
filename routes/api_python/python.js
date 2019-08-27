import express from 'express';
import pythonController from './python.controller.js';

const router = express.Router();

// API for python
router.get('/getAlbum/:albumTitle', pythonController.getAlbum);

export default router;