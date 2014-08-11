'use strict';

/**
 * @ngdoc function
 * @name lasEmpAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lasEmpAngularApp
 */
//  var app = angular.module('lasEmpAngularApp');
// app.controller('EmployeeCtrl', function($scope, employeeService) {
//   employeeService.getEmployees(function(data) {
//      $scope.employees = data.employees;
//   });
// });

angular.module('lasEmpAngularApp')
    .controller('EmployeeCtrl', ['$scope','$routeParams','$location', 'employeeService', 
        function ($scope, $routeParams,$location,employeeService) {

        $scope.status;
        $scope.employees={};

        getemployees();

        function getemployees() {
            employeeService.listEmployees()
                .success(function (emps) {
                    $scope.employees = emps;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Employee data: ' + error.message;
                });
        }
        //delete employee code
        $scope.deleteEmployee = function (id) {
            $location.path('/employee');
            if(confirm("Are you sure to delete Employee?")==true){
                employeeService.deleteEmployee(id)
                .success(function (data) {
                    $scope.status = data.message;
                    $location.path('/employee');
                })
                .error(function (error) {
                    $scope.status = 'Unable to Delete Employee: ' + error.message;
                });
            };
            
        };
}]);