var $ = require ('jquery-untouched');
var Backbone = require('backbone');
var MovieView = Backbone.View.extend({
    tagName: 'article',
    className: 'movie',

    initialize: function() {
        this.listenTo(this.model, 'change:title', this.render);
    },

    render: function() {
        this.$el.html(this.model.get('title'));
        this.$el.toggleClass('selected', this.model.get('selected'));
        return this;
    }
});
module.exports = MovieView;
