var server = require('pushstate-server');

server.start({
    port: 5000,
    directory: './static'
});
console.log("Server is running on port 5000.");