angular.module('markpad')
  .service('CurrentNote', ['Note', function (Note) {
    'use strict';

    var currentNote = new Note();
    currentNote.title = '';
    currentNote.content = '';

    var setCurrentNote = function (note) {
      currentNote.title = note.title;
      currentNote.content = note.content;
    };

    var getCurrentNote = function () {
      return currentNote;
    };

    var getCurrentNoteContent = function () {
      return currentNote.content;
    };

    return {
      setCurrentNote: setCurrentNote,
      getCurrentNote: getCurrentNote,
      getCurrentNoteContent: getCurrentNoteContent
    };
  }]);
