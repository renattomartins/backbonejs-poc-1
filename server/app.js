// First, we require Express.js, logger, path and stich as dependencies
var express = require('express'),
    logger = require('morgan'),
    // a helper to resolve relative paths
    path = require('path'),
    stitch = require('stitch');

// To "stitch" the client-side modules together we create a package
var package = stitch.createPackage({
    paths: [__dirname + '/../app'],
    dependencies: [
        __dirname + '/../libs/jquery.js',
        __dirname + '/../libs/underscore.js',
        __dirname + '/../libs/backbone.js',
    ]
});

// Then we initialize the application...
var app = express();
app.use(express.static(__dirname + '/public'));

// Whenever a request goes to the client, we deliver the modules as client.js
app.get('/static/bundle.js', package.createServer());

// Make log
app.use(logger("dev", {
    immediate: true
}));

// We add a basic route that servers an index.html
// ... let's use the same as above
app.get('/', function(req, res) {
    var html = path.resolve(__dirname + '/../index.html');
    res.sendFile(html);
});

// Let's listen on port 5000
app.listen(5000);
console.log("Server is running.");
