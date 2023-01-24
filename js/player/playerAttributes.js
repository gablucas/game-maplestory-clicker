import { itens } from "../itens.js";
import { equipInventory, playerStats } from "../inventory/inventoryElements.js";
import { playerData } from "./playerData.js";

export function playerAttributes() {
  playerData.atk = 1;
  playerData.def = 0;

  equipInventory.forEach((equip, index) => {
    if(!!equip.firstElementChild && index !== 5) {
      const equipType = equip.getAttribute('id').split('-')[0];
      const itemEquiped = itens[equipType].find(item => item.id === equip.firstElementChild.getAttribute('class'));

      if(itemEquiped.attribute[1] === 'Atk'){
        playerData.atk = itemEquiped.attribute[0];
        playerStats[0].innerText = playerData.atk;
      }else if(itemEquiped.attribute[1] === 'Def'){
        playerData.def += itemEquiped.attribute[0];
        playerStats[1].innerText = playerData.def;
      }
    }
  })
}
