import hud from "../display/hud.js";
import { playerVariables, playerData } from "../player/playerData.js";
import { monstros } from "./arrayMonsters.js";
import { monsterVariables } from "./switchMonster.js";


/** DANO AO PLAYER */
function monsterAttack() {
    if(playerData.def < monstros[monsterVariables.indexMonster].atk) {
      playerVariables.calcPlayerHP += hud.hpbar.clientWidth / (playerData.hp() / (monstros[monsterVariables.indexMonster].atk - playerData.def));
      playerVariables.playerHP -= monstros[monsterVariables.indexMonster].atk - playerData.def;
    } else {
      playerVariables.calcPlayerHP += hud.hpbar.clientWidth / playerData.hp();
      playerHP -= 1;
    }
  }

export { monsterAttack };