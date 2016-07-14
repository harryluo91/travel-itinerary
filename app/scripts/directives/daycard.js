'use strict';

/**
 * @ngdoc directive
 * @name travelItineraryApp.directive:dayCard
 * @description
 * # dayCard
 */
angular.module('travelItineraryApp')
  .directive('dayCard', function () {
    var dayCardController = ['$scope', function($scope){
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
