import { monstros } from "../monster/arrayMonsters.js";
import { lifeMonstro } from "../monster/monsterElements.js";
import { monsterVariables } from "../monster/switchMonster.js";
import { playerData } from "./playerData.js";

/** DANO AO MONSTRO */
function playerAttack() {
    monsterVariables.monsterHP -= playerData.atk;                                                               // Reduz a vida do monstro
    monsterVariables.calcMonsterHP += lifeMonstro.clientWidth / (monstros[monsterVariables.indexMonster].hp / playerData.atk);   // Define a porcentagem da barra de vida 
    lifeMonstro.style.boxShadow = `inset -${monsterVariables.calcMonsterHP}px 0 rgba(0, 0, 0, 0.6)`;        // Reduz graficamente a barra de vida do monstro
  }

export { playerAttack }