import { hotkeys } from "../display/displayElements.js";
import hud from "../display/hud.js";
import { playerData, playerVariables } from "./playerData.js";

export function heal(healElement) {
  const potionID = healElement.firstElementChild?.getAttribute('class');


  // Se o player possuir a potion
  if(playerData.itens.some(item => item.id === potionID)) {
    let useItem = playerData.itens.find(item => item.id === potionID);

    // Diminui uma potion e exibe o novo valor
    useItem.amount -= 1;
    document.querySelector(`.${useItem.id} .amount-item`).innerText = useItem.amount;

    if(useItem.id.includes('life')) {

      // Caso o poder de cura seje maior que o necessario pra encher a vida
      if(playerData.hp() - playerVariables.playerHP <= useItem.attribute[0]){
        playerVariables.playerHP = playerData.hp();
        playerVariables.calcPlayerHP = 0; 

      // Cura
      } else {
        playerVariables.playerHP += useItem.attribute[0];
        playerVariables.calcPlayerHP -= (hud.hpbar.clientWidth / playerData.hp() * useItem.attribute[0]);
      }

    } else if(useItem.id.includes('mana')) {

      // Caso o poder de cura seje maior que o necessario pra encher a vida
      if(playerData.mp() - playerVariables.playerMP <= useItem.attribute[0]){
        playerVariables.playerMP = playerData.mp();
        playerVariables.calcPlayerMP = 0; 

      // Cura
      } else {
        playerVariables.playerMP += useItem.attribute[0];
        playerVariables.calcPlayerMP -= (hud.mpbar.clientWidth / playerData.mp() * useItem.attribute[0]);
      }
    }

    // Caso seja acabe a potion, ele retira do inventario e das hotkeys
    if(useItem.amount === 0) {
      const indexItem = playerData.itens.findIndex((item) => item.id === useItem.id)
      playerData.itens.splice(indexItem, 1)
      Array.from(hotkeys).find(hotkey => hotkey.firstElementChild.getAttribute('class') === useItem.id).innerHTML = "";
    }

    hud.atualizar();
  }
}
