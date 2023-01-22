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
const snail = new Monstro(1, 'Snail', 2, 1, 1, 2, 'img/monsters/monster_snail.webp');
const bluesnail = new Monstro(2, 'Blue Snail', 5, 3, 3, 4, 'img/monsters/monster_bluesnail.webp');
const shroom = new Monstro(3, 'Shroom', 9, 7, 5, 5, 'img/monsters/monster_shroom.webp');
const tino = new Monstro(9, 'Tino', 12, 10, 9,  7, 'img/monsters/monster_tino.webp');
const stump = new Monstro(15, 'Stump', 20, 6, 5,  1, 'img/monsters/monster_stump.webp');
const orangeMushroom = new Monstro(20, 'Orange Mushroom', 24, 7, 7,  1, 'img/monsters/monster_orangemushroom.webp');
const slime = new Monstro(30, 'Slime', 28, 8, 9,  1, 'img/monsters/monster_slime.webp');
const murukun = new Monstro(40, 'Murukum', 32, 9, 9,  1, 'img/monsters/monster_murukun.webp');
const tiguru = new Monstro(50, 'Tiguru', 36, 10, 11,  1, 'img/monsters/monster_tiguru.webp');
const greenmushroom = new Monstro(60, 'Green Mushroom', 40, 10, 13,  1, 'img/monsters/monster_greenmushroom.webp');
const mano = new Monstro(61, '[BOSS] Mano', 50, 15, 30,  1, 'img/monsters/monster_mano.webp');

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

export { monstros }