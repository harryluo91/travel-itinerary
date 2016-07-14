angular.module('travelItineraryApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.event = {
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First heading',
      content: 'Some awesome content.'
    };
  }]);
