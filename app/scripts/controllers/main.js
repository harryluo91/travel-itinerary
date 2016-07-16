angular.module('travelItineraryApp')
  .controller('MainCtrl', ['$scope', 'DAY_DETAILS', function($scope, DAY_DETAILS) {
    $scope.dayDetails = DAY_DETAILS;

  }]);