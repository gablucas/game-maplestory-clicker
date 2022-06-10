//XP
let xpAtual = 0;

// Level
let level = 1;
let xpProximoLevel = 50;
let exibirLevel = document.querySelector('.js-level span');
exibirLevel.innerHTML = level;

// BarraXP
let barraXP = document.querySelector('.js-barraxp')
barraXP.innerHTML = xpAtual +" / "+ xpProximoLevel

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
const snail = new Monstro('Snail', 50, 'img/monsters/monster_snail.webp', 1);
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
imagemMonstroAtual.setAttribute('src', monstros[0].imgMonstro)
xpMonstroAtual = monstros[0].xpMonstro;

// Lista de monstros
const containerListaMonstros = document.querySelector('.js-monstrolista')

// Cria a lista de monstros para selecionar
monstros.forEach((monstro) => {
  if(monstro.nomeMonstro.includes('[BOSS]')) {
    containerListaMonstros.innerHTML += `<li id="monstrolv${monstro.levelMonstro}">BOSS</li>`;
  } else {
    containerListaMonstros.innerHTML += `<li id="monstrolv${monstro.levelMonstro}">LV ${monstro.levelMonstro}</li>`;
  }
})

let listaMonstros = document.querySelectorAll('.js-monstrolista li');
listaMonstros[0].classList.add('ativo')

// Selecionar e exibir o monstro
function selecionarMonstro(event) {

  // Pega o level do monstro pela classe usando slice para tirar as letras
  let levelLista = +event.currentTarget.getAttribute('id').slice(9);

  // Verifica o level pego com o level do array de monstros
  monstros.forEach((monstro) => {
    if(monstro.levelMonstro === levelLista) {
      nomeMonstroAtual.innerText = monstro.nomeMonstro;
      imagemMonstroAtual.setAttribute('src', monstro.imgMonstro)
      xpMonstroAtual = monstro.xpMonstro;
    }
  })
}

listaMonstros.forEach((monstro) => {
  monstro.addEventListener('click', selecionarMonstro)
  
})


// Ganhar XP ao clicar no monstro
function ganhaXP() {

  // Adicionar XP
  xpAtual += xpMonstroAtual;

  // Ações após subir de level
  if(xpAtual > xpProximoLevel) {
    ++level;
    xpAtual -= xpProximoLevel;
    exibirLevel.innerText = level;
    xpProximoLevel = Math.round(level * 0.25 * xpProximoLevel + 100);

    // Verifica se ja pode entrar no proximo mapa
    listaMonstros.forEach((monstroLv) => {
      if(level >= +monstroLv.getAttribute('id').slice(9)) {
        monstroLv.classList.add('ativo')
      }
    })

  }

  // Mostrar progresso do XP na barra
  // Faz o calculo da porcetagem referente ao preenchimento da div que exibe o progresso do level
  // Calulo se baseia de acordo com o tamanho da div
  // Foi preciso arredondar o valor, pois alguns numeros quebrados causavam bug
  let xpPorcentagem = Math.round(xpAtual * barraXP.clientWidth / xpProximoLevel)

  barraXP.style.boxShadow = "inset "+xpPorcentagem+ "px 0 green";
  barraXP.innerText = xpAtual +" / "+ xpProximoLevel
}

monstro.addEventListener('click', ganhaXP)
