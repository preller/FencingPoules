'use strict';

/**
 * @ngdoc function
 * @name testTableAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testTableAppApp
 */
angular.module('testTableAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
