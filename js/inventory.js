import { bagInventory, equipInventory } from "./inventory/inventoryElements.js";
import { playerItens } from "./player/playerData.js";
import itens from "./itens.js";
import { hotkeySlot } from "./display/hotkeys.js";

export default function loadInventory() {

/** FUNÇÕES USADAS DENTRO DE OUTRAS FUNÇÕES */

// Verifica os slots vazios na bag do player - Usada nas funções buyItem(), equipItem(), unequipItem();
function inventorySlot() {
  return Array.from(bagInventory).find(slot => slot.innerHTML === "");
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
    let selectedItem = event.currentTarget.firstElementChild;
    const itemID = selectedItem.getAttribute('class').split('_')[1];
    const equipSlot = Array.prototype.find.call(equipInventory, equip => equip.getAttribute('id').includes(itemID))

    // Equipa o item na hotkey
    if(itemID === 'HP' || itemID == 'MP' && !!hotkeySlot()) {
      hotkeySlot().appendChild(selectedItem)

    // Desequipa o item e equipa o item selecionado
    }else if(equipSlot.innerHTML) {
      equipSlot.appendChild(selectedItem)
      inventorySlot().appendChild(document.querySelector((`#${equipSlot.getAttribute('id')}`)).firstElementChild);
        
    // Equipa o item
    } else {
      equipSlot.appendChild(selectedItem)
    }

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
    inventorySlot().appendChild(selectedItem)
    itensAttributes();
  }
}

equipInventory.forEach((slot) => {
  slot.addEventListener('click', unequipItem)
})

// 999 potions para o player
playerItens.push(itens[203])
playerItens[0].amount = 999;
hotkeySlot().innerHTML = `<div class="${playerItens[0].id}"><img class="heal('${playerItens[0].id}')" src=${playerItens[0].img}><span class="amount-item">${playerItens[0].amount}</span></div>`;


}