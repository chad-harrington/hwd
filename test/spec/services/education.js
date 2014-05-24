'use strict';

describe('Service: Education', function () {

  // load the service's module
  beforeEach(module('hwdApp'));

  // instantiate service
  var Education;
  beforeEach(inject(function (_Education_) {
    Education = _Education_;
  }));

  it('should do something', function () {
    expect(!!Education).toBe(true);
  });

});
