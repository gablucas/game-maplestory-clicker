// Background
const background = document.querySelector('.js-game');

const player = {
  level: 1,
  xpActual : 0,
  xpNextLevel : 10,
  atk: 1,
}

const hud = {
  levelbar : document.querySelector('.js-level span'),
  hpbar : document.querySelector('.js-barrahp'),
  mpbar : document.querySelector('.js-barramp'),
  xpbar : document.querySelector('.js-barraxp'),

  level() {
    this.levelbar.innerHTML = player.level;
  },

  xp() {
    this.xpbar.style.boxShadow = `inset ${Math.round(player.xpActual * this.xpbar.clientWidth / player.xpNextLevel)}px 0 yellow`;
    this.xpbar.innerHTML = player.xpActual +" / "+ player.xpNextLevel;
  },
}

hud.level();
hud.xp();

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });



