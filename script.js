const socket = new WebSocket('ws://localhost:3000');
const chatBox = document.getElementById('chat-box');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

// Display message
function appendMessage(message, type) {
  const div = document.createElement('div');
  div.classList.add('message', type);
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Receive message
socket.addEventListener('message', (event) => {
  appendMessage(event.data, 'other');
});

// Send message
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(message, 'user');
  socket.send(message);
  messageInput.value = '';
});

