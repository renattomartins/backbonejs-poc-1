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
    5. Add in index.html: `<script src="static/bundle.js"></script>`
    6. You can run `require("app")()` in the browser console to test.
    7. Now, to require modules as local application dependencies:
      1. `$ mkdir app/views`
      2. `$ mkdir app/collections`
      3. `$ mkdir app/node_modules`
      4. `$ cd app/node_modules`
      5. `$ ln -sf ../views` (it creates a symbolic link)
      6. `$ ln -sf ../collections` (it creates a symbolic link)
  4. Combining Express.js and Stitch
    1. `$ npm install express`
    2. `$ npm install morgan`
    3. `mkdir server`
    4. Creates the file `server/app.js` with the content of page 13-14
    5. To run: `node server/app.js`
    6. To access the URL: `curl 0.0.0.0:5000` and view the response in HTML

## To do
1. To save you from typing `browserify` every time a file changes, you can use the **watchify tool**, which automates builds as soon as an input file changes. However, to keep the code examples consistent, the book examples only show the browserify command (Page 11).
