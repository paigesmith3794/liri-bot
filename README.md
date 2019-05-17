# liri-node-app

<p>In this node application, you are able to use the Spotify API to bring data to your computer about any song you would like.

This is a fully functional Language Interpretation and Recognition Interface.</p>

To install these npm packages, cd into the folder, then run "npm install"

<h2>Commands to run LIRI</h2>

<h3>Follow the format presented in these queries</h3>

<p>`node liri.js concert-this <artist/band name here>`,
`node liri.js spotify-this-song '<song name here>'`,
`node liri.js movie-this '<movie name here>'`,
`node liri.js do-what-it-says`,</p>

- When using `node liri.js concert-this <artist/band name here>`, the following information will show up about the song in your terminal/bash window:

  - Name of the venue

  - Venue location

  - Date of the Event (use moment to format this as "MM/DD/YYYY")

- When using `node liri.js spotify-this-song '<song name here>'`, the following information will show up about the song in your terminal/bash window:

  - Artist(s)

  - The song's name

  - A preview link of the song from Spotify

  - The album that the song is from

- When using `node liri.js movie-this '<movie name here>'`, the following information will show up about the song in your terminal/bash window:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

* When using `node liri.js do-what-it-says`, the following information will show up about the song in your terminal/bash window:

  - Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    - Edit the text in random.txt to test out the feature for movie-this and concert-this.

<h2>API Credential sites</h2>
Twitter: https://apps.twitter.com/app/new

Spotify: https://developer.spotify.com/my-applications/

OMDb API: http://www.omdbapi.com/apikey.aspx

<h2>Technology used:</h2>

- Node.js
- JavaScript
- API Technologies
