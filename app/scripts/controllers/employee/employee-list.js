'use strict';

/**
 * @ngdoc function
 * @name lasEmpAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lasEmpAngularApp
 */


angular.module('lasEmpAngularApp')
    .controller('EmployeeListCtrl', ['$scope','$routeParams','$location', 'employeeService', 
        function ($scope, $routeParams,$location,employeeService) {

        $scope.status;
        $scope.employees={};
        $scope.loading = true;
        getemployees();

        function getemployees() {
            employeeService.listEmployees()
                .success(function (emps) {
                    $scope.loading = false;
                    $scope.employees = emps;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Employee data: ' + error.message;
                    $scope.loading = false;
                });
        }
        //delete employee code
        $scope.deleteEmployee = function (id) {
            $location.path('/employee-list');
            if(confirm("Are you sure to delete Employee?")==true){
                employeeService.deleteEmployee(id)
                .success(function (data) {
                    $scope.loading = false;
                    $scope.status = data.message;
                    $location.path('/employee-list');
                })
                .error(function (error) {
                    $scope.status = 'Unable to Delete Employee: ' + error.message;
                });
            };
            
        };
}]);