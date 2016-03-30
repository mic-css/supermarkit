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
  .controller('EditorCtrl', ['$scope', function ($scope) {
    var self = this;

    $scope.aceLoaded = function (_editor) {
      var _session = _editor.getSession();
      var _renderer = _editor.renderer;
      _editor.setValue()
      _editor.setReadOnly(false);
      _editor.focus();
      _renderer.setShowGutter(false);
    };

    self.source = '';
    self.result = '';

    self.renderMd = function () {
      self.result = marked(self.source);
    };

    self.renderMd();
  }]);
