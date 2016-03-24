describe('Factory: Note', function() {
  'use strict';

  var $httpBackend, $rootScope, noteFactory;

  beforeEach(module('markpad', function ($routeProvider) {
     $routeProvider.otherwise(function(){return false;});
 }));

  beforeEach(inject(function (Note) {
    noteFactory = Note;
  }));

  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    noteFactory = $injector.get('Note');
  }));

  beforeEach( function () {
    $httpBackend.whenGET(/views.*/).respond(200, '');
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it ('should post new note', function() {
    $httpBackend.expectPOST('/api/notes').respond('201', '');
    var note = new noteFactory();
    note.$save();
    $httpBackend.flush();
  });
});
