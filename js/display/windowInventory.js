import { inventory } from "../inventory/inventoryElements.js";

// Abre e fecha a janela do inventorio
export function windowInventory() {
  inventory.classList.toggle('desativado');
}
