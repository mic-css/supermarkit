angular.module('markpad')
  .controller('NotesCtrl', ['Note', function (Note) {
    'use strict';
    var self = this;

    self.notes = Note.query() || [];
  }]);
