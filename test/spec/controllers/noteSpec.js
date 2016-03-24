describe('Controller: NoteCtrl', function () {
  'use strict';

  beforeEach(module('markpad'));

  var NoteCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteCtrl = $controller('NoteCtrl', {
      $scope: scope
    });
  }));

  it('should have an empty source and result', function () {
    expect(NoteCtrl.source).toBe('');
    expect(NoteCtrl.result).toBe('');
  });

  it('should update the markdown result on input change', function () {
    NoteCtrl.source = '**test**';
    NoteCtrl.renderMd();
    expect(NoteCtrl.result).toContain('<strong>test</strong>');
  });
});
