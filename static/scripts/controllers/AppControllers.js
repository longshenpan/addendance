/**
 * [控制器模块]
 * @Author   ZP
 * @DateTime 2017-01-19T21:25:10+0800
 * @param    {Object}                 ["BMapApi"] [依赖BMapApi模块]
 */
define(["BMapApi"], function (BMapApi) {
	/**
	 * [MainCtrl 主程序控制器]
	 * @Author   ZP
	 * @DateTime 2017-01-19T20:59:05+0800
	 * @param    {[type]}                 $scope [注入作用域]
	 */
	function MainCtrl($scope) {
    	$scope.info = {
    		title: "移动考勤",
    		person: "个人配置"
    	};
    }
	 /**
    * [MenuCtrl 菜单控制器]
    * @Author   ZP
    * @DateTime 2017-01-18T22:49:52+0800
    * @param    {[type]}                 $scope [注入的作用域]
    */
    function MenuCtrl($scope) {
    	$scope.menuInfo = {
    		menuItemTitle: "个人资助"
    	};
    }

    /**
    * [SignInCtrl 个人签到控制器]
    * @Author   ZP
    * @DateTime 2017-01-14T22:10:36+0800
    * @param    {[type]}                 $scope [和元素相关的作用域]
    */
    function SignInCtrl($scope, $routeParams){
        $scope.projects = [{code: "01", name: "公共项目"},{code: "01", name: "明珠项目"},{code: "01", name: "海油项目"}];
        $scope.address = {province: "", city: "", district: "", street: "", address: ""};
        $scope.signLabelInfo = {project: "签到项目",address: "签到地址", province: "省份：", city: "城市：", district: "区域：",street: "街道：",signTitle: "签到管理"};
        $scope.mask = {maskShow: false};
        /**
         * [sign 获取当前位置]
         * @Author   ZP
         * @DateTime 2017-01-14T22:45:09+0800
         * @return   {[type]}                 [description]
         */
        $scope.getCurrentPosition = function() {
          //显示遮罩层
          $scope.mask.maskShow = true;
          BMapApi.getLocation(function(position){
            $scope.$apply(function(){
              console.log(position);
              $scope.address = position.address;
              $scope.address.address = position.address.province + position.address.city + position.address.district + position.address.street + position.address.street_number;
              BMapApi.ctMap("sign-map", new BMap.Point(position.point.lng, position.point.lat));
              //隐藏遮罩层
              $scope.mask.maskShow = false;
            });
          });
        }
        /**
         * [sign 签到]
         * @Author   ZP
         * @DateTime 2017-01-15T21:58:23+0800
         */
        $scope.sign = function () {
          alert($scope.address.province==="" ? "签到前必须先获取当前位置":"当前用户签到成功！");
        }
    }
    /**
     * [SignRecordCtrl 签到记录控制器]
     * @Author   ZP
     * @DateTime 2017-01-23T11:30:21+0800
     * @param    {[type]}                 $scope       [和元素相关的作用域]
     * @param    {[type]}                 $routeParams [注入路由参数对象]
     */
    function SignRecordCtrl($scope, $routeParams) {
      $scope.signRecord={signRecordTitle: "签到记录"};
      $scope.singRecords = [{name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"},
        {name: "冯悦", signsource: "手机考勤", project: "明珠项目", address: "四川省绵阳市长虹商贸", signtime: "2017/1/18 13:00:00"}
      ];
    }
    return {
    	MainCtrl: MainCtrl,
    	MenuCtrl: MenuCtrl,
    	SignInCtrl: SignInCtrl,
      SignRecordCtrl: SignRecordCtrl
    };
});