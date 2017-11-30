var Backbone = require('backbone');
var MoviesRouter = require('routers/movies');
var $ = require('jquery-untouched');
Backbone.$ = $;

$(document).ready(function() {
    console.log('Init app ...');
    var router = new MoviesRouter({ el: $('#movies') });
    Backbone.history.start({ pushState: true, root: '/' });
});
