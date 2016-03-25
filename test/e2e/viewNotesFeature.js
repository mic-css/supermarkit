describe('View notes', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/');
  });

  it("displays 'notes'", function () {
    var body = element(by.css('body'));
    expect(body.getText()).toContain('notes');
  });
});
