describe('View single note', function () {
 'use strict';
  var note, preview;

  beforeEach(function () {
    browser.get('http://localhost:3000/');
    note = element.all(by.css('.note .title')).first();
    note.click();
  });

  it("shows a single note", function () {
    preview = element(by.id('md-view'));
    expect(preview.getText()).toContain("Here's a quick markdown tutorial");
  });
});
