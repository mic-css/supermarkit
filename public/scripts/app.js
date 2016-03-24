'use strict';

angular
  .module('markpad', [
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
      .when('/', {
        templateUrl: '../views/templates/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notes/new', {
        templateUrl: '../views/templates/note.html',
        controller: 'NoteCtrl',
        controllerAs: 'note'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
