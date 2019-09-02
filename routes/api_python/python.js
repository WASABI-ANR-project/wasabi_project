import express from 'express';
import pythonController from './python.controller.js';

const router = express.Router();

// API for python
router.get('/:idSong', pythonController.getAlbum);

export default router;