var express = require('express'),
    logger = require('morgan'),
    path = require('path'),
    stitch = require('stitch');

var package = stitch.createPackage({
    paths: [__dirname + '/../app'],
    dependencies: [
        __dirname + '/../libs/jquery.js',
        __dirname + '/../libs/underscore.js',
        __dirname + '/../libs/backbone.js',
    ]
});

var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/static/bundle.js', package.createServer());
app.use(logger("dev", { immediate: true }));

app.get('/', function(req, res) {
    var html = path.resolve(__dirname + '/../stitch.html');
    res.sendFile(html);
});

app.listen(5000);
console.log("Server is running.");
