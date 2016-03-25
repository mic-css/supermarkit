describe('Factory: Note', function() {
  'use strict';

  var $httpBackend, $rootScope, noteFactory, note, testNote;

  beforeEach(module('markpad', function ($routeProvider) {
     $routeProvider.otherwise(function(){return false;});
  }));

  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    noteFactory = $injector.get('Note');
  }));

  beforeEach( function () {
    $httpBackend.whenGET(/views.*/).respond(200, '');
    testNote = {id: 1, title: "Note1", body: "test body"};
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
    $httpBackend.expectGET('/api/notes/1').respond(200, JSON.stringify(testNote));
    note = noteFactory.get({id: 1});
    $httpBackend.flush();
    expect(note.toJSON()).toEqual(testNote);
  });

  it ('should update a note', function() {
    $httpBackend.expectPOST('/api/notes').respond(201, '');
    note = new noteFactory();
    note.$save();
    $httpBackend.flush();
  });

});
