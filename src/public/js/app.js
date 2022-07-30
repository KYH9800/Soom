const messageList = document.querySelector('ul');
const messageForm = document.querySelector('form');

const URL = `ws://${window.location.host}`;
const aWebSocket = new WebSocket(URL); // 서버로의 연결을 뜻함

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector('input');
  aWebSocket.send(input.value);
  input.value = '';
}

// 서버와 연결이 열리면
aWebSocket.addEventListener('open', (event) => {
  console.log('Connected to Server ✅');
});

// 메세지 수신
aWebSocket.addEventListener('message', (message) => {
  const li = document.createElement('li');
  li.innerText = message.data;
  messageList.append(li);
});

// 서버와 연결이 끊기면
aWebSocket.addEventListener('close', () => {
  console.log('Disconnected from Server ❌');
});

messageForm.addEventListener('submit', handleSubmit);
