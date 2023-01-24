import { monstros } from "../monster/monstersData.js";
import { monsterVariables } from "../monster/monstersData.js";
import { switchMonster } from "../monster/switchMonster.js";
import { playerData } from "../player/playerData.js";
import { switchBackground } from "./switchBackground.js";
import { verifyStage } from "./verifyStage.js";

export function previousStage() {
  if (monsterVariables.indexMonster > 0) {
    monsterVariables.indexMonster -= 1;
    switchMonster();
    switchBackground();
    verifyStage();
  }
}

export function nextStage() {
  if (monsterVariables.indexMonster + 1 <= monstros.length - 1 && playerData.level >= monstros[monsterVariables.indexMonster + 1].level) {
    monsterVariables.indexMonster += 1;
    switchMonster();
    switchBackground();
    verifyStage();
  }
}

