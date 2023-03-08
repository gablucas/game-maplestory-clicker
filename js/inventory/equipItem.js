import { hotkeys } from "../display/displayElements.js";
import { playerAttributes } from "../player/playerAttributes.js";
import { equipInventory } from "./inventoryElements.js";
import { inventorySlot } from "./inventorySlot.js";

// Equipar item
export function equipItem({ currentTarget }) {
  const itemStats = document.querySelector('#showItemStats');

  // Só vai executar a função caso o item selecionado não esteja vazio
  if (currentTarget.innerHTML) {
    let selectedItem = currentTarget.firstElementChild;
    const itemID = selectedItem.getAttribute('class');
    const equipItem = Array.prototype.find.call(equipInventory, equip => equip.getAttribute('id').includes(itemID.split('-')[1]))

    // Equipa a potion na hotkey
    if (itemID.includes('life')) {
      if (hotkeys[0].innerHTML) {
        inventorySlot().appendChild(hotkeys[0].firstElementChild)
      }
      hotkeys[0].appendChild(selectedItem);

    } else if (itemID.includes('mana')) {
      if (hotkeys[1].innerHTML) {
        inventorySlot().appendChild(hotkeys[1].firstElementChild)
      }
      hotkeys[1].appendChild(selectedItem);

    // Desequipa o item e equipa o item selecionado
    } else if (equipItem.innerHTML) {
      equipItem.appendChild(selectedItem)
      inventorySlot().appendChild(document.querySelector((`#${equipItem.getAttribute('id')}`)).firstElementChild);
        
    // Equipa o item
    } else {
      equipItem.appendChild(selectedItem)
    }

    itemStats.remove();
    playerAttributes();
  }
}

