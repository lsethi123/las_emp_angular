angular.module('lasEmpAngularApp').controller('EmployeeShowCtrl',['$scope','$routeParams', 'employeeService', 
	function ($scope,  $routeParams, employeeService) {
		id = $routeParams.id
    	$scope.employee ={};
    	$scope.loading = true;
    	employeeService.getEmployee(id)
    		.success(function(data){
    			$scope.loading = false;
    			$scope.employee =data 
    		}).error(function(error){
    			$scope.status = 'Unable to load Employee data: ' + error.message;
    	});
}]);