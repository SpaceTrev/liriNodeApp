const dotenv = require("dotenv").config();
const key = require('./keys.js');
const Twitter = require('twitter');
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });


const twit = new Twitter(key.twitter);
// const spotify = new Spotify(key.spotify);
// console.log(twit);
// console.log(spotify);
client.post('statuses/update', {status: 'Good Afternoon Space Cadets Just Your Friendly NodeSHIP reporting for duty again #blastOFF #NASAisLIT #NODEJS #javaScript'}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  });
















  // class Twitter {
//     constructor(){
//         this.twitterPubKey = dotenv.parsed.TWITTER_CONSUMER_KEY;
//         this.twitterSecretKey = dotenv.parsed.TWITTER_CONSUMER_SECRET;
//     }
// }
// class Spotify {
//     constructor(){
//         this.SpotifyPubKey = dotenv.parsed.SPOTIFY_ID
//         this.SpotifySecreyKey = dotenv.parsed.SPOTIFY_SECRET
//     }
// }























// const pubKey = keys.twitter;
// const secretKey = keys.twitter.consumer_secret;

// class Twitter {
//     constructor() {
 
//        this.secretKey = ;
//     //    this.
//     }
// }

// const client = new Twitter();
// console.log(pubKey);