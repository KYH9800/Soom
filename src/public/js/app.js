const URL = `ws://${window.location.host}`;
const aWebSocket = new WebSocket(URL); // 서버로의 연결을 뜻함

// 서버와 연결이 열리면
aWebSocket.addEventListener('open', (event) => {
  console.log('Connected to Server ✅');
});

// 메세지 수신
aWebSocket.addEventListener('message', (message) => {
  console.log('New message: ', message.data, ' from the Server'); // server로 보내는 메세지
});

// 서버와 연결이 끊기면
aWebSocket.addEventListener('close', () => {
  console.log('Disconnected from Server ❌');
});

setTimeout(() => {
  aWebSocket.send('hello from the browser!!'); // server로 전송되는 메세지
}, 3000);
