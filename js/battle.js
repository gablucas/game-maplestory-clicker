// Atualizar a HUD inicialmente
hud.atualizar();

function battle() {

  mostrarDano();  // Exibe o dano desferido ao monstro
  monsterDamage();  // Dano ao monstro
  playerDamage(); // Dano ao player

  // Ação quando o monstro morre
  if(hpMonstro <= 0) {

      player.earnXP() // Ganha XP
      monsterReborn();  // Nasce um novo monstro
      
    // Ação quando sobe de level
    if(player.xpCurrent >= player.xpNextLevel()) {
      player.levelUP(); // Sobre o level do player
    }

    // Verifica se o proximo monstro tem o mesmo level que o persosagem
    if(indexMonstro + 1 < monstros.length && player.level >= monstros[indexMonstro + 1].level) {
      activeRightArrow();
    }
  }

  hud.atualizar();  // Atualiza os eventos no HUD
}

  monstro.addEventListener('click', battle)