import config from '../conf/conf';
const COLLECTIONSONG = config.database.collection_song;
var spawn = require('child_process').spawn;
var _dataString="";

const getAlbum = (req, res) => {
    // console.log('albumTitle:', req.params.albumTitle);
    return new Promise(function (resolve, reject) {
        // nb Songs with urlYouTube $ne:'' (not null) = 107 976 (db.getCollection('song').find({urlYouTube:{$ne:''}}).count())
        let query = { name: 'Michael Jackson', title: 'Beat It',albumTitle: 'Thriller',urlDeezer: { $ne: "", $exists: true }};
        req.db.collection(COLLECTIONSONG).find(query, { _id: 1, name: 1, title: 1, albumTitle: 1, urlDeezer: 1 }).toArray((err, tSongs) => {
            if (tSongs.length > 0) resolve(tSongs);
            else reject("ErRoR : " + err);
        });
    }).then(data => {
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
            console.log(_dataString);

            // if (_dataString.uuid) req.db.collection(COLLECTIONSONG).update({ _id: _dataString._id }, { $set: { "uuid": _dataString.uuid } });
        });

        res.json({ res: data });
    })
};
exports.getAlbum = getAlbum;