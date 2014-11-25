'use strict';

/**
 * @ngdoc overview
 * @name testTableAppApp
 * @description
 * # testTableAppApp
 *
 * Main module of the application.
 */
angular
  .module('testTableAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main2.html',
        controller: 'Main2Ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
