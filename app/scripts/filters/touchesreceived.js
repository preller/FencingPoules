'use strict';

/**
 * @ngdoc filter
 * @name testTableAppApp.filter:touchesReceived
 * @function
 * @description
 * # touchesDone
 * Filter in the testTableAppApp.
 */
angular.module('testTableAppApp')
    .filter('touchesReceived', function () {
        return function (input, name) {

            var sum = 0;
            angular.forEach(input, function(value, key) {
                //sum += parseInt(value[name], 10);
                sum = value[name];
                //a = value[name];
            });

            return "asdasd";
        };
    });
