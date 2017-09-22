var Backbone = require('backbone');
var Movies = require('collections/movies');
var Monitor = require('./monitor');

var data = require('../movies.json');
var movies = new Movies(data);

monitor = new Monitor(movies);

module.exports = movies;

// To run:
// $ node
// > require("./app/main")
