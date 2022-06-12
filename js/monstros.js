// Monstros
const monstro = document.querySelector('.js-monstro')
const monstros = []

// Função construtora para criar monstros
function Monstro(level, nome, hp, xp, img) {
  this.levelMonstro = level;
  this.nomeMonstro = nome;
  this.hpMonstro = hp;
  this.xpMonstro = xp;
  this.imgMonstro = img;
  monstros.push(this)
}

// Monstros criados
const snail = new Monstro(1, 'Snail', 4, 1, 'img/monsters/monster_snail.webp');
const bluesnail = new Monstro(2, 'Blue Snail', 6, 2, 'img/monsters/monster_bluesnail.webp');
const shroom = new Monstro(3, 'Shroom', 8, 3, 'img/monsters/monster_shroom.webp');
const tino = new Monstro(4, 'Tino', 10, 3, 'img/monsters/monster_tino.webp');
const stump = new Monstro(5, 'Stump', 12, 5, 'img/monsters/monster_stump.webp');
const orangeMushroom = new Monstro(6, 'Orange Mushroom', 14, 7, 'img/monsters/monster_orangemushroom.webp');
const slime = new Monstro(7, 'Slime', 16, 9, 'img/monsters/monster_slime.webp');
const murukun = new Monstro(8, 'Murukum', 18, 9, 'img/monsters/monster_murukun.webp');
const tiguru = new Monstro(9, 'Tiguru', 20, 11, 'img/monsters/monster_tiguru.webp');
const greenmushroom = new Monstro(10, 'Green Mushroom', 22, 13, 'img/monsters/monster_greenmushroom.webp');
const mano = new Monstro(11, '[BOSS] Mano', 50, 30, 'img/monsters/monster_mano.webp');

const strangerpig = new Monstro(12, 'Stranger Pig', 24, 15, 'img/monsters/monster_strangerpig.webp');
const hornymushroom = new Monstro(13, 'Horny Mushroom', 26, 17, 'img/monsters/monster_hornymushroom.webp');
const rottingkobold = new Monstro(14, 'Rotting Kobold', 28, 19, 'img/monsters/monster_rottingkobold.webp');
const patrolrobot = new Monstro(15, 'Patrol Robot', 30, 21, 'img/monsters/monster_patrolrobot.webp');
const stonegolem = new Monstro(16, 'Stone Golem', 32, 23,'img/monsters/monster_stonegolem.webp');
const darkstonegolem = new Monstro(17,'Dark Stone Golem', 34, 25,'img/monsters/monster_darkstonegolem.webp');
const mixedgolem = new Monstro(18, 'Mixed Golem', 36, 27,'img/monsters/monster_mixedgolem.webp');
const odascout = new Monstro(19, 'Oda Scout', 38 ,29,'img/monsters/monster_odascout.webp');
const odaadvancedscout = new Monstro(20, 'Oda Advanced Scout', 40, 31,'img/monsters/monster_odaadvancedscout.webp');
const mushmom = new Monstro(21, '[BOSS] Mushmom', 100, 33,'img/monsters/monster_mushmom.webp');

const odawarrior = new Monstro(22, 'Oda Warrior', 24, 15, 'img/monsters/monster_odawarrior.webp');
const dustbox = new Monstro(23, 'Dust Box', 26, 17, 'img/monsters/monster_dustbox.webp');
const ghoststump = new Monstro(24, 'Ghost Stump', 28, 19, 'img/monsters/monster_ghoststump.webp');
const giantshadowblade = new Monstro(25, 'Giant Shadow Blade', 30, 21, 'img/monsters/monster_giantshadowblade.webp');
const evileye = new Monstro(26, 'Evil Eye', 32, 23,'img/monsters/monster_evileye.webp');
const ruinssentinel = new Monstro(27, 'Ruins Sentinel', 34, 25,'img/monsters/monster_ruinssentinel.webp');
const nefariousmonkapprentice = new Monstro(28, 'Nefarious Monk Apprentice', 36, 27,'img/monsters/monster_nefariousmonkapprentice.webp');
const nefariousmonkmaster = new Monstro(29, 'Nefarious Monk Master', 38 ,29,'img/monsters/monster_nefariousmonkmaster.webp');
const countsswordsman = new Monstro(30, 'Counts Swordsman', 40, 31,'img/monsters/monster_countsswordsman.webp');
const stumpy = new Monstro(31, '[BOSS] Stumpy', 100, 33,'img/monsters/monster_stumpy.webp');

// Dados do monstro atual
let nomeMonstro = document.querySelector('.js-nomeMonstro');
let lifeMonstro = document.querySelector('.js-hpMonstro');
let imagemMonstro = document.querySelector('.js-imgMonstro')
let hpMonstro;
let xpMonstro;

// Definir o monstro atual
nomeMonstro.innerText = monstros[0].nomeMonstro;
imagemMonstro.setAttribute('src', monstros[0].imgMonstro);
hpMonstro = monstros[0].hpMonstro;
xpMonstro = monstros[0].xpMonstro;

// Lista de monstros
const setaEsquerda = document.querySelector('.js-display-seta-esquerda');
const setaDireita = document.querySelector('.js-display-seta-direita');


 

