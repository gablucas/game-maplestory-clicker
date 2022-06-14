function battle() {

  // Dano ao monstro
  monsterDamage();
  hud.atualizar();

  /** AÇÃO QUANDO O MONSTRO MORRE */
  if(hpMonstro <= 0) {

  // Adiciona XP
  player.xpActual += xpMonstro;
  hud.atualizar();

  // Ação quando sobre de nivel
  if(player.xpActual >= player.xpNextLevel) {
    ++player.level;
    player.xpActual -= player.xpNextLevel;
    hud.atualizar();
    player.xpNextLevel = Math.round(player.xpNextLevel + 10);
  }

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length && player.level >= monstros[indexMonstro + 1].levelMonstro) {
    setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
    setaDireita.setAttribute('onclick', 'proximoMonstro()');
  }
  
  // Nasce um novo monstro
    monsterReborn();
  }
}

  monstro.addEventListener('click', battle)



function voltarMonstro() {

  setaEsquerda.setAttribute('src', 'img/buttons/seta_esquerda.png');

  indexMonstro--;
  
 // Verifica se o proximo monstro tem o mesmo level que o persosagem
 if(player.level >= monstros[indexMonstro + 1].levelMonstro) {
  setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
  setaDireita.setAttribute('onclick', 'proximoMonstro()');
  }
  
  if(indexMonstro === 0) {
  setaEsquerda.setAttribute('src', '');
  }

  // Troca o mapa
  if(indexMonstro > 0 && (indexMonstro) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${indexMonstro / 10}.jpg')`;
  }

    switchMonster();

}

function proximoMonstro() {
  setaDireita.setAttribute('src', 'img/buttons/seta_direita_lock.png')
  setaDireita.setAttribute('onclick', '')
  setaEsquerda.setAttribute('src', 'img/buttons/seta_esquerda.png');

  indexMonstro++;

  // Verifica se o proximo monstro tem o mesmo level que o persosagem
  if(indexMonstro + 1 < monstros.length) {
    if(player.level >= monstros[indexMonstro + 1].levelMonstro) {
      setaDireita.setAttribute('src', 'img/buttons/seta_direita.png');
      setaDireita.setAttribute('onclick', 'proximoMonstro()');
    }
  }

  // Troca o mapa
  if(indexMonstro > 1 && (indexMonstro - 1) % 10 === 0) {
    background.style.backgroundImage = `url('img/mapa/stage${(indexMonstro - 1) / 10 + 1}.jpg')`;
  }

    switchMonster();

}

function atalhos(event) {
  
    // Atalho para voltar o monstro
  if(indexMonstro > 0 && setaEsquerda.getAttribute('onclick').includes('voltarMonstro') && event.key === 'ArrowLeft') {
    voltarMonstro();

    // Atalho para o próximo monstro
  } else if(indexMonstro < monstros.length && setaDireita.getAttribute('onclick').includes('proximoMonstro') && event.key === 'ArrowRight') {
    proximoMonstro();
  }
}


window.addEventListener('keydown', atalhos)

