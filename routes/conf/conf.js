module.exports = {
    "http": {
        "public": "/../public/",
        "mime": {
            "css": "text/css",
            "gif": "image/gif",
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "js": "application/javascript",
            "ttf": "font/ttf",
            "png": "image/png",
            "html": "text/html"
        },
        "limit_request": {
            "api": {
                "windowMs": 60000, // 60 secondes 
                "max": 30, // limit each IP to 100 requests per windowMs 
                "delayMs": 0 // disable delaying - full speed until the max limit is reached
            }
        },
        "error": {
            "global_404": {
                "error": "Page not found"
            },
            "artist_404": {
                "error": "Artist not found"
            },
            "album_404": {
                "error": "Album not found"
            },
            "song_404": {
                "error": "Song not found"
            },
            "objectid_404": {
                "error": "You must type a valid ObjectId"
            },
            "internal_error_404": {
                "error": "An internal error occurred"
            },
            "musicbrainz_error_404": {
                "error": "Resource unavailable on MusicBrainz"
            },
            "deezer_error_404": {
                "error": "Resource unavailable on Deezer"
            },
            "user": {
                "authentication": {
                    "success": false,
                    "error": "Authentication failed. User not found."
                },
                "login": {
                    "success": false,
                    "message": "Please enter email and password."
                },
                "mail_exist": {
                    "success": false,
                    "message": "That email address already exists."
                },
                "password": {
                    "success": false,
                    "message": "Authentication failed. Passwords did not match."
                }
            }
        },
        "valid": {
            "send_message_ok": {
                "message": "OK"
            },
            "user": {
                "user_created": {
                    "success": true,
                    "message": "Successfully created new user."
                }
            }
        }
    },
    "https": {
        "wasabi_key": "cert_https/wasabi_i3s_unice_fr.key",
        "wasabi_csr": "cert_https/wasabi_i3s_unice_fr.csr",
        "wasabi_crt": "cert_https/wasabi_i3s_unice_fr.crt",
        "digi_crt": "cert_https/DigiCertCA.crt"
    },
    "database": {
        "mongodb_connect": "mongodb://localhost:27017/wasabi",
        "collection_artist": "artist",
        "collection_album": "album",
        "collection_song": "song",
        "elasticsearch_connect": "localhost:9200",
        "elasticsearch_url": "http://127.0.0.1:9200/",
        "index_artist": "idx_artists",
        "index_song": "idx_songs",
        "index_type_artist": "artist",
        "index_type_song": "song"
    },
    "MT5": {
        "TRACKS_PATH": "public/my_components/MT5/multitrack/",
        "TRACKS_URL": "multitrack/"
    },
    "multitracks": {
        "path_windows": "E:/Multitracks downloadees + MT5 multitracks/",
        "path_linux": "./public/my_components/MT5/multitrack/"

    },
    "request": {
        "limit": 200,
        "limit_search_bar": 12
    },
    "launch": {
        "env": {
            "prod": "production",
            "dev": "development",
            "dev_mode": false
        }
    }
};