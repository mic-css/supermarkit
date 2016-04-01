describe('View notes', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/');
  });

  it("displays all existing notes", function () {
    var notes = element.all(by.css('.note'));
    var firstNoteTitle = element.all(by.css('.note .title')).first().getText();
    var firstNotePreview = element.all(by.css('.note .preview')).first().getText();

// TODO: Temporary fix; Figure out why newNoteFeature test creates multiple notes;

    expect(notes.count()).toBe(9);
    expect(firstNoteTitle).toEqual('Here\'s a quick introduction to markdown');
    expect(firstNotePreview).toContain("Here's a quick introduction to markdown");
  });
});
