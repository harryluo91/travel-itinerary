'use strict';

describe('Directive: dayCard', function () {

  // load the directive's module
  beforeEach(module('travelItineraryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<day-card></day-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dayCard directive');
  }));
});
