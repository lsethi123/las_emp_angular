'use strict';
// projectService to acess the API
 angular.module('lasEmpAngularApp')
    .factory('projectService', ['$http', function($http) {

    var urlBase = 'http://localhost:3000/project/';
    var projectService = {};

    projectService.listProjects = function () {
        return $http.get(urlBase);
    };
    projectService.listAllManager = function () {
        return $http.get(urlBase+'manager');
    };
    projectService.getProject = function (id) {
        return $http.get(urlBase + id);
    };

    projectService.insertProject = function (cust) {
        return $http.post(urlBase,cust);
    };

    projectService.updateProject = function (cust) {
      return $http.put(urlBase + cust.id, cust)
    };

    projectService.deleteProject = function (id) {
     // console.log(urlBase + '/' + id);
      return $http.delete(urlBase + id);
    };


    return projectService;
}]);
