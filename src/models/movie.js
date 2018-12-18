var Backbone = require("Backbone");
var Movie = Backbone.Model.extend({
    defaults: {
        title: "default",
        year: 0,
        description: "empty",
        selected: false
    },

    showtimeToDate: function() {
        var d = new Date(0);
        d.setUTCSeconds(this.get('showtime'));
        return d;
    },

    showtimeToString: function() {
        return this.showtimeToDate().toLocaleString();
    }
});
module.exports = Movie;
