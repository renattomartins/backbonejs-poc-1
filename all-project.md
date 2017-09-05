# All instructions done
1. `npm init`
2. `npm install backbone --save`
3. `npm install jquery --save`
4. Local Backbone.js (without code to do)
5. Backbone.js via Content Delivery Networks (with sample code to do)
6. Modules, Packages, and Servers
    1. Backbone CommonJS Modules (with sample code at other/greeting.js)
    2. Beyond index.html
        1. Create an index.html file with the content of page 9
    3. Browserify
        1. <View the other branch specific to Browserify>
    4. Combining Express.js and Stitch
        1. `$ npm install express`
        2. `$ npm install morgan`
        3. `$ mkdir server`
        4. Creates the file `server/app.js` with the content of pages 13-14
        5. To run: `node server/app.js`
        6. To access the URL: `curl 0.0.0.0:5000` and view the response in HTML
        7. `$ npm install stitch`
        8. Updates the file `server/app.js` with the content of page 14-15
        9. `$ mkdir app`
        10. Create a file `app/init.js` with the content: `console.log("hello, world");`
        11. To run: `node server/app.js`
        12. To test: `curl 0.0.0.0:5000/static/bundle.js` // .... {"main": function(exports, ...

## To do
1. To save you from typing `browserify` every time a file changes, you can use the **watchify tool**, which automates builds as soon as an input file changes. However, to keep the code examples consistent, the book examples only show the browserify command (Page 11).
