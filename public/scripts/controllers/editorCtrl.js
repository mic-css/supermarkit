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
  .controller('EditorCtrl', ['$scope', '$timeout', 'NoteFactory', 'CurrentNote', function ($scope, $timeout, NoteFactory, CurrentNote) {
    var self = this;

    self.note = {title: '', content: ''};
    self.preview = '';
    var saving = false;

    function init() {
      self.note = CurrentNote.getCurrentNote();
      $scope.aceLoaded = function (_editor) {
        var _renderer = _editor.renderer;
        _editor.getSession().setMode('ace/mode/markdown');
        _editor.setTheme('ace/theme/markdown');
        _editor.getSession().setUseWrapMode(true);
        _editor.setShowPrintMargin(false);
        

        _editor.setValue(self.note.content);
        _editor.setFontSize(15);
        _editor.setReadOnly(false);
        _editor.focus();
        _renderer.setShowGutter(false);
      };

      self.renderMd();
      self.saveUpdates();
    }

    self.saveUpdates = function () {
      self.note.title = self.note.content.split('\n')[0];

      if (!self.note._id && self.note.title !== '' && saving === false) {
        saving = true;
        NoteFactory.save(self.note, function (res) {
          self.note._id = res.SUCCESS._id;
          saving = false;
        });
      } else if (self.note.title !== '' && saving === false) {
        saving = true;
        NoteFactory.update({id: self.note._id}, self.note, function (res) {
          saving = false;
        });
      }
    };

    self.renderMd = function () {
      self.preview = marked(self.note.content);
    };

    init();
  }]);
