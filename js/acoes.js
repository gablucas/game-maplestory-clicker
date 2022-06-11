// Define o index a percorrer
let indexMonstro = 0;

// Ganhar XP ao clicar no monstro
function ganhaXP() {

  // Adicionar XP
  xpAtual += xpMonstroAtual;

  // Ações após subir de level
  if(xpAtual > xpProximoLevel) {
    ++level;
    xpAtual -= xpProximoLevel;
    exibirLevel.innerText = level;
    xpProximoLevel = Math.round(level * 0.25 * xpProximoLevel + 100);
  }

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length) {
    if(level >= monstros[indexMonstro + 1].levelMonstro) {
      setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
      setaDireita.setAttribute('onclick', 'proximoMonstro()');
    }
  }

  // Verfica se o item anterior 
    
  // Mostrar progresso do XP na barra
  // Faz o calculo da porcetagem referente ao tamanho da div, foi preciso arredondar o valor, pois alguns numeros quebrados causavam bug
  let xpPorcentagem = Math.round(xpAtual * barraXP.clientWidth / xpProximoLevel)
  barraXP.style.boxShadow = "inset "+xpPorcentagem+ "px 0 green";
  barraXP.innerText = xpAtual +" / "+ xpProximoLevel
}

monstro.addEventListener('click', ganhaXP)



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

  nomeMonstroAtual.innerText = monstros[indexMonstro].nomeMonstro;
  imagemMonstroAtual.setAttribute('src', monstros[indexMonstro].imgMonstro)
  xpMonstroAtual = monstros[indexMonstro].xpMonstro;
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
  nomeMonstroAtual.innerText = monstros[indexMonstro].nomeMonstro;
  imagemMonstroAtual.setAttribute('src', monstros[indexMonstro].imgMonstro)
  xpMonstroAtual = monstros[indexMonstro].xpMonstro;

}

