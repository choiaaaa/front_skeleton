const express = require('express');
const router = express.Router();
const boardDAO = require('./boardDAO');

//유저 요청이 들어오면 실행..
router.get('/boardList', function (req, res, next) {
  boardDAO.boardList((resp) => {
    res.json(resp);
  });
});

router.post('/insert', function (req, res, next) {
  //post 방식은 request body 를 통해서 데이터 전달하는 방식..
  const data = req.body;
  boardDAO.insert(data, (resp) => {
    res.json(resp);
  });
});

module.exports = router;
