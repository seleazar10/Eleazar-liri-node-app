require("dotenv").config();
var keys = require("./keys");

var fs = require('fs');

var moment = require("moment");

var axios = require('axios');

var Spotify = require("node-spotify-api");


var spotify = new Spotify(keys.spotify);



//command
var operator = process.argv[2];
var input = process.argv[3]

//command switch

if (operator === 'concert-this') {

  concerts()

} else if (operator === 'spotify-this-song') {

  spotMusic(input)

} else if (operator === 'movie-this') {

  movies()

} else if (operator === 'do-what-it-says') {

  performTask()

} else {
  console.log('Please choose a command')
}


//run function for concert-this

function concerts() {

  var concertsUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

  axios
    .get(concertsUrl)
    .then(function (concert) {
      // handle success


      for (var i = 0; i < concert.data.length; i++) {
        var conData = concert.data[i];

        var conDate = moment(conData.datetime).format("MM/DD/YYYY");

        // console.log(conData)

        console.log(conData.venue.name)
        console.log(conData.venue.city)
        console.log(conData.venue.country)
        console.log(conDate)
        console.log('-----------------------------')

      }


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })




}


function movies() {

  var moviesUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

  axios.get(moviesUrl)
    .then(function (movies) {
      // handle success

      var movData = movies.data
      // console.log(movData);
      console.log('title: ' + movData.Title);
      console.log(movData.Year);
      console.log(movData.Rated);
      console.log('IMDB Rating: ' + movData.imdbRating);
      console.log('Rotten Tomatoes Rating: ' + movData.Ratings[2]); //need to stringify
      console.log('Country Produced: ' + movData.Country);
      console.log('Languages: ' + movData.Language);
      console.log('Plots: ' + movData.Plot);
      console.log('Actors: ' + movData.Actors);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}


function performTask() {
  var textToInput = ""

  fs.readFile("random.txt", "utf8", function (error, data) {

    // error output
    if (error) {
      return console.log(error);
    }

    //print data
    // console.log(data);


    //split data to make it easier to read
    var dataSplit = data.split(",");
    console.log(dataSplit);
    var first = dataSplit[0]
    console.log(first)
    var second = dataSplit[1]
    console.log(second)

    spotify(second)

  });
}

function spotMusic(){
  console.log('works')
  spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
    
        // console.log(data);  

        var neededData = data.tracks.items


        // console.log(neededData)

        for(var i=0; i<5; i++){
          console.log(neededData[i].artists[0].name)
          console.log(neededData[i].name)      
          console.log(neededData[i].preview_url)        
          console.log(neededData[i].album.name)
          console.log('---------------------------------')

        }
    
      })
}








