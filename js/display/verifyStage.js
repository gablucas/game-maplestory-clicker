import { monstros } from "../monster/monstersData.js";
import { monsterVariables } from "../monster/monstersData.js";
import { playerData } from "../player/playerData.js";
import { leftArrow, rightArrow } from "./displayElements.js";

export function verifyStage() {
  if (playerData.level >= monstros[monsterVariables.indexMonster + 1].level) {
    rightArrow.setAttribute('src', 'img/buttons/seta_direita.png');
  } else {
    rightArrow.setAttribute('src', 'img/buttons/seta_direita_lock.png');
  }

  if (monsterVariables.indexMonster === 1) {
    leftArrow.setAttribute('src', 'img/buttons/seta_esquerda.png');
  } else if (monsterVariables.indexMonster === 0) {
    leftArrow.setAttribute('src', '');
  }
}