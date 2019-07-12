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
 * API permettant d'enregistrer la suite d'accords d'une chanson depuis l'api deezer
 */
router.get('/put_chords_deezer', extractdeezerController.put_chords_deezer);

//==========================================================================================================================\\
//=========================================API REST POUR AFFICHER LA SUITE D'ACCORDS D'UNE CHANSON =======================================\\
//==========================================================================================================================\\
/**
 * @api {get} extractdeezer/get_chords_deezer/:id_song_deezer Song - Get chords of a song
 * @apiExample Example usage: 
 *      wasabi.i3s.unice.fr/extractdeezer/get_chords_deezer/263319
 * @apiVersion 1.0.0
 * @apiName get_chords_deezer
 * @apiGroup Api/v1
 * 
 * @apiParam {String} id_song_deezer Song's deezer id
 *
 * @apiSuccessExample Success-Response for an artist:
    HTTP/1.1 200 OK
    {
        "confidence": 0.6385746606334841,
        "duration": 176.71943310657596,
        "chordSequence": [
        {
            "start": 0,
            "end": 2.25,
            "label": "Bbmin7"
        },
        {
            "start": 2.25,
            "end": 5.3500000000000005,
            "label": "Ab7"
        },
        {
            "start": 5.3500000000000005,
            "end": 7.550000000000001,
            "label": "Bbmin7"
        },
        {
        ...
        }
    }
 * @apiError error the database does not respond.
 * @apiErrorExample Error-Response internal error:
    HTTP/1.1 404 Not Found
    {
        "error": "An internal error occurred"
    }
 */
router.get('/get_chords_deezer/:id_song_deezer', extractdeezerController.get_chords_deezer);
export default router;