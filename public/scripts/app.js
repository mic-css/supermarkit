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
    'ngTouch',
    'ui.ace'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/notes', {
        templateUrl: '../views/templates/notes.html',
        controller: 'NotesCtrl',
        controllerAs: 'notesCtrl'
      })
      .when('/notes/new', {
        templateUrl: '../views/templates/editor.html',
        controller: 'EditorCtrl',
        controllerAs: 'editor'
      })
      .when('/register', {
        templateUrl: '../views/templates/register.html',
        controller: 'usersCtrl',
        controllerAs: 'registration'
      })
      .otherwise({
        redirectTo: '/notes'
      });
  });
