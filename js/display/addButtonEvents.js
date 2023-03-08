import { atalhos } from "./hotkeys.js";
import { battle } from "../battle.js";
import { monstro } from "../monster/monsterElements.js";
import { nextStage, previousStage } from "./switchStage.js";
import { dragable, hotkeys, leftArrow, rightArrow, closeWindowBtn, buttonShortcuts } from "./displayElements.js"; 
import { returnMenuOptions, selectMenuOption, windowShop } from "./windowShop.js";
import { windowInventory } from "./windowInventory.js";
import { bagInventory, buttonInventory, closeInventory, equipInventory } from "../inventory/inventoryElements.js";
import { buttonShop, closeShop, menuOption, returnOptions, } from "../shop/shopElements.js";
import { equipItem } from "../inventory/equipItem.js";
import { moveWindow } from "./dragableWindow.js";
import { heal } from "../player/playerHeal.js";
import { handleCloseShortcuts } from "./windowShortcuts.js";
import { unequipItem } from "../inventory/unequipItem.js";
import { showItemStats } from "../inventory/showItemStats.js";

export function addButtonEvents() {
  leftArrow.addEventListener('click', previousStage);
  rightArrow.addEventListener('click', nextStage);
  window.addEventListener('keyup', atalhos);
  monstro.addEventListener('click', battle);
  closeShop.addEventListener('click', windowShop);
  buttonShop.addEventListener('click', windowShop);
  buttonInventory.addEventListener('click', windowInventory);
  closeInventory.addEventListener('click', windowInventory);
  returnOptions.addEventListener('click', returnMenuOptions);
  buttonShortcuts.addEventListener('click', handleCloseShortcuts);

  equipInventory.forEach((slot) => {
    slot.addEventListener('click', unequipItem)
    slot.addEventListener('mouseenter', showItemStats)
  })

  closeWindowBtn.forEach((close) => {
    close.addEventListener('click', handleCloseShortcuts)
  })

  hotkeys.forEach((hotkey) => {
    hotkey.addEventListener('click', (event) => {
      heal(event.currentTarget);
    })
  })

  menuOption.forEach((menu) => {
    menu.addEventListener('click', selectMenuOption)
  });

  bagInventory.forEach((item) => {
    item.addEventListener('click', equipItem) 
    item.addEventListener('mouseenter', showItemStats)
  });

  dragable.forEach((item) => {
    item.addEventListener('mousedown', moveWindow)
  })
}

