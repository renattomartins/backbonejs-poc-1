var Backbone = require("Backbone");
var Movie = require('../models/movie');

var Movies = Backbone.Collection.extend({
    model: Movie,

    select: function(id) {
        var movie = this.get(id);
        movie.set({"selected": true});
        return movie.id;
    },

    unselectAll: function() {
        this.each(function(movie) {
            movie.set({"selected": false});
        });
    },

    sortByTitle: function() {
        return this.sortBy('title');
    },

    sortByRating: function() {
        var sorted = this.sortBy(function(m) {
          return (10 - m.get('rating'));
        });
        return sorted;
    },

    sortByShowtime: function() {
        return this.sortBy('showtime');
    },

    log: function() {
        console.log(this.models);
        this.each(function(movie) {
            console.log(movie.get('title') + "  " + movie.showtimeToString() + "(" + movie.get('showtime') + ")");
        });
    }
});
module.exports = Movies;
