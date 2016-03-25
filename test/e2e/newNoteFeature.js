describe('New note', function () {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:3000/#/notes/new');
  });

  it('renders text input as markdown', function () {
    var textArea = element(by.id('textarea'));
    var mdView = element(by.id('md-view'));

    textArea.sendKeys('**test**');
    expect(mdView.getInnerHtml()).toContain('<p><strong>test</strong></p>');
  });
});
