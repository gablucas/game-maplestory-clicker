// Monstros
const monstro = document.querySelector('.js-monstro')
const monstros = []

// Função construtora para criar monstros
function Monstro(level, nome, hp, atk, xp, img) {
  this.level = level;
  this.name = nome;
  this.hp = hp;
  this.xp = xp;
  this.atk = atk;
  this.img = img;
  monstros.push(this)
}

// Monstros criados
const snail = new Monstro(1, 'Snail', 4, 1, 400, 'img/monsters/monster_snail.webp');
const bluesnail = new Monstro(2, 'Blue Snail', 6, 1, 2, 'img/monsters/monster_bluesnail.webp');
const shroom = new Monstro(3, 'Shroom', 8, 1, 3, 'img/monsters/monster_shroom.webp');
const tino = new Monstro(4, 'Tino', 10, 1, 3, 'img/monsters/monster_tino.webp');
const stump = new Monstro(5, 'Stump', 12, 1, 5, 'img/monsters/monster_stump.webp');
const orangeMushroom = new Monstro(6, 'Orange Mushroom', 14, 1, 7, 'img/monsters/monster_orangemushroom.webp');
const slime = new Monstro(7, 'Slime', 16, 1, 9, 'img/monsters/monster_slime.webp');
const murukun = new Monstro(8, 'Murukum', 18, 1, 9, 'img/monsters/monster_murukun.webp');
const tiguru = new Monstro(9, 'Tiguru', 20, 1, 11, 'img/monsters/monster_tiguru.webp');
const greenmushroom = new Monstro(10, 'Green Mushroom', 22, 1, 13, 'img/monsters/monster_greenmushroom.webp');
const mano = new Monstro(11, '[BOSS] Mano', 50, 1, 30, 'img/monsters/monster_mano.webp');

const strangerpig = new Monstro(12, 'Stranger Pig', 24, 1, 15, 'img/monsters/monster_strangerpig.webp');
const hornymushroom = new Monstro(13, 'Horny Mushroom', 26, 1, 17, 'img/monsters/monster_hornymushroom.webp');
const rottingkobold = new Monstro(14, 'Rotting Kobold', 28, 1, 19, 'img/monsters/monster_rottingkobold.webp');
const patrolrobot = new Monstro(15, 'Patrol Robot', 30, 1, 21, 'img/monsters/monster_patrolrobot.webp');
const stonegolem = new Monstro(16, 'Stone Golem', 32, 1, 23,'img/monsters/monster_stonegolem.webp');
const darkstonegolem = new Monstro(17,'Dark Stone Golem', 34, 1, 25,'img/monsters/monster_darkstonegolem.webp');
const mixedgolem = new Monstro(18, 'Mixed Golem', 36, 1, 27,'img/monsters/monster_mixedgolem.webp');
const odascout = new Monstro(19, 'Oda Scout', 38, 1, 29,'img/monsters/monster_odascout.webp');
const odaadvancedscout = new Monstro(20, 'Oda Advanced Scout', 40, 1, 31,'img/monsters/monster_odaadvancedscout.webp');
const mushmom = new Monstro(21, '[BOSS] Mushmom', 100, 1, 33,'img/monsters/monster_mushmom.webp');

const odawarrior = new Monstro(22, 'Oda Warrior', 24, 1, 15, 'img/monsters/monster_odawarrior.webp');
const dustbox = new Monstro(23, 'Dust Box', 26, 1, 17, 'img/monsters/monster_dustbox.webp');
const ghoststump = new Monstro(24, 'Ghost Stump', 28, 1, 19, 'img/monsters/monster_ghoststump.webp');
const giantshadowblade = new Monstro(25, 'Giant Shadow Blade', 30, 1, 21, 'img/monsters/monster_giantshadowblade.webp');
const evileye = new Monstro(26, 'Evil Eye', 32, 1, 23,'img/monsters/monster_evileye.webp');
const ruinssentinel = new Monstro(27, 'Ruins Sentinel', 34, 1, 25,'img/monsters/monster_ruinssentinel.webp');
const nefariousmonkapprentice = new Monstro(28, 'Nefarious Monk Apprentice', 36, 1, 27,'img/monsters/monster_nefariousmonkapprentice.webp');
const nefariousmonkmaster = new Monstro(29, 'Nefarious Monk Master', 38, 1, 29,'img/monsters/monster_nefariousmonkmaster.webp');
const countsswordsman = new Monstro(30, 'Counts Swordsman', 40, 1, 31,'img/monsters/monster_countsswordsman.webp');
const stumpy = new Monstro(31, '[BOSS] Stumpy', 100, 1, 33,'img/monsters/monster_stumpy.webp');

// Define o index a percorrer pelo array de monstros
let indexMonstro = 0;

// Elementos do monstro
let nomeMonstro = document.querySelector('.js-nomeMonstro');
let lifeMonstro = document.querySelector('.js-hpMonstro');
let imagemMonstro = document.querySelector('.js-imgMonstro');

// Variaveis que receberam os valores do monstro para serem modificadas
let hpMonstro = 0;
let xpMonstro = 0;
let hpPorcentagem = 0;

// Função ao trocar de monstro
function switchMonster() {
  nomeMonstro.innerText = monstros[indexMonstro].name;                            // Altera o nome
  imagemMonstro.setAttribute('src', monstros[indexMonstro].img);                  // Altera a imagem
  hpMonstro = monstros[indexMonstro].hp;                                          // Altera o HP
  hpPorcentagem = 0;                                                              // Reseta a porcentagem da barra de vida
  lifeMonstro.style.boxShadow = `inset -${hpPorcentagem}px 0 rgba(0, 0, 0, 0.6)`; // Enche graficamente a barra de vida do monstro
}

switchMonster();

function monsterDamage() {
  hpMonstro -= player.atk;                                                               // Reduz a vida do monstro
  hpPorcentagem += lifeMonstro.clientWidth / (monstros[indexMonstro].hp / player.atk);   // Define a porcentagem da barra de vida 
  lifeMonstro.style.boxShadow = `inset -${hpPorcentagem}px 0 rgba(0, 0, 0, 0.6)`;        // Reduz graficamente a barra de vida do monstro
}

function monsterReborn() {
  hpMonstro = monstros[indexMonstro].hp // Retorna a vida maxima do monstro
  hpPorcentagem = 0; // Reseta a porcentagem para preencher a barra de vida do monstro
  lifeMonstro.style.boxShadow = `inset -${hpPorcentagem}px 0 rgba(0, 0, 0, 0.6)`; // Preenche a barra de vida do monstro
}




 

