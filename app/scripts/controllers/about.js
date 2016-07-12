'use strict';

/**
 * @ngdoc function
 * @name travelItineraryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the travelItineraryApp
 */
angular.module('travelItineraryApp')
  .controller('AboutCtrl', ['$scope', function($scope) {
    $scope.events = [{
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First heading',
      content: 'Some awesome content.'
    }, {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Second heading',
      content: 'More awesome content.'
    }];
  }]);