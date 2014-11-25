'use strict';

/**
 * @ngdoc function
 * @name testTableAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testTableAppApp
 */
angular.module('testTableAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
