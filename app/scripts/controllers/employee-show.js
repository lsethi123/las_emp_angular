angular.module('lasEmpAngularApp').controller('EmployeeShowCtrl',['$scope','$routeParams', 'employeeService', 
	function ($scope,  $routeParams, employeeService) {
		id = $routeParams.id
    	$scope.employee ={};
    	employeeService.getEmployee(id)
    		.success(function(data){
                console.log("lalit",data);
    			$scope.employee =data 
    		}).error(function(error){
    			$scope.status = 'Unable to load Employee data: ' + error.message;
    	});
}]);