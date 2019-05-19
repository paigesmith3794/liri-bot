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

<h2>Working App Screenshots:</h2>

(Couldn't get "concert-this" to work)

spotify-this-song:
<img width="1440" alt="Screen Shot 2019-05-18 at 8 36 06 PM" src="https://user-images.githubusercontent.com/47373534/57977463-0d8b1580-79ae-11e9-9d6d-c5fc78c73a80.png">
<img width="1440" alt="Screen Shot 2019-05-18 at 8 36 35 PM" src="https://user-images.githubusercontent.com/47373534/57977435-99e90880-79ad-11e9-89ad-659b55aa0e1f.png">
<img width="1440" alt="Screen Shot 2019-05-18 at 8 37 06 PM" src="https://user-images.githubusercontent.com/47373534/57977450-d0bf1e80-79ad-11e9-91eb-1fe3788df6ff.png">

movie-this:
<img width="1440" alt="Screen Shot 2019-05-18 at 8 49 42 PM" src="https://user-images.githubusercontent.com/47373534/57977503-97d37980-79ae-11e9-9103-fe9943b76d24.png">
<img width="1440" alt="Screen Shot 2019-05-18 at 8 49 00 PM" src="https://user-images.githubusercontent.com/47373534/57977505-9f931e00-79ae-11e9-852d-2d1433ee329a.png">
<img width="1440" alt="Screen Shot 2019-05-18 at 8 50 02 PM" src="https://user-images.githubusercontent.com/47373534/57977507-a3bf3b80-79ae-11e9-8655-7c72c3994aa2.png">

do-what-it-says:
<img width="1440" alt="Screen Shot 2019-05-18 at 8 53 20 PM" src="https://user-images.githubusercontent.com/47373534/57977527-14feee80-79af-11e9-8390-04e7fdd84a03.png">
<img width="1440" alt="Screen Shot 2019-05-18 at 8 53 24 PM" src="https://user-images.githubusercontent.com/47373534/57977528-1b8d6600-79af-11e9-8c53-8b6767fd34fc.png">
<img width="1440" alt="Screen Shot 2019-05-18 at 8 53 37 PM" src="https://user-images.githubusercontent.com/47373534/57977529-20521a00-79af-11e9-80d3-728c8a8d136f.png">
