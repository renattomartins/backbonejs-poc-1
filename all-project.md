# All instructions done
 1. `npm init`
 2. `npm install backbone --save`
 3. `npm install jquery --save`
 4. Local Backbone.js (without code to do)
 5. Backbone.js via Content Delivery Networks (with sample code to do)
 6. Modules, Packages, and Servers
  1. Backbone CommonJS Modules (with sample code at other/greeting.js)
  2. Beyond index.html
    1. `mkdir app`
    2. `mkdir static`
    3. Create an index.html file with the content of page 9
  3. Browserify
    1. `npm install -g browserify`
    2. Create file app/main.js with the content of page 10
    3. Test:
      1. `$ node`
      2. `require("./app/main")` // [Function]
      3. `require("./app/main")()` // { VERSION: '1.3.3', ... ]
    4. `browserify -r ./app/main:app > static/bundle.js`



## To do
1. To save you from typing `browserify` every time a file changes, you can use the **watchify tool**, which automates builds as soon as an input file changes. However, to keep the code examples consistent, the book examples only show the browserify command (Page 11).