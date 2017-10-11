import config from '../conf/conf';
import {db} from 'mongoskin';
import {ObjectId} from 'mongoskin';
const db_server = db("mongodb://localhost:27017/wasabi_server");

const COLLECTIONARTIST  = config.database.collection_artist;
const COLLECTIONALBUM   = config.database.collection_album;
const COLLECTIONSONG    = config.database.collection_song;

var get_SongLyricsnotlicensed = function(req, res) {
    var db = req.db, request = {lyrics:/Unfortunately, we are not licensed to display/}, isNotEq = 0 ;
    this.console.log("dedans /mergedb/song/lyrics");
    db.collection(COLLECTIONSONG).find(request).toArray(function(err, tSongs) {
        var i = 0, songLength = tSongs.length;
        //Recursivement avec un timeout afin d'éviter l'erreur : possible EventEmitter memory leak detected. 51 open listeners added. Use emitter.setMaxListeners() to increase limit
        (function loopSong(i){
            //On va chercher dans la BDD du serveur qu'on a importé en local
            (function(song){
                var next = ++i;
                db_server.collection(COLLECTIONSONG).findOne({_id: new ObjectId(song._id) }, function (err, songServer) {
                    //Alors la chanson a été modifié sur le serveur
                    if(songServer.lyrics.length != song.lyrics.length){
                        isNotEq = isNotEq+1;
                        //On met a jour la db local
                        db.collection(COLLECTIONSONG).update({_id : new ObjectId(song._id)}, { $set: {"lyrics":songServer.lyrics} });
                        console.log("Song updated = "+songServer.name+" - "+songServer.title+" - "+songServer._id+" - "+songServer.lyrics.length+" <-> "+song.lyrics.length);
                    }
                });
                if(i<songLength){
                    setTimeout(function(){loopSong(next);},1)
                }else{
                    console.log("Traitement terminé. Document updated = "+isNotEq);
                }
            })(tSongs[i]);
        })(i);
    });
    res.send("OK");
}


var get_SongLyrics= function(req, res) {
    var db = req.db, request = {}, limit = 100000, skip = 1000000, hasNext = true, isNotEq = 0 ;
    this.console.log("dedans /mergedb/song/lyrics");
    (function loopSkipSong(skip){
        db.collection(COLLECTIONSONG).find(request).skip(skip).limit(limit).toArray(function(err, tSongs) {
            if(tSongs.length<limit){
                hasNext = false;
            }
            var i = 0, songLength = tSongs.length;
            //Recursivement avec un timeout afin d'éviter l'erreur : possible EventEmitter memory leak detected. 51 open listeners added. Use emitter.setMaxListeners() to increase limit
            (function loopSong(i){
                //On va chercher dans la BDD du serveur qu'on a importé en local
                (function(song){
                    var next = ++i;
                    db_server.collection(COLLECTIONSONG).findOne({_id: new ObjectId(song._id) }, function (err, songServer) {
                        //Alors la chanson a été modifié sur le serveur
                        if(songServer.lyrics.length != song.lyrics.length){
                            isNotEq = isNotEq+1;
                            //On met a jour la db local
                            db.collection(COLLECTIONSONG).update({_id : new ObjectId(song._id)}, { $set: {"lyrics":songServer.lyrics} });
                            console.log("Song updated = "+songServer.name+" - "+songServer.title+" - "+songServer._id+" - "+songServer.lyrics.length+" <-> "+song.lyrics.length);
                        }
                    });
                    if(i<songLength){
                        //Ce timeout évite l'erreur: RangeError: Maximum call stack size exceeded
                        setTimeout(function(){
                            loopSong(next);
                        },1)
                    }else if(!hasNext){
                        console.log("Traitement terminé. Document upadated = "+isNotEq);
                    }else{
                        skip += limit;
                        console.log("SKIP = "+skip);
                        loopSkipSong(skip);
                    }
                })(tSongs[i]);
            })(i);
        });
    })(skip);
    res.send("OK");
}


exports.get_SongLyricsnotlicensed = get_SongLyricsnotlicensed;
exports.get_SongLyrics = get_SongLyrics;