import { monstros } from "../monster/arrayMonsters.js";
import { monsterVariables, switchMonster } from "../monster/switchMonster.js";
import { playerData } from "../player/playerData.js";
import { switchBackground } from "./switchBackground.js";

const leftArrow = document.querySelector('.stageLeftArrow');
const rightArrow = document.querySelector('.stageRightArrow');

function verifyStage() {
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

function previousStage() {
  if (monsterVariables.indexMonster > 0) {
    monsterVariables.indexMonster -= 1;
    switchMonster();
    switchBackground();
    verifyStage();
  }
}

function nextStage() {
  if (monsterVariables.indexMonster + 1 <= monstros.length - 1 && playerData.level >= monstros[monsterVariables.indexMonster + 1].level) {
    monsterVariables.indexMonster += 1;
    switchMonster();
    switchBackground();
    verifyStage();
  }
}

leftArrow.addEventListener('click', previousStage);
rightArrow.addEventListener('click', nextStage);

export { previousStage, nextStage, verifyStage, rightArrow }
