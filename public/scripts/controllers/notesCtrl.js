angular.module('markpad')
  .controller('NotesCtrl', ['Note', 'CurrentNote', function (Note, CurrentNote) {
    'use strict';
    var self = this;

    self.notes = Note.query() || [];

    self.setCurrent = function (note) {
      CurrentNote.setCurrentNote(note);
    };
  }]);
