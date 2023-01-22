import hud from "./display/hud.js";
import { monstro } from "./monster/monsterElements.js";
import { playerAttack } from "./player/playerAttack.js";
import { monsterVariables } from "./monster/switchMonster.js";
import { monsterReborn } from "./monster/rebornMonster.js";
import { monsterAttack } from "./monster/monsterAttack.js";
import { monstros } from "./monster/arrayMonsters.js";
import { playerData, playerVariables } from "./player/playerData.js";
import { playerDeath } from "./display/playerDeath.js";
import { verifyStage } from "./display/switchStage.js";

export default function loadBattle() {

// Atualizar a HUD inicialmente
hud.atualizar();

function battle() {

  playerAttack();  // Dano ao monstro
  hud.showDamage();  // Exibe o dano desferido ao monstro
  monsterAttack(); // Dano ao player

  // Ação quando o monstro morre
  if(monsterVariables.monsterHP <= 0) {

      playerData.earnReward() // Ganha XP e GOLD
      hud.showReward(); // Mostra o XP e GOLD
      monsterReborn();  // Nasce um novo monstro
      
    // Ação quando sobe de level
    if(playerData.xpCurrent >= playerData.xpNextLevel()) {
      playerData.levelUP(); // Sobre o level do player
      verifyStage();
    }
  }

  // Ação quando o player morre
  if(playerVariables.playerHP <= 0) {
    playerDeath();
  }

  hud.atualizar();  // Atualiza os eventos no HUD
}

monstro.addEventListener('click', battle)

}