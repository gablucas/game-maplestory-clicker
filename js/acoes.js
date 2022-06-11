// Define o index a percorrer
let indexMonstro = 0;

// Ataque
let hpReduzir = 0;

// Ganhar XP ao clicar no monstro
function ataqueMonstro() {
  let hpPorcentagem = lifeMonstro.clientWidth / (monstros[indexMonstro].hpMonstro / ataque);
  hpMonstro -= ataque;
  hpReduzir += hpPorcentagem;
  console.log(hpReduzir)
  lifeMonstro.style.boxShadow = `inset -${hpReduzir}px 0 black`;

  if(hpMonstro <= 0) {

  // Adicionar XP
  xpAtual += xpMonstro;

  // Ações após subir de level
  if(xpAtual >= xpProximoLevel) {
    ++level;
    xpAtual -= xpProximoLevel;
    exibirLevel.innerText = level;
    xpProximoLevel = Math.round(xpProximoLevel + 10);
  }

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length) {
    if(level >= monstros[indexMonstro + 1].levelMonstro) {
      setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
      setaDireita.setAttribute('onclick', 'proximoMonstro()');
    }
  }

  // Restaurar HP do
  nomeMonstro.style.boxShadow = `inset 0px 0px white`;
  hpMonstro = monstros[indexMonstro].hpMonstro;
  hpReduzir = 0;
}



  // Mostrar progresso do XP na barra
  // Faz o calculo da porcetagem referente ao tamanho da div, foi preciso arredondar o valor, pois alguns numeros quebrados causavam bug
  let xpPorcentagem = Math.round(xpAtual * barraXP.clientWidth / xpProximoLevel)
  barraXP.style.boxShadow = `inset ${xpPorcentagem}px 0 yellow`;
  // barraXP.innerText = xpAtual +" / "+ xpProximoLevel
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

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length) {
    if(level >= monstros[indexMonstro + 1].levelMonstro) {
      setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
      setaDireita.setAttribute('onclick', 'proximoMonstro()');
    }
  }
  nomeMonstro.innerText = monstros[indexMonstro].nomeMonstro;
  imagemMonstro.setAttribute('src', monstros[indexMonstro].imgMonstro)
  hpMonstro = monstros[indexMonstro].hpMonstro;
  hpReduzir = 0;
  lifeMonstro.style.boxShadow = `inset 0px 0px white`;
  xpMonstro = monstros[indexMonstro].xpMonstro;
}



