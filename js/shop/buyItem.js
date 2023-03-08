import hud from "../display/hud.js";
import { showMessage } from "../display/showMessage.js";
import { windowInventory } from "../display/windowInventory.js";
import { inventory } from "../inventory/inventoryElements.js";
import { inventorySlot } from "../inventory/inventorySlot.js";
import { itens } from "../itens.js";
import { playerData } from "../player/playerData.js";

// Função de comprar um item - É utilizada no modulo showItemDescription
export function buyItem({ currentTarget }) {
  const idItem = currentTarget.getAttribute('class');
  const typeItem = idItem.split('-')[1]

  const selectedItem = itens[typeItem].find((item) => item.id === idItem)
    
  if(playerData.meso >= selectedItem.price && playerData.level >= selectedItem.level){
    playerData.meso -= selectedItem.price
    hud.atualizar();
    if (inventory.classList.contains('desativado')) {
      windowInventory();
    }

    // Caso o item ja exista (itens de consumo) ele adiciona na quantidade
    if (selectedItem.id.includes('potion') && playerData.itens.some(item => item.id === selectedItem.id)) {
      const playerItem = playerData.itens.find(item => item.id === selectedItem.id);
      playerItem.amount += 1; // Aumenta a quantidade do item potion
      document.querySelector(`.${playerItem.id} .amount-item`).innerHTML = playerItem.amount; // Exibe graficamente a quantidade de itens
      
    // Caso não exista, adiciona a potion no inventario e exibe a quantidade do mesmo
    } else if (selectedItem.id.includes('potion')){
      playerData.itens.push(selectedItem)
      const playerItem = playerData.itens.find(item => item.id === selectedItem.id);
      playerItem.amount = 1; // Pega o item potion e adiciona uma propriedade de quantidade
      inventorySlot().innerHTML = `<div class="${selectedItem.id}"><img src=${selectedItem.img}><span class="amount-item">${selectedItem.amount}</span></div>`;

    // Caso seja outro tipo de item, adiciona no inventario
    } else {
      playerData.itens.push(selectedItem)
      inventorySlot().innerHTML = `<div class="${selectedItem.id}"><img src=${selectedItem.img}></div>`;
    }
  }

  if (playerData.level < selectedItem.level) {
    showMessage('Você não possui nível suficiente para comprar este item')
  }
}