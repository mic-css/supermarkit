describe('Home page', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/');
  });

  it("displays 'hello world'", function () {
    var body = element(by.css('body'));
    expect(body.getText()).toContain('Hello world');
  });
});
