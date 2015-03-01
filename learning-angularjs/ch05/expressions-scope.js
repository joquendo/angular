angular.module('myApp', []).
  controller('myController', function($scope) {
    $scope.speed = 'Slow';
    $scope.vehicle = 'Train';
    $scope.newSpeed = 'Hypersonic';
    $scope.newVehicle = 'Plane';
    $scope.upper = function(aString) {
      return angular.uppercase(aString); //angular method to manipulate string
    };
    $scope.lower = function(aString) {
      return aString.toLowerCase(); //JavaScript string methods work too
    };
    $scope.setValues = function(speed, vehicle) {
      $scope.speed = speed;
      $scope.vehicle = vehicle;
    };
  });