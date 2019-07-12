import express from 'express';
import extractDiscoveryhubController from './extractdiscoveryhub.controller.js';

const router = express.Router();

router.get('/',extractDiscoveryhubController.getInfos);

// API permettant d'afficher les points commun entre 2 artistes
router.get('/link/:elementA/:elementB', extractDiscoveryhubController.getCommonalities);

// API permettant d'afficher les suggestions proposé par Discoveryhub concernant l'élément recherché
router.get('/suggestions/:element', extractDiscoveryhubController.getSuggestions);

// API listant les recommendations discoveryhub
router.get('/semreco/:element', extractDiscoveryhubController.getRecommendations);

export default router;