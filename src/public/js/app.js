const socket = io();

const welcome = document.getElementById('welcome');
const form = welcome.querySelector('form');

function backendDone(roomName) {
  console.log(`${roomName} 방이 생성 되었습니다.`);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector('input');
  socket.emit('enter_room', input.value, backendDone);
  input.value = '';
}

form.addEventListener('submit', handleRoomSubmit);
