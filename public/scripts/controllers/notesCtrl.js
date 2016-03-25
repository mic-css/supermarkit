'use strict';

angular.module('markpad')
  .controller('NotesCtrl', function () {
    var self = this;

    self.notes = [
      {
        _id: 1,
        title: 'Test Note 1',
        body: 'This is a test'
      },
      {
        _id: 2,
        title: 'Test Note 2',
        body: 'This is a test too'
      },
      {
        _id: 3,
        title: 'Test Note 3',
        body: 'Last but not least, this is a test'
      },
    ];
  });
