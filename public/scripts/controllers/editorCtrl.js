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
  .controller('EditorCtrl', ['$scope', '$timeout', 'CurrentNote', function ($scope, $timeout, CurrentNote) {
    var self = this;
    var timeout = null;
    self.note = CurrentNote.getCurrentNote();
    self.preview = '';

    var saveUpdates = function () {
      if (self.note.hasOwnProperty('id')) {
        self.note.$save(function (data) {
          console.log(data);
          self.note.id = data.body.id;
        });
      } else {
        self.note.update({id: self.note.id});
      }
    };

    var debounceSaveUpdates = function (newVal, oldVal) {
      if (newVal !== oldVal) {
        if (timeout) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout(saveUpdates, 1000);
      }
    };


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

    $scope.$watch('self.note.content', debounceSaveUpdates);

  }]);
