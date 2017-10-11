/**
 * mergedb.js a pour but d'ajouter dans la BDD local les ajouts effectués par michel sur la BDD du serveur.
 * mergedb.js ne doit pas être utilisé sur le serveur car il risque d'entrainer une baisse des performances
 * avant d'utiliser mergedb.js assurez-vous d'avoir importé un dump récent de la BDD du serveur (mongorestore wasabi_server) pour cela :
 *  - importer votre base du serveur : sur le serveur taper la commande suivante dans le dossier wasabi_project/mongo/backup_mongo_tmp: mongodump --out wasabi_server
 *  - un dump de la BDD sur le serveur est maintenant disponible dans le dossier wasabi_project/mongo/backup_mongo_tmp
 * transferer ce dump en local dans le dossier local : wasabi_project/mongo/backup_mongo_tmp
 *  - Pour restaurer la BDD du serveur en local, taper la commande suivante dans le dossier wasabi_project/mongo/backup_mongo_tmp : mongorestore --db wasabi_server wasabi_server/wasabi
 */

import express from 'express';
import mergedbController from './mergedb.controller.js';
const router = express.Router();
/**
 * Permet de merge les lyrics ayant un probléme de droit d'auteur en local mais avec des paroles sur le serveur
 */
router.get('/song/lyricsnotlicensed',mergedbController.get_SongLyricsnotlicensed);
/**
 * Permet de merge les lyrics de la BDD local avec les lyrics de la BDD du serveur
 */
router.get('/song/lyrics',mergedbController.get_SongLyrics);

export default router;