describe('Controller: EditorCtrl', function () {
  'use strict';

  var EditorCtrl, mockCurrentNoteService;

  beforeEach(module('markpad', function ($provide) {
    mockCurrentNoteService = {
      getCurrentNoteContent: function() {
        return 'Example content';
      }
    };

    spyOn(mockCurrentNoteService, 'getCurrentNoteContent').and.callThrough();

    $provide.service('CurrentNote', function () {
      return mockCurrentNoteService;
    });
  }));

  beforeEach(inject(function ($controller, $rootScope) {
    EditorCtrl = $controller('EditorCtrl', {
      $scope: $rootScope
    });
  }));

  it("should set source to the current note's content", function () {
    expect(EditorCtrl.note.content).toEqual('Example content');
  });
  // TODO: stub marked methods

  it('should update the markdown preview on input change', function () {
    EditorCtrl.note.content = '**test**';
    EditorCtrl.renderMd();
    expect(EditorCtrl.preview).toContain('<strong>test</strong>');
  });
});
