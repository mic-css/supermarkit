'use strict';

var path = require('path');
​
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mongobin: {
      options: {
        host: 'localhost',
        port: '27017',
        db: 'markpad-test'
      }
    },
    express: {
      options: {
        port: process.env.PORT || 8080,
        hostname: 'localhost'
      },
      test: {
        options: {
          server: path.resolve('./app')
        },
      }
    },
    karma: {
      options: {
        configFile: './test/karma.conf.js'
      },
      run: {
      }
    },
    protractor: {
      options: {
        configFile: './test/protractor.conf.js',
        keepAlive: true
      },
      run: {
      }
    },
    protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start'
        }
      }
    }
  });
​
  grunt.loadNpmTasks('grunt-mongo-bin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.registerTask('e2e', ['express:test', 'protractor_webdriver', 'protractor']);
​
};
