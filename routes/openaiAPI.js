var express = require("express");
var router = express.Router();

//OpenAI API 호출을 위한 axios 패키지 참조하기
const axios = require("axios");

//파일처리를 위한 filesystem 내장객체 참조하기
const fs = require("fs");

//OpenAI 객체 생성하기
const { OpenAI } = require("openai");
const openai = new OpenAI({
  //OpenAI 클래스의 인스턴스를 생성하고, 이를 openai 변수에 할당합니다. 이 인스턴스를 통해 OpenAI API를 호출할 수 있습니다.
  apiKey: process.env.OPENAI_API_KEY, //process.env는 Node.js에서 환경 변수를 접근할 때 사용하는 객체입니다. 이를 통해 코드에 민감한 정보를 하드코딩하지 않고, 환경 변수로 관리할 수 있습니다.
});

// openai dalle3 api 참조를 위한 라우팅 메소드
// 호출주소: http://localhost:5000/api/openai/dalle3
// 호출방식:POST
// 호출결과: 이미지 생성url 반환
router.post("/dalle", async (req, res) => {
  let apiResult = {
    code: 400,
    data: null,
    msg: "",
  };

  try {
    //Step1: 프론트엔드에서 사용자가 요청하는 데이터 추출하기
    const model = req.body.model;
    const promtpt = req.body.prompt;

    //Step2: Openai Dalle API 호출하기

    //Step3: Dalle API 호출결과에서 물리적 이미지 생성 / 서버공간에 저장하기

    //Step4: 최종 생성된 이미지 데이터 추출하기 -> STETP3랑 다른게 뭐지?

    //Step5: DB 게시글 테이블에 사용자 이미지 생성요청 정보 등록처리하기

    //Step6: 최종 생성된 이미지 정보를 프론트엔드에 반환하기
  } catch (err) {}

  res.json(apiResult);
});

module.exports = router;
