var Backbone = require('backbone');
var MovieView = require('views/movie'); // The UI for selecting a movie
var MoviesList = Backbone.View.extend({
    tagName: 'section',

    initialize: function(options) {
        this.router = options.router;
    },

    render: function() {
        var that = this;
        var moviesView = this.collection.map(function(movie) {
            return (new MovieView({model: movie, router: that.router})).render().el;
        });
        this.$el.html(moviesView);
        return this;
    }
});

var instance;
MoviesList.getInstance = function(options) {
    if (!instance) {
        instance = new MoviesList({el: options.el, collection: options.collection, router: options.router});
    }
    return instance;
}

module.exports = MoviesList;
