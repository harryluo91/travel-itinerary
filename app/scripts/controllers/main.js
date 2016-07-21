angular.module('travelItineraryApp')
  .controller('MainCtrl', ['$scope', 'DAY_DETAILS', function($scope, DAY_DETAILS) {
    $scope.dayDetails = DAY_DETAILS;
    $scope.masterCodeCorrect = false;
    $scope.sectionVisible = [false, false, false, false, false, false, false, false, false, ];
    $scope.inputAnswers = [];

    $scope.checkAnswer = function(val, index) {
      if (index === 8 && (val === 'our3wishes')) {
        $scope.sectionVisible.forEach(function(x, index, arr) {
          arr[index] = true;
        })
        console.log($scope.sectionVisible)
      } else if (index === 0 && (val === 'fir' || val === 'FIR')) {
        $scope.sectionVisible[0] = true;
      } else if (index === 1 && (val === 'fir' || val === 'FIR')) {
        $scope.sectionVisible[1] = true;
      }
    }
  }]);