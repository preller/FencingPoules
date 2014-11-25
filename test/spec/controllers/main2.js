'use strict';

describe('Controller: Main2Ctrl', function () {

  // load the controller's module
  beforeEach(module('testTableAppApp'));

  var Main2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Main2Ctrl = $controller('Main2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
