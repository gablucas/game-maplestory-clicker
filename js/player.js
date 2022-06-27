const player = {
  level: 1,
  xpCurrent : 0,
  atk: 1,
  def: 0,
  meso: 1000,

  hp() {
    return Math.floor((this.level / 0.08) * 1);
  },

  mp() {
    return Math.floor((this.level / 0.15) * 1);
  },

  earnReward() {
    this.xpCurrent += monstros[indexMonster].xp;
    this.meso += Math.floor(Math.random() * (monstros[indexMonster].meso - (monstros[indexMonster].meso / 2)) + monstros[indexMonster].meso / 2);
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

const playerItens = [];

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

function itensAttributes() {
  player.atk = 1;
  player.def = 0;

  equipInventory.forEach((equip) => {
    if(!!equip.firstElementChild) {
      const equipType = equip.getAttribute('id').split('-')[0];
      const itemEquiped = playerItens.find(item => item.id === equip.firstElementChild.getAttribute('class'));

      if(equipType === 'weapon'){
        player.atk = itemEquiped.attribute[0];
      }else if(equipType === 'defense'){
        player.def = itemEquiped.attribute[0];
      }
    }
  })
}


