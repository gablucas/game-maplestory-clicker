import { hotkeys } from "./displayElements.js";

/** SLOT HOTKEY */
export function verifyHotkeySlot() {
    return Array.from(hotkeys).find((key) => key.innerHTML === "");
}