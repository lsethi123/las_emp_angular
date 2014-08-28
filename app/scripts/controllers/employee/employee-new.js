angular.module('lasEmpAngularApp').controller('EmployeeNewCtrl',['$scope','$routeParams','$location', 'employeeService', 
	function ($scope, $routeParams,$location,employeeService) {
        $scope.managers  = {};

        $scope.loading = true;
        getAllManager();
        function getAllManager() {
            employeeService.listAllManager()
                .success(function (emps) {

                    $scope.loading = false;
                    $scope.managers = emps;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Employee data: ' + error.message;
                });
        }
        
		$scope.submitForm = function(isValid){
            if(isValid){
                //console.log("valid employee",$scope.employee);
                if($scope.employee){
                employeeService.insertEmployee($scope.employee)
                    .success(function (data) {
                        $scope.loading = false;
                        //console.log("After save response::",data)
                        $location.path('/employee-list');
                        $scope.status = 'Inserted Employee! Refreshing Employee list.';
                    }).
                    error(function(error) {
                        $scope.status = 'Unable to insert Employee: ' + error.message;
                    }); 
                }
            }
            else{
                console.log("invalid data ",$scope.employee);
                $scope.loading = false;
            }
        
            
    };
}]);