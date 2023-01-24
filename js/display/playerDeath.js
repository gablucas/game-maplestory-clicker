import hud from "./hud.js";
import { playerData, playerVariables } from "../player/playerData.js";
import { death , revive } from './displayElements.js';

// MORTE DO PLAYER
export function playerDeath() {
    death.forEach((element) => {
      element.classList.add('death')
  })

  playerVariables.isPlayerDead = true;

  function playerRevive() {
    death.forEach((element) => {
      element.classList.remove('death')
  })

    playerVariables.playerHP = playerData.hp();
    playerVariables.calcPlayerHP = 0;
    playerVariables.isPlayerDead = false;
    hud.atualizar();

  }
  revive.addEventListener('click', playerRevive)
};
