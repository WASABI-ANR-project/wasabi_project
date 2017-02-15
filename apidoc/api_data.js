define({ "api": [
  {
    "type": "get",
    "url": "search/artist_id/:artistId/album_id/:albumId",
    "title": "Get infos about album by id",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/artist_id/56d93d84ce06f50c0fed8747/album_id/5714debe25ac0d8aee36b664",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetInfosAlbumByAlbumId",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>An artist name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>An album title of artistName.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlWikipedia",
            "description": "<p>Artist urlWikipedia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlOfficialWebsite",
            "description": "<p>Artist urlOfficialWebsite</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlFacebook",
            "description": "<p>Artist urlFacebook</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlMySpace",
            "description": "<p>Artist urlMySpace</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlTwitter",
            "description": "<p>Artist urlTwitter</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "locationInfo",
            "description": "<p>Artist locationInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activeYears",
            "description": "<p>Artist activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "genres",
            "description": "<p>Artist genres</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "labels",
            "description": "<p>Artist labels</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>Members object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>Members name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members.instruments",
            "description": "<p>Members instruments</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members.activeYears",
            "description": "<p>Members activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "formerMembers",
            "description": "<p>FormerMembers object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formerMembers.name",
            "description": "<p>FormerMembers name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "formerMembers.instruments",
            "description": "<p>FormerMembers instruments</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "formerMembers.activeYears",
            "description": "<p>FormerMembers activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rdf",
            "description": "<p>Artist rdf</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums",
            "description": "<p>Album object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums._id",
            "description": "<p>Album id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.titre",
            "description": "<p>Album titre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.dateSortie",
            "description": "<p>Album dateSortie</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.genre",
            "description": "<p>Album genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.length",
            "description": "<p>Album length</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.id_artist",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.rdf",
            "description": "<p>Album rdf</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums.songs",
            "description": "<p>Song object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs._id",
            "description": "<p>Song id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.position",
            "description": "<p>Song position</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.titre",
            "description": "<p>Song titre</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"56d93d84ce06f50c0fed8747\",\n    \"name\": \"Metallica\",\n    \"urlWikipedia\": \"http://en.wikipedia.org/wiki/Metallica\",\n    \"urlOfficialWebsite\": \"http://www.metallica.com/\",\n    \"urlFacebook\": \"http://www.facebook.com/metallica\",\n    \"urlMySpace\": \"https://myspace.com/Metallica\",\n    \"urlTwitter\": \"http://twitter.com/metallica\",\n    \"locationInfo\": [\"United States\", \"California\", \"Los Angeles\"],\n    \"activeYears\": \"\",\n    \"genres\": [\"Heavy Metal\", \"Thrash Metal\"],\n    \"labels\": [\"Elektra\", \"Megaforce Records\", \"Mercury Records\", \"Warner Bros. Records\"],\n    \"members\": [{\n        \"name\": \" James Hetfield\",\n        \"instruments\": [\"lead vocals\", \" rhythm guitar \"],\n        \"activeYears\": [\"1981-present\\n\"]\n    }, {\n        \"name\": \" Kirk Hammett\",\n        \"instruments\": [\"lead guitar \"],\n        \"activeYears\": [\"1983-present\\n\"]\n    }],\n    \"formerMembers\": [{\n        \"name\": \" Dave Mustaine\",\n        \"instruments\": [\"lead guitar\", \" backing vocals \"],\n        \"activeYears\": [\"1981-1983\\n\"]\n    }, {\n        \"name\": \" Ron McGovney\",\n        \"instruments\": [\"bass \"],\n        \"activeYears\": [\"1981-1982\\n\"]\n    }],\n    \"rdf\": \" 1963-03-04 Jason Curtis Newsted Bass, guitar ...\",\n    \"albums\": {\n        \"_id\": \"5714debe25ac0d8aee36b664\",\n        \"name\": \"Metallica\",\n        \"titre\": \"Master Of Puppets\",\n        \"dateSortie\": \"1986\",\n        \"urlWikipedia\": \"http://en.wikipedia.org/wiki/Master_of_Puppets\",\n        \"genre\": \"Thrash Metal\",\n        \"length\": \"54:46\",\n        \"id_artist\": \"56d93d84ce06f50c0fed8747\",\n        \"rdf\": \" Gold Platinum Master of Puppets is the third studio album by American heavy metal band Metallica... \",\n        \"songs\": [{\n            \"_id\": \"5714dedb25ac0d8aee4ad816\",\n            \"position\": 0,\n            \"titre\": \"Battery\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad817\",\n            \"position\": 1,\n            \"titre\": \"Master Of Puppets\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad818\",\n            \"position\": 2,\n            \"titre\": \"The Thing That Should Not Be\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad819\",\n            \"position\": 3,\n            \"titre\": \"Welcome Home (Sanitarium)\"\n        }]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>albumName was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Album not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Artist not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/artist/:artistName/album/:albumName",
    "title": "Get infos about album",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/artist/Metallica/album/Master%20Of%20Puppets",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetInfosAlbumByAlbumName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistName",
            "description": "<p>An artist name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumName",
            "description": "<p>An album title of artistName.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlWikipedia",
            "description": "<p>Artist urlWikipedia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlOfficialWebsite",
            "description": "<p>Artist urlOfficialWebsite</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlFacebook",
            "description": "<p>Artist urlFacebook</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlMySpace",
            "description": "<p>Artist urlMySpace</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlTwitter",
            "description": "<p>Artist urlTwitter</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "locationInfo",
            "description": "<p>Artist locationInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activeYears",
            "description": "<p>Artist activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "genres",
            "description": "<p>Artist genres</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "labels",
            "description": "<p>Artist labels</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>Members object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>Members name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members.instruments",
            "description": "<p>Members instruments</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members.activeYears",
            "description": "<p>Members activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "formerMembers",
            "description": "<p>FormerMembers object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formerMembers.name",
            "description": "<p>FormerMembers name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "formerMembers.instruments",
            "description": "<p>FormerMembers instruments</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "formerMembers.activeYears",
            "description": "<p>FormerMembers activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rdf",
            "description": "<p>Artist rdf</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums",
            "description": "<p>Album object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums._id",
            "description": "<p>Album id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.titre",
            "description": "<p>Album titre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.dateSortie",
            "description": "<p>Album dateSortie</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.genre",
            "description": "<p>Album genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.length",
            "description": "<p>Album length</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.id_artist",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.rdf",
            "description": "<p>Album rdf</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums.songs",
            "description": "<p>Song object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs._id",
            "description": "<p>Song id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.position",
            "description": "<p>Song position</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.titre",
            "description": "<p>Song titre</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"56d93d84ce06f50c0fed8747\",\n    \"name\": \"Metallica\",\n    \"urlWikipedia\": \"http://en.wikipedia.org/wiki/Metallica\",\n    \"urlOfficialWebsite\": \"http://www.metallica.com/\",\n    \"urlFacebook\": \"http://www.facebook.com/metallica\",\n    \"urlMySpace\": \"https://myspace.com/Metallica\",\n    \"urlTwitter\": \"http://twitter.com/metallica\",\n    \"locationInfo\": [\"United States\", \"California\", \"Los Angeles\"],\n    \"activeYears\": \"\",\n    \"genres\": [\"Heavy Metal\", \"Thrash Metal\"],\n    \"labels\": [\"Elektra\", \"Megaforce Records\", \"Mercury Records\", \"Warner Bros. Records\"],\n    \"members\": [{\n        \"name\": \" James Hetfield\",\n        \"instruments\": [\"lead vocals\", \" rhythm guitar \"],\n        \"activeYears\": [\"1981-present\\n\"]\n    }, {\n        \"name\": \" Kirk Hammett\",\n        \"instruments\": [\"lead guitar \"],\n        \"activeYears\": [\"1983-present\\n\"]\n    }],\n    \"formerMembers\": [{\n        \"name\": \" Dave Mustaine\",\n        \"instruments\": [\"lead guitar\", \" backing vocals \"],\n        \"activeYears\": [\"1981-1983\\n\"]\n    }, {\n        \"name\": \" Ron McGovney\",\n        \"instruments\": [\"bass \"],\n        \"activeYears\": [\"1981-1982\\n\"]\n    }],\n    \"rdf\": \" 1963-03-04 Jason Curtis Newsted Bass, guitar ...\",\n    \"albums\": {\n        \"_id\": \"5714debe25ac0d8aee36b664\",\n        \"name\": \"Metallica\",\n        \"titre\": \"Master Of Puppets\",\n        \"dateSortie\": \"1986\",\n        \"urlWikipedia\": \"http://en.wikipedia.org/wiki/Master_of_Puppets\",\n        \"genre\": \"Thrash Metal\",\n        \"length\": \"54:46\",\n        \"id_artist\": \"56d93d84ce06f50c0fed8747\",\n        \"rdf\": \" Gold Platinum Master of Puppets is the third studio album by American heavy metal band Metallica... \",\n        \"songs\": [{\n            \"_id\": \"5714dedb25ac0d8aee4ad816\",\n            \"position\": 0,\n            \"titre\": \"Battery\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad817\",\n            \"position\": 1,\n            \"titre\": \"Master Of Puppets\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad818\",\n            \"position\": 2,\n            \"titre\": \"The Thing That Should Not Be\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad819\",\n            \"position\": 3,\n            \"titre\": \"Welcome Home (Sanitarium)\"\n        }]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>albumName was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Album not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Artist not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/artist/:artistName",
    "title": "Get infos about artist",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/artist/Metallica",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetInfosArtistByArtistName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistName",
            "description": "<p>An artist name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlWikipedia",
            "description": "<p>Artist urlWikipedia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlOfficialWebsite",
            "description": "<p>Artist urlOfficialWebsite</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlFacebook",
            "description": "<p>Artist urlFacebook</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlMySpace",
            "description": "<p>Artist urlMySpace</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlTwitter",
            "description": "<p>Artist urlTwitter</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "locationInfo",
            "description": "<p>Artist locationInfo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activeYears",
            "description": "<p>Artist activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "genres",
            "description": "<p>Artist genres</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "labels",
            "description": "<p>Artist labels</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>Members object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>Members name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members.instruments",
            "description": "<p>Members instruments</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members.activeYears",
            "description": "<p>Members activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "formerMembers",
            "description": "<p>FormerMembers object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formerMembers.name",
            "description": "<p>FormerMembers name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "formerMembers.instruments",
            "description": "<p>FormerMembers instruments</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "formerMembers.activeYears",
            "description": "<p>FormerMembers activeYears</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rdf",
            "description": "<p>Artist rdf</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums",
            "description": "<p>Album object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums._id",
            "description": "<p>Album id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.titre",
            "description": "<p>Album titre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.dateSortie",
            "description": "<p>Album dateSortie</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.genre",
            "description": "<p>Album genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.length",
            "description": "<p>Album length</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.id_artist",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums.songs",
            "description": "<p>Song object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs._id",
            "description": "<p>Song id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.position",
            "description": "<p>Song position</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.titre",
            "description": "<p>Song titre</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"56d93d84ce06f50c0fed8747\",\n    \"name\": \"Metallica\",\n    \"urlWikipedia\": \"http://en.wikipedia.org/wiki/Metallica\",\n    \"urlOfficialWebsite\": \"http://www.metallica.com/\",\n    \"urlFacebook\": \"http://www.facebook.com/metallica\",\n    \"urlMySpace\": \"https://myspace.com/Metallica\",\n    \"urlTwitter\": \"http://twitter.com/metallica\",\n    \"locationInfo\": [\"United States\", \"California\", \"Los Angeles\"],\n    \"activeYears\": \"\",\n    \"genres\": [\"Heavy Metal\", \"Thrash Metal\"],\n    \"labels\": [\"Elektra\", \"Megaforce Records\", \"Mercury Records\", \"Warner Bros. Records\"],\n    \"members\": [{\n        \"name\": \" James Hetfield\",\n        \"instruments\": [\"lead vocals\", \" rhythm guitar \"],\n        \"activeYears\": [\"1981-present\\n\"]\n    }],\n    \"formerMembers\": [{\n        \"name\": \" Dave Mustaine\",\n        \"instruments\": [\"lead guitar\", \" backing vocals \"],\n        \"activeYears\": [\"1981-1983\\n\"]\n    }],\n    \"rdf\": \" 1963-03-04 Jason Curtis Newsted Bass, guitar, drums, vocals Jason Newsted Jason Curtis Newsted (born March 4, 1963) is an American metal musician, known for playing bass guitar with the bands Metallica (in which he did occasional lead vocals) ...\",\n    \"albums\": [{\n        \"_id\": \"5714debe25ac0d8aee36b664\",\n        \"name\": \"Metallica\",\n        \"titre\": \"Master Of Puppets\",\n        \"dateSortie\": \"1986\",\n        \"genre\": \"Thrash Metal\",\n        \"length\": \"54:46\",\n        \"id_artist\": \"56d93d84ce06f50c0fed8747\",\n        \"songs\": [{\n            \"_id\": \"5714dedb25ac0d8aee4ad816\",\n            \"position\": 0,\n            \"titre\": \"Battery\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad817\",\n            \"position\": 1,\n            \"titre\": \"Master Of Puppets\"\n            }, {\n            \"_id\": \"5714dedb25ac0d8aee4ad81d\",\n            \"position\": 7,\n            \"titre\": \"Damage, Inc.\"\n        }]\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The artistName was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\":\"Artist not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/artist/:artistName/album/:albumName/song/:songName",
    "title": "Get infos about song by song name",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/artist/Metallica/album/Master%20Of%20Puppets/song/Master%20Of%20Puppets",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetInfosSongBySongName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistName",
            "description": "<p>An artist name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumName",
            "description": "<p>An album title of artistName.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "songName",
            "description": "<p>A song title of songName.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums",
            "description": "<p>Album object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums._id",
            "description": "<p>Album id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.titre",
            "description": "<p>Album titre</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums.songs",
            "description": "<p>Song object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs._id",
            "description": "<p>Song id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "albums.songs.position",
            "description": "<p>Song position</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.albumTitre",
            "description": "<p>Album titre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.lengthAlbum",
            "description": "<p>Album lengthAlbum</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.dateSortieAlbum",
            "description": "<p>Song dateSortieAlbum</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.titre",
            "description": "<p>Song titre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.lyrics",
            "description": "<p>Song lyrics</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlWikipedia",
            "description": "<p>Song urlWikipedia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.id_album",
            "description": "<p>Song id_album</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.rdf",
            "description": "<p>Song rdf</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.format",
            "description": "<p>Song format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.genre",
            "description": "<p>Song genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.producer",
            "description": "<p>Song producer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.recordLabel",
            "description": "<p>Song recordLabel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.writer",
            "description": "<p>Song writer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.recorded",
            "description": "<p>Song recorded</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.abstract",
            "description": "<p>Song abstract</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.releaseDate",
            "description": "<p>Song releaseDate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.runtime",
            "description": "<p>Song runtime</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.award",
            "description": "<p>Song award</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.subject",
            "description": "<p>Song subject</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.isClassic",
            "description": "<p>Song isClassic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlYoutube",
            "description": "<p>Song urlYoutube</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.multitrack_path",
            "description": "<p>Song multitrack_path</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlITunes",
            "description": "<p>Song urlITunes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlAmazon",
            "description": "<p>Song urlAmazon</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlGoEar",
            "description": "<p>Song urlGoEar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlSpotify",
            "description": "<p>Song urlSpotify</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlAllmusic",
            "description": "<p>Song urlAllmusic</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albums.songs.urlMusicBrainz",
            "description": "<p>Song urlMusicBrainz</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response for an artist:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"56d93d84ce06f50c0fed8747\",\n    \"name\": \"Metallica\",\n    \"albums\": {\n        \"_id\": \"5714debe25ac0d8aee36b664\",\n        \"titre\": \"Master Of Puppets\",\n        \"songs\": {\n            \"_id\": \"5714dedb25ac0d8aee4ad817\",\n            \"name\": \"Metallica\",\n            \"position\": 1,\n            \"albumTitre\": \"Master Of Puppets\",\n            \"lengthAlbum\": \"54:46\",\n            \"dateSortieAlbum\": \"1986\",\n            \"titre\": \"Master Of Puppets\",\n            \"lyrics\": \"End of passion play, crumbling away<br>I&apos;m your source of self-destruction...\",\n            \"urlWikipedia\": \"http://en.wikipedia.org/wiki/Master_of_Puppets_(song)\",\n            \"id_album\": \"5714debe25ac0d8aee36b664\",\n            \"rdf\": \"<?xml version='1.0' encoding='utf-8' ?><rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'  xmlns:rdfs='http://www.w3.org/2000/01/rdf-schema#' xmlns:dct='http://purl.org/dc/terms/' xmlns:dbp='http://dbpedia.org/property/' xmlns:dbo='http://dbpedia.org/ontology/' >   <rdf:Description rdf:about='http://dbpedia.org/resource/Master_of_Puppets_(song)'><dct:subject rdf:resource='http://dbpedia.org/resource/Category:Songs_written_by_Lars_Ulrich' />     <dct:subject rdf:resource='http://dbpedia.org/resource/Category:Metallica_songs' /><dct:subject rdf:resource='http://dbpedia.org/resource/Category:Elektra_Records_singles' /></rdf:Description> </rdf:RDF>\",\n            \"format\": [\"Gramophone record\", \"12-inch single\"],\n            \"genre\": [\"Thrash metal\", \"Progressive metal\"],\n            \"producer\": [\"Flemming Rasmussen\"],\n            \"recordLabel\": [\"Elektra Records\", \"Music for Nations\"],\n            \"writer\": [\"Cliff Burton\", \"Lars Ulrich\", \"James Hetfield\", \"Kirk Hammett\"],\n            \"recorded\": [\"1985\"],\n            \"abstract\": \"\\\"Master of Puppets\\\" is a song by the American heavy metal band Metallica...\",\n            \"releaseDate\": [\"1986-07-02\"],\n            \"runtime\": [\"516.0\"],\n            \"award\": [],\n            \"subject\": [\"Songs written by Lars Ulrich\", \"Metallica songs\", \"Elektra Records singles\", \"Songs written by Cliff Burton\", \"Songs about drugs\", \"Songs written by James Hetfield\", \"Songs written by Kirk Hammett\", \"1986 singles\"],\n            \"urlYoutube\": \"\",\n            \"isClassic\": false,\n            \"multitrack_path\": \"M Multitracks/Metallica - Master Of Puppets\",\n            \"urlITunes\": \"https://itunes.apple.com/us/album/id167353581?i=167353601\",\n            \"urlAmazon\": \"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=http%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00122A546%2Fsr%3D8-1%2Fqid%3D1147400297%2Fref%3Dpd_bbs_1%3F%255Fencoding%3DUTF8\",\n            \"urlGoEar\": \"http://goear.com/listen.php?v=afd1e62\",\n            \"urlSpotify\": \"https://play.spotify.com/track/6NwbeybX6TDtXlpXvnUOZC\",\n            \"urlAllmusic\": \"http://www.allmusic.com/song/mt0002228132\",\n            \"urlMusicBrainz\": \"http://musicbrainz.org/recording/49b8371f-156a-41e8-92c9-8cd899235b90\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The artistName was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response for artist not found:",
          "content": "HTTP/1.1 404 Artist Not Found\n{\n    \"error\": \"Artist not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response for album not found:",
          "content": "HTTP/1.1 404 Album Not Found\n{\n    \"error\": \"Album not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response for song not found:",
          "content": "HTTP/1.1 404 Song Not Found\n{\n    \"error\": \"Song not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/dbinfo",
    "title": "Get number of artist,album,song",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/dbinfo",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetNumberOfArtistAlbumSong",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nbArtist",
            "description": "<p>The number of occurrences found</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nbAlbum",
            "description": "<p>The number of occurrences found</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nbSong",
            "description": "<p>The number of occurrences found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"nbArtist\":77492,\n    \"nbAlbum\":208743,\n    \"nbSong\":2099289\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/count/:collection/:fieldName/:fieldValue",
    "title": "Get number of :fieldValue",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/count/song/award/Platinum\nwasabi.i3s.unice.fr/search/count/album/genre/Alternative%20Rock",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetNumberOfFieldValue",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collection",
            "description": "<p>{artist, album, song}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fieldName",
            "description": "<p>a field name in the database</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fieldValue",
            "description": "<p>a value of a field in the database</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>The number of occurrences found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\":3366\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/categorie/:nomCategorie/lettre/:lettre/page/:numPage",
    "title": "Get Page information",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/categorie/artists/lettre/b/page/5",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetPageByCategory",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomCategorie",
            "description": "<p>{artists,albums,songs}.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lettre",
            "description": "<p>Une ou deux lettres.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numPage",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response for an artist:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"artists\": [{\n            \"_id\": \"56d843ec53a7ddfc01f96d17\",\n            \"name\": \"J\"\n        },\n        {\n            \"_id\": \"56d843ed53a7ddfc01f96d18\",\n            \"name\": \"J Alvarez\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for an album:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"albums\": [{\n            \"_id\": \"5714debb25ac0d8aee34e3a7\",\n            \"name\": \"Agnetha Fältskog\",\n            \"titleAlbum\": \"A\"\n        },\n        {\n            \"_id\": \"5714debb25ac0d8aee355421\",\n            \"name\": \"Cass McCombs\",\n            \"titleAlbum\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for a song:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"songs\": [{\n            \"_id\": \"5714dec325ac0d8aee3859f9\",\n            \"name\": \"Addict\",\n            \"albumTitre\": \"Come On Sun\",\n            \"titleSong\": \"K\"\n        },\n        {\n            \"_id\": \"5714dec325ac0d8aee3804f5\",\n            \"name\": \"A\",\n            \"albumTitre\": \"A Vs. Monkey Kong\",\n            \"titleSong\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The nomCategorie or lettre or numPage was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Page not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/categorie/:nomCategorie/lettre/:lettre/page/:numPage",
    "title": "Get Page information",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/categorie/artists/lettre/b/page/5",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetPageByCategory",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomCategorie",
            "description": "<p>{artists,albums,songs}.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lettre",
            "description": "<p>Une ou deux lettres.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numPage",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response for an artist:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"artists\": [{\n            \"_id\": \"56d843ec53a7ddfc01f96d17\",\n            \"name\": \"J\"\n        },\n        {\n            \"_id\": \"56d843ed53a7ddfc01f96d18\",\n            \"name\": \"J Alvarez\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for an album:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"albums\": [{\n            \"_id\": \"5714debb25ac0d8aee34e3a7\",\n            \"name\": \"Agnetha Fältskog\",\n            \"titleAlbum\": \"A\"\n        },\n        {\n            \"_id\": \"5714debb25ac0d8aee355421\",\n            \"name\": \"Cass McCombs\",\n            \"titleAlbum\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for a song:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"songs\": [{\n            \"_id\": \"5714dec325ac0d8aee3859f9\",\n            \"name\": \"Addict\",\n            \"albumTitre\": \"Come On Sun\",\n            \"titleSong\": \"K\"\n        },\n        {\n            \"_id\": \"5714dec325ac0d8aee3804f5\",\n            \"name\": \"A\",\n            \"albumTitre\": \"A Vs. Monkey Kong\",\n            \"titleSong\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The nomCategorie or lettre or numPage was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Page not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/categorie/:nomCategorie/lettre/:lettre/page/:numPage",
    "title": "Get Page information",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/categorie/artists/lettre/b/page/5",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetPageByCategory",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomCategorie",
            "description": "<p>{artists,albums,songs}.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lettre",
            "description": "<p>Une ou deux lettres.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numPage",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response for an artist:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"artists\": [{\n            \"_id\": \"56d843ec53a7ddfc01f96d17\",\n            \"name\": \"J\"\n        },\n        {\n            \"_id\": \"56d843ed53a7ddfc01f96d18\",\n            \"name\": \"J Alvarez\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for an album:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"albums\": [{\n            \"_id\": \"5714debb25ac0d8aee34e3a7\",\n            \"name\": \"Agnetha Fältskog\",\n            \"titleAlbum\": \"A\"\n        },\n        {\n            \"_id\": \"5714debb25ac0d8aee355421\",\n            \"name\": \"Cass McCombs\",\n            \"titleAlbum\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for a song:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"songs\": [{\n            \"_id\": \"5714dec325ac0d8aee3859f9\",\n            \"name\": \"Addict\",\n            \"albumTitre\": \"Come On Sun\",\n            \"titleSong\": \"K\"\n        },\n        {\n            \"_id\": \"5714dec325ac0d8aee3804f5\",\n            \"name\": \"A\",\n            \"albumTitre\": \"A Vs. Monkey Kong\",\n            \"titleSong\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The nomCategorie or lettre or numPage was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Page not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/categorie/:nomCategorie/lettre/:lettre/page/:numPage",
    "title": "Get page information",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/categorie/artists/lettre/b/page/5",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetPageByCategory",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomCategorie",
            "description": "<p>{artists,albums,songs}.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lettre",
            "description": "<p>Une ou deux lettres.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numPage",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response for an artist:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"artists\": [{\n            \"_id\": \"56d843ec53a7ddfc01f96d17\",\n            \"name\": \"J\"\n        },\n        {\n            \"_id\": \"56d843ed53a7ddfc01f96d18\",\n            \"name\": \"J Alvarez\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for an album:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"albums\": [{\n            \"_id\": \"5714debb25ac0d8aee34e3a7\",\n            \"name\": \"Agnetha Fältskog\",\n            \"titleAlbum\": \"A\"\n        },\n        {\n            \"_id\": \"5714debb25ac0d8aee355421\",\n            \"name\": \"Cass McCombs\",\n            \"titleAlbum\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for a song:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"songs\": [{\n            \"_id\": \"5714dec325ac0d8aee3859f9\",\n            \"name\": \"Addict\",\n            \"albumTitre\": \"Come On Sun\",\n            \"titleSong\": \"K\"\n        },\n        {\n            \"_id\": \"5714dec325ac0d8aee3804f5\",\n            \"name\": \"A\",\n            \"albumTitre\": \"A Vs. Monkey Kong\",\n            \"titleSong\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The nomCategorie or lettre or numPage was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Page not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/categorie/:nomCategorie/lettre/:lettre/page/:numPage",
    "title": "Get Page information",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/categorie/artists/lettre/b/page/5",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetPageByCategory",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomCategorie",
            "description": "<p>{artists,albums,songs}.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lettre",
            "description": "<p>Une ou deux lettres.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numPage",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response for an artist:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"artists\": [{\n            \"_id\": \"56d843ec53a7ddfc01f96d17\",\n            \"name\": \"J\"\n        },\n        {\n            \"_id\": \"56d843ed53a7ddfc01f96d18\",\n            \"name\": \"J Alvarez\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for an album:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"albums\": [{\n            \"_id\": \"5714debb25ac0d8aee34e3a7\",\n            \"name\": \"Agnetha Fältskog\",\n            \"titleAlbum\": \"A\"\n        },\n        {\n            \"_id\": \"5714debb25ac0d8aee355421\",\n            \"name\": \"Cass McCombs\",\n            \"titleAlbum\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response for a song:",
          "content": "HTTP/1.1 200 OK\n{\n    \"limit\": 200,\n    \"songs\": [{\n            \"_id\": \"5714dec325ac0d8aee3859f9\",\n            \"name\": \"Addict\",\n            \"albumTitre\": \"Come On Sun\",\n            \"titleSong\": \"K\"\n        },\n        {\n            \"_id\": \"5714dec325ac0d8aee3804f5\",\n            \"name\": \"A\",\n            \"albumTitre\": \"A Vs. Monkey Kong\",\n            \"titleSong\": \"A\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The nomCategorie or lettre or numPage was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Page not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/award/:awardName",
    "title": "Get songs by awardName",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/award/Platinum",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByAwardName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "awardName",
            "description": "<p>{undefined,Diamond, Gold,Gold+Gold+Platinum,Gold+Silver,Million,Million2× Platinum, Multi Platinum,N/A,Platinum,Platinum+Gold, Platinum+Platinum&quot;,&quot;Platinumref|The Platinum award for &quot;Summertime Sadness&quot; in the United States represents sales of both the original version and the Cedric Gervais remix.|group=&quot;note&quot;|name=RIAA, Silver,platinum,—,−}.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714ded425ac0d8aee459dfe\",\n    \"name\": \"Jay-Z\",\n    \"albumTitre\": \"The Blueprint²: The Gift & The Curse\",\n    \"titre\": \"'03 Bonnie & Clyde\"\n}, {\n    \"_id\": \"5714dee025ac0d8aee4ea2d5\",\n    \"name\": \"Queen\",\n    \"albumTitre\": \"A Night At The Opera\",\n    \"titre\": \"'39\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/category/:collection/:categoryName",
    "title": "Get category",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/category/song/Songs%20written%20by%20Cliff%20Burton",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByCategory",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "collection",
            "description": "<p>{artists,albums,songs}.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryName",
            "description": "<p>category is the subject field in the database.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714dece25ac0d8aee403c97\",\n    \"name\": \"Drowning Pool\",\n    \"albumTitre\": \"Other Releases\",\n    \"titre\": \"Creeping Death\"\n}, {\n    \"_id\": \"5714dedb25ac0d8aee4ad814\",\n    \"name\": \"Metallica\",\n    \"albumTitre\": \"Ride The Lightning\",\n    \"titre\": \"Creeping Death\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The collection was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Page not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/format/:formatName",
    "title": "Get songs by formatName",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/format/Gramophone%20record\nwasabi.i3s.unice.fr/search/format/CD%20single",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByFormatName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formatName",
            "description": "<p>a writer name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714dee725ac0d8aee54060e\",\n    \"name\": \"The Gaslight Anthem\",\n    \"albumTitre\": \"Handwritten\",\n    \"titre\": \"\\\"45\\\"\"\n}, {\n    \"_id\": \"5714decc25ac0d8aee3ed894\",\n    \"name\": \"David Bowie\",\n    \"albumTitre\": \"\\\"Heroes\\\"\",\n    \"titre\": \"\\\"Heroes\\\"\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/genre/:genreName",
    "title": "Get songs by genre",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/genre/Thrash%20metal",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByGenre",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genreName",
            "description": "<p>songs having this genre.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714dedb25ac0d8aee4ad81f\",\n    \"name\": \"Metallica\",\n    \"albumTitre\": \"...And Justice For All\",\n    \"titre\": \"...And Justice For All\"\n}, {\n    \"_id\": \"5714dedb25ac0d8aee4aa923\",\n    \"name\": \"Megadeth\",\n    \"albumTitre\": \"Endgame\",\n    \"titre\": \"Dialectic Chaos\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/producer/:producerName",
    "title": "Get songs by producer",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/producer/Flemming%20Rasmussen",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByProducer",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "producerName",
            "description": "<p>producer name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714dedb25ac0d8aee4ad81f\",\n    \"name\": \"Metallica\",\n    \"albumTitre\": \"...And Justice For All\",\n    \"titre\": \"...And Justice For All\"\n}, {\n    \"_id\": \"5714dedb25ac0d8aee4ad89d\",\n    \"name\": \"Metallica\",\n    \"albumTitre\": \"Singles\",\n    \"titre\": \"...And Justice For All\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/recordlabel/:recordLabelName",
    "title": "Get songs by recordLabel",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/recordlabel/Elektra%20Records",
        "type": "get"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByRecordLabel",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordLabelName",
            "description": "<p>a record label name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714dee025ac0d8aee4ea2d5\",\n    \"name\": \"Queen\",\n    \"albumTitre\": \"A Night At The Opera\",\n    \"titre\": \"'39\"\n}, {\n    \"_id\": \"5714dee025ac0d8aee4ea30a\",\n    \"name\": \"Queen\",\n    \"albumTitre\": \"Live Killers\",\n    \"titre\": \"'39\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/recorded/:recordedName",
    "title": "Get songs by recordedName",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/recorded/1985\nwasabi.i3s.unice.fr/search/recorded/--06-16",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByRecordedName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordedName",
            "description": "<p>The field may assume different values.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714dec325ac0d8aee388df2\",\n    \"name\": \"Aimee Mann\",\n    \"albumTitre\": \"Ultimate Collection\",\n    \"titre\": \"'Til Tuesday:Voices Carry\"\n}, {\n    \"_id\": \"5714decf25ac0d8aee41bd1c\",\n    \"name\": \"Feargal Sharkey\",\n    \"albumTitre\": \"Feargal Sharkey\",\n    \"titre\": \"A Good Heart\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "search/writer/:writerName",
    "title": "Get songs by writerName",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/writer/Lars%20Ulrich",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "GetSongsByWriterName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "writerName",
            "description": "<p>a writer name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the song.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Band name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumTitre",
            "description": "<p>Album title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Song title.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5714dedb25ac0d8aee4ad8ae\",\n    \"name\": \"Metallica\",\n    \"albumTitre\": \"Singles\",\n    \"titre\": \"Better Than You\"\n}, {\n    \"_id\": \"5714dedb25ac0d8aee4ad83c\",\n    \"name\": \"Metallica\",\n    \"albumTitre\": \"Load\",\n    \"titre\": \"Bleeding Me\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "put",
    "url": "search/artist/:artistName/album/:albumName",
    "title": "Put infos about album by album name",
    "examples": [
      {
        "title": "Example usage: ",
        "content": "wasabi.i3s.unice.fr/search/artist/Metallica/album/Master%20Of%20Puppets",
        "type": "json"
      }
    ],
    "version": "0.1.0",
    "name": "PutInfosAlbumByAlbumName",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistName",
            "description": "<p>An artist name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumName",
            "description": "<p>An album title of artistName.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Album id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Artist name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Album titre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateSortie",
            "description": "<p>Album dateSortie</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Album genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "length",
            "description": "<p>Album length</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_artist",
            "description": "<p>Artist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rdf",
            "description": "<p>Album rdf</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "songs",
            "description": "<p>Song object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "songs._id",
            "description": "<p>Song id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "songs.position",
            "description": "<p>Song position</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "songs.titre",
            "description": "<p>Song titre</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5714debe25ac0d8aee36b664\",\n    \"name\": \"Metallica\",\n    \"titre\": \"Master Of Puppets\",\n    \"dateSortie\": \"1986\",\n    \"urlWikipedia\": \"http://en.wikipedia.org/wiki/Master_of_Puppets\",\n    \"genre\": \"Thrash Metal\",\n    \"length\": \"54:46\",\n    \"id_artist\": \"56d93d84ce06f50c0fed8747\",\n    \"rdf\": \"Un champ au format RDF\",\n    \"songs\": [{\n            \"_id\": \"5714dedb25ac0d8aee4ad816\",\n            \"position\": 0,\n            \"titre\": \"Battery\"\n        },\n        {\n            \"_id\": \"5714dedb25ac0d8aee4ad817\",\n            \"position\": 1,\n            \"titre\": \"Master Of Puppets\"\n        }\n    ]}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/search.js",
    "groupTitle": "Search"
  }
] });
