'use strict';
// employeeService to acess the API
 angular.module('lasEmpAngularApp')
    .factory('employeeService', ['$http', function($http) {

    var urlBase = 'http://localhost:3000/employee/';
    var employeeService = {};

    employeeService.listEmployees = function () {
        return $http.get(urlBase);
    };
    employeeService.listAllManager = function () {
        return $http.get(urlBase+'manager');
    };
    employeeService.listEmployeesByManager = function (id) {
        return $http.get(urlBase+'manager/'+id);
    };
    employeeService.getEmployee = function (id) {
        return $http.get(urlBase + id);
    };

    employeeService.insertEmployee = function (cust) {
        return $http.post(urlBase,cust);
    };

    employeeService.updateEmployee = function (cust) {
      return $http.put(urlBase + cust.id, cust)
    };

    employeeService.deleteEmployee = function (id) {
     // console.log(urlBase + '/' + id);
      return $http.delete(urlBase + id);
    };


    return employeeService;
}]);
