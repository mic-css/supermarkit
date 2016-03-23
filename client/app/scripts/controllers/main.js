(function() {
  'use strict';

  angular.module('clientApp')
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      this.hello = 'Hello world';
    });
}());
