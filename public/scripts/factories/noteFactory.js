angular.module('markpad')
  .factory('Note', function ($resource) {
    'use strict';
    return $resource('/api/notes/:id');
  });
