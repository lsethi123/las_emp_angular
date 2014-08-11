'use strict';

/**
 * @ngdoc overview
 * @name lasEmpAngularApp
 * @description
 * # lasEmpAngularApp
 *
 * Main module of the application.
 */
angular
  .module('lasEmpAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'navList'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl'
      })
      .when('/employee-new', {
        templateUrl: 'views/partials/employee-new.html',
        controller: 'EmployeeNewCtrl'
      })
      .when('/employee-edit/:id', {
        templateUrl: 'views/partials/employee-edit.html',
        controller: 'EmployeeEditCtrl'
      })
      .when('/employee-show/:id', {
        templateUrl: 'views/partials/employee-show.html',
        controller: 'EmployeeShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
