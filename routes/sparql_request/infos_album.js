var construct_request = function (album, country) {
    var countryLang='';
    if(country=='' || country =='en.'){
        countryLang = "en";
        country = '';
    }
    else{
        countryLang = country.substring(0,2);
    }
    
return ' PREFIX db-owl: <http://dbpedia.org/ontology/> '+
' PREFIX rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> '+
'  PREFIX prop:   <http://dbpedia.org/property/> '+
'  PREFIX dc: <http://purl.org/dc/terms/> '+
'  CONSTRUCT { '+
' <http://'+country+'dbpedia.org/resource/'+album+'>  db-owl:abstract 	?abstractAlbum; '+
'    db-owl:artist 	?artistAlbum; '+
'    db-owl:genre 	?genreAlbum; '+
'    db-owl:producer 	?producerAlbum; '+
'    db-owl:recordDate 	?recordDateAlbum; '+
'    db-owl:recordLabel  ?recordLabelAlbum; '+
'    db-owl:releaseDate  ?releaseDateAlbum; '+
'    db-owl:runtime	    ?runtimeAlbum; '+
'    dc:subject		?subjectAlbum; '+
'    prop:award		?awardAlbum; '+
'    prop:studio	?studioAlbum. '+
' ?producerAlbum  db-owl:abstract         ?abstractProducer; '+
'   db-owl:associatedMusicalArtist  ?associatedMusicalArtist; '+
'	db-owl:recordLabel  ?recordLabel; '+
'   dc:subject     		?subject; '+
'	db-owl:artist		?artist; '+
'	db-owl:occupation	?occupation. '+
' } '+
' where { '+
' { '+
' 	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:abstract  ?abstractAlbum . FILTER langMatches(lang(?abstractAlbum), "'+ countryLang +'")}. '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:artist           ?artistAlbum}. '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:genre     	?genreAlbum}. '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:recordDate       ?recordDateAlbum} . '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:recordLabel      ?recordLabelAlbum} . '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:releaseDate      ?releaseDateAlbum} . '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:runtime          ?runtimeAlbum} . '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	dc:subject              ?subjectAlbum} . '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	prop:award              ?awardAlbum 	. FILTER langMatches(lang(?awardAlbum), "'+ countryLang +'")} . '+
'	OPTIONAL {<http://'+country+'dbpedia.org/resource/'+album+'> 	prop:studio             ?studioAlbum} . '+
'   } UNION { '+
'	OPTIONAL { '+
'		<http://'+country+'dbpedia.org/resource/'+album+'> 	db-owl:producer            ?producerAlbum '+
'   	OPTIONAL {?producerAlbum       	db-owl:abstract                 ?abstractProducer      . FILTER langMatches(lang(?abstractProducer), "'+ countryLang +'")}. '+
'		OPTIONAL {?producerAlbum  	db-owl:associatedMusicalArtist  ?associatedMusicalArtist}. '+
'		OPTIONAL {?producerAlbum        db-owl:recordLabel      ?recordLabel}. '+
'		OPTIONAL {?producerAlbum       	dc:subject              ?subject}. '+
'       OPTIONAL {?producerAlbum   	db-owl:artist  		?artist}. '+
'		OPTIONAL {?producerAlbum  	db-owl:occupation       ?occupation}. '+
'	} '+
'	} '+
' }ORDER BY DESC(?artistAlbum) ' ;
  
}; 




exports.construct_request = construct_request;




