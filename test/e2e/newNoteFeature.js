describe('New note', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/#/notes/new');
  });

  it('renders text input as markdown', function () {
    var editor = element(by.css('.ace_text-input'));
    var mdView = element(by.id('md-view'));

    editor.sendKeys('**test**');
    expect(mdView.getInnerHtml()).toContain('<p><strong>test</strong></p>');
  });
});
