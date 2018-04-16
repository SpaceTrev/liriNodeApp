const dotenv = require("dotenv").config();
const key = require('./keys.js');
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const request = require("request");
const fs = require('fs');
let command = process.argv[2];
let userInput = process.argv.slice(3).join("+");
const twit = new Twitter(key.twitter);

if (command === 'my-tweets') {
  twit.get('search/tweets', { q: 'eclipsinequinox', count: 20 }, function (err, data, response) {
    if (err) { console.log(err) } else {
      const dataStatus = data.statuses;
      for (let s = 0; s < dataStatus.length; s++) {
        console.log(data.statuses[s].text);
      }
    }
  });
}

const spotify = new Spotify(key.spotify);
if (command === 'spotify-this-song') {
  spotify.search({ type: 'track', query: userInput, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    const dataTraks = data.tracks.items;
   
    for (let t = 0; t < dataTraks.length; t++) {
      let dataTrakss = data.tracks.items[t].artists;
      for (let v = 0; v < dataTrakss.length; v++) {
        let trackName = data.tracks.items[t].name;
        let artistName = data.tracks.items[t].artists[v].name;
        let albumName = data.tracks.items[t].album.name;
        let previewUrl = data.tracks.items[t].preview_url;
        console.log(artistName);
        console.log(trackName);
        console.log(albumName);
        console.log(previewUrl);
      }
   
    }
    

  });
}
if (command === 'movie-this') {
  request("http://www.omdbapi.com/?t=" +  userInput + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
    if (!error && response.statusCode === 200) {
      let movieName = JSON.parse(body).Title;
      let movieReleaseYear = JSON.parse(body).Year;
      let IMDBrating = JSON.parse(body).imdbRating;
      let rottenTom = JSON.parse(body).Ratings[1].Value;
      let country = JSON.parse(body).Country;
      let languageMovie = JSON.parse(body).Language;
      let plot = JSON.parse(body).Plot;
      let actors = JSON.parse(body).Actors;
      console.log(movieName);
      console.log("Released: " + movieReleaseYear);
      console.log("Released In: " + country + " language/s " + languageMovie);      
      console.log("Plot: " + plot);
      console.log("Actors: " + actors);
      console.log("IMDB Rating of: " + IMDBrating)
      console.log("Rotten Tomatoes Rating Of: " + rottenTom);
    }
  });
}
if (command === 'do-what-it-says') {
fs.readFile('random.txt', 'utf8', function(err, data){
  if (err) {
    return console.log(err);
  }
  console.log(data);
  
})
}

