var _ = require('underscore');
var Backbone = require('backbone');
var MoviesList = require('views/moviesList');
var ChoseView = require('./chose');
var DetailsView = require('./details');
var Controls = require('views/sort');

var Layout = Backbone.View.extend({

    template: _.template('           \
               <header>              \
               <a href="#">Home</a>  \
                 <nav id="controls"> \
                   <button id="by_title">By Title</button>       \
                   <button id="by_rating">By Rating</button>     \
                   <button id="by_showtime">By Showtime</button> \
                   <p>Filter</p>             \
                   <select name="genre">     \
                     <option value="all">    \
                       All                   \
                     </option>               \
                     <option value="Drama">  \
                       Drama                 \
                     </option>               \
                     <option value="Action"> \
                       Action                \
                     </option>               \
                   </select>                 \
                 </nav>              \
                 <span id="info">    \
                 </span>             \
               </header>             \
               <div id="overview">   \
               </div>                \
               <div id="details">    \
               </div>'),

    initialize: function(options) {
        this.controls = new Controls({ collection: options.router.movies });
        this.overview = new MoviesList({
            el: options.el,
            collection: options.router.movies,
            router: options.router
        });
        this.currentDetails = new ChoseView();
    },

    render: function() {
        this.$el.html(this.template());
        this.controls.setElement(this.$('#controls'));
        this.currentDetails.setElement(this.$('#details')).render();
        this.overview.setElement(this.$('#overview')).render();

        return this;
    },

    setDetails: function(movie) {
        if (this.currentDetails) this.currentDetails.remove();
        this.currentDetails = new DetailsView({model: movie});
        this.render();
    },

    setChose: function() {
        if (this.currentDetails) this.currentDetails.remove();
        this.currentDetails = new ChoseView();
        this.render();
    }

});

var instance;
Layout.getInstance = function(options) {
    if (!instance) {
        instance = new Layout({
            el: options.el,
            router: options.router,
            collection: options.router.movies
        });
    }
    return instance;
}
module.exports = Layout;
