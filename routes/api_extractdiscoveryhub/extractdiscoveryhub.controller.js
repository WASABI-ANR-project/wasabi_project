import request from 'request';
import xml from 'xml';
import sparql from 'sparql';

/**
 * Permet d'afficher les suggestions proposé par Discoveryhub concernant l'élément recherché
 * @param {*} req 
 * @param {*} res 
 */
var getSuggestions = (req, res) => {
    let _element = req.params.element;
    let _url='http://dbpedia-test.inria.fr/lookup/api/search.asmx/PrefixSearch?format=json&QueryClass=&MaxHits=30&QueryString='+_element;
    res.json({url:_url});
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
        let bindings = results.results.bindings;
        for (var k in bindings) {
            same = bindings[k].k.value.split('/').pop();
            if (!objSimilarity.hasOwnProperty(same)) objSimilarity[same] = [];
            if (objSimilarity[same].indexOf(bindings[k].catlabel.value) === -1) objSimilarity[same].push(bindings[k].catlabel.value);
        }
        res.json({
            linkBetween: [_elementA, _elementB],
            similarity: objSimilarity
            // urlAPI:_urlAPI
            //res: results
        });
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
                reject(err);
            }
        });
    })
};

exports.getCommonalities = getCommonalities;
exports.getSuggestions = getSuggestions;