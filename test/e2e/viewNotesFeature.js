describe('View notes', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/');
  });

  it("displays all existing notes", function () {
    var notes = element.all(by.css('.note'));
    expect(notes.count()).toBe(3);
  });
});
