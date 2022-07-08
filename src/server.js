const express = require('express');
const app = express();

// pug로 view engine을 설정, express에 template이 어디 있는지 지정
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
// public url을 생성해서 유저에게 파일을 공유
app.use('/public', express.static(__dirname + '/public'));
// home.pug를 render 해주는 router handler를 만든다.
app.get('/', (req, res) => res.render('home')); // router handler

const handleListen = () => console.log(`Listening in http://localhost:3000/`);
app.listen(3000, handleListen);
