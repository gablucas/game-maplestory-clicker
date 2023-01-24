import { monstros } from "../monster/monstersData.js";
import { monsterVariables } from "../monster/monstersData.js";
import hud from "../display/hud.js";

const playerData = {
    level: 1  ,
    xpCurrent : 0,
    atk: 1,
    def: 0,
    meso: 1000,
    itens: [],
  
    hp() {
      return this.level * 5;
    },
  
    mp() {
      return Math.floor((this.level / 0.15) * 1);
    },
  
    earnReward() {
      if(this.level - monstros[monsterVariables.indexMonster].level >= 5) {
        hud.rewardMeso = 0.
        hud.rewardXP = 0;
      } else {
        hud.rewardMeso = Math.floor(Math.random() * (monstros[monsterVariables.indexMonster].meso - (monstros[monsterVariables.indexMonster].meso / 2)) + (monstros[monsterVariables.indexMonster].meso / 2));
        hud.rewardXP = monstros[monsterVariables.indexMonster].xp;
        this.xpCurrent += hud.rewardXP;
        this.meso += hud.rewardMeso;
      }
    },
  
    xpNextLevel() {
      return Math.floor(Math.pow((this.level / 0.4), 2));
    },
  
    levelUP() {
      do {
        this.xpCurrent -= this.xpNextLevel();
        ++this.level;
        this.xpNextLevel();
      } while (this.xpCurrent > this.xpNextLevel())
      
      playerVariables.playerHP = playerData.hp();
      playerVariables.calcPlayerHP = 0;
  
      playerVariables.playerMP = playerData.mp();
      playerVariables.calcPlayerMP = 0;
    },
  }

  /** VARIAVEIS */
  const playerVariables = {
    playerHP: playerData.hp(),
    playerMP: playerData.mp(),
    calcPlayerHP: 0,
    calcPlayerMP: 0,
    isPlayerDead: false,
  }


export  { playerData, playerVariables };