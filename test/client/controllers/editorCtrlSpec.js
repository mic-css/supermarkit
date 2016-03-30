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
    expect(EditorCtrl.source).toEqual('Example content');
  });
  // TODO: stub marked methods

  it('should update the markdown result on input change', function () {
    EditorCtrl.source = '**test**';
    EditorCtrl.renderMd();
    expect(EditorCtrl.result).toContain('<strong>test</strong>');
  });
});
