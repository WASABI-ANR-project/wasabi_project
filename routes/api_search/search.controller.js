import passport from 'passport';
import searchHandler from './search.handler.js';
import elasticSearchHandler from '../handler/elasticSearchHandler.js';
import config from '../conf/conf';
import {
    ObjectId
} from 'mongoskin';
const COLLECTIONARTIST = config.database.collection_artist;
const COLLECTIONALBUM = config.database.collection_album;
const COLLECTIONSONG = config.database.collection_song;
const LIMIT = config.request.limit;
const COPYRIGHT_CONTENT = "<br> <br><b><i>... Due to copyright reason <br>we limit the display of lyrics to 10% of text.</i></b>"

var get_collectionByCategoryAndLetter = (req, res, next) => {
    var tObjectRequest, skip, tParamToFind;
    var nomCategorie = req.params.nomCategorie.toLowerCase(),
        lettre = req.params.lettre,
        numPage = req.params.numPage,
        db = req.db,
        numPageTest = parseInt(numPage),
        objSend = {
            limit: LIMIT
        };
    //Si le numéro de page est un entier supérieur a 0 et qu'il y a moins de 3 lettres dans :lettre, on ne verifie pas si la variable lettre est un nombre car l'utilisateur doit aussi chercher par nombre s'il le souhaite
    if (Number.isInteger(numPageTest) && numPageTest >= 0 && lettre.length <= 2) {
        skip = numPage * LIMIT;
        tParamToFind = searchHandler.optimizeFind(lettre);
    } else {
        nomCategorie = "default";
    }
    switch (nomCategorie) {
        case "artist":
        case "artists":
            tObjectRequest = searchHandler.constructData("name", tParamToFind);
            db.collection(COLLECTIONARTIST).find({
                $or: tObjectRequest
            }, {
                    "name": 1
                }).skip(skip).limit(LIMIT).toArray((err, artists) => {
                    if (err) return res.status(404).json(config.http.error.artist_404);
                    objSend.artists = artists;
                    return res.json(objSend);
                });
            break;
        case "album":
        case "albums":
            tObjectRequest = searchHandler.constructData("title", tParamToFind);
            db.collection(COLLECTIONALBUM).aggregate([{
                "$match": {
                    $or: tObjectRequest
                }
            }, {
                "$skip": skip
            }, {
                "$limit": LIMIT
            }, {
                $project: {
                    "titleAlbum": "$title",
                    "name": 1
                }
            }], (err, albums) => {
                if (err) return res.status(404).json(config.http.error.album_404);
                objSend.albums = albums;
                return res.json(objSend);
            });
            break;
        case "song":
        case "songs":
            tObjectRequest = searchHandler.constructData("title", tParamToFind);
            db.collection(COLLECTIONSONG).aggregate([{
                "$match": {
                    $or: tObjectRequest
                }
            }, {
                "$skip": skip
            }, {
                "$limit": LIMIT
            }, {
                $project: {
                    "albumTitle": 1,
                    "name": 1,
                    "titleSong": "$title"
                }
            }], (err, songs) => {
                if (err) return res.status(404).json(config.http.error.song_404);
                objSend.songs = songs;
                return res.json(objSend);
            });
            break;
        default:
            return res.status(404).json(config.http.error.global_404);
    }
};

var get_category = (req, res) => {
    var collection = req.params.collection;
    if (collection !== COLLECTIONARTIST && collection !== COLLECTIONALBUM && collection !== COLLECTIONSONG) return res.status(404).json(config.http.error.global_404);
    var categoryName = req.params.categoryName,
        projection = {
            name: 1
        },
        sort = {};
    if (collection == COLLECTIONARTIST) {
        projection["picture.small"] = 1
        sort.name = 1;
    } else if (collection == COLLECTIONALBUM) {
        projection.title = 1;
        projection["cover.small"] = 1;
        sort.title = 1;
    } else {
        projection.title = 1;
        projection.albumTitle = 1;
        sort.title = 1;
    }
    req.db.collection(collection).find({
        subject: categoryName
    }, projection).sort(sort).limit(LIMIT).toArray((err, objs) => {
        return res.json(objs);
    })
};

