/** BACKGROUND */
const background = document.querySelector('.js-game');

function switchMap() {
  if(indexMonstro > 0 && (indexMonstro) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${indexMonstro / 10}.jpg')`;

  } else if(indexMonstro > 1 && (indexMonstro - 1) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${(indexMonstro - 1) / 10 + 1}.jpg')`;
    
  }
}

/** HUDS */
const hud = {
  levelbar : document.querySelector('.js-level'),
  hpbar : document.querySelector('.js-barrahp'),
  mpbar : document.querySelector('.js-barramp'),
  xpbar : document.querySelector('.js-barraxp'),

  atualizar() {
    this.levelbar.innerHTML = player.level;
    this.hpbar.innerText = playerHP;
    this.mpbar.innerText = player.mp;
    this.xpbar.style.boxShadow = `inset ${Math.round(player.xpCurrent * this.xpbar.clientWidth / player.xpNextLevel())}px 0 yellow`;
    this.xpbar.innerHTML = player.xpCurrent +" / "+ player.xpNextLevel();
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
  if(indexMonstro > 0 && setaEsquerda.getAttribute('onclick').includes('voltarMonstro') && event.key === 'ArrowLeft') {
    voltarMonstro();
    console.log(indexMonstro)
    
  // Atalho para o próximo monstro
  } else if(indexMonstro < monstros.length && setaDireita.getAttribute('onclick').includes('proximoMonstro') && event.key === 'ArrowRight') {
    proximoMonstro();
  }
}

window.addEventListener('keydown', atalhos)

/** EXIBIR DANO MONSTRO */
const danoMonstro = document.querySelector('.js-danoMonstro');

function mostrarDano() {

  danoMonstro.innerHTML = `<li>${player.atk}</li>`;
  danoMonstro.addEventListener('animationend', () => {
  danoMonstro.innerText = ``;
  })
}

/** ATIVAR SETA ESQUERDA */
function voltarMonstro() {
  activeLeftArrow();

  indexMonstro--;
  switchMonster();

 // Verifica se o proximo monstro tem o mesmo level que o persosagem
 if(player.level >= monstros[indexMonstro + 1].level) {
    activeRightArrow();
  }
  
  // Caso esteja no primeiro monstro, retira o botao esquerdo
  if(indexMonstro === 0) {
  setaEsquerda.setAttribute('src', '');
  }

  switchMap();
}

/** ATIVAR SETA DIREITA */
function proximoMonstro() {
  disableRightArrow();
  activeLeftArrow();
  
  indexMonstro++;
  switchMonster();

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length) {
    if(player.level >= monstros[indexMonstro + 1].level) {
      activeRightArrow()
    }
  }

  switchMap();
}

