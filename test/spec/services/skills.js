'use strict';

describe('Service: Skills', function () {

  // load the service's module
  beforeEach(module('hwdApp'));

  // instantiate service
  var Skills;
  beforeEach(inject(function (_Skills_) {
    Skills = _Skills_;
  }));

  it('should do something', function () {
    expect(!!Skills).toBe(true);
  });

});
