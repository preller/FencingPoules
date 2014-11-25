'use strict';

describe('Filter: touchesReceived', function () {

  // load the filter's module
  beforeEach(module('testTableAppApp'));

  // initialize a new instance of the filter before each test
  var touchesReceived;
  beforeEach(inject(function ($filter) {
    touchesReceived = $filter('touchesReceived');
  }));

  it('should return the input prefixed with "touchesReceived filter:"', function () {
    var text = 'angularjs';
    expect(touchesReceived(text)).toBe('touchesReceived filter: ' + text);
  });

});
