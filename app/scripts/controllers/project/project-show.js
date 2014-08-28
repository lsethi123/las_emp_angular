angular.module('lasEmpAngularApp').controller('ProjectShowCtrl',['$scope','$routeParams', 'projectService', 
	function ($scope,  $routeParams, projectService) {
		id = $routeParams.id
    	$scope.employee ={};
    	projectService.getProject(id)
    		.success(function(data){
    			$scope.project =data 
    		}).error(function(error){
    			$scope.status = 'Unable to load Project data: ' + error.message;
    	});
}]);