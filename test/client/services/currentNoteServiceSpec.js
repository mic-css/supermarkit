describe('Service: CurrentNote', function () {
  'use strict';
  var $rootScope, currentNoteService, mockNote, mockNoteFactory, note;

  beforeEach(module('markpad', function ($provide) {
    mockNote = {
      save: function () {}
    };

    mockNoteFactory = function () {
      return mockNote;
    };

    spyOn(mockNote, 'save');

    $provide.factory('Note', function () {
      return mockNoteFactory;
    });
  }));

  beforeEach(inject(function (_$rootScope_, CurrentNote) {
    $rootScope = _$rootScope_;
    currentNoteService = CurrentNote;
  }));

  it('returns an empty object by default', function () {
    expect(currentNoteService.getCurrentNote()).toEqual(mockNote);
    expect(currentNoteService.getCurrentNoteContent()).toEqual('');
  });

  it('sets the current note', function () {
    note = {title: "Sample note", content: "*Some markdown*"};
    currentNoteService.setCurrentNote(note);
    expect(currentNoteService.getCurrentNote().title).toEqual(note.title);
    expect(currentNoteService.getCurrentNoteContent()).toEqual(note.content);
  });
});
