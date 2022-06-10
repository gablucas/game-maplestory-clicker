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
const monstro = document.querySelector('.js-monstroCorpo')
const monstros= []

// Função construtora para criar monstros
function Monstro(nome, xp) {
  this.nomeMonstro = nome;
  this.monstroXP = xp;
  monstro.push(this)
}

// Monstros criados
const hopi = new Monstro('Hopi', 55);
const goblin = new Monstro('Goblin', 4)


// Array com as infos dos montros
const nomeMonstros = [hopi.nomeMonstro, goblin.nomeMonstro];
const xpMonstros = [hopi.monstroXP, goblin.monstroXP];


// Dados do monstro atual
let nomeMonstroAtual = document.querySelector('.js-nomeMonstro');
let xpMonstroAtual;

  // Define o nome e xp do monstro inicial
  nomeMonstroAtual.innerText = nomeMonstros[0];
  xpMonstroAtual = xpMonstros[0];

// Permite trocar de monstro na função 'trocarMonstro'
let indexMonstro = 0;


// Função para mudar de monstro
const trocarMonstro = document.querySelectorAll('.js-mudarMonstro span');

function trocaMonstro(event) {
    if(event.currentTarget.innerText === 'Anterior') {
      --indexMonstro;
      nomeMonstroAtual.innerText = nomeMonstros[indexMonstro];
      xpMonstroAtual = xpMonstros[indexMonstro];

    } else if(event.currentTarget.innerText === "Próximo") {
      ++indexMonstro
      nomeMonstroAtual.innerText = nomeMonstros[indexMonstro];
      xpMonstroAtual = xpMonstros[indexMonstro];
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
