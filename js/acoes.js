// Define o index a percorrer pelo array de monstros
let indexMonstro = 0;

// Ataque
let hpReduzir = 0;

/** AÇÃO AO ATACAR O MONSTRO */
function ataqueMonstro() {

  // Calcula a porcentagem de HP do monstro de acordo com o tamanho do container
  let hpPorcentagem = lifeMonstro.clientWidth / (monstros[indexMonstro].hpMonstro / ataque);
  hpMonstro -= ataque;

  // Incrementa a porcentagem acima e reduz graficamente a vida do monstro
  hpReduzir += hpPorcentagem;
  lifeMonstro.style.boxShadow = `inset -${hpReduzir}px 0 rgba(0, 0, 0, 0.6)`;

  // Mostrar progresso do XP na barra
  // Faz o calculo da porcetagem de acordo com o tamanho do container, foi preciso arredondar o valor, pois alguns numeros quebrados causavam bug.
  let xpPorcentagem = Math.round(xpAtual * barraXP.clientWidth / xpProximoLevel)
  barraXP.style.boxShadow = `inset ${xpPorcentagem}px 0 yellow`;
  barraXP.innerText = xpAtual +" / "+ xpProximoLevel

  /** AÇÃO QUANDO O MONSTRO MORRE */
  if(hpMonstro <= 0) {

  // Adiciona XP
  xpAtual += xpMonstro;

  // Ação quando sobre de nivel
  if(xpAtual >= xpProximoLevel) {
    ++level;
    xpAtual -= xpProximoLevel;
    exibirLevel.innerText = level;
    xpProximoLevel = Math.round(xpProximoLevel + 10);
  }

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length && level >= monstros[indexMonstro + 1].levelMonstro) {
    setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
    setaDireita.setAttribute('onclick', 'proximoMonstro()');
  }
  
  // Restaurar HP do monstro
  nomeMonstro.style.boxShadow = `inset 0px 0px white`;
  hpMonstro = monstros[indexMonstro].hpMonstro;
  hpReduzir = 0;
  }
}

  monstro.addEventListener('click', ataqueMonstro)



function voltarMonstro() {

  setaEsquerda.setAttribute('src', 'img/buttons/seta_esquerda.png');

  indexMonstro--;
  
 // Verifica se o proximo monstro tem o mesmo level que o persosagem
 if(level >= monstros[indexMonstro + 1].levelMonstro) {
  setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
  setaDireita.setAttribute('onclick', 'proximoMonstro()');
  }
  
  if(indexMonstro === 0) {
  setaEsquerda.setAttribute('src', '');
  }

  if(indexMonstro > 0 && (indexMonstro) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${indexMonstro / 10}.jpg')`;
  }

  nomeMonstro.innerText = monstros[indexMonstro].nomeMonstro;
  imagemMonstro.setAttribute('src', monstros[indexMonstro].imgMonstro);
  hpMonstro = monstros[indexMonstro].xpMonstro;
  hpReduzir = 0;
  lifeMonstro.style.boxShadow = `inset 0px 0px white`;
  xpMonstro = monstros[indexMonstro].xpMonstro;
}

function proximoMonstro() {
  setaDireita.setAttribute('src', 'img/buttons/seta_direita_lock.png')
  setaDireita.setAttribute('onclick', '')
  setaEsquerda.setAttribute('src', 'img/buttons/seta_esquerda.png');

  indexMonstro++;
  console.log(indexMonstro)
  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length) {
    if(level >= monstros[indexMonstro + 1].levelMonstro) {
      setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
      setaDireita.setAttribute('onclick', 'proximoMonstro()');
    }
  }

  if(indexMonstro > 1 && (indexMonstro - 1) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${(indexMonstro - 1) / 10 + 1}.jpg')`;
  }


  nomeMonstro.innerText = monstros[indexMonstro].nomeMonstro;
  imagemMonstro.setAttribute('src', monstros[indexMonstro].imgMonstro)
  hpMonstro = monstros[indexMonstro].hpMonstro;
  hpReduzir = 0;
  lifeMonstro.style.boxShadow = `inset 0px 0px white`;
  xpMonstro = monstros[indexMonstro].xpMonstro;
}



