// Monstros
const monstro = document.querySelector('.js-monstro')
const monstros = []

// Função construtora para criar monstros
function Monstro(nome, xp, img, level) {
  this.nomeMonstro = nome;
  this.xpMonstro = xp;
  this.imgMonstro = img;
  this.levelMonstro = level;
  monstros.push(this)
}

// Monstros criados
const snail = new Monstro('Snail', 1000, 'img/monsters/monster_snail.webp', 1);
const shroom = new Monstro('Shroom', 3, 'img/monsters/monster_shroom.webp', 3);
const stump = new Monstro('Stump', 5, 'img/monsters/monster_stump.webp', 5);
const orangeMushroom = new Monstro('Orange Mushroom', 7, 'img/monsters/monster_orangemushroom.webp', 6);
const slime = new Monstro('Slime', 9, 'img/monsters/monster_slime.webp', 7);
const tiguru = new Monstro('Tiguru', 11, 'img/monsters/monster_tiguru.webp', 9);
const greenmushroom = new Monstro('Green Mushroom', 13, 'img/monsters/monster_greenmushroom.webp', 10);
const mano = new Monstro('[BOSS] Mano', 13, 'img/monsters/monster_mano.webp', 11);

// Dados do monstro atual
let nomeMonstroAtual = document.querySelector('.js-nomeMonstro');
let imagemMonstroAtual = document.querySelector('.js-imgMonstro')
let xpMonstroAtual;

// Definir o monstro atual
nomeMonstroAtual.innerText = monstros[0].nomeMonstro;
imagemMonstroAtual.setAttribute('src', monstros[0].imgMonstro);
xpMonstroAtual = monstros[0].xpMonstro;


// Lista de monstros
const setaEsquerda = document.querySelector('.js-display-seta-esquerda');
const setaDireita = document.querySelector('.js-display-seta-direita');


 

