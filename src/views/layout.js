var _ = require('underscore');
var Backbone = require('backbone');
var MoviesList = require('./moviesList');
var ChoseView = require('./chose');
var DetailsView = require('./details');
var Controls = require('./controls');
var GenresFilter = require('./genresFilter');

var Layout = Backbone.View.extend({

    template: _.template(
        '<header>' +
        '<nav id="controls">' +
        '<button id="by_title">By Title</button>' +
        '<button id="by_rating">By Rating</button>' +
        '<button id="by_showtime">By Showtime</button>' +
        '<div id="filter"></div>' +
        '</nav>' +
        '</header>' +
        '<div id="overview">' +
        '</div>' +
        '<div id="details">' +
        '</div>'
    ),

    initialize: function (options) {
        this.controls = new Controls({
            collection: options.router.movies,
            superset: new Backbone.Collection(options.router.movies.toJSON())
        });
        this.genresFilter = new GenresFilter();
        this.overview = new MoviesList({
            el: options.el,
            collection: options.router.movies,
            router: options.router
        });
        this.currentDetails = new ChoseView();
    },

    render: function () {
        this.$el.html(this.template());
        this.controls.setElement(this.$('#controls'));
        this.genresFilter.setElement(this.$('#filter')).render();
        this.currentDetails.setElement(this.$('#details')).render();
        this.overview.setElement(this.$('#overview')).render();

        return this;
    },

    setDetails: function (movie) {
        if (this.currentDetails) { this.currentDetails.remove(); }
        this.currentDetails = new DetailsView({ model: movie });
        this.render();
    },

    setChose: function () {
        if (this.currentDetails) { this.currentDetails.remove(); }
        this.currentDetails = new ChoseView();
        this.render();
    }

});

var instance;
Layout.getInstance = function (options) {
    if (!instance) {
        instance = new Layout({
            el: options.el,
            router: options.router,
            collection: options.router.movies
        });
    }
    return instance;
};

module.exports = Layout;
