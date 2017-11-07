var $ = require('jquery-untouched');
var Backbone = require('backbone');
var _ = require('underscore');

var MovieView = Backbone.View.extend({
    tagName: 'article',
    className: 'movie',
    template: '<h1><%= title %><hr></h1>',

    // <article class="movie selected">
    //  <h1>The Artist</h1>
    //  <hr>
    // </article>

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
            this.model.collection.resetSelected();
            this.model.collection.selectByID(this.model.id);
        }
    }
});
module.exports = MovieView;
