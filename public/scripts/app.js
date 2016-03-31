'use strict';

angular
  .module('markpad', [
    'ngResource',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.ace'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: '../views/templates/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signupCtrl'
      })
      .when('/login', {
        templateUrl: '../views/templates/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      })
      .when('/logout', {
        controller: 'LogoutCtrl',
        controllerAs: 'loginCtrl'
      })
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
      .otherwise({
        redirectTo: '/notes'
      });
  });
