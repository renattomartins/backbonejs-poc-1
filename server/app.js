var express = require('express');
var logger = require('morgan');
var path = require('path');

var app = express();

app.use(logger({immediate: true, format: 'dev'}));

app.get('/', function(req, res) {
  var html = path.resolve(__dirname + '/../index.html');
  res.sendfile(html);
});

app.listen(5000);
console.log("Server is running.");
