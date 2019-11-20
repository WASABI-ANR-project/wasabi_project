// for discoveryhub
import request from 'request';
import sparql from 'sparql';

// for song field "repeatedness"
import {
    ObjectId
} from 'mongoskin';
import config from '../conf/conf';
import fs from 'fs';
import readline from 'readline';
import _stream from 'stream';
const COLLECTIONSONG = config.database.collection_song;

/**
 * http://semreco.inria.fr/semreco?node=http://dbpedia.org/resource/Michael_Jackson
 * http://api.discoveryhub.co/recommendations/49e51e2564
 */

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
var getInfos = (req, res) => {
    res.json({
        services: [
            '/link/:elementA/:elementB',
            '/suggestions/:element',
            '/semreco/:element'
        ]
    });
}

/**
 * Permet d'afficher les suggestions proposé par Discoveryhub concernant l'élément recherché
 * @param {*} req 
 * @param {*} res 
 */
var getSuggestions = (req, res) => {
    let _element = req.params.element;
    let _url = 'http://dbpedia-test.inria.fr/lookup/api/search.asmx/PrefixSearch?format=json&QueryClass=&MaxHits=30&QueryString=' + _element;
    res.json({ url: _url });
}

/**
 * Permet d'afficher les points commun entre 2 artistes
 * @param {*} req 
 * @param {*} res 
 */
var getCommonalities = (req, res) => {
    let _elementA = req.params.elementA;
    let _elementB = req.params.elementB;

    let client = new sparql.Client("http://dbpedia-test.inria.fr/sparql");
    let same = "";
    let objSimilarity = {};
    let query = `
        SELECT ?label1 ?label2 ?k ?catlabel (count(?i) as ?count) 
        WHERE { 
            <http://dbpedia.org/resource/${_elementA}> ?k ?cat . 
            <http://dbpedia.org/resource/${_elementB}> ?k ?cat . 
            ?i ?u ?cat .
            <http://dbpedia.org/resource/${_elementA}> rdfs:label ?label1 .
            <http://dbpedia.org/resource/${_elementB}> rdfs:label ?label2 . { 
                ?cat <http://www.w3.org/2004/02/skos/core#prefLabel> ?catlabel 
            } UNION { 
                ?cat rdfs:label ?catlabel 
            } FILTER (
                ?k!=<http://dbpedia.org/ontology/wikiPageWikiLink> && 
                ?k!=rdf:type && 
                ?k!=<http://dbpedia.org/property/wikiPageUsesTemplate> && 
                ?k!=<http://dbpedia.org/property/language> && 
                lang(?label1)="en" && 
                lang(?label2)="en"
            ) 
        }
    `;

    client.query(query, (err, results) => {
        console.log(results);
        let bindings = results.results.bindings;
        for (var k in bindings) {
            same = bindings[k].k.value.split('/').pop();
            if (!objSimilarity.hasOwnProperty(same)) objSimilarity[same] = [];
            if (objSimilarity[same].indexOf(bindings[k].catlabel.value) === -1) objSimilarity[same].push(bindings[k].catlabel.value);
        }
        res.json({
            linkBetween: [_elementA, _elementB],
            similarity: objSimilarity
        });
    })
};

// recommendations discoveryhub with semreco
var getRecommendations = (req, res, next) => {
    // Michael_Jackson
    requestDH(`http://semreco.inria.fr/semreco?node=http://dbpedia.org/resource/${req.params.element}`).then((data) => {
        res.json(JSON.parse(data));
    })
};

var requestDH = (urlDH) => {
    return new Promise((resolve, reject) => {
        request({
            url: urlDH
        }, (err, resp, body) => {
            if (!err && resp.statusCode == 200) {
                resolve(body);
            } else {
                resolve(err);
            }
        });
    })
};

// ------------------------------------------------------------

// - SUMMARY
var getSummary= (req, res) => {
    res.json({ msg: 'getSummary' });
    processFileSummary(req, './public/extras/data/pickle_original_michael/id_to_summary_lines.json');
}
/**
 * Permet de parcourir le fichier "id_to_line_repeatedness.json" afin de mettre à jour le champs song "repeatedness"
 * @param {*} req 
 * @param {*} inputFile 
 */
