// A CommonJS test:
//   1. Put this file (greeting.js) inside node_modules folder
//   2. Go to project root folder and run:
//      $ node
//      > var greeting = require('greeting');
//      > greeting();
//      Hello, World!

module.exports = function() {
      console.log("Hello, World!");
};
