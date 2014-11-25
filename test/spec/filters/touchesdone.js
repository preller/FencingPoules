'use strict';

describe('Filter: touchesDone', function () {

  // load the filter's module
  beforeEach(module('testTableAppApp'));

  // initialize a new instance of the filter before each test
  var touchesDone;
  beforeEach(inject(function ($filter) {
    touchesDone = $filter('touchesDone');
  }));

  it('should return the input prefixed with "touchesDone filter:"', function () {
    var text = 'angularjs';
    expect(touchesDone(text)).toBe('touchesDone filter: ' + text);
  });

});