var get_songByProducer = (req, res) => {
    var producerName = req.params.producerName;
    req.db.collection(COLLECTIONSONG).find({
        producer: producerName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            title: 1
        }).limit(LIMIT).toArray((err, objs) => {
            return res.json(objs);
        })
};

var _getTitles = (req, producerName) => {
    return new Promise((resolve, reject) => {
        req.db.collection(COLLECTIONSONG).distinct('title', {
            producer: producerName
        }, (err, _tabSongs) => {
            resolve(_tabSongs);
        });
    });
}

var _getArtistsName = (req, producerName, _title) => {
    return new Promise((resolve, reject) => {
        req.db.collection(COLLECTIONSONG).distinct('name', {
            producer: producerName,
            title: _title
        }, (err, _tabArtist) => {
            resolve(_tabArtist);
        });
    });
}

var _getAlbums = (req, producerName, _title, _artistname) => {
    return new Promise((resolve, reject) => {
        req.db.collection(COLLECTIONSONG).distinct('albumTitle', {
            producer: producerName,
            title: _title,
            name: _artistname
        }, (err, _tabAlbum) => {
            resolve(_tabAlbum);
        });
    });
}

// db.getCollection('song').aggregate( { $match:{ producer:'Quincy Jones',title:'Beat It' } },{ $group: {_id: "$name", number: {$sum: 1} }})
var get_songByProducerAnomalies = (req, res) => {
    let producerName = req.params.producerName;
    let _nbTitles = 0;
    let _nbArtists = 0;
    let _nbAlbums = 0;
    let _resJSON = [];
    let _json = [];

    _getTitles(req, producerName).then(_tabTitles => {
        _tabTitles.forEach(_title => {
            _getArtistsName(req, producerName, _title).then(_tabArtistsName => {
                if (_tabArtistsName.length > 1) {
                    _json.push({
                        title: _title,
                        artistnames: _tabArtistsName
                    });
                }

                if (_nbTitles == _tabTitles.length - 1) {
                    res.json(_json);
                }
                _nbTitles++;
            })
        })
    })
};


var get_songByRecordLabel = (req, res) => {
    var db = req.db;
    var recordLabelName = req.params.recordLabelName;
    db.collection(COLLECTIONSONG).find({
        recordLabel: recordLabelName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            title: 1
        }).limit(LIMIT).toArray((err, objs) => {
            return res.json(objs);
        })
};

var get_songByGenre = (req, res) => {
    var genreName = req.params.genreName;
    req.db.collection(COLLECTIONSONG).find({
        genre: genreName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            title: 1
        }).limit(LIMIT).toArray((err, objs) => {
            return res.json(objs);
        })
};

var get_songByRecorded = (req, res) => {
    var recordedName = req.params.recordedName;
    req.db.collection(COLLECTIONSONG).find({
        recorded: recordedName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            title: 1
        }).limit(LIMIT).toArray((err, objs) => {
            return res.json(objs);
        })
};

var get_songByAward = (req, res) => {
    var awardName = req.params.awardName;
    req.db.collection(COLLECTIONSONG).find({
        award: awardName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            title: 1
        }).limit(LIMIT).toArray((err, objs) => {
            return res.json(objs);
        })
};
var get_songByWriter = (req, res) => {
    var writerName = req.params.writerName;
    req.db.collection(COLLECTIONSONG).find({
        writer: writerName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            title: 1
        }).limit(LIMIT).toArray((err, objs) => {
            return res.json(objs);
        })
};

