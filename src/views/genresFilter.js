var Backbone = require('backbone');
var Handlebars = require('handlebars');

// The UI for selecting a Movie Category
var GenresView = Backbone.View.extend({

    initialize: function() {
        this.genres = ['All', 'Action', 'Drama', 'Comedy'];
    },

    render: function() {
        var template = Handlebars.compile(
            '<p>Filter</p>' +
            '<select name="genre">' +
            '{{#each genres}}' +
            '<option value="{{ this }}">' +
            '{{ this }}' +
            '</option>' +
            '{{/each}}' +
            '</ul>' +
            '</select>'
         );
         var html = template({genres: this.genres});


        this.$el.html( html );
        return this;
    }
    
});

module.exports = GenresView;