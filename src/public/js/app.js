const messageList = document.querySelector('ul');
const nickForm = document.querySelector('#nickname');
const messageForm = document.querySelector('#message');

const URL = `ws://${window.location.host}`;
const aWebSocket = new WebSocket(URL); // 서버로의 연결을 뜻함

function makeMessage(type, payload) {
  const msg = { type, payload };
  return JSON.stringify(msg);
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

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector('input');
  aWebSocket.send(makeMessage('new_message', input.value));
  input.value = '';
}

function handleNickSubmit(event) {
  event.preventDefault();
  const input = nickForm.querySelector('input');
  aWebSocket.send(makeMessage('nickname', input.value));
  input.value = '';
}

messageForm.addEventListener('submit', handleSubmit);
nickForm.addEventListener('submit', handleNickSubmit);
