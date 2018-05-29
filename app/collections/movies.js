var Backbone = require("Backbone");
var Movie = require('models/movie');

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
    }
});
module.exports = Movies;
