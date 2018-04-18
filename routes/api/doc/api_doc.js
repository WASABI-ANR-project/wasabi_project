import express from 'express';
const router = express.Router();

/**
 * @api {get} apidoc/#api-Api_Fields-ALL_FIELDS_ALBUM All album's fields
 * @apiVersion 1.0.0
 * @apiName ALL_FIELDS_ALBUM
 * @apiGroup Api Fields
 * @apiVersion 1.0.0
 *
 * @apiSuccess {ObjectId} _id Album id
 * @apiSuccess {ObjectId} id_artist Same as "_id" from Artist collection
 * 
 * @apiSuccess {String} id_album_musicbrainz This represents an unique album id by MusicBrainz. It's visible in the url of the album's profile page.<br>Source : {<a target='_blank' href='http://musicbrainz.org/release/959272f9-97ae-4179-aebe-950eef64ed93'>MusicBrainz</a>}<br><i>Ex value : "959272f9-97ae-4179-aebe-950eef64ed93"</i>
 * @apiSuccess {String} id_album_discogs This represents an unique album id by Discogs. It's visible in the url of the album's profile page.<br>Source : {Discogs}<br><i>Ex value : <a target='_blank' href='http://www.discogs.com/master/8883'>8883</a></i></i>
 * @apiSuccess {String} id_album_deezer This represents an unique album id by Deezer. It's visible in the url of the album's profile page.<br>Source : {Deezer}<br><i>Ex value : <a target='_blank' href='http://www.deezer.com/album/423368'>423368</a></i>
 * 
 * @apiSuccess {String} title Album title.<br>Source : {LyricsWikia}<br><i>Ex value : "Thriller"</i>
 * @apiSuccess {String} name Artist name.<br>Source : {LyricsWikia}<br><i>Ex value : "Michael Jackson"</i>
 * @apiSuccess {String} genre Album genre.<br>Source : {LyricsWikia}<br><i>Ex value : "Pop"</i>
 * @apiSuccess {String} length Album length.<br>Source : {LyricsWikia}<br><i>Ex value : "42:19"</i>
 * @apiSuccess {String} publicationDate Album publicationDate.<br>Source : {LyricsWikia}<br><i>Ex value : "1982"</i>
 * @apiSuccess {String} urlAlbum Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='http://lyrics.wikia.com/Michael_Jackson:Thriller_%281982%29'>http://lyrics.wikia.com/Michael_Jackson:Thriller_%281982%29</a></i>
 * @apiSuccess {String} urlAllmusic Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='http://www.allmusic.com/album/mw0000056882'>http://www.allmusic.com/album/mw0000056882</a></i>
 * @apiSuccess {String} urlAmazon Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=http%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB0000025RI%2Fsr%3D8-1%2Fqid%3D1147400297%2Fref%3Dpd_bbs_1%3F%255Fencoding%3DUTF8'>http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=http%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB0000025RI%2Fsr%3D8-1%2Fqid%3D1147400297%2Fref%3Dpd_bbs_1%3F%255Fencoding%3DUTF8</a></i>
 * @apiSuccess {String} urlDiscogs Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='http://www.discogs.com/master/8883'>http://www.discogs.com/master/8883</a></i>
 * @apiSuccess {String} urlITunes Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='https://itunes.apple.com/us/album/id269572838'>https://itunes.apple.com/us/album/id269572838</a></i>
 * @apiSuccess {String} urlMusicBrainz Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='http://musicbrainz.org/release/959272f9-97ae-4179-aebe-950eef64ed93'>http://musicbrainz.org/release/959272f9-97ae-4179-aebe-950eef64ed93</a></i>
 * @apiSuccess {String} urlSpotify Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='https://play.spotify.com/album/6JwMaTXGhIORvOXpOotryr'>https://play.spotify.com/album/6JwMaTXGhIORvOXpOotryr</a></i>
 * @apiSuccess {String} urlWikipedia Source : {LyricsWikia}<br><i>Ex value : <a target='_blank' href='http://en.wikipedia.org/wiki/Thriller_(Michael_Jackson_album)'>http://en.wikipedia.org/wiki/Thriller_(Michael_Jackson_album)</a></i>
 * @apiSuccess {String} urlDeezer Source : {Deezer}<br><i>Ex value : <a target='_blank' href='http://www.deezer.com/album/423368'>http://www.deezer.com/album/423368</a></i>
 * 
 * @apiSuccess {String} barcode Album barcode.<br>Source : {MusicBrainz}<br><i>Ex value : "074643811217"</i>
 * @apiSuccess {String} country Place where the album was released.<br>Source : {MusicBrainz}<br><i>Ex value : "US"</i>
 * @apiSuccess {String} dateRelease Source : {MusicBrainz}<br><i>Ex value : "1982-12-01"</i>
 * @apiSuccess {String} disambiguation Source : {MusicBrainz}<br><i>Ex value : "special edition"</i>
 * @apiSuccess {String} language Source : {MusicBrainz}<br><i>Ex value : "eng"</i>
 * 
 * 
 *@apiSuccess {Object} cover Object contains differents size (x5) about the picture of album.<br>Source : {Deezer}
 * @apiSuccess {String} cover.big Source : {Deezer}<br><i>Ex value : <a target='_blank' href='http://e-cdn-images.deezer.com/images/cover/ebeac32e9207c60877228ddc5bb37233/500x500-000000-80-0-0.jpg'>http://e-cdn-images.deezer.com/images/cover/ebeac32e9207c60877228ddc5bb37233/500x500-000000-80-0-0.jpg</a></i>
 * @apiSuccess {String} cover.medium Source : {Deezer}
 * @apiSuccess {String} cover.small Source : {Deezer}
 * @apiSuccess {String} cover.standard Source : {Deezer}
 * @apiSuccess {String} cover.xl Source : {Deezer}
 * @apiSuccess {String} upc Source : {Deezer}<br><i>Ex value : "884977399295"</i>
 * @apiSuccess {Number} deezerFans Source : {Deezer}<br><i>Ex value : "208166"</i>
 * @apiSuccess {Boolean-String} explicitLyrics Source : {Deezer}<br><i>Ex value : "true"</i>
 * @apiSuccess {String} rdf Source : {DBpedia}<br><i>Ex value : "<rdf:Description rdf:about='http://dbpedia.org/resource/Thriller_(Michael_Jackson_album)'>..."</i>
 */


