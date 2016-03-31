angular.module('markpad')
  .controller('NotesCtrl', ['NoteFactory', 'CurrentNote', function (NoteFactory, CurrentNote) {
    'use strict';
    var self = this;
    var Note = NoteFactory;
    self.notes = Note.query() || [];

    self.setCurrent = function (note) {
      CurrentNote.setCurrentNote(note);
    };
  }]);
