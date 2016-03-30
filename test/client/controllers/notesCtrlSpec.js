describe('Controller: NotesCtrl', function () {
  'use strict';

  var NotesCtrl, mockNoteFactory, mockCurrentNoteService, note;
  var mockNotes = [
    {
      "_id": "56f6d8cbd7c4711bae9abd52",
      "title": "Note title",
      "content": "Example note content",
      "__v": 0,
      "created_at": "2016-03-26T18:45:31.155Z"
    },
    {
      "_id": "56f6c3153f96f241a0412af2",
      "title": "To-do",
      "content": "Feed the dinosaur",
      "__v": 0,
      "created_at": "2016-03-26T17:12:53.848Z"
    },
    {
      "_id": "56f6c32e3f96f241a0412af3",
      "title": "Kill Evernote",
      "content": "Donwload markpad instead :)",
      "__v": 0,
      "created_at": "2016-03-26T17:13:18.840Z"
    }
  ];

  beforeEach(module('markpad', function ($provide) {
    mockNoteFactory = {
      query: function () {
        return mockNotes;
      }
    };

    spyOn(mockNoteFactory, 'query').and.callThrough();

    mockCurrentNoteService = {
      setCurrentNote: {},
      getCurrentNote: mockNotes[0]
    };

    spyOn(mockCurrentNoteService, 'setCurrentNote');

    $provide.factory('Note', function () {
      return mockNoteFactory;
    });

    $provide.service('CurrentNote', function () {
      return mockCurrentNoteService;
    });
  }));


  beforeEach(inject(function ($controller, $rootScope) {
    NotesCtrl = $controller('NotesCtrl', {
      $scope: $rootScope,
    });
  }));

  it('should query the Note factory to load all notes', function () {
    expect(mockNoteFactory.query).toHaveBeenCalled();
  });

  it('should attach list of notes to the controller', function () {
    expect(NotesCtrl.notes.length).toBe(3);
  });

  it('should set the current note in currentNoteService', function () {
    note = {title: "Sample note", content: "*Some markdown*"};
    NotesCtrl.setCurrent(note);
    expect(mockCurrentNoteService.setCurrentNote).toHaveBeenCalledWith(note);
  });
});
