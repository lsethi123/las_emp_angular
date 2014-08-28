
angular.module('lasEmpAngularApp')
    .controller('ProjectListCtrl', ['$scope','$routeParams','$location', 'projectService', 
        function ($scope, $routeParams,$location,projectService) {

        $scope.status;
        $scope.projects={};
          $scope.graphData = {data:[]};

        getProjects();
        function getProjects() {
            projectService.listProjects()
                .success(function (data) {
                    for(var i in data){
                        $scope.graphData.data.push({x:data[i].name,y:[data[i].resources.length+1]});
                         
                    }
                    $scope.projects = data;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Project data: ' + error.message;
                })
        }
         $scope.config = {
          title: 'Project Details Chart',
          tooltips: true,
          labels: false,
          mouseover: function() {},
          mouseout: function() {},
          click: function() {},
          legend: {
            display: true,
            //could be 'left, right'
            position: 'right'
          },
          innerRadius: 0, // applicable on pieCharts, can be a percentage like '50%'
          lineLegend: 'lineEnd' // can be also 'traditional'
        };
    
        //delete Project code
        $scope.deleteProject = function (id) {
            if(confirm("Are you sure to delete Project?")==true){
                projectService.deleteProject(id)
                .success(function (data) {
                    $scope.status = data.message;
                    $location.path('/project-list');
                })
                .error(function (error) {
                    $scope.status = 'Unable to Delete Project: ' + error.message;
                });
            };
            
        };
}]);