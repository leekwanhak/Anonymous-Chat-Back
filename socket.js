//socket.io 팩키지 참조
const SocketIO = require("socket.io");
//socket.js모듈 기능정의
module.exports = (server) => {
  //익명화살표함수??????????????/
  const io = SocketIO(server, { path: "/socket.io" });
  io.on("connection", (socket) => {
    socket.on("broadcast", function (msg) {
      io.emit("receiveAll", msg);
      socket.broadcast.emit("receive", msg);
    });
  });
};

//이 코드들 의미 몰라!!!!!!!!!!!!!!!