/**
 * @api {get} apidoc/#api-Api_Fields-ALL_FIELDS_ARTIST All artist's fields
 * @apiVersion 1.0.0
 * @apiName ALL_FIELDS_ARTIST
 * @apiGroup Api Fields
 * @apiVersion 1.0.0
 * 
 * @apiSuccess {ObjectId} _id This represents an unique artist id. It was automatically generated by mongodb.<br>Source : {MongoDB}<br><i>Ex value : ObjectId("56d93e0fce06f50c0fed8808")</i>
 * 
 * @apiSuccess {String} id_artist_musicbrainz This represents an unique artist id by MusicBrainz. It's visible in the url of the artist's profile page.<br>Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>MusicBrainz</a>}<br><i>Ex value : "f27ec8db-af05-4f36-916e-3d57f91ecf5e"</i>
 * @apiSuccess {String} id_artist_deezer This represents an unique artist id by Deezer.<br>Source : {Deezer}<br><i>Ex value : "259"</i>
 * @apiSuccess {String} id_artist_discogs This represents an unique artist id by Discogs. It's visible in the url of the artist's profile page.<br>Source : {<a target='_blank' href='https://www.discogs.com/fr/artist/15885-Michael-Jackson'>Discogs</a>}<br><i>Ex value : "15885"</i>
 * 
 * 
 * @apiSuccess {String} name The artist's name.<br>Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : "Michael Jackson"</i>
 * @apiSuccess {String} type The artist's type.<br>Source : {MusicBrainz}<br><i>Ex value : "Person", "Orchestra", "Group", "Choir", "Character", "Other" or ""</i>
 * @apiSuccess {String[]} genres The artist's genres. It can be null.<br>Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : "Pop"</i>
 * @apiSuccess {String[]} labels This represents record labels obtained by the artist.<br>Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : "Legacy"</i>
 * @apiSuccess {String[]} recordLabel This represents record labels obtained by the artist.<br>Source : {DBpedia}<br><i>Ex value : "Legacy Recordings"</i>
 * 
 * @apiSuccess {String} gender This represents the gender of the artist. It can be null.<br>Source : {MusicBrainz}<br><i>Ex value : "Male", "Female", "Other" or ""</i>
 * @apiSuccess {String} disambiguation This is an information to discern an artist. It can be null.<br>Source : {MusicBrainz}<br><i>Ex value : "King of Pop"</i>
 * @apiSuccess {Object} endArea This an object whose represent the end activity of an artist or a group. It can be null.<br>Source : {MusicBrainz}
 * @apiSuccess {String} endArea.id This represents an unique endArea id. It can be null.<br>Source : {MusicBrainz}<br><i>Ex value : "59d97d00-14df-4bd8-bc93-aeb91448863d"</i>
 * @apiSuccess {String} endArea.name This is the place which artist was died or group was deleted. It can be null.<br>Source : {MusicBrainz}<br><i>Ex value : "Los Angeles"</i>
 * @apiSuccess {String} endArea.disambiguation Information about endArea. It can be null.<br>Source : {MusicBrainz}<br><i>Ex value : "city"</i>
 * 
 * @apiSuccess {Object} lifeSpan This an object whose represents the begin and the end of an artist or a group. It can be null.<br>Source : {MusicBrainz}
 * @apiSuccess {Boolean} lifeSpan.ended If artist's carriere or groupe is stopped or not.<br>Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>MusicBrainz</a>}<br><i>Ex value : "true"</i>
 * @apiSuccess {String} lifeSpan.begin Date of the birth of artist or group.<br>Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>MusicBrainz</a>}<br><i>Ex value : "1958-08-29"</i>
 * @apiSuccess {String} lifeSpan.end Date of the end of activity.<br>Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>MusicBrainz</a>}<br><i>Ex value : "2009-06-25"</i>
 * 
 * @apiSuccess {Object} location This an object whose represents the country and city of birth of an artist or a group. It can be null.<br>Source : {MusicBrainz}
 * @apiSuccess {String} location.id_city_musicbrainz This represents a city id by MusicBrainz.<br>Source : {MusicBrainz}<br><i>Ex value : "34357067-8f7f-4c7a-8d5e-99b6e60f7891"</i>
 * @apiSuccess {String} location.city This represents the city of the birth of artist or group.<br>Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>MusicBrainz</a>}<br><i>Ex value : "Gary"</i>
 * @apiSuccess {String} location.country This represents the country of the birth of artist or group.<br>Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>MusicBrainz</a>}<br><i>Ex value : "United States"</i>
 * 
 * @apiSuccess {String[]} locationInfo This represents information about places of begining of the artist.<br>Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : "Indiana"</i>
 * 
 * @apiSuccess {Object[]} members This an object whose represents member of artist.<br>Source : {MusicBrainz}
 * @apiSuccess {String} members.id_member_musicbrainz Source : {MusicBrainz}<br><i>Ex value : "e5257dc5-1edd-4fca-b7e6-1158e00522c8"</i>
 * @apiSuccess {String} members.id_member_discogs Source : {Discogs}<br><i>Ex value : "169154"</i>
 * 
 * @apiSuccess {String} members.begin Source : {MusicBrainz}<br><i>Ex value : "1966"</i>
 * @apiSuccess {String} members.disambiguation Source : {MusicBrainz}<br>
 * @apiSuccess {String} members.end Source : {MusicBrainz}<br><i>Ex value : "1984"</i>
 * @apiSuccess {Boolean} members.ended Source : {MusicBrainz}<br><i>Ex value : true</i>
 * @apiSuccess {String[]} members.instruments Array of intruments played by members of the artist.<br>Source : {MusicBrainz}<br><i>Ex value : "drums"</i>
 * @apiSuccess {String} members.name Source : {MusicBrainz}<br><i>Ex value : "The Jackson 5"</i>
 * @apiSuccess {String} members.type Source : {MusicBrainz}<br><i>Ex value : "member of band"</i>
 * @apiSuccess {String} members.gender Source : {MusicBrainz}<br><i>Ex value : "null"</i>
 * @apiSuccess {String} members.abstract Source : {Discogs}<br><i>Ex value : "The Jacksons were a group made-up of five brothers ..."</i>
 * @apiSuccess {String[]} members.nameVariations Source : {Discogs}<br><i>Ex value : "Jacksons"</i>
 * @apiSuccess {String} members.realName Real name of artist's member.<br>Source : {Discogs}<br><i>Ex value : "Kirk Lee Hammett"</i>
 * @apiSuccess {String} members.birthDate Birthdate of artist's member.<br>Source : {DBpedia}<br><i>Ex value : "1962-11-18"</i>
 * @apiSuccess {String} members.dbp_abstract Abstract about artist's member.<br>Source : {DBpedia}<br><i>Ex value : "Kirk Lee Hammett (born November 18, 1962) is the lead guitarist [...] The 100 Greatest Metal Guitarists."</i>
 * @apiSuccess {String[]} members.subject This represents subjects whose concern artist's member.<br>Source : {DBpedia}<br><i>Ex value : "American heavy metal guitarists"</i>
 * 
 * @apiSuccess {String[]} members.equipments Source : {EquipBoard}
 * @apiSuccess {String[]} members.equipments.items This represents informations about what equipments artist's member use.<br>Source : {EquipBoard}
 * @apiSuccess {String} members.equipments.items.description Source : {EquipBoard}<br><i>Ex value : "You can see Kirk Hammett playing this guitar at a few shows lately, usually in nothing else matters and a few others"</i>
 * @apiSuccess {String} members.equipments.items.img Source : {EquipBoard}<br><i>Ex value : <a target='_blank' href='http://images.equipboard.com/uploads/item/image/32171/esp-kh-dc-stbc-s.jpg?v=1498163057'>http://images.equipboard.com/uploads/item/image/32171/esp-kh-dc-stbc-s.jpg?v=1498163057</a></i><br><img src='http://images.equipboard.com/uploads/item/image/32171/esp-kh-dc-stbc-s.jpg?v=1498163057' width='50'> 
 * @apiSuccess {String} members.equipments.items.name Source : {EquipBoard}<br><i>Ex value : "ESP KH-DC STBC"</i>
 * @apiSuccess {String} members.equipments.items.url Source : {EquipBoard}<br><i>Ex value : <a target='_blank' href='http://equipboard.com/items/esp-kh-dc-stbc'>http://equipboard.com/items/esp-kh-dc-stbc</a></i>
 * @apiSuccess {String} members.equipments.items.urlDescription Source : {EquipBoard}<br><i>Ex value : <a target='_blank' href='http://equipboard.com/pros/kirk-hammett/esp-kh-dc-stbc'>http://equipboard.com/pros/kirk-hammett/esp-kh-dc-stbc</a></i>
 * @apiSuccess {String} members.equipments.type Source : {EquipBoard}<br><i>Ex value : "Guitars"</i>
 * 
 * @apiSuccess {String[]} members.urls An array of urls.<br>Source : {Discogs}<br><i>Ex value : <a target='_blank' href='http://www.thejacksons.com'>http://www.thejacksons.com</a></i>
 * @apiSuccess {String} members.urlWikidata Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='https://www.wikidata.org/wiki/Q43267'>https://www.wikidata.org/wiki/Q43267</a></i>
 * @apiSuccess {String} members.urlWikipedia Source : {MusicBrainz}
 * @apiSuccess {String} members.urlAllmusic Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://www.allmusic.com/artist/mn0000070929'>http://www.allmusic.com/artist/mn0000070929</a></i>
 * @apiSuccess {String} members.urlOfficialWebsite Source : {MusicBrainz}
 * @apiSuccess {String} members.urlMySpace Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='https://myspace.com/thejacksons'>https://myspace.com/thejacksons</a></i>
 * @apiSuccess {String} members.urlFacebook Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='https://www.facebook.com/jacksons'>https://www.facebook.com/jacksons</a></i>
 * @apiSuccess {String} members.urlDiscogs Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='https://www.discogs.com/artist/169154'>https://www.discogs.com/artist/169154</a></i>
 * @apiSuccess {String} members.urlEquipBoard Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://equipboard.com/pros/kirk-hammett'>http://equipboard.com/pros/kirk-hammett</a></i>
 * @apiSuccess {String} members.urlTwitter Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='https://twitter.com/DaveMustaine'>https://twitter.com/DaveMustaine</a></i>
 * @apiSuccess {String} members.urlLastFm Source : {MusicBrainz}
 * @apiSuccess {String} members.urlYouTube Source : {MusicBrainz}
 * @apiSuccess {String} members.urlBBC Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://www.bbc.co.uk/music/artists/d4f7b6a1-9331-4ea9-b064-46366f88adb7'>http://www.bbc.co.uk/music/artists/d4f7b6a1-9331-4ea9-b064-46366f88adb7</a></i>
 * @apiSuccess {String} members.urlSecondHandSongs Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://www.secondhandsongs.com/artist/2739'>http://www.secondhandsongs.com/artist/2739</a></i>
 * @apiSuccess {String} members.urlSoundCloud Source : {MusicBrainz}
 * @apiSuccess {String} members.urlInstagram Source : {MusicBrainz}<br><i>Ex value : <a target='_blank' href='https://instagram.com/davemustaine'>https://instagram.com/davemustaine</a></i>
 * @apiSuccess {String} members.urlPureVolume Source : {MusicBrainz}
 * @apiSuccess {String} members.urlGooglePlus Source : {MusicBrainz}
 * 
 * @apiSuccess {String} urlAllmusic Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://www.allmusic.com/artist/mn0000467203'>http://www.allmusic.com/artist/mn0000467203</a></i>
 * @apiSuccess {String} urlAmazon Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : <a target='_blank' href='http://www.amazon.com/asdf/e/B000APU04Q?tag=wikia-20'>http://www.amazon.com/asdf/e/B000APU04Q?tag=wikia-20</a></i>
 * @apiSuccess {String} urlDiscogs Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://www.discogs.com/artist/15885'>http://www.discogs.com/artist/15885/a></i>
 * @apiSuccess {String} urlFacebook Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://www.facebook.com/michaeljackson'>http://www.facebook.com/michaeljackson</a></i>
 * @apiSuccess {String} urlITunes Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : <a target='_blank' href='https://itunes.apple.com/us/artist/id32940'>https://itunes.apple.com/us/artist/id32940</a></i>
 * @apiSuccess {String} urlMusicBrainz Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : <a target='_blank' href='http://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>http://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e</a></i>
 * @apiSuccess {String} urlMySpace Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : <a target='_blank' href='https://myspace.com/michaeljackson'>https://myspace.com/michaeljackson</a></i>
 * @apiSuccess {String} urlOfficialWebsite Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://www.michaeljackson.com'>http://www.michaeljackson.com</a></i>
 * @apiSuccess {String} urlPureVolume Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}
 * @apiSuccess {String} urlRateYourMusic Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : <a target='_blank' href='http://rateyourmusic.com/artist/michael_jackson'>http://rateyourmusic.com/artist/michael_jackson</a></i>
 * @apiSuccess {String} urlSoundCloud Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://soundcloud.com/loureedmetallica'>http://soundcloud.com/loureedmetallica</a></i>
 * @apiSuccess {String} urlSpotify Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}<br><i>Ex value : <a target='_blank' href='https://play.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm'>https://play.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm</a></i>
 * @apiSuccess {String} urlTwitter Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a> or MusicBrainz}<br><i>Ex value : <a target='_blank' href='http://twitter.com/michaeljackson'>http://twitter.com/michaeljackson</a></i>
 * @apiSuccess {String} urlWikia Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia</a>}<br><i>Ex value : <a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>Michael_Jackson</a></i>
 * @apiSuccess {String} urlWikipedia Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value :<a target='_blank' href='http://en.wikipedia.org/wiki/Michael_Jackson'>http://en.wikipedia.org/wiki/Michael_Jackson</a></i>
 * @apiSuccess {String} urlYouTube Source : {<a target='_blank' href='http://lyrics.wikia.com/wiki/Michael_Jackson'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value : <a target='_blank' href='https://www.youtube.com/user/michaeljackson'>https://www.youtube.com/user/michaeljackson</a></i>
 * @apiSuccess {String} urlWikidata Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value : <a target='_blank' href='https://www.wikidata.org/wiki/Q2831'>https://www.wikidata.org/wiki/Q2831</a></i>
 * @apiSuccess {String} urlLastFm Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value : <a target='_blank' href='http://www.last.fm/music/Michael+Jackson'>http://www.last.fm/music/Michael+Jackson</a></i>
 * @apiSuccess {String} urlBBC Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value : <a target='_blank' href='http://www.bbc.co.uk/music/artists/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>http://www.bbc.co.uk/music/artists/f27ec8db-af05-4f36-916e-3d57f91ecf5e</a></i>
 * @apiSuccess {String} urlSecondHandSongs Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value : <a target='_blank' href='http://www.secondhandsongs.com/artist/254'>http://www.secondhandsongs.com/artist/254</a></i>
 * @apiSuccess {String} urlInstagram Source : {<a target='_blank' href='https://musicbrainz.org/artist/401c3991-b76b-499d-8082-9f2df958ef78'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value : <a target="_blank" href="https://www.instagram.com/officialphilcollins">https://www.instagram.com/officialphilcollins</a></i>
 * @apiSuccess {String} urlGooglePlus Source : {<a target='_blank' href='https://musicbrainz.org/artist/f27ec8db-af05-4f36-916e-3d57f91ecf5e'>LyricsWikia or MusicBrainz</a>}<br><i>Ex value : <a target='_blank' href='https://plus.google.com/+MichaelJackson/'>https://plus.google.com/+MichaelJackson/</a></i>
 * @apiSuccess {String} urlDeezer Source : {<a target='_blank' href='http://www.deezer.com/artist/259'>Deezer</a>}<br><i>Ex value : <a target='_blank' href='http://www.deezer.com/artist/259'>http://www.deezer.com/artist/259</a></i>
 * 
 * @apiSuccess {Number} deezerFans Number of fans of the artist on deezer.<br>Source : {Deezer}<br><i>Ex value : "8066328"</i>
 * @apiSuccess {Object} picture Object contains differents size (x5) about the picture of artist.<br>Source : {Deezer}<br><i>Ex value : <a target='_blank' href='http://e-cdn-images.deezer.com/images/artist/620963abda08cd7aa97aee40248bfe10/250x250-000000-80-0-0.jpg'>http://e-cdn-images.deezer.com/images/artist/620963abda08cd7aa97aee40248bfe10/250x250-000000-80-0-0.jpg</a></i>
 * @apiSuccess {String} picture.big Source : {Deezer}
 * @apiSuccess {String} picture.medium Source : {Deezer}
 * @apiSuccess {String} picture.small Source : {Deezer}
 * @apiSuccess {String} picture.standard Source : {Deezer}
 * @apiSuccess {String} picture.xl Source : {Deezer}
 * 
 * @apiSuccess {String[]} associatedMusicalArtist Artists associated.<br>Source : {DBpedia}<br><i>Ex value : "The_Jackson_5"</i>
 * @apiSuccess {String-String[]} dbp_abstract Abstract about artist or group.<br>Source : {DBpedia}<br><i>Ex value : "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer ..."</i>
 * @apiSuccess {String[]} dbp_genre This represents genres of the artist.<br>Source : {DBpedia}<br><i>Ex value : "Dance-pop"</i>
 * @apiSuccess {String[]} subject This represents subjects whose concern the artist.<br>Source : {DBpedia}<br><i>Ex value : "American dance musicians"</i>
 * @apiSuccess {String} rdf This represents the RDF version of the wikpedia artist's page.<br>Source : {DBpedia}<br><i>Ex value : "<dbo:recordLabel rdf:resource='http://dbpedia.org/resource/Sony_Music_Entertainment' />"</i>
 * 
 * 
 * @apiSuccess {String} abstract This an abstract about the artist.<br>Source : {<a target='_blank' href='https://www.discogs.com/fr/artist/15885-Michael-Jackson'>Discogs</a>}<br><i>Ex value : "American singer, dancer, entertainer [...] UCLA Medical Center."</i>
 * @apiSuccess {String[]} nameVariations This represents names variations of the artist.<br>Source : {<a target='_blank' href='https://www.discogs.com/fr/artist/15885-Michael-Jackson'>Discogs</a>}<br><i>Ex value : "M.J."</i>
 * @apiSuccess {String[]} urls This fields contains urls founded on Discogs.<br>Source : {<a target='_blank' href='https://www.discogs.com/fr/artist/15885-Michael-Jackson'>Discogs</a>}<br><i>Ex value : <a target='_blank' href='http://www.vevo.com/artist/michael-jackson'>http://www.vevo.com/artist/michael-jackson</a></i>
 * 
 * 
 * @apiSuccess {String[]} nameVariations_fold Artist name variations withtout accent.<br>Source : {Animux}<br><i>Ex value : "M.J."</i>
 * @apiSuccess {String[]} animux_path Animux path.<br>Source : {Animux}<br><i>Ex value : "./mongo/animux/M/Michael%20Jackson"</i>
 * @apiSuccess {String[]} animux_path_ambiguous Animux_path_ambiguous.<br>Source : {Animux}<br>
 * @apiSuccess {String} name_accent_fold Artist name folder withtout accent.<br>Source : {Animux}<br><i>Ex value : "Michael Jackson"</i>
 */


