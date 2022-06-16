const player = {
  level: 1,
  hp: 20,
  mp: 10,
  xpCurrent : 0,
  atk: 1,

  earnXP() {
    this.xpCurrent += monstros[indexMonstro].xp;
  },

  xpNextLevel() {
    return Math.floor((this.level / 0.5) * 2);
  },

  levelUP() {
    do{
      this.xpCurrent -= this.xpNextLevel();
      ++this.level;
      this.xpNextLevel();
    }while(this.xpCurrent > this.xpNextLevel())
    
  }
}

/** VARIAVEIS */
let playerHP = player.hp;
let calcPlayerHP = 0;

/** DANO AO PLAYER */
function playerDamage() {
  playerHP -= monstros[indexMonstro].atk;
  calcPlayerHP += hud.hpbar.clientWidth / (player.hp / monstros[indexMonstro].atk);
  hud.hpbar.style.boxShadow = `inset -${calcPlayerHP}px 0 rgba(0, 0, 0, 0.6)`;  
}

/** DANO AO MONSTRO */
function monsterDamage() {
  hpMonstro -= player.atk;                                                               // Reduz a vida do monstro
  hpPorcentagem += lifeMonstro.clientWidth / (monstros[indexMonstro].hp / player.atk);   // Define a porcentagem da barra de vida 
  lifeMonstro.style.boxShadow = `inset -${hpPorcentagem}px 0 rgba(0, 0, 0, 0.6)`;        // Reduz graficamente a barra de vida do monstro
}

/** AJUSTE PARA DIPOSITIVOS MOVEIS */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Executa a mesma ação acima quando a tela é redimensionada
window.addEventListener('resize', () => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
