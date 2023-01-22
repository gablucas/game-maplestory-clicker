import { playerData, playerVariables } from "../player/playerData.js";


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
      this.levelbar.innerHTML = playerData.level;
  
      this.hpbar.innerText = `${playerVariables.playerHP}/${playerData.hp()}`;
      this.hpbar.style.boxShadow = `inset -${playerVariables.calcPlayerHP}px 0 rgba(0, 0, 0, 0.6)`;
  
      this.mpbar.innerText = `${playerVariables.playerMP}/${playerData.mp()}`;
      this.mpbar.style.boxShadow = `inset -${playerVariables.calcPlayerMP}px 0 rgba(0, 0, 0, 0.6)`;
      
      this.xpbar.innerHTML = playerData.xpCurrent +" / "+ playerData.xpNextLevel();
      this.xpbar.style.boxShadow = `inset ${Math.round(playerData.xpCurrent * this.xpbar.clientWidth / playerData.xpNextLevel())}px 0 yellow`;
  
      this.goldbar.forEach((goldbar) => {
        goldbar.innerText = playerData.meso;
      })
    },
  
    showDamage() {
      this.damageMonster.innerHTML = `<li>${playerData.atk}</li>`;
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

  export default hud;