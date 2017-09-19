# All instructions done
## Chapter 1 - The Bigger Picture
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
    3. To test:
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
        7. [NOT TESTED] Based on symbolic links to the ./app/node_modules path, Browserify can find your local modules an you can easily require a module in your application like this: `require('views/movie');`

## Chapter 2 - Kick-Starting Application Development
    1. Basic HTML and Style
        1. Includes HTML of pages 24-25 in the index.html
        2. Creates the file the file `static/style.css` with the content of page 25.
    2. Building a Data Layer
        1. `$ mkdir -p app/models`
        2. `$ mkdir -p app/node_modules`
        3. `$ cd app/node_modules`
        4. `$ ln -sf ../models .`
        5. Copy content of page 27 inside `app/models/movie.js`
        6. To test:
            1. `$ cd app`
            2. `$ node`
            3. `> Movie = require('models/movie');` // {[Function: child] extend: [Function: ext...
            4. `> movie = new Movie({title: "The Artist"})` // child { cid: 'c1', attributes: ...
            5. `> movie.get('title');` // "The Artist"
            6. `> movie.set('title', 'Taxi Driver')` // { cid: 'c1', attributes: { title: ...
            7. `> movie.set({"title": "Midnight in Paris"});` // child { cid: 'c1', ...
        7. `$ mkdir app/collections`
        8. `$ cd app/node_modules`
        9. `$ ln -sf ../collections .`
        10. Copy content of page 28 (last 4 lines) inside `app/collections/movies.js`
        11. `browserify -r ./app/collections/movies:movies \
                        -r ./app/models/movie.js:movie > static/bundle.js`
        12. To test, in the browser, go to console:
            1. `> Movies = require('movies');` // ƒ (){ return parent.apply(this, arguments); }
            2. `> movies = new Movies();` // child {length: 0, models: Array(0), ...

## To do
1. To save you from typing `browserify` every time a file changes, you can use the **watchify tool**, which automates builds as soon as an input file changes. However, to keep the code examples consistent, the book examples only show the browserify command (Page 11).
