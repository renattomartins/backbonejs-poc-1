var Backbone = require('backbone');
var MovieView = require('views/movie'); // The UI for selecting a movie
var MoviesList = Backbone.View.extend({
    tagName: 'section',

    // <section>
    //  <% view/movie %>
    //  <% view/movie %>
    //  ...
    //  <% view/movie %>
    // </section>

    initialize: function() {
        this.listenTo(this.collection, 'change', this.render);
    },

    render: function() {
        var that = this;
        var moviesView = this.collection.map(function(movie) {
            return (new MovieView({
                model: movie,
                router: that.router
            })).render().el;
        });
        this.$el.html(moviesView);
        return this;
    }
});
module.exports = MoviesList;
