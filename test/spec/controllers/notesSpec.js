describe('Controller: NotesCtrl', function () {
  'use strict';

  // load the controller's module
  beforeEach(module('markpad'));

  var NotesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotesCtrl = $controller('NotesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of notes to the scope', function () {
    expect(NotesCtrl.notes.length).toBe(3);
  });
  

});
