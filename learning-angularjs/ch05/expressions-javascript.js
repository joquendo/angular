angular.module('myApp', []).
	controller('myController', function($scope) {
		$scope.Math = window.Math;
		$scope.myArr = [1];
		$scope.removedArr = [];
		$scope.returnMaxNumber = function(arr) {
			var sortedArr = arr.sort(function(a,b) {return b-a});
			return sortedArr[0];
		}
	});