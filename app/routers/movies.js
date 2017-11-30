var Backbone = require('backbone');
var Movies = require('collections/movies');
var data = require('../../movies.json');
var movies = new Movies(data);
var Movies = require('collections/movies');
var MoviesList = require('views/moviesList');
var MoviesRouter = Backbone.Router.extend({
    routes: {
        'movies/:id': 'selectMovie',
        '': 'showMain'
    },

    initialize: function(options) {
        this.movies = movies;
        this.moviesList = new MoviesList({
            el: options.el,
            collection: movies
        });
    },

    selectMovie: function(id) {
        this.moviesList.render();
        this.movies.select(id);
    },

    showMain: function() {
        this.moviesList.render();
    }
});

module.exports = MoviesRouter;
