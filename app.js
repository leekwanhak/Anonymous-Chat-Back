var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//.env파일을 사용하기 위해 참조 - 환경변수 설정
// 1. dotenv 패키지 로드: dotenv 패키지를 로드합니다. 이 패키지는 .env 파일에 정의된 환경 변수를 읽어들여 process.env 객체에 추가합니다.
// 2. 환경 변수 설정: .env 파일에 정의된 모든 키-값 쌍을 process.env 객체에 추가하여 애플리케이션 내에서 환경 변수를 사용할 수 있게 합니다.
// config는 dotenv 패키지의 메서드로, .env 파일을 로드하고 파싱하여 환경 변수로 설정하는 역할을 합니다.
// 1) .env 파일을 찾아서 읽습니다.
// 2) 파일의 내용을 파싱하여 키-값 쌍으로 변환합니다.
// 3) 변환된 키-값 쌍을 process.env 객체에 추가합니다.
require("dotenv").config();

//시퀄라이즈 ORM 을이용해 DB서버와 연결작업 진행
var sequelize = require("./models/index.js").sequelize;

//RESTful API 서비스 CORS 이슈해결을 위한 cors 패키지 참조하기
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var memberAPIRouter = require("./routes/api/memberAPI");

var app = express();

//mysql과 자동연결처리 및 모델기반 물리 테이블 생성처리제공
sequelize.sync();

// //모든 웹사이트/모바일 프론트에서 RESTAPI를 접근할수 있게 허락함
// app.use(cors());

//특정 도메인주소만 허가
// app.use(
//   cors({
//     methods: ["GET", "POST", "DELETE", "OPTIONS"],
//     origin: ["http://localhost:3000", "https://naver.com"],
//   })
// );

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/member", memberAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
