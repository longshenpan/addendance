/**
 * main.js这个文件完成的事情简单来说就是：载入所有文件，然后在document上运行Angular并将ng-app属性设置为’app’。
 * 这些文件因为是由RequireJS异步载入，因此我们需要来“手动启动”Angular应用。
 *
 * */

require.config({
    baseUrl: "",//基目录
    paths: {//需要引入的js库
        //库文件
        //"responsive": "lib/responsive-nav",
        "angular": "angular",
        "controller": "./controller/controller"
        // "bootstrap": "lib/bootstrap.min",
        // "angularRoute": "lib/angular-route",
        // "angularResource": "lib/angular-resource",
        // //"ui-bootstrap": "lib/ui-bootstrap-tpls-0.11.0.min",
        // //"phprpc": "lib/phprpc_client",
        // "jquery": "lib/jquery.min"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        controller: {
            exports: "controller"
        }
        // ,
        // angularRoute: {
        //     deps: ["angular"]
        // },
        // angularResource: {
        //     deps: ['angular']
        // }
    },
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

//定义模块
define([
    'angular'
    ], function (angular) {
    var componentCtrls = angular.module('HelloModel', []);

     componentCtrls.controller('helloCtrl', [ '$scope', function($scope) {
        $scope.greet = "hello world";
      } ]);
    // angular.module('HelloModel', ['HelloCtrls']);
    // angular.module('HelloModel', ['HelloCtrls']);

    // return {
    //     angularModules: [ 'HelloModel' ]
    // };

});