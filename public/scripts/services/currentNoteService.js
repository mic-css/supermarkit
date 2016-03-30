angular.module('markpad')
  .service('CurrentNote', function () {
    'use strict';

    var currentNote = null;

    var setCurrentNote = function (note) {
      currentNote = note;
    };

    var getCurrentNote = function () {
      return currentNote;
    };

    var getCurrentNoteContent = function () {
      return currentNote ? currentNote.content : '';
    };

    return {
      setCurrentNote: setCurrentNote,
      getCurrentNote: getCurrentNote,
      getCurrentNoteContent: getCurrentNoteContent
    };
  });
