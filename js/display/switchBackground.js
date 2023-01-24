import { monsterVariables } from "../monster/monstersData.js";
import { background } from "./displayElements.js";

/** TROCA DE MAPA A CADA 10 ESTAGIOS */
export function switchBackground() {
    if(monsterVariables.indexMonster > 0 && (monsterVariables.indexMonster) % 10 === 0) {
      background.style.backgroundImage = `url('img/mapa/stage${monsterVariables.indexMonster / 10}.jpg')`;
  
    } else if(monsterVariables.indexMonster > 1 && (monsterVariables.indexMonster - 1) % 10 === 0) {
      background.style.backgroundImage = `url('img/mapa/stage${(monsterVariables.indexMonster - 1) / 10 + 1}.jpg')`;
    }
  }

