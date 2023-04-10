import { bagInventory } from "../inventory/inventoryElements.js";
import { playerData } from "../player/playerData.js";
import { itens } from "../itens.js";
import hud from "../display/hud.js";


export function sellItem({ currentTarget }) {
  const itemId = currentTarget.getAttribute('class');
  const itemIndex = [...bagInventory].findIndex((item) => item.firstElementChild?.getAttribute('class') === itemId);
  const typeItem = itemId.split('-')[1]
  const selectedItem = itens[typeItem].find((item) => item.id === itemId)

  
  if (itemIndex !== -1) {
    playerData.meso += selectedItem.price * 0.2;
    bagInventory[itemIndex].firstElementChild.remove();
    hud.atualizar();
  }
}