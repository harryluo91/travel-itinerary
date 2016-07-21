angular.module('travelItineraryApp')
  .controller('MainCtrl', ['$scope', 'DAY_DETAILS', function($scope, DAY_DETAILS) {
    $scope.dayDetails = DAY_DETAILS;
    $scope.inputAnswers = [];
    $scope.sectionVisible = [];

    $scope.checkAnswer = function(val, index) {
      console.log(val);
      if (val === '1') {
        $scope.sectionVisible[index] = true;
      }
    }
  }]);