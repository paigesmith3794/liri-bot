/* Initiate
--------------------------------------------- */

require("dotenv").config();
var fs = require('fs');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");

// Include the request npm package
var request = require("request");

// Store all of the arguments in a variable
var nodeArgs = process.argv;

// Action (i.e. "concert-this", "spotify-this-song", "movie-this", "do-what-it-says")
var action = process.argv[2];

// Create an empty variable for holding the movie or song name
var mediaName = "";

// Movie URL
var queryUrl;

/* Direct which function gets run
--------------------------------------------- */

switch (action) {
    case "concert-this":
        concertThis(mediaName);
        break;

    case "spotify-this-song":
        setMedia();
        spotifyThis(mediaName);
        break;

    case "movie-this":
        setMedia();
        movieThis(mediaName)
        break;

    case "do-what-it-says":
        doThis();
        break;

    default:
        console.log("Sorry, I don\'t understand that. Try one of these commands: 'concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'");
}

/* Functions
--------------------------------------------- */

// Set name of media type
function setMedia() {

    // Handle movies or songs with mutltiple words
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            mediaName = mediaName + "+" + nodeArgs[i];
        }
        else {
            mediaName += nodeArgs[i];
        }
    }

    // Default for Spotify
    if (action === "spotify-this-song" && nodeArgs.length <= 3) {
        mediaName = "The+Sign+Ace+of+Base"
    }

    // Pass default or user input for movie
    if (action === "movie-this" && nodeArgs.length <= 3) {
        queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy"
    } else {
        queryUrl = "http://www.omdbapi.com/?t=" + mediaName + "&y=&plot=short&apikey=trilogy";
    }
}

// Concert-this function
var concertThis = function (artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function (response) {
            var jsonData = response.data;

            if (!jsonData.length) {
                console.log("No results found for " + artist);
                return;
            }

            console.log("Upcoming concerts for " + artist + ":");

            for (var i = 0; i < jsonData.length; i++) {
                var show = jsonData[i];

                console.log(
                    show.venue.city +
                    "," +
                    (show.venue.region || show.venue.country) +
                    " at " +
                    show.venue.name +
                    " " +
                    moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};

// Spotify Function
function spotifyThis(mediaName) {
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: mediaName }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + err);
        } else {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];

                // Log song info to console
                console.log("--------------Song: " + songData.name + "--------------" + "\n" + "Artist: " + songData.artists[0].name + "\n" + "Preview URL: " + songData.preview_url + "\n" + "Album: " + songData.album.name);

                // Write song info to log.txt
                fs.appendFile('log.txt', "--------------Song: " + songData.name + "--------------" + "\n" + "Artist: " + songData.artists[0].name + "\n" + "Preview URL: " + songData.preview_url + "\n" + "Album: " + songData.album.name + "\n" + "\n", 'utf8', function (err) {
                    if (err) {
                        return console.log("Error occurred: " + err);
                    }
                });
            }
        }
    });
}

// Movie Function
function movieThis() {

    // Then create a request to the queryUrl
    request(queryUrl, function (error, response, body) {
        var movieData = JSON.parse(body);

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Log movie info to console
            console.log("--------------Movie--------------" + "\n" + "Title: " + movieData.Title + "\n" + "Release Year: " + movieData.Year + "\n" + "IMDB Rating: " + movieData.Ratings[0].Value + "\n" + "Rotten Tomatoes: " + movieData.Ratings[1].Value + "\n" + "Country of production: " + movieData.Country + "\n" + "Language: " + movieData.Language + "\n" + "Plot: " + movieData.Plot + "\n" + "Actors: " + movieData.Actors + "\n");

            // Write movie info to log.txt
            fs.appendFile('log.txt', "--------------Movie--------------" + "\n" + "Title: " + movieData.Title + "\n" + "Release Year: " + movieData.Year + "\n" + "IMDB Rating: " + movieData.Ratings[0].Value + "\n" + "Rotten Tomatoes: " + movieData.Ratings[1].Value + "\n" + "Country of production: " + movieData.Country + "\n" + "Language: " + movieData.Language + "\n" + "Plot: " + movieData.Plot + "\n" + "Actors: " + movieData.Actors + "\n" + "\n", 'utf8', function (err) {
                if (err) {
                    return console.log("Error occurred: " + err);
                }
            });
        }
    });
}

// Do what it says function
function doThis() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        if (error) {
            return console.log("Error occurred: " + err);
        } else {
            var content = data.split(',');
            var mediaName = content[1].replace(/^"(.+(?="$))"$/, '$1');
            spotifyThis(mediaName);
        }
    });

}