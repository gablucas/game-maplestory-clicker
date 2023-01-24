import { verifyHotkeySlot } from "../display/verifyHotkeySlot.js";
import { itens } from "../itens.js";
import { playerData } from "./playerData.js";

export function playerGift() {
  // 999 potions para o player
  playerData.itens.push(itens.potion[7])
  playerData.itens[0].amount = 999;
  verifyHotkeySlot().innerHTML = `<div class="${playerData.itens[0].id}"><img src=${playerData.itens[0].img}><span class="amount-item">${playerData.itens[0].amount}</span></div>`;
}