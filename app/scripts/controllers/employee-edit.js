angular.module('lasEmpAngularApp').controller('EmployeeEditCtrl',['$scope','$routeParams','$location', 'employeeService', 
	function ($scope,  $routeParams,$location, employeeService) {
		var id = $routeParams.id;
    	$scope.employee ={};
    	employeeService.getEmployee(id)
    		.success(function(data){
    			console.log(typeof(data));
    			$scope.employee =data; 
    		}).error(function(error){
    			$scope.status = 'Unable to load Employee data: ' + error.message;
    	});

        // update the employee details
        $scope.editForm = function(emp){

        var employee= angular.copy(emp);
        console.log('In edit employee:',employee);
        if(employee){
        employeeService.updateEmployee(employee)
            .success(function (data) {
                console.log("After save response::",data)
                $scope.status = data.message;
                $location.path('/employee');
            }).
            error(function(error) {
                $scope.status = 'Unable to insert Employee: ' + error.message;
            }); 
        }
            
    };
}]);