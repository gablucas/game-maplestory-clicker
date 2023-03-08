import { battle } from "../battle.js";
import { playerVariables } from "../player/playerData.js";
import { heal } from "../player/playerHeal.js";
import { hotkeys } from "./displayElements.js";
import { nextStage, previousStage } from "./switchStage.js";
import { windowInventory } from "./windowInventory.js";
import { windowShop } from "./windowShop.js";
import { handleCloseShortcuts } from "./windowShortcuts.js";

/** HOTKEYS */
const gameKeys = {
  ArrowLeft: () => previousStage(),
  ArrowRight: () => nextStage(),
  KeyA: () => handleCloseShortcuts(),
  KeyI: () => windowInventory(),
  KeyS: () => windowShop(),
  Space: () => battle(),
  Digit1: () => heal(hotkeys[0]),
  Digit2: () => heal(hotkeys[1]),
}


export function atalhos({ code }) {

  if(!playerVariables.isPlayerDead && Object.keys(gameKeys).some((keySome) => keySome === code)) {
    gameKeys[code]()
  }
}

