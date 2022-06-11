// Monstros
const monstro = document.querySelector('.js-monstro')
const monstros = []

// Função construtora para criar monstros
function Monstro(nome, hp, xp, img, level) {
  this.nomeMonstro = nome;
  this.hpMonstro = hp;
  this.xpMonstro = xp;
  this.imgMonstro = img;
  this.levelMonstro = level;
  monstros.push(this)
}

// Monstros criados
const snail = new Monstro('Snail', 5, 1, 'img/monsters/monster_snail.webp', 1);
const shroom = new Monstro('Shroom', 7, 3, 'img/monsters/monster_shroom.webp', 3);
const stump = new Monstro('Stump', 9, 5, 'img/monsters/monster_stump.webp', 5);
const orangeMushroom = new Monstro('Orange Mushroom', 11, 7, 'img/monsters/monster_orangemushroom.webp', 6);
const slime = new Monstro('Slime', 13, 9, 'img/monsters/monster_slime.webp', 7);
const tiguru = new Monstro('Tiguru', 15, 11, 'img/monsters/monster_tiguru.webp', 9);
const greenmushroom = new Monstro('Green Mushroom', 17, 13, 'img/monsters/monster_greenmushroom.webp', 10);
const mano = new Monstro('[BOSS] Mano', 50, 30, 'img/monsters/monster_mano.webp', 11);
const strangerpig = new Monstro('Stranger Pig', 21, 15, 'img/monsters/monster_strangerpig.webp', 11);
const hornymushroom = new Monstro('Horny Mushroom', 23, 17, 'img/monsters/monster_hornymushroom.webp', 12);
const rottingkobold = new Monstro('Rotting Kobold', 25, 19, 'img/monsters/monster_rottingkobold.webp', 13);
const patrolrobot = new Monstro('Patrol Robot', 27, 21, 'img/monsters/monster_patrolrobot.webp', 14);
const stonegolem = new Monstro('Stone Golem', 29, 23,'img/monsters/monster_stonegolem.webp', 15);
const darkstonegolem = new Monstro('Dark Stone Golem', 31, 25,'img/monsters/monster_darkstonegolem.webp', 16);
const mixedgolem = new Monstro('Mixed Golem', 33, 27,'img/monsters/monster_mixedgolem.webp', 17);
const odascout = new Monstro('Oda Scout', 35 ,29,'img/monsters/monster_odascout.webp', 18);
const odaadvancedscout = new Monstro('Oda Advanced Scout', 37, 31,'img/monsters/monster_odaadvancedscout.webp', 19);
const mushmom = new Monstro('[BOSS] Mushmom', 39, 33,'img/monsters/monster_mushmom.webp', 20);

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


 

