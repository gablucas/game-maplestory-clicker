
const player = {
  level: 1,
  hp: 20,
  mp: 10,
  xpCurrent : 0,
  xpNextLevel : 30,
  atk: 1,

  earnXP() {
    this.xpCurrent += monstros[indexMonstro].xp;
  },

  levelUP() {
    do{
      console.log('oi')
      ++this.level;
      this.xpCurrent -= this.xpNextLevel;
      player.xpNextLevel = Math.round(player.xpNextLevel + 10);
    }while(this.xpCurrent > this.xpNextLevel)
    
    hud.atualizar();
  }
}

const hud = {
  levelbar : document.querySelector('.js-level'),
  hpbar : document.querySelector('.js-barrahp'),
  mpbar : document.querySelector('.js-barramp'),
  xpbar : document.querySelector('.js-barraxp'),

  atualizar() {
    this.levelbar.innerHTML = player.level;
    this.hpbar.innerText = player.hp;
    this.mpbar.innerText = player.mp;
    this.xpbar.style.boxShadow = `inset ${Math.round(player.xpCurrent * this.xpbar.clientWidth / player.xpNextLevel)}px 0 yellow`;
    this.xpbar.innerHTML = player.xpCurrent +" / "+ player.xpNextLevel;
  },
}

hud.atualizar();

// Ajusta o tamanho da tela para dispositivos moveis, para que não haja scroll.
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Executa o mesmo evento acima quando a tela é redimensionada
window.addEventListener('resize', () => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });



