import { bagInventory } from "./inventoryElements.js";

// Verifica os slots vazios na bag do player - Usada nas funções buyItem(), equipItem(), unequipItem();
export function inventorySlot() {
  return Array.from(bagInventory).find(slot => slot.innerHTML === "");
}