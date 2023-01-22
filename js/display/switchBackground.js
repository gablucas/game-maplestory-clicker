import { monsterVariables } from "../monster/switchMonster.js";

/** BACKGROUND */
const background = document.querySelector('.js-game');

/** TROCA DE MAPA A CADA 10 ESTAGIOS */
function switchBackground() {
    if(monsterVariables.indexMonster > 0 && (monsterVariables.indexMonster) % 10 === 0) {
      background.style.backgroundImage = `url('img/mapa/stage${monsterVariables.indexMonster / 10}.jpg')`;
  
    } else if(monsterVariables.indexMonster > 1 && (monsterVariables.indexMonster - 1) % 10 === 0) {
      background.style.backgroundImage = `url('img/mapa/stage${(monsterVariables.indexMonster - 1) / 10 + 1}.jpg')`;
    }
  }

export { switchBackground }
