describe('Log in', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/#/login');
  });

  it('displays a log in form', function () {
    var form = element(by.css('form'));
    var usernameInput = element(by.css('input[type="text"]'));
    var passwordInput = element(by.css('input[type="password"]'));
    expect(form.isPresent()).toBe(true);
    expect(usernameInput.isPresent()).toBe(true);
    expect(passwordInput.isPresent()).toBe(true);
  });
});
