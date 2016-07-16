'use strict';

/**
 * @ngdoc directive
 * @name travelItineraryApp.directive:dayCard
 * @description
 * # dayCard
 */
angular.module('travelItineraryApp')
  .directive('dayCard', function() {
    var dayCardController = ['$scope', '$sce', function($scope, $sce) {
      var self = this;
      self.day = $scope.day;
      self.pointOfInterest = $scope.day.pointOfInterest;
      self.pointOfInterest.map(el => {
        console.log(el);
        el.details = $sce.trustAsHtml(el.details);
      })
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.dayOverview = $sce.trustAsHtml(self.day.timelineInfo.dayOverview);
    }];

    return {
      templateUrl: '../../views/directives/dayCard.html',
      restrict: 'E',
      scope: {
        day: '='
      },
      controller: dayCardController,
      controllerAs: 'ctrl'
    };
  });