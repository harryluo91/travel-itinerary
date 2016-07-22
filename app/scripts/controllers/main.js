angular.module('travelItineraryApp')
  .controller('MainCtrl', ['$scope', 'DAY_DETAILS', 'jokeGenerator', function($scope, DAY_DETAILS, jokeGenerator) {
    $scope.dayDetails = DAY_DETAILS;
    $scope.masterCodeCorrect = false;
    $scope.sectionVisible = [false, false, false, false, false, false, false, false, false, ];
    $scope.inputAnswers = [];
    $scope.joke = '';
    $scope.jokeLoaded = false;
    var self = this;

    self.getAJoke = function() {
      jokeGenerator.getJoke().then(function(res) {
        $scope.joke = res.data.text;
        $scope.jokeLoaded = true;
      }, function(err) {
        $scope.joke = err;
      })
    };

    self.getAJoke();

    $scope.checkAnswer = function(val, index) {
      if (index === 8 && (val === 'our3wishes')) {
        $scope.sectionVisible.forEach(function(x, index, arr) {
          arr[index] = true;
        })
      } else if (index === 0 && (val === 'fir' || val === 'FIR')) {
        $scope.sectionVisible[0] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      } else if (index === 1 && (val === '0429')) {
        $scope.sectionVisible[1] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      } else if (index === 2 && (val === 'chemistry')) {
        $scope.sectionVisible[2] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      } else if (index === 3 && (val === 'scarborough bluffs' || val === 'bluffs')) {
        $scope.sectionVisible[3] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      } else if (index === 4 && (val === '北鼻我还爱你')) {
        $scope.sectionVisible[4] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      } else if (index === 5 && (val === '0722' || val === '0724')) {
        $scope.sectionVisible[5] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      } else if (index === 6 && (val !== '')) {
        $scope.sectionVisible[6] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      } else if (index === 7 && (val === '6479687859')) {
        $scope.sectionVisible[7] = true;
        $scope.jokeLoaded = false;
        self.getAJoke();
      }
    }
  }]);