var get_songByFormat = (req, res) => {
    var formatName = req.params.formatName;
    req.db.collection(COLLECTIONSONG).find({
        format: formatName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            title: 1
        }).limit(LIMIT).toArray((err, objs) => {
            return res.json(objs);
        })
};
var get_countByLetter = (req, res) => {
    var dbcount = {
        count: 0
    }; // si tout est commenté
    return res.json(dbcount);
};
var get_countByField = (req, res) => {
    var collection = req.params.collection,
        fieldName = req.params.fieldName,
        fieldValue = req.params.fieldValue;
    if (collection !== COLLECTIONARTIST && collection !== COLLECTIONALBUM && collection !== COLLECTIONSONG) return res.status(404).json(config.http.error.global_404);
    var query = {};
    query[fieldName] = fieldValue;
    req.db.collection(collection).count(query, (err, countfield) => {
        if (err) return res.status(404).json(config.http.error.global_404);
        return res.json({
            count: countfield
        });
    });
};


var get_dbinfo = (req, res) => {
    var db = req.db;
    db.collection(COLLECTIONARTIST).count((err, count) => {
        var dbinfo = {};
        dbinfo.nbArtist = count;
        db.collection(COLLECTIONALBUM).count((err, count) => {
            dbinfo.nbAlbum = count;
            db.collection(COLLECTIONSONG).count((err, count) => {
                dbinfo.nbSong = count;
                return res.json(dbinfo);
            });
        });
    });
};








/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * mettre 'publicationDate' à '-1' pour afficher les albums les plus récents en premiers
 */
var get_artist = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, (err, user) => {
        var db = req.db,
            artistName = req.params.artistName;
        db.collection(COLLECTIONARTIST).findOne({
            name: artistName
        }, config.request.projection.search.get_artist.artist, (err, artist) => {
            if (artist === null) return res.status(404).json(config.http.error.artist_404);
            db.collection(COLLECTIONALBUM).find({
                id_artist: artist._id
            }, config.request.projection.search.get_artist.album).sort({
                "publicationDate": 1
            }).toArray((err, albums) => {
                var nbAlbum = albums.length,
                    cnt = 0;
                //On construit le tableau albums afin d'y ajouter les infos des albums
                artist.albums = albums;
                for (let i = 0; i < nbAlbum; i++) {
                    db.collection(COLLECTIONSONG).find({
                        "id_album": artist.albums[i]._id
                    }, config.request.projection.search.get_artist.song).sort({
                        "position": 1
                    }).toArray((err, songs) => {
                        if (err) return res.status(404).json(config.http.error.song_404);
                        //On construit le tableau songs afin d'y ajouter les infos des musiques
                        artist.albums[i].songs = songs;
                        cnt++;
                        if (nbAlbum == cnt) {
                            if (!user) artist.isConnected = false;
                            else artist.isConnected = true;
                            return res.json(artist);
                        }
                    });
                }
            })
        });
    })(req, res);
};

var get_album = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, (err, user) => {
        var db = req.db,
            albumName = req.params.albumName,
            artistName = req.params.artistName;
        db.collection(COLLECTIONARTIST).findOne({
            name: artistName
        }, config.request.projection.search.get_album.artist, (err, artist) => {
            if (artist == null) return res.status(404).json(config.http.error.artist_404);
            //!\ UN ARTIST PEUT AVOIR PLUSIEURS FOIS UN MEME TITRE D'ALBUM /!\ ERREUR A CORRIGER -> si on clique sur un album
            db.collection(COLLECTIONALBUM).findOne({
                $and: [{
                    "title": albumName
                }, {
                    "id_artist": artist._id
                }]
            }, config.request.projection.search.get_album.album, (err, album) => {
                if (album == null) return res.status(404).json(config.http.error.album_404);
                db.collection(COLLECTIONSONG).find({
                    "id_album": album._id
                }, config.request.projection.search.get_album.song).toArray((err, songs) => {
                    if (songs == null) return res.status(404).json(config.http.error.song_404);
                    artist.isConnected = true;
                    if (!user) artist.isConnected = false;
                    album.songs = songs;
                    artist.albums = album;
                    return res.json(artist);
                });
            });
        });
    })(req, res);
}

