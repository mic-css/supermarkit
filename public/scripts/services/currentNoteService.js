angular.module('markpad')
  .service('CurrentNote', function () {
    'use strict';

    var currentNote = {title: '', content: ''};

    var setCurrentNote = function (note) {
      currentNote = note;
    };

    var getCurrentNote = function () {
      var note = currentNote;
      currentNote = {title: '', content: ''};
      return note;
    };

    return {
      setCurrentNote: setCurrentNote,
      getCurrentNote: getCurrentNote
    };
  });
