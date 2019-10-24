import config from '../conf/conf';
import {
    ObjectId
} from 'mongoskin';
const COLLECTIONSONG = config.database.collection_song;
var spawn = require('child_process').spawn;
var _dataString = "";

const getAlbum = (req, res) => {
    return new Promise(function (resolve, reject) {
        // nb Songs with urlYouTube $ne:'' (not null) = 107 976 (db.getCollection('song').find({urlYouTube:{$ne:''}}).count())
        let query = { _id: new ObjectId(req.params.idSong), urlDeezer: { $ne: "", $exists: true } };
        req.db.collection(COLLECTIONSONG).find(query, { _id: 1, name: 1, title: 1, albumTitle: 1, urlDeezer: 1 }).toArray((err, tSongs) => {
            if (tSongs.length > 0) resolve(tSongs);
            else reject("ErRoR : " + err);
        });
    }).then(data => {
        // console.log('post', data);
        // -------------------- POST TO PYTHON --------------------
        let py = spawn('python', ['./routes/api_python/compute_input.py']);

        // in
        py.stdin.write(JSON.stringify(data));
        py.stdin.end();

        // out
        py.stdout.on('data', function (data) {
            _dataString = data.toString();
        });
        py.stdout.on('end', function () {
            console.log("-------------------- ON END --------------------");
            let _jsonItems = JSON.parse(_dataString);
            console.log('_jsonItems',_jsonItems);
            if (_jsonItems[0].uuid) req.db.collection(COLLECTIONSONG).update({ _id: new ObjectId(_jsonItems[0]._id) }, { $set: { "uuid": _jsonItems[0].uuid } });
            res.json(_jsonItems[0]);
        });
    })
};
exports.getAlbum = getAlbum;