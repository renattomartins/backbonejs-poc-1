var Backbone = require('backbone');
var $ = require('jquery-untouched');
var MoviesRouter = require('routers/movies');

Backbone.$ = $;

$(document).ready(function() {
    console.log('Init app ...');
    var router = new MoviesRouter({ el: $('#movies') });
    Backbone.history.start({
        pushState: true,
        root: '/'
    });
});
