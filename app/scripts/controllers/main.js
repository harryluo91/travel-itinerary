angular.module('travelItineraryApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.day1 = {
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First heading',
      content: 'Some awesome content.'
    };
    $scope.day2 = {
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First heading',
      content: 'Some awesome content.'
    };
  }]);