// Background
const background = document.querySelector('.js-game');

// Level
let level = 100;
let xpProximoLevel = 10;
let exibirLevel = document.querySelector('.js-level span');
exibirLevel.innerHTML = level;

//XP
let xpAtual = 0;

// BarraXP
let barraXP = document.querySelector('.js-barraxp')
barraXP.innerHTML = xpAtual +" / "+ xpProximoLevel

// Ataque
let ataque = 1;

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



