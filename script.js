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

// Background
const background = document.querySelector('.js-game');

