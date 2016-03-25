describe('View notes', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/');
  });

  it("displays all existing notes", function () {
    var notes = element.all(by.css('.note'));
    var firstNote = notes.first();
    expect(notes.count()).toBe(3);
    expect(firstNote.getText()).toEqual('Test Note 1');
  });
});
