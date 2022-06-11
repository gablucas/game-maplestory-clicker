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
const snail = new Monstro(1, 'Snail', 5, 1, 'img/monsters/monster_snail.webp');
const shroom = new Monstro(3, 'Shroom', 7, 3, 'img/monsters/monster_shroom.webp');
const stump = new Monstro(5, 'Stump', 9, 5, 'img/monsters/monster_stump.webp');
const orangeMushroom = new Monstro(6, 'Orange Mushroom', 11, 7, 'img/monsters/monster_orangemushroom.webp');
const slime = new Monstro(7, 'Slime', 13, 9, 'img/monsters/monster_slime.webp');
const tiguru = new Monstro(9, 'Tiguru', 15, 11, 'img/monsters/monster_tiguru.webp');
const greenmushroom = new Monstro(10, 'Green Mushroom', 17, 13, 'img/monsters/monster_greenmushroom.webp');
const mano = new Monstro(11, '[BOSS] Mano', 50, 30, 'img/monsters/monster_mano.webp');
const strangerpig = new Monstro(12, 'Stranger Pig', 21, 15, 'img/monsters/monster_strangerpig.webp');
const hornymushroom = new Monstro(13, 'Horny Mushroom', 23, 17, 'img/monsters/monster_hornymushroom.webp');
const rottingkobold = new Monstro(14, 'Rotting Kobold', 25, 19, 'img/monsters/monster_rottingkobold.webp');
const patrolrobot = new Monstro(15, 'Patrol Robot', 27, 21, 'img/monsters/monster_patrolrobot.webp');
const stonegolem = new Monstro(16, 'Stone Golem', 29, 23,'img/monsters/monster_stonegolem.webp');
const darkstonegolem = new Monstro(17,'Dark Stone Golem', 31, 25,'img/monsters/monster_darkstonegolem.webp');
const mixedgolem = new Monstro(18, 'Mixed Golem', 33, 27,'img/monsters/monster_mixedgolem.webp');
const odascout = new Monstro(19, 'Oda Scout', 35 ,29,'img/monsters/monster_odascout.webp');
const odaadvancedscout = new Monstro(20, 'Oda Advanced Scout', 37, 31,'img/monsters/monster_odaadvancedscout.webp');
const mushmom = new Monstro(21, '[BOSS] Mushmom', 39, 33,'img/monsters/monster_mushmom.webp');

// Dados do monstro atual
let nomeMonstro = document.querySelector('.js-nomeMonstro');
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


 

