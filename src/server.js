const http = require('http');
const SocketIO = require('socket.io');
const express = require('express');

const app = express();

// pug로 view engine을 설정, express에 template이 어디 있는지 지정
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// public url을 생성해서 유저에게 파일을 공유
app.use('/public', express.static(__dirname + '/public'));

// home.pug를 render 해주는 router handler를 만든다.
app.get('/', (_, res) => res.render('home')); // router handler, 현재 프로젝트에서는 home url만 쓸 것이다.
app.get('/*', (_, res) => res.redirect('/')); // user가 어떤 url로 이동하던지 home으로 돌려보낸다.

// 같은 서버에서 http, webSoket 둘 다 작동 시킬 수 있다.
const httpServer = http.createServer(app);
const io = SocketIO(httpServer);

io.on('connection', (socket) => {
  socket.on('enter_room', (roomName, done) => {
    console.log(roomName);
    setTimeout(() => {
      done(roomName);
    }, 2000);
  });
});

const handleListen = () => console.log(`Listening in http://localhost:3000/`);
httpServer.listen(3000, handleListen);
