export function showMessage(message) {
  
  const newMessage = document.createElement('span');
  newMessage.classList.add('showMessage')
  newMessage.innerHTML = message;
  document.body.append(newMessage);

  setTimeout(() => {
    newMessage.remove();
  }, 3000)
}