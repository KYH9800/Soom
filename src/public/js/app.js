const URL = `ws://${window.location.host}`;
const aWebSocket = new WebSocket(URL); // 서버로의 연결을 뜻함

// 서버와 연결이 열리면
aWebSocket.addEventListener('open', (event) => {
  console.log('Connected to Server ✅');
});

// 메세지 수신
aWebSocket.addEventListener('message', (message) => {
  console.log('Just got this: ', message.data, ' from the Server');
});

// 서버와 연결이 끊기면
aWebSocket.addEventListener('close', () => {
  console.log('Disconnected from Server ❌');
});
