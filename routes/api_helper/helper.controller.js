import request from 'request';
import express from 'express';
import config from '../conf/conf';

import cheerio from 'cheerio';
import util from '../handler/utilHandler';

import {
    ObjectId
} from 'mongoskin';

const COLLECTIONSONG = config.database.collection_song;
const _apiYouTubeKey = "AIzaSyD9ospyRhErY0B04kL3BDfa3RzihOcgDgE";


var getInfos = (req, res) => {
    res.json({ msg: 'infos' })
}
/**
 *  API permettant de détecter les liens de preview vide et les remplaces par les preview DEEZER trouvés à partir de l'ISRC
 * @param {*} req 
 * @param {*} res 
 */
const checkPreviewDeezerExist = (req, res) => {
    req.db.collection(COLLECTIONSONG).find({ $and: [{ isrc: { $ne: "" } }, { preview: "" }] }).forEach(function (doc) {
        if (doc) {
            //console.log(doc._id, doc.isrc, doc.preview);
            checkIfDeezerPreviewExist(doc.isrc).then((data) => {
                //console.log(doc.isrc + "/" + data);
                req.db.collection(COLLECTIONSONG).update({ _id: doc._id }, { $set: { "preview": data } });
            });
        }
    });
    res.json({ status: 'lancé', msg: 'checkPreviewDeezerExist' });
}
/**
 * testURLPreviewDeezerExistPromise
 * @param {*} _preview 
 */
const testURLPreviewDeezerExistPromise = (_preview) => {
    //let _url = 'http://e-cdn-preview-5.deezer.com/stream/5374e407f081e434150690076853e6e5-4.mp3';
    //let _url='http://e-cdn-preview-e.deezer.com/stream/e778cf5e7c5e291e80afa7a3b6f5f7b2-3.mp3';
    //let _url='https://api.deezer.com/track/isrc:FRZ040600156';
    return new Promise(function (resolve, reject) {
        request({
            url: _preview
        }, (err, resp, body) => {
            if (!err && resp.statusCode === 200) {
                //reject(false + " : cette preview existe !");
                resolve(false);
            } else {
                //resolve(resp.statusCode+' : '+_preview);
                resolve(true);
            }
        });
    });
}

/**
 * checkIfDeezerPreviewExist
 * @param {*} _isrc 
 */
const checkIfDeezerPreviewExist = (_isrc) => {
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
                    //console.log('invalid json');
                    //reject(e);
                    resolve(false);
                }
            } else {
                resolve(false);
            }
        });
    });
}

/**
 *  API permettant de détecter et remplacer les liens de preview DEEZER null en BD par les preview de l'api DEEZER via leurs ISRC
 */
