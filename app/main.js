var Backbone = require('backbone');
var Movies = require('collections/movies');
var Monitor = require('./monitor');
var data = require('../movies.json');
var $ = require('jquery-untouched');
Backbone.$ = $;
var MovieView = require('views/movie');
var MoviesList = require('views/moviesList');

var movies = new Movies(data);
monitor = new Monitor(movies);
moviesList = new MoviesList({collection: movies});
document.body.appendChild(moviesList.render().el);

module.exports = {
    movies: movies,
    MovieView: MovieView,
    MoviesList: MoviesList
};
