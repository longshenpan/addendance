var koa = require("koa");
var http = require("http");
var fs = require('fs');
var koa_static = require("koa-static-server");
var route = require("koa-route");
var bodyParser = require('koa-bodyparser');
var jwt = require("jsonwebtoken");
var cors = require('koa-cors');
var app = koa();

// var users = require("./static/scripts/users.js").users;
var users = require("./static/scripts/json/users.json");
var records = require("./static/mock/attendentRecord.json");
var usertest = {name: "zp", password: "123456"};
var JWT_SECRET = "testSc";
var token = '';
app.use(bodyParser());
app.use(cors());
app.use(koa_static({
	rootDir: "./static/",
	rootPath: "/static/",
	maxage: 0//缓存时间是0 ， 静态资源
}));

app.use(route.get("/index", function*() {
	this.body = fs.readFileSync("./index.html", "utf-8");
}));

app.use(route.get("/test", function*() {
	this.body = users;
}));
app.use(route.post("/authenticate", function*(){
	var user = this.request.body;
	result = {type: false, data: ""};
	if (user.name === usertest.name && user.password === "usertest")
	{
		result.data = user;
		result.token = usertest.token;
	}
	this.body = result;
}));
app.use(route.get("/GetRecords", function*(){
	console.log(this.request);
	this.body = records;
}));
app.use(route.post("/login", function*() {
	var user = this.request.body;
	var megObj = {status: 'OK', msg: '登录成功'};
	var isexsit = users.find(function(value){
		return (value.username===user.username && value.password === user.password);
	});
	if (isexsit) {
		token = jwt.sign(user, JWT_SECRET);
		this.set('token', token);
	}else{
		megObj.status = 'Err',
		megObj.msg = '用户【' + user.username + '】不存在';
	}
	// console.log(token);
	// self.cookies.set('access_token', "test",{domain: "10.7.17.92:3000"});
	this.body = JSON.stringify(megObj);
}));


function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

app.use(route.get("/main", function*() {
	var self = this;
	this.body = fs.readFileSync("./main.html", "utf-8");
	// fs.readFile("./index.html", "utf-8", function (e, data) {
	// 	console.log("naho");
	// 	// self.set("Cache-Control", "no-cache");
	// 	self.body = data;
	// });
}));

app.listen(3000, function () {
	console.log("koa server started");
});