/** ELEMENTOS MONSTRO */
const monstro = document.querySelector('.js-monstro')
const nomeMonstro = document.querySelector('.js-nomeMonstro');
const lifeMonstro = document.querySelector('.js-monsterHP');
const imagemMonstro = document.querySelector('.js-imgMonstro');

/** ARRAY DE MONSTROS */
const monstros = []

/** FUNÇÃO CONSTRUTORA DE MONSTROS */
function Monstro(level, nome, hp, atk, xp, meso, img) {
  this.level = level;
  this.name = nome;
  this.hp = hp;
  this.atk = atk;
  this.xp = xp;
  this.meso = meso;
  this.img = img;
  monstros.push(this)
}

/** MONSTROS */
const snail = new Monstro(1, 'Snail', 3, 1, 1, 2, 'img/monsters/monster_snail.webp');
const bluesnail = new Monstro(3, 'Blue Snail', 8, 2, 4, 1, 'img/monsters/monster_bluesnail.webp');
const shroom = new Monstro(3, 'Shroom', 12, 3, 6, 1, 'img/monsters/monster_shroom.webp');
const tino = new Monstro(4, 'Tino', 16, 4, 3,  1, 'img/monsters/monster_tino.webp');
const stump = new Monstro(5, 'Stump', 20, 5, 5,  1, 'img/monsters/monster_stump.webp');
const orangeMushroom = new Monstro(6, 'Orange Mushroom', 24, 6, 7,  1, 'img/monsters/monster_orangemushroom.webp');
const slime = new Monstro(7, 'Slime', 28, 7, 9,  1, 'img/monsters/monster_slime.webp');
const murukun = new Monstro(8, 'Murukum', 32, 8, 9,  1, 'img/monsters/monster_murukun.webp');
const tiguru = new Monstro(9, 'Tiguru', 36, 9, 11,  1, 'img/monsters/monster_tiguru.webp');
const greenmushroom = new Monstro(10, 'Green Mushroom', 40, 10, 13,  1, 'img/monsters/monster_greenmushroom.webp');
const mano = new Monstro(11, '[BOSS] Mano', 50, 15, 30,  1, 'img/monsters/monster_mano.webp');

const strangerpig = new Monstro(12, 'Stranger Pig', 24, 1, 15,  1, 'img/monsters/monster_strangerpig.webp');
const hornymushroom = new Monstro(13, 'Horny Mushroom', 26, 1, 17,  1, 'img/monsters/monster_hornymushroom.webp');
const rottingkobold = new Monstro(14, 'Rotting Kobold', 28, 1, 19,  1, 'img/monsters/monster_rottingkobold.webp');
const patrolrobot = new Monstro(15, 'Patrol Robot', 30, 1, 21,  1, 'img/monsters/monster_patrolrobot.webp');
const stonegolem = new Monstro(16, 'Stone Golem', 32, 1, 23, 1, 'img/monsters/monster_stonegolem.webp');
const darkstonegolem = new Monstro(17,'Dark Stone Golem', 34, 1, 25, 1, 'img/monsters/monster_darkstonegolem.webp');
const mixedgolem = new Monstro(18, 'Mixed Golem', 36, 1, 27, 1, 'img/monsters/monster_mixedgolem.webp');
const odascout = new Monstro(19, 'Oda Scout', 38, 1, 29, 1, 'img/monsters/monster_odascout.webp');
const odaadvancedscout = new Monstro(20, 'Oda Advanced Scout', 40, 1, 31, 1, 'img/monsters/monster_odaadvancedscout.webp');
const mushmom = new Monstro(21, '[BOSS] Mushmom', 100, 1, 33, 1, 'img/monsters/monster_mushmom.webp');

const odawarrior = new Monstro(22, 'Oda Warrior', 24, 1, 15,  1, 'img/monsters/monster_odawarrior.webp');
const dustbox = new Monstro(23, 'Dust Box', 26, 1, 17,  1, 'img/monsters/monster_dustbox.webp');
const ghoststump = new Monstro(24, 'Ghost Stump', 28, 1, 19,  1, 'img/monsters/monster_ghoststump.webp');
const giantshadowblade = new Monstro(25, 'Giant Shadow Blade', 30, 1, 21,  1, 'img/monsters/monster_giantshadowblade.webp');
const evileye = new Monstro(26, 'Evil Eye', 32, 1, 23, 1, 'img/monsters/monster_evileye.webp');
const ruinssentinel = new Monstro(27, 'Ruins Sentinel', 34, 1, 25, 1, 'img/monsters/monster_ruinssentinel.webp');
const nefariousmonkapprentice = new Monstro(28, 'Nefarious Monk Apprentice', 36, 1, 27, 1, 'img/monsters/monster_nefariousmonkapprentice.webp');
const nefariousmonkmaster = new Monstro(29, 'Nefarious Monk Master', 38, 1, 29, 1, 'img/monsters/monster_nefariousmonkmaster.webp');
const countsswordsman = new Monstro(30, 'Counts Swordsman', 40, 1, 31, 1, 'img/monsters/monster_countsswordsman.webp');
const stumpy = new Monstro(31, '[BOSS] Stumpy', 100, 1, 33, 1, 'img/monsters/monster_stumpy.webp');

/** INDEX QUE PERCORRE PELOS MONSTROS */
let indexMonster = 0;

/** VARIAVEIS MONSTROS */
let monsterHP = 0;
let monstroXP = 0;
let calcMonsterHP = 0;

/** FUNÇÃO TROCAR DE MONSTRO */
function switchMonster() {
  nomeMonstro.innerText = monstros[indexMonster].name;                            // Altera o nome
  imagemMonstro.setAttribute('src', monstros[indexMonster].img);                  // Altera a imagem
  monsterHP = monstros[indexMonster].hp;                                          // Altera o HP
  calcMonsterHP = 0;                                                              // Reseta a porcentagem da barra de vida
  lifeMonstro.style.boxShadow = `inset -${calcMonsterHP}px 0 rgba(0, 0, 0, 0.6)`; // Enche graficamente a barra de vida do monstro
}

// Ativar a função inicialmente
switchMonster();

/** DANO AO PLAYER */
function playerDamage() {
  if(!!player.def - monstros[indexMonster].atk) {
    calcPlayerHP += hud.hpbar.clientWidth / (player.hp() / (monstros[indexMonster].atk - player.def));
    playerHP -= monstros[indexMonster].atk - player.def;
  }
}

/** MONSTRO RENASCE */
function monsterReborn() {
  monsterHP = monstros[indexMonster].hp // Retorna a vida maxima do monstro
  calcMonsterHP = 0; // Reseta a porcentagem para preencher a barra de vida do monstro
  lifeMonstro.style.boxShadow = `inset -${calcMonsterHP}px 0 rgba(0, 0, 0, 0.6)`; // Preenche a barra de vida do monstro
}




 

