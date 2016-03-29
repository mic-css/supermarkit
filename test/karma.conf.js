module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,

    basePath: '../',

    frameworks: [
      'jasmine'
    ],

    files: [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-animate/angular-animate.js',
      'public/bower_components/angular-aria/angular-aria.js',
      'public/bower_components/angular-cookies/angular-cookies.js',
      'public/bower_components/angular-messages/angular-messages.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/angular-route/angular-route.js',
      'public/bower_components/angular-sanitize/angular-sanitize.js',
      'public/bower_components/angular-touch/angular-touch.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/marked/marked.min.js',
      'public/bower_components/ace-builds/src/ace.js',
      'public/bower_components/angular-ui-ace/ui-ace.js',
      'public/scripts/**/*.js',
      'test/client/**/*.js'
    ],

    exclude: [
    ],

    port: 8080,

    browsers: [
      'PhantomJS'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    singleRun: false,

    colors: true,

    logLevel: config.LOG_INFO
  });
};
