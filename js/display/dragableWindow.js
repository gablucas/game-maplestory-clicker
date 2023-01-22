// ARRASTAR JANELAS
const dragable = document.querySelectorAll('[data-dragable]');

function moveWindow(event) {
  const selectedWindow = event.currentTarget;

  // Quando arrasta a janela
  selectedWindow.addEventListener('mousemove', positionWindow)
  function positionWindow(event) {
    console.log(event)
    const elementPosition = getComputedStyle(selectedWindow);
    const top = parseInt(elementPosition.top);
    const left = parseInt(elementPosition.left);
    
    selectedWindow.style.top = top + event.movementY + 'px';
    selectedWindow.style.left = left + event.movementX + 'px';
  }

  // Quando solta o mouse
  document.addEventListener('mouseup', () => {
    selectedWindow.removeEventListener('mousemove', positionWindow)
  })
}

dragable.forEach((item) => {
  item.addEventListener('mousedown', moveWindow)
})
