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
  .controller('EditorCtrl', ['$scope', '$rootScope', '$timeout', 'NoteFactory', 'CurrentNote', function ($scope, $rootScope, $timeout, NoteFactory, CurrentNote) {
    var self = this;

    self.note = {title: '', content: ''};
    self.preview = '';

    function init() {
      self.note = CurrentNote.getCurrentNote();
      $scope.aceLoaded = function (_editor) {
        var _renderer = _editor.renderer;
        _editor.setTheme('ace/theme/markdown');
        _editor.getSession().setUseWrapMode(true);
        _editor.setShowPrintMargin(false);
        _editor.setValue(self.note.content);
        _editor.setReadOnly(false);
        _editor.focus();
        _renderer.setShowGutter(false);
      };

      self.renderMd();
      self.saveUpdates();
    }

    self.saveUpdates = function () {
      self.note.title = self.note.content.split('\n')[0];
      console.log(self.note.title);
      if (!self.note._id && (self.note.title !== '' || self.note.content !== '')) {
        NoteFactory.save(self.note, function (res) {
          console.log('saved');
          self.note._id = res.SUCCESS._id;
        });
      } else if (self.note.title !== '' || self.note.content !== '') {
        NoteFactory.update({id: self.note._id}, self.note, function (res) {
          console.log(res);
        });
      }
    };

    self.renderMd = function () {
      self.preview = marked(self.note.content);
    };

    init();
  }]);
