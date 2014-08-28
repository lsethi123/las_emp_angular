angular.module('lasEmpAngularApp').controller('ProjectNewCtrl',
    ['$scope','$routeParams','$location', 'employeeService','projectService', 
	function ($scope, $routeParams,$location,employeeService,projectService) {
        $scope.managers  = {};
        $scope.resources = {};

        getAllManager();
        function getAllManager() {
            employeeService.listAllManager()
                .success(function (emps) {
                    $scope.managers = emps;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Employee data: ' + error.message;
                });
        }
        $scope.getEmployess = function(managerId){
            console.log("manager",managerId);
            employeeService.listEmployeesByManager(managerId)
                .success(function (emps) {
                    $scope.resources = emps;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Employee data: ' + error.message;
                });
        };
		$scope.submitForm = function(proj){
        var project= angular.copy(proj);
        console.log("project",project);
        if(project){
        projectService.insertProject(project)
            .success(function (data) {
                console.log("After save response::",data)
                $location.path('/project-list');
                $scope.status = 'Inserted Project! Refreshing Project list.';
            }).
            error(function(error) {
                $scope.status = 'Unable to insert project: ' + error.message;
            }); 
        }
            
    };
}]);