let processFileSummary = async (req, inputFile) => {
    let instream = fs.createReadStream(inputFile);
    let outstream = new (_stream)();
    let _result;
    let _result_b;
    let _stringReaded= ``;
    let rl = readline.createInterface(instream, outstream);
    // line per line
    rl.on('line', (_line) => {
        _stringReaded = _line;
    });
    rl.on('close', async (line) => {
        let _json = JSON.parse(_stringReaded);
        // console.log(Object.keys(_json).length); // => 53124 songs

        // key: ObjectID song, _json[key]: summary JSON
        for (const key in _json) {
            _result = await get_song_wasabi_summary(req, key);
            if (!_result) console.log(`${key}> idSong (objectID) NOT EXIST IN DB`);
            // if summary not exist
            else if (!_result.summary) {
                // update song to add summary
                _result_b = await update_summary_wasabi(req, _result._id, _json[_result._id]);
                if (!_result_b) {
                    console.log(`${key}> ERROR when update`);
                    // console.log(_json[key]);
                }
                else console.log(`${key}:${_result._id}> OK update: ${_result_b}`);
            } 
            // else console.log(`${key}:${_result._id}> OK summary already exist`);
        }
    });
}
/**
 * Permet de vérifier si le song correspondant à idSong existe
 * @param {*} req 
 * @param {*} _idSong 
 */
const get_song_wasabi_summary = (req, _idSong) => {
    return new Promise(resolve => {
        req.db.collection(COLLECTIONSONG).findOne({ _id: new ObjectId(_idSong) }, { title: 1, summary: 1 }, (err, objSong) => {
            if (!objSong || err) resolve(false);
            else resolve(objSong);
        });
    });
}
/**
 * Permet de mettre à jour le champs song "summary"
 * @param {*} req 
 * @param {*} _idSong 
 * @param {*} _summary
 */
const update_summary_wasabi = (req, _idSong, _summary) => {
    return new Promise(resolve => {
        req.db.collection(COLLECTIONSONG).update({ _id: new ObjectId(_idSong) }, { $set: { summary: _summary } }, (err, song) => {
            if (err) resolve(false);
            else resolve(true);
        });
    });
}



// ------------------------------------------------------------


// - REPEATEDNESS
var getRepeatedness = (req, res) => {
    res.json({ msg: 'getRepeatedness' });
    processFile(req, './public/extras/data/pickle_original_michael/id_to_line_repeatedness.json');
}

/**
 * Permet de parcourir le fichier "id_to_line_repeatedness.json" afin de mettre à jour le champs song "repeatedness"
 * @param {*} req 
 * @param {*} inputFile 
 */
let processFile = async (req, inputFile) => {
    let instream = fs.createReadStream(inputFile);
    let outstream = new (_stream)();
    let _result;
    let _result_b;
    let _stringRepeatedness = ``;
    let rl = readline.createInterface(instream, outstream);
    // line per line
    rl.on('line', (_line) => {
        _stringRepeatedness = _line;
    });
    rl.on('close', async (line) => {
        let _json = JSON.parse(_stringRepeatedness);
        // console.log(Object.keys(_json).length); // => 53124 songs

        // key: ObjectID song, _json[key]: repeatedness JSON
        for (const key in _json) {
            _result = await get_song_wasabi(req, key);
            if (!_result) console.log(`${key}> idSong (objectID) NOT EXIST IN DB`);
            // if repeatedness not exist
            else if (!_result.repeatedness) {
                // update song to add repeatedness
                _result_b = await update_repeatedness_wasabi(req, _result._id, _json[_result._id]);
                if (!_result_b) {
                    console.log(`${key}> ERROR when update`);
                    // console.log(_json[key]);
                }
                else console.log(`${key}:${_result._id}> OK update: ${_result_b}`);
            } else console.log(`${key}:${_result._id}> OK repeatedness already exist`);
        }
    });
}
/**
 * Permet de vérifier si le song correspondant à idSong existe
 * @param {*} req 
 * @param {*} _idSong 
 */
const get_song_wasabi = (req, _idSong) => {
    return new Promise(resolve => {
        req.db.collection(COLLECTIONSONG).findOne({ _id: new ObjectId(_idSong) }, { title: 1, repeatedness: 1 }, (err, objSong) => {
            if (!objSong || err) resolve(false);
            else resolve(objSong);
        });
    });
}
/**
 * Permet de mettre à jour le champs song "repeatedness"
 * @param {*} req 
 * @param {*} _idSong 
 * @param {*} _repeatedness 
 */
const update_repeatedness_wasabi = (req, _idSong, _repeatedness) => {
    return new Promise(resolve => {
        req.db.collection(COLLECTIONSONG).update({ _id: new ObjectId(_idSong) }, { $set: { repeatedness: _repeatedness } }, (err, song) => {
            if (err) resolve(false);
            else resolve(true);
        });
    });
}

exports.getInfos = getInfos;
exports.getCommonalities = getCommonalities;
exports.getSuggestions = getSuggestions;
exports.getRecommendations = getRecommendations;

exports.getRepeatedness = getRepeatedness;
exports.getSummary = getSummary;