var Backbone = require('backbone');
var _ = require('underscore');

// data
var Movies = require('../collections/movies');
var data = require('../../movies.json');
var movies = new Movies(data);

// views
var Layout = require('../views/layout');

var MoviesRouter = Backbone.Router.extend({
    routes: {
        'movies/:id': 'selectMovie',
        '': 'showMain'
    },

    initialize: function() {
        this.movies = movies;
        this.layout = Layout.getInstance({
            el: '#movies',
            router: this
        });
        this.layout.render();
    },

    selectMovie: function(id) {
        this.movies.unselectAll()
        this.movies.select(id);
        this.layout.setDetails(this.movies.get(id));
    },

    showMain: function() {
        this.movies.unselectAll();
        this.layout.setChose();
    }
});

module.exports = MoviesRouter;
