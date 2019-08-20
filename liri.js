require("dotenv").config();
var keys = require("./keys");

var fs = require('fs')

var axios = require('axios')


var spotify = new Spotify(keys.spotify);



//command
var operator = process.argv[2];
var input = process.argv[3]

//command switch

if(operator === 'concert-this'){
  
  concerts()
  
}else if(operator === 'spotify-this-song'){
  
  spotify()
  
}else if(operator === 'movie-this'){
  
  movies()
  
}else if(operator === 'do-what-it-says'){
  
  performTask()
  
}else{
  console.log('Please choose a command')
}


function concerts(){

  var concertsUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"

  

  console.log('Name of the venue:')
  console.log('Location of the venue:')
  console.log('Date:')
}


// require("dotenv").config();
// //Request is designed to be the simplest way possible to make http calls
// var request = require("request");
// //require to read an write file systems
// var fs = require("fs");
// //require to run moment js through npm
// var moment = require("moment");
// // code required to import from keys.js
// var keys = require("./keys.js");
// //require to run spotify api thorough npm
// var Spotify = require("node-spotify-api");
// var axios = require("axios");
// //should be able to access  keys information to access spotify
// var spotify = new Spotify(keys.spotify);
// //Variable assigned the will accept arguments being passed
// var instructions = process.argv[2];
// var parameter = process.argv[3];
// //Execute function
// inputs(instructions, parameter);
// //Switch Statments
// function inputs(instructions, parameter) {
//  switch (instructions) {
//    case "concert-this":
//      newConcert(parameter);
//      break;
//    case "spotify-this-song":
//      spotSong(parameter);
//      break;
//    case "movie-this":
//      movieInfo(parameter);
//      break;
//    case "do-what-it-says":
//      getRandom(parameter);
//      break;
//    default:
//      console.log(
//        "Please the following options: \nconcert-this \nspotify-this-song \nmovie-this"
//      );
//  }
// }


// var newConcert= function(artist){
//    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

//    axios.get(queryURL)
//   .then(function (artist) {
//     // handle success
//     for (var i =0; i<artist.data.length; i++ ){
//         var artists = artist.data[i]
//         console.log(artists);


//         console.log(artists.venue.name)
//         console.log(artists.venue.city)
//         console.log(artists.venue.region)

        

//     }
    
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
  

   

    
// }
