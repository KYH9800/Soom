const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('start zoom clone');
});

app.use(bodyParser.json()); // json 형식으로 데이터를 전달 받기 위한 라이브러리

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
