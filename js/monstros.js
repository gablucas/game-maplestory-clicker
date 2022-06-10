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
const snail = new Monstro('Snail', 1, 'img/monsters/monster_snail.webp', 1);
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
const mudarMonstro = document.querySelectorAll('.js-display-seta');
let indexMonstro = 0;

// Selecionar e exibir o monstro
function selecionarMonstro(event) {
  const setaEsquerda = event.currentTarget.getAttribute('src').includes('esquerda');
  const setaDireita = event.currentTarget.getAttribute('src').includes('direita');
  
  if(setaEsquerda && indexMonstro > 0) {
    --indexMonstro;
    nomeMonstroAtual.innerText = monstros[indexMonstro].nomeMonstro;
    imagemMonstroAtual.setAttribute('src', monstros[indexMonstro].imgMonstro)
    xpMonstroAtual = monstros[indexMonstro].xpMonstro;

  } else if(setaDireita && indexMonstro < monstros.length - 1) {
    
    ++indexMonstro;
    nomeMonstroAtual.innerText = monstros[indexMonstro].nomeMonstro;
    imagemMonstroAtual.setAttribute('src', monstros[indexMonstro].imgMonstro)
    xpMonstroAtual = monstros[indexMonstro].xpMonstro;
    mudarMonstro[0].setAttribute('src', 'img/buttons/seta_esquerda.png');
  }

  if(indexMonstro === 0) {
    mudarMonstro[0].setAttribute('src', '');
  }
}

  mudarMonstro.forEach((monstro) => {
    monstro.addEventListener('click', selecionarMonstro)
  })

 

