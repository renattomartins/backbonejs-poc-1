var Backbone = require('backbone');
var genresTemplate = require('../templates/genres.jst');

// The UI for selecting a Movie Category
var GenresView = Backbone.View.extend({

    template: genresTemplate,

    initialize: function() {
        this.genres = ['Action', 'Drama', 'Comedy'];
    },

    render: function() {
        this.$el.html(this.template({genres: this.genres}));
        return this;
    }
    
});

module.exports = GenresView;