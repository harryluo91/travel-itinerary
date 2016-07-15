'use strict';

/**
 * @ngdoc directive
 * @name travelItineraryApp.directive:dayCard
 * @description
 * # dayCard
 */
angular.module('travelItineraryApp')
  .directive('dayCard', function() {
    var dayCardController = ['$scope', function($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      var currIndex = 0;
      var slides = $scope.slides = [{
        image: 'http://lorempixel.com/601/300',
        text: 'Nice image',
        id: 0
      }, {
        image: 'http://lorempixel.com/602/300',
        text: 'Nice image 2',
        id: 1
      }];
      $scope.dayDetail = [{
        detail: '1',
      }, {
        detail: '2'
      }];
      $scope.currentDayDetail = '';

      $scope.$watch(function() {
        for (var i = 0; i < slides.length; i++) {
          if (slides[i].active) {
            return slides[i];
          }
        }
      }, function(newVal, oldVal) {
        if (newVal.id !== oldVal.id) {
          $scope.currentDayDetail = $scope.dayDetail[newVal['id']].detail;
        }
      });
    }];

    return {
      templateUrl: '../../views/directives/dayCard.html',
      restrict: 'E',
      scope: {
        event: '='
      },
      controller: dayCardController
    };
  });