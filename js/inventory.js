const inventory = document.querySelector('#inventory')
const bagInventory = document.querySelectorAll('#bag li');
const emptySlot = Array.from(bagInventory).findIndex(slot => slot.innerHTML === "");
const equipInventory = document.querySelectorAll('.equip li')

function windowInventory() {
  inventory.classList.toggle('desativado');
}

function teste(teste, teste2) {
  teste_equip.appendChild(teste2)
}

// Equipar item
function equipItem(event) {
  const itemID = event.currentTarget.firstElementChild.getAttribute('class');
  let selectedItem = event.currentTarget.firstElementChild;
  teste(itens[itemID].id, selectedItem)




  // equipInventory[0].appendChild(selectedItem)
}

bagInventory.forEach((item) => {
  item.addEventListener('click', equipItem) 
})

// Desequipar iten
function unequipItem(event) {
  let selectedItem = event.currentTarget.firstElementChild;
  bagInventory[emptySlot].appendChild(selectedItem)
  
}

equipInventory.forEach((slot) => {
  slot.addEventListener('click', unequipItem)
})

