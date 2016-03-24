var mongoose = require('mongoose');

beforeEach(function() {
  mongoose.connect('mongodb://localhost/makers-achievements-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

afterEach(function() {
  mongoose.connect('mongodb://localhost/makers-achievements-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

describe('Notes Features', function() {
  beforeEach(function(){
    browser.get('http://localhost:3000/#/notes');
  });

  it('should begin with zero notes', function(){
    var notesList = element.all(by.repeater('note in notes'));
    expect(notesList.count()).toEqual(0);
    expect(browser.getCurrentUrl()).toContain('#/notes');
  });

  it('should allow you to create a note', function (){
    var notesList = element.all(by.repeater('note in notes'));

    var noteTitle = element(by.css('input[name="title"]'));
    var noteBody = element(by.css('input[name="body"]'));
    var newNoteForm = element(by.css('form'));

    noteTitle.sendKeys("This is an example title");
    noteBody.sendKeys("This is a body of text");
    newNoteForm.submit();

    expect(noteTitle.getText()).toEqual("This is an example title");
    expect(noteBody.getText()).toEqual("This is a body of text");
    expect(browser.getCurrentUrl()).toContain('#/notes');
    expect(notesList.count()).toEqual(1);
  });

});
