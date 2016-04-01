describe('Controller: EditorCtrl', function () {
  'use strict';

  var $scope, $httpBackend, EditorCtrl, mockNote, mockCurrentNoteService;

  beforeEach(module('markpad', function ($provide) {
    mockNote = {
      title: 'Example title',
      content: 'Example content',
      $save: function () {},
      $update: function () {}
    };

    spyOn(mockNote, '$save');
    spyOn(mockNote, '$update');

    mockCurrentNoteService = {
      getCurrentNote: function () {
        return mockNote;
      }
    };

    spyOn(mockCurrentNoteService, 'getCurrentNote').and.callThrough();

    $provide.service('CurrentNote', function () {
      return mockCurrentNoteService;
    });
  }));

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    $scope        = $rootScope;
    $httpBackend  = _$httpBackend_;

    EditorCtrl = $controller('EditorCtrl', {
      $scope: $scope
    });
  }));

  it('should set source to the current note\'s content', function () {
    expect(mockCurrentNoteService.getCurrentNote).toHaveBeenCalled();
    expect(EditorCtrl.note.content).toEqual('Example content');
  });

  // TODO: stub marked methods
  it('should update the markdown preview on input change', function () {
    EditorCtrl.note.content = '**test**';
    EditorCtrl.renderMd();
    expect(EditorCtrl.preview).toContain('<strong>test</strong>');
  });

  it('should save a new Note on load', function () {
    expect(mockNote.$save).toHaveBeenCalled();
  });
});
