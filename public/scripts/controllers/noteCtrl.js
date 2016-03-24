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
    .controller('NoteCtrl', function ($scope) {
      $scope.result="";
      $scope.source="";

      $scope.$watch('source', function() {
        $scope.result = marked($scope.source);
      });
    });
