describe('Factory: Note', function() {
  'use strict';

  var $httpBackend, $rootScope, noteFactory, note, testNote;

  beforeEach(module('markpad', function ($routeProvider) {
    $routeProvider.otherwise(function () { return false; });
  }));

  beforeEach(inject(function(_$httpBackend_, _$rootScope_, Note) {
    $httpBackend  = _$httpBackend_;
    $rootScope    = _$rootScope_;
    noteFactory   = Note;
  }));

  beforeEach( function () {
    $httpBackend.whenGET(/views.*/).respond(200, '');
    testNote = {_id: 1, title: "Note1", body: "Test body"};
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it ('should post new note', function() {
    $httpBackend.expectPOST('/api/notes').respond(201, '');
    note = new noteFactory();
    note.$save();
    $httpBackend.flush();
  });

  it ('should get an existing note', function() {
    $httpBackend.expectGET('/api/notes/1').respond(200, testNote);
    note = noteFactory.get({id: 1});
    $httpBackend.flush();
    expect(note.toJSON()).toEqual(testNote);
  });

  it ('should update a note', function() {
    $httpBackend.whenGET('/api/notes/1').respond(200, testNote);
    $httpBackend.expect('PUT', '/api/notes/1').respond(200, '');
    note = noteFactory.get({id: 1}, function () {
      note.body = 'Modified body';
      note.$update();
    });
    $httpBackend.flush();
  });

  it ('should delete a note', function() {
    $httpBackend.whenGET('/api/notes/1').respond(200, testNote);
    $httpBackend.expect('DELETE', '/api/notes/1').respond(200, '');
    note = noteFactory.get({id: 1}, function () {
      note.$delete();
    });
    $httpBackend.flush();
  });


});
