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
  
  // Mostrar progresso do XP na barra
  // Faz o calculo da porcetagem referente ao tamanho da div, foi preciso arredondar o valor, pois alguns numeros quebrados causavam bug
  let xpPorcentagem = Math.round(xpAtual * barraXP.clientWidth / xpProximoLevel)
  barraXP.style.boxShadow = "inset "+xpPorcentagem+ "px 0 green";
  barraXP.innerText = xpAtual +" / "+ xpProximoLevel
}

monstro.addEventListener('click', ganhaXP)