var get_albumById = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, (err, user) => {
        var db = req.db,
            artistId = req.params.artistId,
            albumId = req.params.albumId;
        if (!ObjectId.isValid(artistId) || !ObjectId.isValid(albumId)) return res.status(404).json(config.http.error.objectid_404);
        db.collection(COLLECTIONARTIST).findOne({
            _id: ObjectId(artistId)
        }, config.request.projection.search.get_album.artist, (err, artist) => {
            if (artist == null) return res.status(404).json(config.http.error.artist_404);
            db.collection(COLLECTIONALBUM).findOne({
                "_id": ObjectId(albumId)
            }, config.request.projection.search.get_album.album, (err, album) => {
                if (album == null) return res.status(404).json(config.http.error.album_404);
                db.collection(COLLECTIONSONG).find({
                    "id_album": album._id
                }, config.request.projection.search.get_album.song).toArray((err, songs) => {
                    if (songs == null) return res.status(404).json(config.http.error.song_404);
                    artist.isConnected = true;
                    if (!user) artist.isConnected = false;
                    album.songs = songs;
                    artist.albums = album;
                    return res.json(artist);
                });
            });
        });
    })(req, res);
};

var get_auth = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, (err, user) => {
        if (!user) {
            return res.json({
                isConnected: false
            });
        }
        return res.json({
            isConnected: true
        });
    })(req, res);
};
var put_album = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, (err, user) => {
        if (!user) return res.status(403).json(config.http.error.put.album);
        var db = req.db,
            albumBody = req.body,
            albumTitle = albumBody.title.trim(),
            nbSongUpdated = 0;
        //FUTURE Si un album n'a pas encore d'attribut songs. Peut se produire lors de l'ajout d'un album
        for (var j = 0; j < albumBody.songs.length; j++) {
            //On change le title de l'album contenu dans les documents musiques
            albumBody.songs[j].albumTitle = albumTitle; //déja trim lors de l'initialisation
            albumBody.songs[j].title = albumBody.songs[j].title.trim();
            var idSong = albumBody.songs[j]._id;
            // On supprime l'id car mongodb lance un avertissement si ce champ n'est pas supprimé (_id est immutable pas d'update possible)
            delete albumBody.songs[j]._id;
            delete albumBody.songs[j].id_album;
            ((idSong, song, name, albumTitle, totalSong) => {
                db.collection(COLLECTIONSONG).update({
                    _id: new ObjectId(idSong)
                }, {
                        $set: song
                    }, (err) => {
                        if (err) return res.status(404).json(config.http.error.song_404);
                        searchHandler.updateSongES(req, name, albumTitle, song.title, idSong)
                        //Quand toutes les musiques ont été update on update le document album. ainsi si il n'y a aucun risque que l'album soit update sans que les musiques le soit avant
                        nbSongUpdated = nbSongUpdated + 1;
                        if (totalSong == nbSongUpdated) {
                            //On supprime le champ songs car il n'éxiste pas dans la collection album
                            delete albumBody.songs; //FUTURE Si un album n'a pas encore d'attribut songs. Peut se produire lors de l'ajout d'un album
                            var idAlbum = albumBody._id;
                            // On supprime l'id car mongodb lance un avertissement si ce champ n'est pas supprimé (_id est immutable pas d'update possible)
                            delete albumBody._id;
                            delete albumBody.id_artist;
                            db.collection(COLLECTIONALBUM).update({
                                _id: new ObjectId(idAlbum)
                            }, {
                                    $set: albumBody
                                });
                        }
                    })
            })(idSong, albumBody.songs[j], albumBody.name, albumBody.title, albumBody.songs.length);
        }
        return res.json(config.http.valid.send_message_ok);
    })(req, res);
};


