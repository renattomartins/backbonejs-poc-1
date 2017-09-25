var Backbone = require('backbone');
var Movies = require('collections/movies');
var Monitor = require('./monitor');
var data = require('../movies.json');
var $ = require('jquery-untouched');

var movies = new Movies(data);
monitor = new Monitor(movies);
Backbone.$ = $;

module.exports = movies;