const updatePreviewDeezerNull = (req, res) => {
    // for preview = null
    //let query = { isrc: { $ne: "" }, preview: { $exists: true, $eq: null } };
    // for preview = "" (empty)
    let query = { isrc: { $ne: "" }, preview: { $exists: true, $eq: "" } };

    let skip = 0;
    let limit = 10;
    let limitMax = 0;
    let _nbUpdated = 0;
    //let timeout = 1000;

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
                                //console.log(i+"/"+tSongs.length+" : "+doc.isrc);
                                /**
                                 * on check dans l'api deezer le preview, s'il existe on le récupère 
                                 */
                                checkIfDeezerPreviewExist(doc.isrc).then(newPreview => {
                                    if (newPreview) {
                                        console.log("(" + i + ") => " + doc.isrc + " / " + doc.preview + " / " + newPreview);
                                        req.db.collection(COLLECTIONSONG).update({ _id: doc._id }, { $set: { "preview": newPreview } });
                                        _nbUpdated++;
                                    }
                                    i++;
                                    loop(i);
                                })
                                /*
                                on compare l'ancien preview avec le nouveau récupéré, s'ils sont différent on met à jour la BD preview
                                */
                                //if (doc.preview != newPreview && newPreview) {}
                                /**
                                 * on teste si la preview .mp3 existe (rep.statusCode == 200) ou non
                                 * - si elle existe, on renvoi rien
                                 * - sinon, on renvoi 'true'
                                 */
                                // testURLPreviewDeezerExistPromise(doc.preview).then((data) => {
                                //     //console.log(data);
                                //     if (!data) {
                                //         //console.log("cette preview existe !");
                                //         i++;
                                //         loop(i);
                                //     } else {
                                //     }
                                // });
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
 * - on récupère les urlYouTube (=youtube_id) de la collection songs
 * - pour chaque urlYouTube, on vérifie s'il existe :
 *      - OUI : on ne fait rien
 *      - NON : on recherche dans les différentes sources (discogs, musicbrainz;)
 */
const getUrlYouTube = (db) => {
    return new Promise(function (resolve, reject) {
        let skip = 0;
        let limit = 100;
        db.collection(COLLECTIONSONG).find({
            urlYouTube: { $ne: "" }
        }, {
                name: 1,
                title: 1,
                albumTitle: 1,
                urlYouTube: 1,
                isrc: 1,
                preview: 1
            }).sort({
                title: 1
            }).skip(skip).limit(limit).toArray((err, tSongs) => {
                //if (err) return res.status(404).json(config.http.error.internal_error_404);
                if (tSongs.length > 0) {
                    //On resolve le artistName
                    resolve(tSongs);
                } else {
                    reject("ErRoR : " + err);
                }
            });
    });
}
/**
 * test si un url YouTube existe ou non
 * 
 * @param {*} _youtubeId
 */
const isUrlYouTubeExist = (_youtubeId) => {
    return new Promise(function (resolve, reject) {
        request({
            url: `https://www.googleapis.com/youtube/v3/videos?part=id&id=${_youtubeId}&key=${_apiYouTubeKey}`
        }, (err, resp, body) => {
            if (!err) {
                let json_data = JSON.parse(body);
                resolve(json_data.items.length > 0);
            } else {
                reject(err);
            }
        });
    });
}

/**
 * API permettant de détecter si un lien YouTube est mort ou non
 */
const checkUrlYouTubeExist = (req, res) => {
    return new Promise(function (resolve, reject) {
        request({
            url: `https://www.googleapis.com/youtube/v3/videos?part=id&id=${req.params.youtubeId}&key=${_apiYouTubeKey}`
        }, (err, resp, body) => {
            if (!err) {
                let json_data = JSON.parse(body);
                resolve(json_data.items.length > 0);
            } else {
                reject(err);
            }
        });
    }).then(function (data) {
        res.json({ isUrlYouTubeExist: data });
    });
}

const getYTarray = (db, _tSongs) => {
    return new Promise(function (resolve, reject) {
        let n = 0;
        for (let i = 0; i < _tSongs.length; i++) {
            isUrlYouTubeExist(_tSongs[i].urlYouTube).then(function (isExist) {
                //if (!isExist) console.log(_tSongs[i].urlYouTube);
                _tSongs[i].urlYouTubeExist = isExist;

                db.collection(COLLECTIONSONG).update({
                    _id: new ObjectId(_tSongs[i]._id)
                }, {
                        $set: {
                            "urlYouTubeExist": isExist
                        }
                    });
                if ((n++) == _tSongs.length - 1) {
                    //res.json({ msg: 'welcome',tSongs:tSongs });
                    resolve(_tSongs);
                }
            })
        }
    });
}

var getYouTubeLinkDead = (req, res) => {
    // 1/ - on récupère les urlYouTube (=youtube_id) de la collection songs
    getUrlYouTube(req.db).then(function (tSongs) {
        // 2/ - pour chaque urlYouTube, on vérifie s'il existe :
        getYTarray(req.db, tSongs).then(function (newTSongs) {
            res.json({ msg: 'welcome', newTSongs: newTSongs });
        });
    });
}


const getYouTubeLinkFromLW = (req, res) => {
    //let url='http://lyrics.wikia.com/wiki/Eric_Clapton:Cocaine';
    let url = `http://lyrics.wikia.com/wiki/${req.params.artistname}:${req.params.songname}`;
    console.log('URL : ' + url);
    return new Promise(async (resolve, reject) => {
        try {
            var body = await requestLyricsWikia(url);
            const $ = cheerio.load(body);
            let urlYouTube = $(".plainlinks:contains('YouTube') a").attr('href');
            if (urlYouTube) return resolve(urlYouTube);
            else resolve(false);
        } catch (err) {
            console.error(err.code + ' ===== getArtistFromCategorie ===== ' + url);
            return reject(false);
        }
    }).then(function (data) {
        res.json({ urlYouTube: data });
    });
}

const getReprises=(req,res)=>{
    
    return new Promise(function (resolve, reject) {
        let skip = 0;
        let limit = 100;
        let query="";
        console.log("-------------------- START REPRISES ! --------------------");

        query={
            title: { $regex : ".*"+(req.params.songname)+"*." },
            lyrics: { $regex : ".*"+(req.params.songlyrics)+"*." }
        };
        // console.log({
        //     songname:req.params.songname,
        //     songwriter:req.params.songwriter,
        //     songreleaseDate:req.params.songreleaseDate,
        //     songlyrics:req.params.songlyrics
        // });
        // if (req.params.songwriter && req.params.songreleaseDate){
        //     console.log('1)');
        //     console.log(req.params.songwriter,req.params.songwriter.split(',').length);
        //     console.log(req.params.songreleaseDate.split(','));
        //     query={
        //         title: { $regex : req.params.songname},
        //         $or:[
        //             {writer: {$in:req.params.songwriter.split(',')}},
        //             {releaseDate: {$in:req.params.songreleasedate.split(',')}}
        //         ],
        //         lyrics: { $regex : req.params.songlyrics}
                
        //     };
        // }else if (req.params.songwriter && req.params.songwriter!='undefined'){
        //     console.log(req.params.songwriter,req.params.songwriter.split(',').length);
        //     query={
        //         title: { $regex : req.params.songname},
        //         writer: {$in:req.params.songwriter.split(',')},
        //         lyrics: { $regex : req.params.songlyrics}
        //     };

        // }else if (req.params.songreleaseDate && req.params.songreleaseDate!='undefined'){
        //     console.log('3)');
        //     console.log(req.params.songreleaseDate.split(','));
        //     query={
        //         title: { $regex : req.params.songname},
        //         releaseDate: {$in:req.params.songreleasedate.split(',')},
        //         lyrics: { $regex : req.params.songlyrics}
        //     };
        // }else{
        //     console.log('4)');
        //     query={
        //         title: { $regex : req.params.songname},
        //         lyrics: { $regex : req.params.songlyrics}
        //     };

        // }
        console.log(query);
        console.log("-------------------- END REPRISES ! --------------------");
        req.db.collection(COLLECTIONSONG).find(query, {
                name: 1,
                title: 1,
                albumTitle: 1,
                preview:1
            }).sort({
                preview: -1
            }).skip(skip).limit(limit).toArray((err, tSongs) => {
                //if (err) return res.status(404).json(config.http.error.internal_error_404);
                if (tSongs.length > 0) {
                    //On resolve le artistName
                    resolve(tSongs);
                } else {
                    reject("ErRoR : " + err);
                }
            });
    }).then(data=>{
        console.log("-------------------- RESULT REPRISES ! --------------------");
        console.log(data);
        console.log("-------------------- END RESULT REPRISES ! --------------------");
        res.json({res:data});
    })
}

/**
 * 
 * @param {*} url 
 */
var requestLyricsWikia = (url) => {
    return new Promise((resolve, reject) => {
        var nbTry = 0;
        (function requestProcess(url) {
            // tor_request.renewTorSession((err) => {
            // if (err) console.error("Error: renewTorSession", err.errno, err.syscall, err.address, err.port, url);
            // tor_request.
            try {
                request(url, {
                    timeout: 20000
                }, (err, res, body) => {
                    //Voir les condition de reject et resolve
                    // console.log(res.statusCode);
                    if (!err && res.statusCode == 200) return resolve(body);
                    else if (err) {
                        if (nbTry == 5) return reject(`Error too many try: requestLyricsWikia = ${url} ${err}`);
                        nbTry++;
                        setTimeout(() => requestProcess(url), 1000);
                    } else {
                        return reject(`Error: requestLyricsWikia status : ${res.statusCode} ${url}`);
                    }
                });
            } catch (error) {
                console.log("_______________________________________________________________");
                console.log("______________CATCH requestLyricsWikia = " + error);
                console.log("_______________________________________________________________");
            }
            // });
        })(url)
    })
};

exports.getInfos = getInfos;
exports.getYouTubeLinkDead = getYouTubeLinkDead;
exports.checkPreviewDeezerExist = checkPreviewDeezerExist;
exports.updatePreviewDeezerNull = updatePreviewDeezerNull;
exports.getYouTubeLinkFromLW = getYouTubeLinkFromLW;
exports.checkUrlYouTubeExist = checkUrlYouTubeExist;
exports.getReprises = getReprises;