/**
 * @api {get} apidoc/#api-Api_Fields-ALL_FIELDS_SONG All song's fields
 * @apiVersion 1.0.0
 * @apiName ALL_FIELDS_SONG
 * @apiGroup Api Fields
 * @apiVersion 1.0.0
 *
 * @apiSuccess {ObjectId} _id Song id
 * @apiSuccess {ObjectId} id_album Same as "_id" from Album collection
 * 
 * @apiSuccess {String} lyrics Song lyrics [Source : LyricsWikia]
 * @apiSuccess {String} name Artist name same as "name" from Artist collection [Source : LyricsWikia]
 * @apiSuccess {String} title Song title [Source : LyricsWikia]
 * @apiSuccess {String} title_accent_fold Same as "title" without accent from Song collection [Source : LyricsWikia]
 * @apiSuccess {String} albumTitle Album title same as "title" from Album collection [Source : LyricsWikia]
 * @apiSuccess {String} lengthAlbum Album length same as "length" from Album collection [Source : LyricsWikia]
 * @apiSuccess {Number} position Track number in the album [Source : LyricsWikia]
 * @apiSuccess {String} publicationDateAlbum Album release, same as "publicationDate" from Album collection [Source : LyricsWikia]
 * @apiSuccess {String} urlAllmusic Song urlAllmusic [Source : LyricsWikia]
 * @apiSuccess {String} urlAmazon Song urlAmazon [Source : LyricsWikia]
 * @apiSuccess {String} urlGoEar Song urlGoEar [Source : LyricsWikia]
 * @apiSuccess {String} urlHypeMachine Song urlHypeMachine [Source : LyricsWikia]
 * @apiSuccess {String} urlITunes Song urlITunes [Source : LyricsWikia]
 * @apiSuccess {String} urlLastFm Song urlLastFm [Source : LyricsWikia]
 * @apiSuccess {String} urlMusicBrainz Song urlMusicBrainz [Source : LyricsWikia]
 * @apiSuccess {String} urlPandora Song urlPandora [Source : LyricsWikia]
 * @apiSuccess {String} urlSong Url to lyricsWikia [Source : LyricsWikia]
 * @apiSuccess {String} urlSpotify Song urlSpotify [Source : LyricsWikia]
 * @apiSuccess {String} urlWikipedia Song urlWikipedia [Source : LyricsWikia]
 * @apiSuccess {String} urlYouTube Song urlYouTube [Source : LyricsWikia]
 * 
 * @apiSuccess {String} id_song_musicbrainz Song id musicbrainz [Source : MusicBrainz]
 * @apiSuccess {String} begin [Source : MusicBrainz]
 * @apiSuccess {String} end [Source : MusicBrainz]
 * @apiSuccess {String} disambiguation [Source : MusicBrainz]
 * @apiSuccess {String} language [Source : MusicBrainz]
 * @apiSuccess {String} language_detect Song language same as "language" from Song collection [Source : MusicBrainz]
 * 
 * @apiSuccess {String} id_song_deezer Song id deezer [Source : Deezer]
 * @apiSuccess {String} id_album_deezer Album id deezer [Source : Deezer]
 * @apiSuccess {String} id_artist_deezer Song id_artist_deezer [Source : Deezer]
 * @apiSuccess {String} isrc [Source : Deezer]
 * @apiSuccess {String} bpm [Source : Deezer]
 * @apiSuccess {String} gain [Source : Deezer]
 * @apiSuccess {String} length Song duration in seconds.<br>{Source : Deezer}<br><i>Ex value: "228.0"</i>
 * @apiSuccess {String} preview [Source : Deezer]
 * @apiSuccess {String} publicationDate [Source : Deezer]
 * @apiSuccess {String} rank [Source : Deezer]
 * @apiSuccess {String} urlDeezer Song urlDeezer [Source : Deezer]
 * @apiSuccess {String[]} availableCountries [Source : Deezer]
 * @apiSuccess {String[]} deezer_mapping [Source : Deezer]
 * @apiSuccess {Boolean} explicitLyrics [Source : Deezer]
 * 
 * @apiSuccess {String} rdf Song rdf [Source : DBpedia]
 * @apiSuccess {String} abstract Song abstract [Source : DBpedia]
 * @apiSuccess {String[]} award Song award [Source : DBpedia]
 * @apiSuccess {String[]} format Song format (vinyl, CD;) [Source : DBpedia]
 * @apiSuccess {String[]} genre Song genre [Source : DBpedia]
 * @apiSuccess {String[]} producer Song producer [Source : DBpedia]
 * @apiSuccess {String[]} recordLabel Song recordLabel [Source : DBpedia]
 * @apiSuccess {String[]} recorded Song recorded, mainly are dates [Source : DBpedia]
 * @apiSuccess {String[]} releaseDate Song release date [Source : DBpedia]
 * @apiSuccess {String[]} runtime Song duration in seconds. This field can have different duration depend to the music's version.<br>{Source : DBpedia}<br><i>Ex value: "228.0, 258.0"</i>
 * @apiSuccess {String[]} subject Song subject in section "Categories" in bottom of Wikipedia pages [Source : DBpedia]
 * @apiSuccess {String[]} writer List of people who participated in writing music [Source : DBpedia]
 * @apiSuccess {Boolean} isClassic Depend to "subject" from Song collection "true" if subject is {award, Hall_of_fame, diamond, platinum, gold or hot_100} [Source : DBpedia]
 * 
 * @apiSuccess {String[]} animux_paths  [Source : Animux]
 * @apiSuccess {String} animux_content Song animux content [Source : Animux]
 * @apiSuccess {String} animux_path Song animux path [Source : Animux]
 * 
 * @apiSuccess {String} multitrack_file Song multitrack_file
 * @apiSuccess {String} multitrack_path Song multitrack_path
 */

export default router;