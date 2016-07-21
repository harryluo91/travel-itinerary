'use strict';

describe('Service: jokeGenerator', function () {

  // load the service's module
  beforeEach(module('travelItineraryApp'));

  // instantiate service
  var jokeGenerator;
  beforeEach(inject(function (_jokeGenerator_) {
    jokeGenerator = _jokeGenerator_;
  }));

  it('should do something', function () {
    expect(!!jokeGenerator).toBe(true);
  });

});
