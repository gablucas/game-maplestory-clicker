const inventory = document.querySelector('#inventory')
const bagInventory = document.querySelectorAll('#bag li');
const equipInventory = document.querySelectorAll('.equip li')

/** FUNÇÕES USADAS DENTRO DE OUTRAS FUNÇÕES */

// Verifica os slots vazios na bag do player - Usada nas funções buyItem(), equipItem(), unequipItem();
function emptySlot() {
  return Array.from(bagInventory).findIndex(slot => slot.innerHTML === "");
}


/** FUNÇÕES PRINCIPAIS */

// Abre e fecha a janela do inventorio
function windowInventory() {
  inventory.classList.toggle('desativado');
}

// Equipar item
function equipItem(event) {

  // Só vai executar a função caso o item selecionado não esteja vazio
  if(!!event.currentTarget.innerHTML) {
    const indexItem = event.currentTarget.firstElementChild.getAttribute('class');
    let selectedItem = event.currentTarget.firstElementChild;

    equipInventory.forEach((equip) => {
      const equipType = equip.getAttribute('id').split('-')[1];

      // Desequipa o item e equipa o item selecionado
      if((itens[indexItem].id.includes(equipType)) && !!equip.innerHTML) {
        bagInventory[emptySlot()].appendChild(document.querySelector(("#"+equip.getAttribute('id'))).firstElementChild);
        equip.appendChild(selectedItem)

      // Equipa o item
      } else if((itens[indexItem].id.includes(equipType))) {
        equip.appendChild(selectedItem)
      }
    })
    
    itensAttributes();
  }
}

bagInventory.forEach((item) => {
  item.addEventListener('click', equipItem) 
})


// Desequipar iten
function unequipItem(event) {
  if(!!event.currentTarget.innerHTML) {
    let selectedItem = event.currentTarget.firstElementChild;
    bagInventory[emptySlot()].appendChild(selectedItem)
    itensAttributes();
  }
}

equipInventory.forEach((slot) => {
  slot.addEventListener('click', unequipItem)
})

