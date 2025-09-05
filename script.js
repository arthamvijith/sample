// Basic simulated chatbot logic for demo purposes
const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

// Scroll to bottom helper
function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Create message bubble
function createMessage(text, sender = 'bot') {
  const msg = document.createElement('div');
  msg.classList.add('chat-message', sender);
  msg.textContent = text;
  chatContainer.appendChild(msg);
  scrollToBottom();
}

// Simulate bot typing with loading animation
function botReply(text) {
  const loadingWrapper = document.createElement('div');
  loadingWrapper.classList.add('chat-message', 'bot');
  loadingWrapper.innerHTML = '<span class="loading"><div></div><div></div><div></div></span>';
  chatContainer.appendChild(loadingWrapper);
  scrollToBottom();

  setTimeout(() => {
    loadingWrapper.remove();
    createMessage(text, 'bot');
  }, 1200 + Math.random() * 600);
}

// Simple static responses (placeholder)
function getBotResponse(userText) {
  const responses = [
    "Interesting! Tell me more.",
    "I'm here to help you.",
    "Could you elaborate?",
    "That sounds great!",
    "Absolutely, I understand."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;
  createMessage(text, 'user');
  userInput.value = '';

  const reply = getBotResponse(text);
  botReply(reply);
});

// Focus input on load
window.addEventListener('load', () => {
  userInput.focus();
});