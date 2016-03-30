describe('View single note', function () {
 'use strict';
  var note, editor;

  beforeEach(function () {
    browser.get('http://localhost:3000/');
    note = element.all(by.css('.note .title')).first();
    note.click();
  });

  it("shows a single note", function () {
    editor = element(by.css('.editor'));
    expect(editor.getText()).toContain(note.content);
  });
});
