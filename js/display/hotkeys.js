import { battle } from "../battle.js";
import { playerVariables } from "../player/playerData.js";
import { heal } from "../player/playerHeal.js";
import { hotkeys } from "./displayElements.js";
import { nextStage, previousStage } from "./switchStage.js";
import { windowInventory } from "./windowInventory.js";
import { windowShop } from "./windowShop.js";

/** ATALHOS */
// Essa função usa variaveis que foram declaradas e inicializadas depois, mas o motivo desta função ter acesso a essas variaveis deve-se ao fato de que o evento é adicionado antes das variaveis, mas a execução dele é depois.
export function atalhos(event) {

  if(!playerVariables.isPlayerDead) {
    // Atalho para voltar o monstro
    if(event.key === 'ArrowLeft') {
      previousStage();
    }
  
    // Atalho para o próximo monstro
    if(event.key === 'ArrowRight') {
      nextStage();
    }
  
    // Atalho para abrir o inventario
    if(event.key === 'i' || event.key === 'I') {
      windowInventory()
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
      heal(hotkeys[0])
    } else if(event.key === '2') {
      heal(hotkeys[1])
    } 
  }
}

