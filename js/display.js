/** BACKGROUND */
const background = document.querySelector('.js-game');

function switchMap() {
  if(indexMonster > 0 && (indexMonster) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${indexMonster / 10}.jpg')`;

  } else if(indexMonster > 1 && (indexMonster - 1) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${(indexMonster - 1) / 10 + 1}.jpg')`;
    
  }
}

/** HUDS */
const hud = {
  levelbar : document.querySelector('.js-level'),
  hpbar : document.querySelector('.js-barrahp'),
  mpbar : document.querySelector('.js-barramp'),
  xpbar : document.querySelector('.js-barraxp'),
  goldbar : document.querySelectorAll('.js-barrameso'),

  atualizar() {
    this.levelbar.innerHTML = player.level;

    this.hpbar.innerText = `${playerHP}/${player.hp()}`;
    this.hpbar.style.boxShadow = `inset -${calcPlayerHP}px 0 rgba(0, 0, 0, 0.6)`;

    this.mpbar.innerText = `${playerMP}/${player.mp()}`;
    this.mpbar.style.boxShadow = `inset -${calcPlayerMP}px 0 rgba(0, 0, 0, 0.6)`;
    
    this.xpbar.innerHTML = player.xpCurrent +" / "+ player.xpNextLevel();
    this.xpbar.style.boxShadow = `inset ${Math.round(player.xpCurrent * this.xpbar.clientWidth / player.xpNextLevel())}px 0 yellow`;

    this.goldbar.forEach((goldbar) => {
      goldbar.innerText = player.meso;
    })

  },
}

/** ARROWS */
const setaEsquerda = document.querySelector('.js-display-seta-esquerda');
const setaDireita = document.querySelector('.js-display-seta-direita');

function activeRightArrow() {
  setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
  setaDireita.setAttribute('onclick', 'proximoMonstro()');
}

function disableRightArrow() {
  setaDireita.setAttribute('src', 'img/buttons/seta_direita_lock.png');
  setaDireita.setAttribute('onclick', '');
}

function activeLeftArrow() {
  setaEsquerda.setAttribute('src', 'img/buttons/seta_esquerda.png');
  setaEsquerda.setAttribute('onclick', 'voltarMonstro()');
}

/** ATALHOS */
// Essa função usa variaveis que foram declaradas e inicializadas depois, mas o motivo desta função ter acesso a essas variaveis deve-se ao fato de que o evento é adicionado antes das variaveis, mas a execução dele é depois.
function atalhos(event) {

  // Atalho para voltar o monstro
  if(indexMonster > 0 && setaEsquerda.getAttribute('onclick').includes('voltarMonstro') && event.key === 'ArrowLeft') {
    voltarMonstro();
    console.log(indexMonster)
  }

  // Atalho para o próximo monstro
  if(indexMonster < monstros.length && setaDireita.getAttribute('onclick').includes('proximoMonstro') && event.key === 'ArrowRight') {
    proximoMonstro();
  }

  // Atalho para abrir o inventario
  if(event.key === 'i' || event.key === 'I') {
    windowInventory();
  }

  // Atalho para abrir o shop
  if(event.key === 's' || event.key === 'S') {
    windowShop();
  }

  // Atalho atacar com espaço
  if(event.key === ' ') {
    battle();
  }

  // Atalho das hotkeys
  if(event.key === '1') {
    new Function('return ' + document.querySelector('#hotkeys li:first-child img').getAttribute('onclick'))();
  } else if(event.key === '2') {
    new Function('return ' + document.querySelector('#hotkeys li:nth-child(2) img').getAttribute('onclick'))();
  } else if(event.key === '3') {
    new Function('return ' + document.querySelector('#hotkeys li:nth-child(3) img').getAttribute('onclick'))();
  } else if(event.key === '4') {
    new Function('return ' + document.querySelector('#hotkeys li:nth-child(4) img').getAttribute('onclick'))();
  } else if(event.key === '5') {
    new Function('return ' + document.querySelector('#hotkeys li:nth-child(5) img').getAttribute('onclick'))();
  }
}

window.addEventListener('keydown', atalhos)

/** EXIBIR DANO MONSTRO */
const damageMonster = document.querySelector('.js-damageMonster');

function mostrarDano() {

  damageMonster.innerHTML = `<li>${player.atk}</li>`;
  damageMonster.addEventListener('animationend', () => {
  damageMonster.innerHTML = ``;
  })
}


/** EXIBIR RECOMPENSA DO MONSTRO */
const rewardMonster = document.querySelector('.js-rewardMonster');

function showReward() {
  
  rewardMonster.innerHTML = `<li><div><img src="../img/itens/meso/meso1.png">${monstros[indexMonster].meso}</div>
                                  <div><span>XP</span> ${monstros[indexMonster].xp}</div></li>`;

  rewardMonster.addEventListener('animationend', () => {
  rewardMonster.innerText = ``;
  })
}

/** ATIVAR SETA ESQUERDA */
function voltarMonstro() {
  activeLeftArrow();

  indexMonster--;
  switchMonster();

 // Verifica se o proximo monstro tem o mesmo level que o persosagem
 if(player.level >= monstros[indexMonster + 1].level) {
    activeRightArrow();
  }
  
  // Caso esteja no primeiro monstro, retira o botao esquerdo
  if(indexMonster === 0) {
  setaEsquerda.setAttribute('src', '');
  }

  switchMap();
}

/** ATIVAR SETA DIREITA */
function proximoMonstro() {
  disableRightArrow();
  activeLeftArrow();
  
  indexMonster++;
  switchMonster();

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonster + 1 < monstros.length) {
    if(player.level >= monstros[indexMonster + 1].level) {
      activeRightArrow()
    }
  }

  switchMap();
}

/** AJUSTE PARA DIPOSITIVOS MOVEIS */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Executa a mesma ação acima quando a tela é redimensionada
window.addEventListener('resize', () => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
