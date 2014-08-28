angular.module('lasEmpAngularApp').controller('EmployeeEditCtrl',['$q','$scope','$routeParams','$location', 'employeeService', 
	function ($q, $scope,  $routeParams,$location, employeeService) {
        
        
		var id = $routeParams.id;
    	$scope.employee ={};

        $scope.loading = true;
        $q.all([employeeService.listAllManager(),employeeService.getEmployee(id)])
           .then(function(data){

                $scope.loading = false;
                $scope.managers = data[0].data;
                $scope.employee = data[1].data; 
                $scope.managers.every(function(emp){
                    if($scope.employee.manager._id==emp._id){
                        $scope.employee.manager = emp;
                        return false;
                    }
                    return true;
                });
                    
           });

        // update the employee details
        $scope.editForm = function(isValid){
            if(isValid){
                employeeService.updateEmployee($scope.employee)
                    .success(function (data) {
                        $scope.loading = false;
                        $scope.status = data.message;
                        $location.path('/employee-list');
                    }).
                    error(function(error) {
                        $scope.loading = false;
                        $scope.status = 'Unable to insert Employee: ' + error.message;
                    }); 
            }
            else{
                console.log("Invalid Employee Object");
            }
        };
        
}]);