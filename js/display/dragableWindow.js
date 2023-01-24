// ARRASTAR JANELAS
export function moveWindow(event) {
  const selectedWindow = event.currentTarget;

  // Quando arrasta a janela
  function positionWindow(event) {
    
    if (selectedWindow === event.target) {
      const elementPosition = getComputedStyle(selectedWindow);
      const top = parseInt(elementPosition.top);
      const left = parseInt(elementPosition.left);
      
      selectedWindow.style.top = top + event.movementY + 'px';
      selectedWindow.style.left = left + event.movementX + 'px';
    }
  }
  
  selectedWindow.addEventListener('mousemove', positionWindow)

  // Remove o evento de mover e de segurar com o mouse a tela do shop
  function removeEvent() {
    selectedWindow.removeEventListener('mousemove', positionWindow);
    document.removeEventListener('mouseup', removeEvent)
  }

  // Evento que executa a função acima
  document.addEventListener('mouseup', removeEvent)
}


