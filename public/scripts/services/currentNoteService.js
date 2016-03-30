angular.module('markpad')
  .service('CurrentNote', function () {
    'use strict';

    var currentNote = {};

    var setCurrentNote = function (note) {
      currentNote = note;
    };

    var getCurrentNote = function () {
      return currentNote;
    };

    return {
      setCurrentNote: setCurrentNote,
      getCurrentNote: getCurrentNote
    };

  });
