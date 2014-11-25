'use strict';

/**
 * @ngdoc filter
 * @name testTableAppApp.filter:touchesDone
 * @function
 * @description
 * # touchesDone
 * Filter in the testTableAppApp.
 */
angular.module('testTableAppApp')
  .filter('touchesDone', function () {
    return function (input, name) {

        var sum = 0;
        angular.forEach(input[name], function(value, key) {
            sum += parseInt(value, 10);
        });

        return sum;
    };
  });
