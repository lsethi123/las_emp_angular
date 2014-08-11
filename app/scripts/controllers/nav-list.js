var navList = angular.module('navList', []);

navList.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        if (currentRoute.match('employee')){
        	currentRoute ='employee';
        }

        return page === currentRoute ? 'active' : '';
    };        
}]);
