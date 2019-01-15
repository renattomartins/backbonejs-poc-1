var Backbone = require('backbone');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);

// The UI for selecting a Movie Category
var GenresView = Backbone.View.extend({

    initialize: function() {
        this.genres = ['All', 'Action', 'Drama', 'Comedy'];
    },

    render: function() {
        this.$el.html( Templates({genres: this.genres}) );
        return this;
    }
    
});

module.exports = GenresView;