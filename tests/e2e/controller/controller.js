define([ 'angular' ], function(angular) {
	console.log("angular");
    var componentCtrls = angular.module('HelloCtrls', []);

     componentCtrls.controller('helloCtrl', [ '$scope', function($scope) {
        $scope.greet = "hello world";
      } ]);
    angular.module('HelloModel', ['HelloCtrls']);
    return componentCtrls;
});