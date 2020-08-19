// var http = require("http"); // node.js에서 기본으로 제공하는 라이브러리

// http.createServer(function (req, res) { // 서버 생성
// 	var body = "hello Server";
// 	res.setHeader('Content-Type', 'text/html; charset=utf-8'); // 서버 Header를 설정
// 	// res.end("안녕하세요!!!!! " + body)
// 	res.end(
// 		"<html><body><h1>Hello Nodejs Sever</h1><hr/><h2> 내입1다. </body></html>"
// 	);
// }).listen(3000); // listen(port번호) : process가 대기하고 있어야한다. 대기하고 있는 서버에 IP 주고가 있고 여러 port로 나누어 진다.npm link webpack

// app.get("/signup", function (req, res) {
// 	res.render("signup");
//   });