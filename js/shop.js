// Variaveis do Shop
const shop = document.querySelector('#shop');
const setaVoltar = document.querySelector('#shop .voltar-shop');

// Variaveis do Menu Shop
const menuShop = document.querySelector('.menu-shop');
const menuShopOpcoes = document.querySelectorAll('.menu-shop li');
const menuShopMesoPlayer = document.querySelector('#shop .meso');
let menuSelected;

// Variaveis dos itens do Menu Shop
const itemShop = document.querySelector('.item-shop');
const descriptionItemElement = document.querySelector('.item-shop-descricao')
const selectedItens = document.querySelectorAll('.itens-shop-exibir li');
let arrayItem = 0;


// Funções usadas na funcao windowShop() e returnShop();
function inicialShopScreen() {
  setaVoltar.classList.add('desativado');
  itemShop.classList.add('desativado');
  menuShopMesoPlayer.classList.add('desativado');
  menuShop.classList.remove('desativado');
}

function resetFilterItens() {
  selectedItens.forEach((item) => {
    if(!item.classList.contains('nofilter')) {
      item.classList.add('nofilter')
    }
  })
}

/** ABRIR JANELA DO SHOP */
function windowShop() {
  shop.classList.toggle('desativado');

  if(menuShop.classList.contains('desativado')) {
    inicialShopScreen();
    }

    resetFilterItens();
}

function returnShop() {
  inicialShopScreen();
  resetFilterItens();
}

/** ADICIONA A DESCRICAO DOS ITEM */
function descriptionItem(item) {
  descriptionItemElement.innerHTML = `<span>${item.name}</span>
                              <span>${item.attribute[1]}: ${item.attribute[0]}</span>
                              <span>Level: ${item.level}</span>
                              <span>Price: ${item.price} mesos</span>
                              <img src=${item.img} alt="">
                              <button onclick="buyItem()">COMPRAR</button>`
}

/** AÇÃO AO SELECIONAR O TIPO DE ITEM NO SHOP */
function selecionarMenu(event) {
  menuShop.classList.add('desativado'); 
  itemShop.classList.remove('desativado');
  menuSelected = event.currentTarget.getAttribute('id');
  descriptionItem(itens[0]);


  // Verifica o tipo do item selecionado, exibe todos itens, e adiciona o primeiro item na descricao
  itens.forEach((tipoItem, index) => {
    if(tipoItem.id === menuSelected) {
      selectedItens[index].classList.remove('nofilter')
    }
  })

  // Ativar elementos
  setaVoltar.classList.remove('desativado');
  menuShopMesoPlayer.classList.remove('desativado');
}

menuShopOpcoes.forEach((menu) => {
  menu.addEventListener('click', selecionarMenu)
})


function itemDescription(event) {
  arrayItem = event.currentTarget.getAttribute('id')
  descriptionItem(itens[arrayItem])
}

selectedItens.forEach((item) => {
  item.addEventListener('click', itemDescription)
})

/** AÇÃO AO COMPRAR O ITEM */
function buyItem() {
  const emptySlot = bagInventory.findIndex(slot => slot.innerHTML === "");

  if(player.meso >= itens[arrayItem].price){
    player.meso -= itens[arrayItem].price
    hud.atualizar();
    bagInventory[emptySlot].innerHTML = `<img class="${arrayItem}" src=${itens[arrayItem].img}>`;
  }
}

