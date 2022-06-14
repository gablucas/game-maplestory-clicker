// Background
const background = document.querySelector('.js-game');

function switchMap() {
  if(indexMonstro > 0 && (indexMonstro) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${indexMonstro / 10}.jpg')`;

  } else if(indexMonstro > 1 && (indexMonstro - 1) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${(indexMonstro - 1) / 10 + 1}.jpg')`;
    
  }
}

// Arrows
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
