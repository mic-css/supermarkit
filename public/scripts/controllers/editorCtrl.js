'use strict';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

angular.module('markpad')
  .controller('EditorCtrl', ['$scope', 'CurrentNote', function ($scope, CurrentNote) {
    var self = this;

    var currentNote = CurrentNote.getCurrentNoteContent();

    self.source = currentNote;
    self.result = '';

    self.renderMd = function () {
      self.result = marked(self.source);
    };

    $scope.aceLoaded = function (_editor) {
      var _renderer = _editor.renderer;
      _editor.setValue(self.source);
      _editor.setReadOnly(false);
      _editor.focus();
      _renderer.setShowGutter(false);
      self.renderMd();
    };
  }]);
