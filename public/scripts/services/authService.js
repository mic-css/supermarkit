angular.module('markpad')
  .service('AuthService', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {
    'use strict';

    var user = null;

    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      signup: signup
    });

    function isLoggedIn() {
      if (user) {
        return true;
      } else {
        return false;
      }
    }

    function getUserStatus() {
      return user;
    }

    function login(username, password) {
      var deferred = $q.defer();

      $http.post('/users/login', {username: username, password: password})
        .success(function (data, status) {
          if (status === 200 && data.status) {
            user = true;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    }

    function logout() {
      var deferred = $q.defer();

      $http.get('/users/logout')
        .success(function (data) {
          user = false;
          deferred.resolve();
        })
        .error(function (data) {
          user = false;
          deferred.reject();
        });
    }

    function signup(username, password) {
      var deferred = $q.defer();

      $http.post('/users/signup', {username: username, password: password})
        .success(function (data, status) {
          if (status === 200 & data.status) {
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        .error(function (data) {
          deferred.reject();
        });

      return deferred.promise;
    }
  }]);
