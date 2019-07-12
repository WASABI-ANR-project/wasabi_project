import express from 'express';
import extractdeezerController from './extractdeezer.controller.js';

const router = express.Router();

/**
 * API par défault
 */
router.get('/', extractdeezerController.getInfos);

/**
 * API permettant de détecter et remplacer les liens de preview DEEZER null en BD par les preview de l'api DEEZER via le ISRC
 */
router.get('/update_preview_deezer', extractdeezerController.update_preview_deezer);
/**
 * API permettant d'afficher d'enregistrer la suite d'accords d'une chanson depuis l'api deezer
 */
router.get('/put_chords_deezer', extractdeezerController.put_chords_deezer);
/**
 * API permettant d'afficher la suite d'accords d'une chanson
 */
router.get('/get_chords_deezer/:id_song_deezer', extractdeezerController.get_chords_deezer);
export default router;