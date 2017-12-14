import express from 'express';
import feedbackController from './feedback.controller.js';

const router = express.Router();

/**
 * API enregistrant un feedback dans le fichier feedback.txt
 */
router.post('/', feedbackController.sendFeedback);

/**
 * API permettant de télécharger le fichier feedback.txt
 */
router.get('/download', feedbackController.downloadFeedback);

export default router;