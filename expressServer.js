const express = require("express");
const app = express();
// const request = require("request");  // 모듈 import, request 가져오기

app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); // ejs 사용 코드 추가
app.use(express.json()); // // 리퀘스트 바디 허용 코드 추가
app.use(express.urlencoded({ extended: false })); // data를 받아 올수 있도록 허용

app.use(express.static(__dirname + "/public")); // public이라는 folder를 외부에 공개 하겠다

app.get("/main", function (req, res) {
  res.render("main");
});

app.get("/insuranceByKeyword", function (req, res) {
  res.render("insuranceByKeyword");
});

app.listen(3000, function () {
  console.log("Example app listening at http://localhost:3000");
});