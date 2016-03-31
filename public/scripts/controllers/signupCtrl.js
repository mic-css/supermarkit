angular.module('markpad').controller('SignupCtrl',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.signup = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.signup($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/#/notes');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {

          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);
