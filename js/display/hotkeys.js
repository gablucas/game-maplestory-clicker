import { monstros } from "../monster/arrayMonsters.js";
import { monsterVariables } from "../monster/switchMonster.js";
import { nextStage, previousStage } from "./switchStage.js";
import { windowShop } from "./windowShop.js";


/** SLOT HOTKEY */
const hotkeys = document.querySelectorAll('#hotkeys li')

export function hotkeySlot() {
    return Array.from(hotkeys).find((key) => key.innerHTML === "");
}

/** ATALHOS */
// Essa função usa variaveis que foram declaradas e inicializadas depois, mas o motivo desta função ter acesso a essas variaveis deve-se ao fato de que o evento é adicionado antes das variaveis, mas a execução dele é depois.
function atalhos(event) {

    // Atalho para voltar o monstro
    if(event.key === 'ArrowLeft') {
      nextStage();
    }
  
    // Atalho para o próximo monstro
    if(event.key === 'ArrowRight') {
      previousStage();
    }
  
    // Atalho para abrir o inventario
    if(event.key === 'i' || event.key === 'I') {
      windowInventory();
    }
  
    // Atalho para abrir o shop
    if(event.key === 's' || event.key === 'S') {
      windowShop();
    }
  
    // Atalho atacar com espaço
    if(event.key === ' ') {
      battle();
    }
  
    // // Atalho das hotkeys
    if(event.key === '1') {
      new Function('return ' + hotkeys[0].firstElementChild.firstElementChild.getAttribute('class'))();
    } else if(event.key === '2') {
      new Function('return ' + hotkeys[1].firstElementChild.firstElementChild.getAttribute('class'))();
    } else if(event.key === '3') {
      new Function('return ' + hotkeys[2].firstElementChild.firstElementChild.getAttribute('class'))();
    } else if(event.key === '4') {
      new Function('return ' + hotkeys[3].firstElementChild.firstElementChild.getAttribute('class'))();
    } else if(event.key === '5') {
      new Function('return ' + hotkeys[4].firstElementChild.firstElementChild.getAttribute('class'))();
    }
  }

  
  window.addEventListener('keydown', atalhos)