var get_song = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, function (err, user) {
        var db = req.db,
            artistName = req.params.artistName,
            albumName = req.params.albumName,
            songName = req.params.songName;
        db.collection(COLLECTIONARTIST).findOne({
            name: artistName
        }, config.request.projection.search.get_song.artist, (err, artist) => {
            if (artist == null) return res.status(404).json(config.http.error.artist_404);
            db.collection(COLLECTIONALBUM).findOne({
                $and: [{
                    "id_artist": artist._id
                }, {
                    "title": albumName
                }]
            }, config.request.projection.search.get_song.album, (err, album) => {
                if (album == null) return res.status(404).json(config.http.error.album_404);
                db.collection(COLLECTIONSONG).findOne({
                    $and: [{
                        "id_album": album._id
                    }, {
                        "title": songName
                    }]
                }, config.request.projection.search.get_song.song, (err, song) => {
                    if (song == null) return res.status(404).json(config.http.error.song_404);
                    artist.isConnected = true;
                    if (!user) {
                        artist.isConnected = false;
                        song.lyrics = song.lyrics.slice(0, (song.lyrics.length * 0.1));
                        song.lyrics = song.lyrics.slice(0, song.lyrics.lastIndexOf(' '));
                        song.lyrics += COPYRIGHT_CONTENT;
                    }
                    album.songs = song;
                    artist.albums = album;
                    return res.json(artist);
                });
            });
        });
    })(req, res);
};


var get_songById = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, function (err, user) {
        var db = req.db,
            artistId = req.params.artistId,
            albumId = req.params.albumId,
            songId = req.params.songId;
        if (!ObjectId.isValid(artistId) || !ObjectId.isValid(albumId) || !ObjectId.isValid(songId)) return res.status(404).json(config.http.error.objectid_404);
        db.collection(COLLECTIONARTIST).findOne({
            _id: ObjectId(artistId)
        }, config.request.projection.search.get_song.artist, (err, artist) => {
            if (artist == null) return res.status(404).json(config.http.error.artist_404);
            db.collection(COLLECTIONALBUM).findOne({
                "_id": ObjectId(albumId)
            }, config.request.projection.search.get_song.album, (err, album) => {
                if (album == null) return res.status(404).json(config.http.error.album_404);
                db.collection(COLLECTIONSONG).findOne({
                    "_id": ObjectId(songId)
                }, config.request.projection.search.get_song.song, (err, song) => {
                    if (song == null) return res.status(404).json(config.http.error.song_404);
                    artist.isConnected = true;
                    if (!user) {
                        artist.isConnected = false;
                        song.lyrics = song.lyrics.slice(0, (song.lyrics.length * 0.1));
                        song.lyrics = song.lyrics.slice(0, song.lyrics.lastIndexOf(' '));
                        song.lyrics += COPYRIGHT_CONTENT;
                    }
                    album.songs = song;
                    artist.albums = album;
                    return res.json(artist);
                });
            });
        });
    })(req, res);
};

/**
 * API permettant de modifier le champs notes
 */
var put_songNotes = (req, res) => {
    // authentification requise
    passport.authenticate('jwt', config.passport.auth.jwt, function (err, user) {
        // si non authentifier: erreur 403
        if (!user) return res.status(403).json(config.http.error.put.song);

        // récupération des fields à modifier
        var songBody = req.body;
        console.log(req.params.params, songBody);
        let _settings = null;
        switch (req.params.params) {
            case `title`: {
                _settings = {
                    $set: {
                        title: songBody.newvalue
                    }
                }
            } break;
            case `lyrics`: {
                _settings = {
                    $set: {
                        lyrics: songBody.newvalue
                    }
                }
            } break;
            case `notes`: {
                _settings = {
                    $set: {
                        notes: songBody.newvalue
                    }
                }
            } break;
            case `gain`: {
                _settings = {
                    $set: {
                        gain: songBody.newvalue
                    }
                }
            } break;
            case `bpm`: {
                _settings = {
                    $set: {
                        bpm: songBody.newvalue
                    }
                }
            } break;
            case `rank`: {
                _settings = {
                    $set: {
                        rank: songBody.newvalue
                    }
                }
            } break;
            case `isrc`: {
                _settings = {
                    $set: {
                        isrc: songBody.newvalue
                    }
                }
            } break;
        }
        if (_settings != null) {
            console.log(`_settings est non null :)`, _settings);
            //On récupére l'id de la musique afin de modifier l'objet en base de données
            var idSong = songBody._id;
            // si l'id n'est pas valide: erreur 404
            if (!ObjectId.isValid(idSong)) return res.status(404).json(config.http.error.objectid_404);
            //!\ Il faut supprimer les attributs qui sont de type objectId dans notre base car songBody les récupéres en string
            delete songBody._id;
            req.db.collection(COLLECTIONSONG).update({
                _id: ObjectId(idSong)
            }, _settings, (err) => {
                return res.json(config.http.valid.send_message_ok);
            });
        } else {
            console.log(`_settings est null ou "${req.params.params}" n'existe pas !!!!`);
        }
    })(req, res);
};


