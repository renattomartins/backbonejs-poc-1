module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        browserify: {
            options: {
                debug: true,
                aliasMappings: [
                    {
                        cwd: 'src/',
                        src: ['**/*.js'],
                        dest: 'src/'
                    }]
            },
            app: {
                src: ['src/**/*.js'],
                dest: 'public/bundle.js'
            }
        },
        watch: {
            scripts: {
                files: 'src/**/*.js',
                tasks: ['browserify'],
                options: {
                    interrupt: true
                }
            },
            templates: {
                files: 'src/**/*.hbs',
                tasks: ['handlebars'],
                options: {
                    interrupt: true
                }
            },
        },
        handlebars: {
            compile: {
                options: {
                    namespace: false,
                    commonjs: true,
                    processName: function (filename) {
                        return filename.replace('src/templates/', '').replace('.hbs', '');
                    }
                },
                src: "src/templates/**/*.hbs",
                dest: "src/templates/compiledTemplates.js"
            }
        },
        jshint: {
            options: {
                curly: true
            },
            gruntfile: {
                src: 'Gruntfile.js',
            },
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Run the server and watch for file changes
    grunt.registerTask('server', ['compile', 'runNode', 'watch']);

    // Run the simple compile task (bundle)
    grunt.registerTask('compile', ['handlebars', 'browserify']);

    // Run nodemon
    grunt.registerTask('runNode', function () {
        grunt.util.spawn({
            cmd: 'node',
            args: ['./node_modules/.bin/nodemon', 'server.js'],
            opts: {
                stdio: 'inherit'
            }
        }, function () {
            grunt.fail.fatal(new Error("nodemon quit"));
        });
    });

    // Default task
    grunt.registerTask('default', ['compile']);
};