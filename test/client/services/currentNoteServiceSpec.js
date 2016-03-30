describe('Service: CurrentNote', function () {
  'use strict';
  var $rootScope, currentNoteService, note;

  beforeEach(module('markpad'));

  beforeEach(inject(function (_$rootScope_, CurrentNote) {
    $rootScope = _$rootScope_;
    currentNoteService = CurrentNote;
  }));

  it('returns an empty object by default', function () {
    expect(currentNoteService.getCurrentNote()).toEqual(null);
    expect(currentNoteService.getCurrentNoteContent()).toEqual('');
  });

  it('sets the current note', function () {
    note = {title: "Sample note", content: "*Some markdown*"};
    currentNoteService.setCurrentNote(note);
    expect(currentNoteService.getCurrentNote()).toEqual(note);
    expect(currentNoteService.getCurrentNoteContent()).toEqual(note.content);
  });
});
