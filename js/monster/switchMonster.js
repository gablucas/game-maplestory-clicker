import { monsterVariables, monstros } from "./monstersData.js";
import { nomeMonstro, imagemMonstro, lifeMonstro } from "./monsterElements.js";

/** FUNÇÃO TROCAR DE MONSTRO */
export function switchMonster() {
    nomeMonstro.innerText = monstros[monsterVariables.indexMonster].name;                            // Altera o nome
    imagemMonstro.setAttribute('src', monstros[monsterVariables.indexMonster].img);                  // Altera a imagem
    monsterVariables.monsterHP = monstros[monsterVariables.indexMonster].hp;                                          // Altera o HP
    monsterVariables.calcMonsterHP = 0;                                                              // Reseta a porcentagem da barra de vida
    lifeMonstro.style.boxShadow = `inset -${monsterVariables.calcMonsterHP}px 0 rgba(0, 0, 0, 0.6)`; // Enche graficamente a barra de vida do monstro
  }
