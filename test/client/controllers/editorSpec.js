describe('Controller: EditorCtrl', function () {
  'use strict';

  beforeEach(module('markpad'));

  var EditorCtrl;

  beforeEach(inject(function ($controller, $rootScope) {
    EditorCtrl = $controller('EditorCtrl', {
      $scope: $rootScope
    });
  }));

  it('should have an empty source and result', function () {
    expect(EditorCtrl.source).toBe('');
    expect(EditorCtrl.result).toBe('');
  });

  // TODO: stub marked methods

  it('should update the markdown result on input change', function () {
    EditorCtrl.source = '**test**';
    EditorCtrl.renderMd();
    expect(EditorCtrl.result).toContain('<strong>test</strong>');
  });
});
