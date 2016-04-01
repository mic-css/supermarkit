angular.module('markpad')
  .factory('NoteFactory', function ($resource) {
    'use strict';

    return $resource('/api/notes/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  });
