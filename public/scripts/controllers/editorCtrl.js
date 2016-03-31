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
  .controller('EditorCtrl', ['$scope', 'Note', 'CurrentNote', function ($scope, Note, CurrentNote) {
    var self = this;

    self.note = CurrentNote.getCurrentNote();
    self.preview = '';

    self.renderMd = function () {
      self.preview = marked(self.note.content);
    };

    $scope.aceLoaded = function (_editor) {
      var _renderer = _editor.renderer;
      _editor.setValue(self.note.content);
      _editor.setReadOnly(false);
      _editor.focus();
      _renderer.setShowGutter(false);
      self.renderMd();
    };

    // save
    // note.content = self.source
    // note .save
  }]);
