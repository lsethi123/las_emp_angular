angular.module('lasEmpAngularApp').controller('EmployeeNewCtrl',['$scope','$routeParams','$location', 'employeeService', 
	function ($scope, $routeParams,$location,employeeService) {
		$scope.submitForm = function(emp){
        var employee= angular.copy(emp);
        console.log('new formd data',employee);
        if(employee){
        employeeService.insertEmployee(employee)
            .success(function (data) {
                console.log("After save response::",data)
                $location.path('/employee');
                $scope.status = 'Inserted Employee! Refreshing Employee list.';
            }).
            error(function(error) {
                $scope.status = 'Unable to insert Employee: ' + error.message;
            }); 
        }
            
    };
}]);