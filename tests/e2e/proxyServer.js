var http = require("http");
var url = require("url");
var server = http.createServer(function(req, res){
	console.log('test');
	var url_parts = url.parse(req.url);
	var opts = {
		host: "www.amazon.cn",
		port: 80,
		path: url_parts.pathname,
		headers: req.headers
	};
	console.log(opts);
	var preq = http.get(opts, function (pres) {
		res.writeHead(pres.statusCode, pres.headers);
		pres.pipe(res);
	});

	preq.on("error", function (err) {
		console.log(err);
	});

	req.pipe(preq);
});

server.listen(1337, "127.0.0.1", function () {
	console.log("服务器端开始监听。");
});