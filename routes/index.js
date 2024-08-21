var express = require("express");
var router = express.Router();

//단체 채팅방 웹페이지 요청과 응답처리 라우팅 메소드
//호출주소: http://localhost:3000/chat
router.get("/chat", async (req, res, next) => {
  res.render("chat");
});

//그룹 채팅방 웹페이지 요청과 응답처리 라우팅 메소드
//호출주소: http://localhost:3000/groupchat
router.get("/groupchat", async (req, res, next) => {
  res.render("groupchat");
});

module.exports = router;
