const player = {
  level: 1,
  xpCurrent : 0,
  atk: 1,
  meso: 0,

  hp() {
    return Math.floor((this.level / 0.08) * 1);
  },

  mp() {
    return Math.floor((this.level / 0.15) * 1);
  },

  earnXP() {
    this.xpCurrent += monstros[indexMonster].xp;
  },

  xpNextLevel() {
    return Math.floor((this.level / 0.3) * 2);
  },

  levelUP() {
    do{
      this.xpCurrent -= this.xpNextLevel();
      ++this.level;
      this.xpNextLevel();
    }while(this.xpCurrent > this.xpNextLevel())
    
    playerHP = player.hp();
    calcPlayerHP = 0;

    playerMP = player.mp();
    calcPlayerMP = 0;
  }
}

/** VARIAVEIS */
let playerHP = player.hp();
let calcPlayerHP = 0;

let playerMP = player.mp();
let calcPlayerMP = 0;

/** DANO AO MONSTRO */
function monsterDamage() {
  monsterHP -= player.atk;                                                               // Reduz a vida do monstro
  calcMonsterHP += lifeMonstro.clientWidth / (monstros[indexMonster].hp / player.atk);   // Define a porcentagem da barra de vida 
  lifeMonstro.style.boxShadow = `inset -${calcMonsterHP}px 0 rgba(0, 0, 0, 0.6)`;        // Reduz graficamente a barra de vida do monstro
}

/** SKILLS */
function heal() {
  if(playerMP >= 6) {
    playerMP -= 6;
    calcPlayerMP += hud.mpbar.clientWidth / player.mp() * 6;

    if(player.hp() - playerHP <= 15) {
      playerHP = player.hp();
      calcPlayerHP = 0;
      
    } else {
      playerHP += 15;
      calcPlayerHP -= (hud.hpbar.clientWidth / player.hp() * 15);
    }

    hud.atualizar();
  }
}

/** HEAL */
function healhp() {
  playerHP = player.hp();
  calcPlayerHP = 0;
  hud.atualizar();
}

function healmp() {
  playerMP = player.mp();
  calcPlayerMP = 0;
  hud.atualizar();
}
