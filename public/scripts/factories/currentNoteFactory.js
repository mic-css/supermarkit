angular.module('markpad')
  .factory('currentNote', function () {
    'use strict';
    var self = this;
    self.currentNote = {};
    self.setCurrentNote = function (note) {
      currentNote = note;
    };
    self.getCurrentNote = function () {
      currentNote;
    };
  });
