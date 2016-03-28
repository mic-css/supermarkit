'use strict';

angular
  .module('markpad', [
    'ngResource',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/notes', {
        templateUrl: '../views/templates/notes.html',
        controller: 'NotesCtrl',
        controllerAs: 'notes'
      })
      .when('/notes/new', {
        templateUrl: '../views/templates/editor.html',
        controller: 'EditorCtrl',
        controllerAs: 'editor'
      })
      .when('/signup', {
        templateUrl: '../views/templates/signup.html',
        controller: 'SignUpCtrl',
        controllerAs: 'signUp'
      })
      .otherwise({
        redirectTo: '/notes'
      });
  });
