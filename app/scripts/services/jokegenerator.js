'use strict';

/**
 * @ngdoc service
 * @name travelItineraryApp.jokeGenerator
 * @description
 * # jokeGenerator
 * Service in the travelItineraryApp.
 */
angular.module('travelItineraryApp')
  .service('jokeGenerator', ['$http', '$q', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getJoke = function(){
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'https://webknox-jokes.p.mashape.com/jokes/random?maxLength=100',
        headers: {
          'X-Mashape-Key': 'mRuFjyEmZWmshejQ6VtlocJnbjDsp1gamHwjsnbuSvp4aYBebn',
          'Accept': 'application/json'
        }
      }).then(function successCallback(res) {
          deferred.resolve(res);
        }, function errorCallback(err) {
          deferred.reject(err);
        });

        return deferred.promise;
    };
  }]);
