function battle() {
  mostrarDano();
  monsterDamage();  // Dano ao monstro

  // Ação quando o monstro morre
  if(hpMonstro <= 0) {

    player.earnXP() // Ganha XP
    monsterReborn();  // Nasce um novo monstro
    hud.atualizar();  // Atualizar os eventos no HUD
    
    // Ação quando sobe de level
    if(player.xpCurrent > player.xpNextLevel) {
      player.levelUP();
    }

    // Verifica se o proximo monstro tem o mesmo level que o persosagem
    if(indexMonstro + 1 < monstros.length && player.level >= monstros[indexMonstro + 1].level) {
      activeRightArrow();
    }
  }
}

  monstro.addEventListener('click', battle)

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



