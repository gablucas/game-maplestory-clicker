//XP
let xpAtual = 0;

// Level
let level = 1;
let xpProximoLevel = 25;
let exibirLevel = document.querySelector('.js-level span');
exibirLevel.innerHTML = level;

// BarraXP
let barraXP = document.querySelector('.js-barraxp')
barraXP.innerHTML = xpAtual +" / "+ xpProximoLevel

