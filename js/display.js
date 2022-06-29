/** BACKGROUND */
const background = document.querySelector('.js-game');
const hotkeys = document.querySelectorAll('#hotkeys li')

/** SLOT HOKEY */
function hotkeySlot() {
  return Array.from(hotkeys).find((key) => key.innerHTML === "");
}

/** TROCA DE MAPA A CADA 10 ESTAGIOS */
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
  damageMonster : document.querySelector('.js-damageMonster'),
  rewardMonster : document.querySelector('.js-rewardMonster'),
  rewardXP : 0,
  rewardMeso : 0,

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

  showDamage() {
    this.damageMonster.innerHTML = `<li>${player.atk}</li>`;
    this.damageMonster.addEventListener('animationend', () => {
    this.damageMonster.innerHTML = ``;
    })
  },

  showReward() {
    this.rewardMonster.innerHTML = `<li><div><img src="img/itens/meso/meso1.png">${hud.rewardMeso}</div>
                                    <div><span>XP</span> ${hud.rewardXP}</div></li>`;
    this.rewardMonster.addEventListener('animationend', () => {
    this.rewardMonster.innerText = ``;
    })
  }
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

  // // Atalho das hotkeys
  if(event.key === '1') {
    new Function('return ' + hotkeys[0].firstElementChild.firstElementChild.getAttribute('class'))();
  } else if(event.key === '2') {
    new Function('return ' + hotkeys[1].firstElementChild.firstElementChild.getAttribute('class'))();
  } else if(event.key === '3') {
    new Function('return ' + hotkeys[2].firstElementChild.firstElementChild.getAttribute('class'))();
  } else if(event.key === '4') {
    new Function('return ' + hotkeys[3].firstElementChild.firstElementChild.getAttribute('class'))();
  } else if(event.key === '5') {
    new Function('return ' + hotkeys[4].firstElementChild.firstElementChild.getAttribute('class'))();
  }
}

window.addEventListener('keydown', atalhos)


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
