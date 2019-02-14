var http = require('http');

// Setup the can to mock data
var canned = require('canned');
var opts = { cors: true, logger: process.stdout };
var can = canned('./test/stubs/', opts);  // canned configuration
var express = require('express');
var app = express();

// adding middlewares
app.use(express.static(__dirname + '/public'));
app.use(can);

// startup server
http.createServer(app).listen(5000);

// var server = require('pushstate-server');

// server.start({
//     port: 5000,
//     directory: './public'
// });
console.log("Server is running on port 5000.");
