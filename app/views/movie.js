var $ = require('jquery-untouched');
var Backbone = require('backbone');
var _ = require('underscore');

var MovieView = Backbone.View.extend({
    tagName: 'article',
    className: 'movie',

    // <article class="movie selected">
    //  <h1><a href="/movies/1">The Artist</a><hr></h1>
    // </article>
    template: '<h1><a href="/movies/<%= id %>"><%= title %></a><hr></h1>',

    events: {
        'click': '_selectMovie'
    },

    initialize: function() {
        this.listenTo(this.model, 'change:title', this.render);
    },

    render: function() {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        this.$el.toggleClass('selected', this.model.get('selected'));
        return this;
    },

    _selectMovie: function(ev) {
        ev.preventDefault();
        if (!this.model.get('selected')) {
            this.model.collection.unselectAll();
            this.model.collection.select(this.model.id);
        }
    }
});
module.exports = MovieView;
