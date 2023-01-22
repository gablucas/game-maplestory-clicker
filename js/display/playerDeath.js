import hud from "./hud.js";
import { playerData, playerVariables } from "../player/playerData.js";

const death = document.querySelectorAll('[data-death]');
const revive = document.querySelector('#btnRevive');


// MORTE DO PLAYER
function playerDeath() {
    death.forEach((element) => {
      element.classList.add('death')
  })

  function playerRevive() {
    death.forEach((element) => {
      element.classList.remove('death')
  })

    playerVariables.playerHP = playerData.hp();
    playerVariables.calcPlayerHP = 0;
    hud.atualizar();

  }
  revive.addEventListener('click', playerRevive)
};

export { playerDeath }