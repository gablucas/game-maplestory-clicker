import { monstros } from "./arrayMonsters.js";
import { lifeMonstro } from "./monsterElements.js";
import { monsterVariables } from "./switchMonster.js";

function monsterReborn() {
    monsterVariables.monsterHP = monstros[monsterVariables.indexMonster].hp // Retorna a vida maxima do monstro
    monsterVariables.calcMonsterHP = 0; // Reseta a porcentagem para preencher a barra de vida do monstro
    lifeMonstro.style.boxShadow = `inset -${monsterVariables.calcMonsterHP}px 0 rgba(0, 0, 0, 0.6)`; // Preenche a barra de vida do monstro
}

export { monsterReborn }