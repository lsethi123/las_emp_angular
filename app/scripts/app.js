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
    'navList',
    'angularCharts'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/employee-list', {
        templateUrl: 'views/employee/employee-list.html',
        controller: 'EmployeeListCtrl'
      })
      .when('/employee-new', {
        templateUrl: 'views/employee/employee-new.html',
        controller: 'EmployeeNewCtrl'
      })
      .when('/employee-edit/:id', {
        templateUrl: 'views/employee/employee-edit.html',
        controller: 'EmployeeEditCtrl'
      })
      .when('/employee-show/:id', {
        templateUrl: 'views/employee/employee-show.html',
        controller: 'EmployeeShowCtrl'
      })
      .when('/project-list', {
        templateUrl: 'views/project/project-list.html',
        controller: 'ProjectListCtrl'
      })
      .when('/project-new', {
        templateUrl: 'views/project/project-new.html',
        controller: 'ProjectNewCtrl'
      })
      .when('/project-edit/:id', {
        templateUrl: 'views/project/project-edit.html',
        controller: 'ProjectEditCtrl'
      })
      .when('/project-show/:id', {
        templateUrl: 'views/project/project-show.html',
        controller: 'ProjectShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
