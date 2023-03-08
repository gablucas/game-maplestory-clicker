import { inventorySlot } from "./inventorySlot.js";
import { playerAttributes } from '../player/playerAttributes.js';

// Desequipar iten
export function unequipItem(event) {
  const itemStats = document.querySelector('#showItemStats');

  if(!!event.currentTarget.innerHTML) {
    let selectedItem = event.currentTarget.firstElementChild;
    inventorySlot().appendChild(selectedItem)
    itemStats.remove();
    playerAttributes();
  }
}