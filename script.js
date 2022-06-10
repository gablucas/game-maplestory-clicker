//XP
let xpAtual = 0;


// Level
let level = 1;
let xpProximoLevel = 50;
let exibirLevel = document.querySelector('.js-level div');
exibirLevel.innerHTML = level;


// BarraXP
let barraXP = document.querySelector('.js-barraxp')
barraXP.innerHTML = xpAtual +" / "+ xpProximoLevel


// Monstro
const monstro = document.querySelector('.js-monstro img')
const monstros = []

// Função construtora para criar monstros
function Monstro(nome, xp, img) {
  this.nomeMonstro = nome;
  this.xpMonstro = xp;
  this.imgMonstro = img;
  monstros.push(this)
}

// Monstros criados
const snail = new Monstro('Snail', 1, 'img/monsters/monster_snail.webp');
const shroom = new Monstro('Shroom', 3, 'img/monsters/monster_shroom.webp');
const stump = new Monstro('Stump', 5, 'img/monsters/monster_stump.webp');



// Dados do monstro atual
let nomeMonstroAtual = document.querySelector('.js-nomeMonstro');
let imagemMonstroAtual = document.querySelector('.js-imgMonstro')
let xpMonstroAtual;

  // Definir o monstro atual
  nomeMonstroAtual.innerText = monstros[0].nomeMonstro;
  imagemMonstroAtual.setAttribute('src', monstros[0].imgMonstro)
  xpMonstroAtual = monstros[0].xpMonstro;

// Permite trocar de monstro na função 'trocarMonstro'
let indexMonstro = 0;


// Função para mudar de monstro
const trocarMonstro = document.querySelectorAll('.js-mudarMonstro span');

function trocaMonstro(event) {
    if(event.currentTarget.innerText === 'Anterior') {
      --indexMonstro;
      nomeMonstroAtual.innerText = monstros[indexMonstro].nomeMonstro;
      imagemMonstroAtual.setAttribute('src', monstros[indexMonstro].imgMonstro)
      xpMonstroAtual = monstros[indexMonstro].xpMonstro;

    } else if(event.currentTarget.innerText === "Próximo") {
      ++indexMonstro
      nomeMonstroAtual.innerText = monstros[indexMonstro].nomeMonstro;
      imagemMonstroAtual.setAttribute('src', monstros[indexMonstro].imgMonstro)
      xpMonstroAtual = monstros[indexMonstro].xpMonstro;
    }

    console.log(event.currentTarget)
}

trocarMonstro.forEach((item) => {
  item.addEventListener('click', trocaMonstro)
})


// Ganhar XP ao clicar no monstro
function ganhaXP() {

  // Adicionar XP
  xpAtual += xpMonstroAtual;

  // Ações após subir de level
  
  if(xpAtual > xpProximoLevel) {
    xpAtual -= xpProximoLevel;
    ++level;
    exibirLevel.innerText = level;
    xpProximoLevel = Math.round(level * 0.25 * xpProximoLevel + 100);
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
