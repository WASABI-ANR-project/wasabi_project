import express from 'express';
import helperController from './helper.controller.js';

const router = express.Router();

/**
 * API par défault
 */
router.get('/', helperController.getInfos);

/**
 * API permettant de détecter les liens de preview vide et les remplaces par les preview DEEZER trouvés à partir de l'ISRC
 */
router.get('/checkPreviewDeezerExist', helperController.checkPreviewDeezerExist);

/**
 * API permettant de détecter et remplacer les liens de preview DEEZER null en BD par les preview de l'api DEEZER via leurs ISRC
 */
router.get('/updatePreviewDeezerNull', helperController.updatePreviewDeezerNull);

/**
 * API permettant d'afficher les liens de YOUTUBE morts
 */
router.get('/getYouTubeLinkDead', helperController.getYouTubeLinkDead);

/**
 * API permettant de récupérer le champ "YouTube" de LyricsWikia
 */
router.get('/getYouTubeLinkFromLW/:artistname/:songname', helperController.getYouTubeLinkFromLW);


/**
 * API permettant de détecter si un lien YouTube est mort ou non
 */
router.get('/checkUrlYouTubeExist/:youtubeId', helperController.checkUrlYouTubeExist);

/**
 * API permettant de trouver des reprises
 */
//router.get('/getReprises/:songname/:songwriter/:songreleasedate/:songlyrics', helperController.getReprises);
router.get('/getReprises/:songname/:songlyrics', helperController.getReprises);

export default router;