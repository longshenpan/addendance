var loginService = angular.module("attendenceApp", []);

loginService.controller("loginCtr", function ($scope, $http, $location, $window) {
	$scope.loginObj = {username: "电话号码:", password: "用户密码:", btn: {login: "登陆", register: "注册"}};
	$scope.userinfo = {username: "", password: ""};
	$scope.loginRequired = function($event) {
		$http.post("/login", $scope.userinfo)
			.then(function(result){
				var headerObj = result.headers();
				var div = document.querySelector('#loginform');
				localStorage.token = headerObj.token;
				$window.location.href = "/main";
				// $location.path("/main");
			})
			.catch(function(data, status, headers, config){

			});
	}
});