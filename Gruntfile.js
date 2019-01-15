module.exports = function (grunt) {

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
            }, app: {
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
        }
    });


    grunt.registerTask('compile', ['handlebars', 'browserify']);

    // Run the server and watch for file changes
    grunt.registerTask('server', ['compile', 'runNode', 'watch']);

    // Default task
    grunt.registerTask('default', ['compile']);

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
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
};