/**
 * main.js这个文件完成的事情简单来说就是：载入所有文件，然后在document上运行Angular并将ng-app属性设置为’app’。
 * 这些文件因为是由RequireJS异步载入，因此我们需要来“手动启动”Angular应用。
 * */
require.config({
    baseUrl: "",// 基目录
    paths: {// 需要引入的js库
        // 库文件
        "BMap": "http://api.map.baidu.com/getscript?v=2.0&ak=91bc04aac3d665927d8c64750da556a9&services=&t=20170118185827",
        // "baidu_AreaRestriction": "http://api.map.baidu.com/library/AreaRestriction/1.2/src/AreaRestriction_min",
        "angular": "./static/scripts/vendor/angular",
        "controller": "./static/scripts/controllers/controllers",
        "AppCtrls": "./static/scripts/controllers/AppControllers",
        "BMapApi": "./static/scripts/controllers/BMapApi",
        "angular-route": "./static/scripts/vendor/angular-route-1.6.2"
    },
    shim: {
        angular: {
          exports: "angular"
        },
        BMap: {
          exports: "BMap"
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

define(["angular","controller"], function (angular) {
    //手动初始化angularjs
    angular.bootstrap(document,['MyApp']);
});