var put_songIsClassic = (req, res) => {
    passport.authenticate('jwt', config.passport.auth.jwt, function (err, user) {
        if (!user) return res.status(403).json(config.http.error.put.song);
        var songBody = req.body;
        //On récupére l'id de la musique afin de modifier l'objet en base de données
        var idSong = songBody._id;
        if (!ObjectId.isValid(idSong)) return res.status(404).json(config.http.error.objectid_404);
        //!\ Il faut supprimer les attributs qui sont de type objectId dans notre base car songBody les récupéres en string
        delete songBody._id;
        req.db.collection(COLLECTIONSONG).update({
            _id: ObjectId(idSong)
        }, {
                $set: {
                    isClassic: songBody.isClassic
                }
            }, (err) => {
                return res.json(config.http.valid.send_message_ok);
            });
    })(req, res);
};
var get_member_name_memberName = (req, res) => {
    var memberName = req.params.memberName;
    req.db.collection(COLLECTIONARTIST).find({
        "members.name": memberName
    }, {
            name: 1
        }).toArray((err, artists) => {
            if (err) return res.status(404).json(config.http.error.internal_error_404);
            return res.json(artists);
        });
};

var get_fullTextSearch = (req, res) => {
    var searchText = elasticSearchHandler.escapeElasticSearch(req.params.searchText);
    var maxinfo = config.request.limit_search_bar;
    var maxinfoselected = maxinfo / 2; // nombre d'élements devant apparaitre dans l'autocomplétion de recherche

    var queryArtist = searchHandler.artistFullTextQuery(searchText, maxinfo);
    var querySong = searchHandler.songFullTextQuery(searchText, maxinfo);
    searchHandler.fullTextQuery(req, maxinfo, queryArtist, querySong, maxinfoselected).then((resp) => {
        //Ne pas renvoyer avec res.json
        return res.send(resp);
    }).catch((err) => {
        return res.send(err);
    });
};

var get_moreSearchText = (req, res) => {
    var searchText = elasticSearchHandler.escapeElasticSearch(req.params.searchText);
    var maxinfoselected = LIMIT / 2;
    //On construit les requêtes pour recupérer les artistes et les musiques contenant searchText
    var queryArtist = searchHandler.artistFullTextQuery(searchText, LIMIT);
    var querySong = searchHandler.songFullTextQuery(searchText, LIMIT);
    searchHandler.fullTextQuery(req, LIMIT, queryArtist, querySong, maxinfoselected).then((resp) => {
        //Ne pas renvoyer avec res.json
        return res.send(resp);
    }).catch((err) => {
        return res.send(err);
    });
};



// --- songs multitrack ---
// /song/multitrack/:skip
var getSongsMultitrack = (req, res) => {
    let _skip = req.params.skip || 0;
    let _limit = 20;
    let _query = { multitrack_path: { $ne: "" } };
    if (_skip != 0) {
        _query = { multitrack_path: { $ne: "" }, '_id': { '$gt': ObjectId(_skip) } };
    }
    req.db.collection(COLLECTIONSONG).find(_query, { name: 1, albumTitle: 1, title: 1 }).sort({ _id: 1 }).limit(_limit)
        .toArray((err, songs) => {
            if (err) return res.status(404).json(config.http.error.internal_error_404);
            return res.json(songs);
        });
}
// /song/multitrackAll
var getAllSongsMultitrack = (req, res) => {
    req.db.collection(COLLECTIONSONG).find({
        multitrack_path: { $ne: "" }
    }, {
            name: 1,
            albumTitle: 1,
            title: 1
        }).sort({
            title: 1
        }).toArray((err, songs) => {
            if (err) return res.status(404).json(config.http.error.internal_error_404);
            // if (req.params.count) {
            //     return res.json({ count: songs.length });
            // } else {
            // }
            return res.json(songs);
        });
}
// /song/count/multitrack
var getCountSongsMultitrack = (req, res) => {
    let _query = { _id: 'multitrack_path' };
    req.db.collection('_stats_prop_song').find(_query, { _id: 0, value: 1 }).toArray((err, countfield) => {
        if (err) return res.status(404).json(config.http.error.global_404);
        return res.json({
            count: countfield[0].value
        });
    });
}

