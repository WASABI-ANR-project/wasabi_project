import config from '../conf/conf';
const COLLECTIONSONG = config.database.collection_song;
var spawn = require('child_process').spawn;

var getInfos = (req, res) => res.json({ msg: 'infos' });

const getAlbum = (req, res) => {
    // db.getCollection('song').find({ name: 'Michael Jackson', albumTitle: 'Thriller' }, { title: 1, name: 1, albumTitle: 1 })
    return new Promise(function (resolve, reject) {
        // console.log('albumTitle:', req.params.albumTitle);
        let query = "";

        // nb Songs with urlYouTube $ne:'' (not null) = 107 976 (db.getCollection('song').find({urlYouTube:{$ne:''}}).count())
        // query = {
        //     name: 'Michael Jackson',
        //     albumTitle: 'Thriller',
        //     urlYouTube: { $ne: "", $exists: true }
        // }; 
        query = {
            name: 'Michael Jackson',
            albumTitle: 'Thriller',
            urlDeezer: { $ne: "", $exists: true }
        };

        req.db.collection(COLLECTIONSONG).find(query, {
            _id: 1,
            name: 1,
            title: 1,
            albumTitle: 1,
            urlDeezer: 1
        }).toArray((err, tSongs) => {
            if (tSongs.length > 0) {
                resolve(tSongs);
            } else {
                reject("ErRoR : " + err);
            }
        });
    }).then(data => {
        // -------------------- POST TO PYTHON --------------------
        let py = spawn('python', ['routes/api_python/compute_input.py']);
        let _dataString;
        // in
        py.stdin.write(JSON.stringify(data));
        py.stdin.end();
        // out
        py.stdout.on('data', function (data) {
            _dataString = data.toString();
            // console.log(_dataString);
        });

        // OBJECTIF Septembre 2019: enregistrer les UUID en provenance de TimeSide dans la BD wasabi afin de pouvoir afficher l'iframe timeside 'player_url' avec uuid en param
        py.stdout.on('end', function () {
            console.log("-------------------- RESULT FR0M PYTHON --------------------");
            console.log(_dataString);
        });
        res.json({ res: data });
    })
};

exports.getInfos = getInfos;
exports.getAlbum = getAlbum;