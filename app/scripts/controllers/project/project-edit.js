angular.module('lasEmpAngularApp').controller('ProjectEditCtrl',['$q','$scope','$routeParams','$location', 'employeeService',
    'projectService', 
	function ($q, $scope,  $routeParams,$location, employeeService,projectService) {
        
        
		var id = $routeParams.id;
    	$scope.project ={};
        $scope.resources =[];
        $scope.getEmployess = function(managerId){
            employeeService.listEmployeesByManager(managerId)
                .success(function (emps) {
                    $scope.resources = emps;
                    var nr=[];
                    angular.forEach($scope.resources,function(re){
                        for(var i=0;i<$scope.project.resources.length;i++){
                            if($scope.project.resources[i]._id==re._id){
                                nr.push(re);
                                break;
                            }
                        }
                    });
                    $scope.project.resources = nr;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Employee data: ' + error.message;
                });
        };
        $q.all([employeeService.listAllManager(),projectService.getProject(id)])
           .then(function(data){
                $scope.managers = data[0].data;
                $scope.project = data[1].data; 
                $scope.getEmployess($scope.project.manager._id);
                $scope.managers.every(function(emp){
                    if($scope.project.manager._id==emp._id){
                        $scope.project.manager = emp;
                        return false;
                    }
                    return true;
                });
                    
           });
         //  
        // update the project details
        $scope.editForm = function(proj){

        var project= angular.copy(proj);
        if(project){
        projectService.updateProject(project)
            .success(function (data) {
                $scope.status = data.message;
                $location.path('/project-list');
            }).
            error(function(error) {
                $scope.status = 'Unable to insert Project: ' + error.message;
            }); 
        }
            
    };
}]);