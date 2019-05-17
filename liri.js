require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

// connect w/ spotify API while using my API keys
var spotify = new Spotify(keys.spotify);

