import request from 'request';
import config from '../conf/conf';
import fs from 'fs';
import readline from 'readline';
import _stream from 'stream';

const COLLECTIONSONG = config.database.collection_song;

var getInfos = (req, res) => {
    res.json({ services: [
        '/update_preview_deezer', 
        '/put_chords_deezer', 
        '/get_chords_deezer/:id_song_deezer'] })
}

/**
 * API permettant de détecter et remplacer les liens de preview DEEZER null en BD par les preview de l'api DEEZER via le ISRC
 */
const update_preview_deezer = (req, res) => {
    let query = { isrc: { $ne: "" }, preview: { $exists: true, $eq: "" } };
    let skip = 0;
    let limit = 10;
    let limitMax = 0;
    let _nbUpdated = 0;

    /**
     * On compte le nombre de songs dont le champ preview est null
     * La valeur sera la limitMax qui correspondra au nombre de requêtes à ne pas dépasser
     */
    req.db.collection(COLLECTIONSONG).count(query, function (err, nbSong) {
        limitMax = nbSong;
        console.log("Total traitement : " + limitMax + " songs with preview=null");

        /**
         * Le traitement sera effectué en boucle par bloc de limit=10 songs jusqu'à la limitMax
         * Pour chacun de ces 10 songs :
         *      - on check si la preview existe dans l'api DEEZER à l'aide de l'ISRC du song :
         *          - si OUI, on met à jour le champ preview dans la BD
         *          - si NON, on ne fait rien
         */
        (function fetchSong(skip) {
            var nb = 0;
            if (skip < limitMax) {
                new Promise(function (resolve, reject) {
                    req.db.collection(COLLECTIONSONG).find(query).skip(skip).limit(limit).toArray(function (err, tSongs) {
                        var i = 0;
                        (function loop(i) {
                            var doc = tSongs[i];
                            nb++;
                            if (nb == tSongs.length) {
                                resolve(nb);
                            } else if (!doc) {
                                i++;
                                loop(i);
                            } else {
                                // on check dans l'api deezer le preview, s'il existe on le récupère 
                                get_preview_deezer(doc.isrc).then(newPreview => {
                                    if (newPreview) {
                                        console.log("(" + i + ") => " + doc._id + " / " +  doc.isrc + " / " + doc.preview + " / " + newPreview);
                                        req.db.collection(COLLECTIONSONG).update({ _id: doc._id }, { $set: { "preview": newPreview } });
                                        _nbUpdated++;
                                    }
                                    i++;
                                    loop(i);
                                })
                            }
                        })(i);
                    })
                }).then((nb) => {
                    console.log(nb + "-----------------------{ " + skip + "/" + limitMax + " }-----------------------");
                    skip += limit;
                    fetchSong(skip);
                })
            } else {
                console.log("===================> END {" + skip + "/" + limitMax + " } <===================");
                res.json({ msg: 'mission completed', nbUpdated: _nbUpdated });
            }
        })(skip);
    });
}

/**
 * Récupération du preview via l'isrc à l'aide de l'api deezer
 * entrée:
 * - isrc
 * sortie:
 * - preview ou rien
 * @param {*} _isrc 
 */
const get_preview_deezer = (_isrc) => {
    return new Promise(function (resolve, reject) {
        let _url = `https://api.deezer.com/track/isrc:${_isrc}`;
        request({
            url: _url
        }, (err, resp, body) => {
            if (!err) {
                try {
                    let json_data = JSON.parse(body);
                    if (json_data.preview && json_data.preview != "") {
                        resolve(json_data.preview);
                    } else if (json_data.alternative.preview && json_data.alternative.preview != "") {
                        console.log('preview founded in alternative field');
                        resolve(json_data.alternative.preview);
                    }
                    else resolve(false);
                }
                catch (e) {
                    resolve(false);
                }
            } else {
                resolve(false);
            }
        });
    });
}

var put_chords_deezer = (req, res) => {
    processFile(req, './mongo/deezer/deezer-ids-with-chords.txt');
    return res.json({
        msg: "hello: chords are downloading ... see console!"
    });
}

let processFile = async (req, inputFile) => {
    let instream = fs.createReadStream(inputFile);
    let outstream = new (_stream)();
    let _tabDeezerIDs = [];
    let _result;
    let _result_b;
    let _result_c;
    let rl = readline.createInterface(instream, outstream);
    // line per line
    rl.on('line', (_idDeezer) => {
        _tabDeezerIDs.push(_idDeezer);
    });
    rl.on('close', async (line) => {
        console.log(`[[[[[[[[[ done reading file => {${_tabDeezerIDs.length} deezer ids} ]]]]]]]]]]]]]`);

        for (const key in _tabDeezerIDs) {
            _result = await get_song_wasabi(req, _tabDeezerIDs[key]);
            if (!_result) console.log(`${key}> id_song_deezer NOT EXIST IN DB`);
            else if (!_result.chords_metadata) {
                _result_b = await get_chords_metadata(_result.id_song_deezer);
                if (_result_b) {
                    _result_c = await update_chords_wasabi(req, _result.id_song_deezer, _result_b);
                    console.log(`${key}>`, _result.id_song_deezer, _result_b._id, _result_c);
                }
            } else {
                console.log(`${key}> chords_metadata already exist`);
            }
        }
    });
}

const get_song_wasabi = (req, _idDeezer) => {
    return new Promise(resolve => {
        req.db.collection(COLLECTIONSONG).findOne({ id_song_deezer: _idDeezer }, { id_song_deezer: 1, chords_metadata: 1 }, (err, objSong) => {
            if (!objSong || err) resolve(false);
            else resolve(objSong);
        });
    });
}

const get_chords_metadata = (_idDeezer) => {
    return new Promise(resolve => {
        request({
            url: `https://audio-analysis.eecs.qmul.ac.uk/function/deezer-analysis/chords?apikey=qmwZkCq6LtdPjQ6vA0Yy8oVjQXWTri5c&id=deezer:${_idDeezer}`
        }, (err, resp, body) => {
            if (err) resolve(false);
            else {
                try {
                    let json_data = JSON.parse(body);
                    if (json_data) resolve(json_data);
                    else resolve(false);
                }
                catch (e) {
                    resolve(false);
                }
            }
        });
    });
}

const update_chords_wasabi = (req, _idSongDeezer, _jsonChords) => {
    return new Promise(resolve => {
        req.db.collection(COLLECTIONSONG).updateMany({ id_song_deezer: _idSongDeezer }, { $set: { chords_metadata: _jsonChords } }, (err, song) => {
            if (err) resolve(false);
            else resolve(true);
        });
    });
}

const get_chords_deezer = (req, res) => {
    var db = req.db;
    let _idDeezer = req.params.id_song_deezer;
    req.db.collection(COLLECTIONSONG).findOne({ id_song_deezer: _idDeezer }, { id_song_deezer: 1, chords_metadata: 1 }, (err, objSong) => {
        if (!objSong || err) return res.status(404).json(config.http.error.artist_404);
        return res.json(objSong.chords_metadata)
    });
}

exports.getInfos = getInfos;
exports.update_preview_deezer = update_preview_deezer;
exports.put_chords_deezer = put_chords_deezer;
exports.get_chords_deezer = get_chords_deezer