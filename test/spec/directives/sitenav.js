'use strict';

describe('Directive: sitenav', function () {

  // load the directive's module
  beforeEach(module('hwdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sitenav></sitenav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sitenav directive');
  }));
});
