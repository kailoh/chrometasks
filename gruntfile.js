module.exports = function(grunt) {

require('time-grunt')(grunt); //displays elapsed execution time of grunt tasks
require('load-grunt-tasks')(grunt); //look for plugins in dependencies/devDependencies starting with grunt & loads them

grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
        dev: {
            files: {
                'app.js': ['views/*.jsx',
                'models/*.js',
                'controllers/*.js'],
            },
            options: {
                transform: ['babelify'],
                browserifyOptions: {
                    debug: true
                }
            },
        }
    },


});

grunt.registerTask('build', ['browserify:dev']);

};
