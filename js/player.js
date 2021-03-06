const player = {
  level: 1,
  xpCurrent : 0,
  atk: 1,
  def: 0,
  meso: 0,

  hp() {
    return this.level * 5;
  },

  mp() {
    return Math.floor((this.level / 0.15) * 1);
  },

  earnReward() {
    if(player.level - monstros[indexMonster].level >= 5) {
      hud.rewardMeso = 0.
      hud.rewardXP = 0;
    } else {
      hud.rewardMeso = Math.floor(Math.random() * (monstros[indexMonster].meso - (monstros[indexMonster].meso / 2)) + (monstros[indexMonster].meso / 2));
      hud.rewardXP = monstros[indexMonster].xp;
      this.xpCurrent += hud.rewardXP;
      this.meso += hud.rewardMeso;
  }
  },

  xpNextLevel() {
    return Math.floor(Math.pow((this.level / 0.4), 2));
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
function heal(idHeal) {

  // Se o player possuir a potion
  if(playerItens.some(item => item.id === idHeal)) {
    let useItem = playerItens.find(item => item.id === idHeal);

    // Diminui uma potion e exibe o novo valor
    useItem.amount -= 1;
    document.querySelector(`.${useItem.id} .amount-item`).innerText = useItem.amount;

    if(useItem.id.includes('HP')) {

      // Caso o poder de cura seje maior que o necessario pra encher a vida
      if(player.hp() - playerHP <= useItem.attribute[0]){
        playerHP = player.hp();
        calcPlayerHP = 0; 

      // Cura
      } else {
        playerHP += useItem.attribute[0];
        calcPlayerHP -= (hud.hpbar.clientWidth / player.hp() * useItem.attribute[0]);
      }

    } else if(useItem.id.includes('MP')) {

      // Caso o poder de cura seje maior que o necessario pra encher a vida
      if(player.mp() - playerMP <= useItem.attribute[0]){
        playerMP = player.MP();
        calcPlayerMP = 0; 

      // Cura
      } else {
        playerMP += useItem.attribute[0];
        calcPlayerMP -= (hud.mpbar.clientWidth / player.mp() * useItem.attribute[0]);
      }
    }



    // Caso seja acabe a potion, ele retira do inventario e das hotkeys
    if(useItem.amount === 0) {
      const indexItem = playerItens.findIndex((item) => item.id === useItem.id)
      playerItens.splice(indexItem, 1)
      Array.from(hotkeys).find(hotkey => hotkey.firstElementChild.getAttribute('class') === useItem.id).innerHTML = "";
    }

    hud.atualizar();
  }
}


function itensAttributes() {
  player.atk = 1;
  player.def = 0;

  equipInventory.forEach((equip) => {
    if(!!equip.firstElementChild) {
      // const equipType = equip.getAttribute('id').split('-')[0];
      const itemEquiped = playerItens.find(item => item.id === equip.firstElementChild.getAttribute('class'));

      if(itemEquiped.attribute[1] === 'Atk'){
        player.atk = itemEquiped.attribute[0];
      }else if(itemEquiped.attribute[1] === 'Def'){
        player.def += itemEquiped.attribute[0];
      }
    }
  })
}


