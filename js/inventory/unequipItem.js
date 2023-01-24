import { equipInventory } from "./inventoryElements.js";

// Desequipar iten
function unequipItem(event) {
  if(!!event.currentTarget.innerHTML) {
    let selectedItem = event.currentTarget.firstElementChild;
    inventorySlot().appendChild(selectedItem)
    playerAttributes();
  }
}

equipInventory.forEach((slot) => {
  slot.addEventListener('click', unequipItem)
})