var getSongsStream = (req, res) => {
    let skip = parseInt(req.params.skip);
    req.db.collection(COLLECTIONSONG).find({
        preview: { $ne: "" }
    }, {
            name: 1,
            title: 1,
            albumTitle: 1,
            preview: 1
        }).sort({
            title: 1
        }).skip(skip).limit(LIMIT).toArray((err, songs) => {
            if (err) return res.status(404).json(config.http.error.internal_error_404);
            return res.json(songs);
        });
}


var getAlbumSong = (req, res) => {
    let artistName = req.params.artistName;
    let songName = req.params.songName;
    req.db.collection(COLLECTIONSONG).find({
        name: artistName,
        title: songName
    }, {
            name: 1,
            title: 1,
            albumTitle: 1
        }).sort({
            albumTitle: 1
        }).toArray((err, songs) => {
            if (err) return res.status(404).json(config.http.error.internal_error_404);
            return res.json(songs);
        });
}

const get_cover_song = (req, res) => {
    return new Promise(function (resolve, reject) {
        let skip = 0;
        let limit = 100;
        let query = "";
        query = {
            title: { $regex: ".*" + (req.params.songname) + "*." },
            lyrics: { $regex: ".*" + (req.params.songlyrics) + "*." }
        };
        req.db.collection(COLLECTIONSONG).find(query, {
            name: 1,
            title: 1,
            albumTitle: 1,
            preview: 1
        }).sort({
            preview: -1
        }).skip(skip).limit(limit).toArray((err, tSongs) => {
            if (tSongs.length > 0) resolve(tSongs);
            else reject("ErRoR : " + err);
        });
    }).then(data => {
        res.json({ res: data });
    })
}

exports.get_songByProducerAnomalies = get_songByProducerAnomalies;
exports.get_collectionByCategoryAndLetter = get_collectionByCategoryAndLetter;
exports.get_category = get_category;
exports.get_songByProducer = get_songByProducer;
exports.get_songByRecordLabel = get_songByRecordLabel;
exports.get_songByGenre = get_songByGenre;
exports.get_songByRecorded = get_songByRecorded;
exports.get_songByAward = get_songByAward;
exports.get_songByWriter = get_songByWriter;
exports.get_songByFormat = get_songByFormat;
exports.get_countByLetter = get_countByLetter;
exports.get_countByField = get_countByField;
exports.get_dbinfo = get_dbinfo;
exports.get_artist = get_artist;
exports.get_album = get_album;
exports.get_albumById = get_albumById;
exports.put_album = put_album;
exports.get_song = get_song;
exports.get_songById = get_songById;
exports.put_songNotes = put_songNotes;
exports.put_songIsClassic = put_songIsClassic;
exports.get_member_name_memberName = get_member_name_memberName;
exports.get_fullTextSearch = get_fullTextSearch;
exports.get_moreSearchText = get_moreSearchText;
exports.get_auth = get_auth;
exports.getAllSongsMultitrack = getAllSongsMultitrack;
exports.getSongsMultitrack = getSongsMultitrack;
exports.getCountSongsMultitrack = getCountSongsMultitrack;
exports.getSongsStream = getSongsStream;
exports.getAlbumSong = getAlbumSong;
exports.get_cover_song = get_cover_song;