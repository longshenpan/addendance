/**
 * [住控制器模块， 依赖angular和控制器模块AppCtrls]
 * @Author   ZP
 * @DateTime 2017-01-18T22:54:07+0800
 */
define(["angular", "angular-route","AppCtrls"], function(angular, angularRoute, AppCtrls) {
    var appServices = angular.module("MyApp",["ngRoute"]);
    /**
     * [emailRouteConfig 路由相关配置]
     * @Author   ZP
     * @DateTime 2017-01-19T21:11:01+0800
     * @param    {[type]}                 $routeProvider [路由api]
     */
    function emailRouteConfig($routeProvider) {
    	$routeProvider
    	.when("/", {
    		controller: AppCtrls.MenuCtrl,
    		templateUrl: "/static/template/menu.html"
    	})
    	.when("/view/sign",{
    		controller: AppCtrls.SignInCtrl,
    		templateUrl: "/static/template/detail.html"
    	})
        .when("/view/signRecords",{
            controller: AppCtrls.SignRecordCtrl,
            templateUrl: "/static/template/signRecord.html"
        })
    	.otherwise('/');
    }

    appServices.factory('MyInterceptor', function ($q) {
        return {
            request: function(config){
                console.log(config);
                return config;
            }
        };
    });
    // appServices.config(['$httpProvider',function($httpProvider) {
    //     $httpProvider.interceptors.push('MyInterceptor');
    // }]);
    /**
     * 添加路由配置
     */
    appServices.config(emailRouteConfig);


    /**
     * 添加主控制器
     */
    appServices.controller("mainCtr", AppCtrls.MainCtrl);

    appServices.directive("attendenthead", function () {
    	return{
    		restrict: "E",
    		templateUrl: "/static/template/attendenthead.html",
    		replace: true
    	};
    });
});


