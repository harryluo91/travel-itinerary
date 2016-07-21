angular.module('travelItineraryApp')
  .controller('MainCtrl', ['$scope', 'DAY_DETAILS', 'jokeGenerator', function($scope, DAY_DETAILS, jokeGenerator) {
    $scope.dayDetails = DAY_DETAILS;
    $scope.masterCodeCorrect = false;
    $scope.sectionVisible = [false, false, false, false, false, false, false, false, false, ];
    $scope.inputAnswers = [];
    console.log('hello');
    jokeGenerator.getJoke().then(function (res) {
      console.log(res);
    }, function(err){
      console.log(err);
    })

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
