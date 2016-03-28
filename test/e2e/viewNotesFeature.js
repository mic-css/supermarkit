describe('View notes', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/');
  });

  it("displays all existing notes", function () {
    var notes = element.all(by.css('.note'));
    var firstNoteTitle = element.all(by.css('.note .title')).first().getText();
    var firstNotePreview = element.all(by.css('.note .preview')).first().getText();

    expect(notes.count()).toBe(1);
    expect(firstNoteTitle).toEqual('Welcome to Markpad');
    expect(firstNotePreview).toContain("Here's a quick introduction to markdown");
  });
});
