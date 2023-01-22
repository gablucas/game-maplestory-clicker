import itens from "./itens.js";

export default function loadShop() {

// Variaveis do Shop
const shop = document.querySelector('#shop');
const setaVoltar = document.querySelector('#shop .voltar-shop');

// Variaveis do Menu Shop
const menuShop = document.querySelector('.menu-shop');
const menuShopOpcoes = document.querySelectorAll('.menu-shop li');
const menuShopMesoPlayer = document.querySelector('#shop .meso');

// Variaveis dos itens do Menu Shop
const itemShop = document.querySelector('.item-shop');
const descriptionItemElement = document.querySelector('.item-shop-descricao');
const selectedItens = document.querySelectorAll('.item-shop-exibir li');
const tabFilterContainer = document.querySelector('.item-shop-filter');
const nameTabFilter = new Set((itens.map(item => item.id.slice(0, -3))))
let arrayItem = 0;


/** FUNÇÕES USADAS DENTRO DE OUTRAS FUNÇÕES */

// Reseta o filtro de itens - Usada nas funções inicialShopScreen()
function resetFilter() {
  selectedItens.forEach((item) => {
      item.classList.add('nofilter');
  })
}

// Exibe a tela inicial do shop e reseta o filtro de itens - Usada nas funções windowShop() e returnShop();
function inicialShopScreen() {
  setaVoltar.classList.add('desativado');
  itemShop.classList.add('desativado');
  menuShopMesoPlayer.classList.add('desativado');
  menuShop.classList.remove('desativado');

  resetFilter();
}

// Exibe a descrição do item - Usada na função itemDescription()
function insertItemDescription(item) {
  descriptionItemElement.innerHTML = `<span>${item.name}</span>
                              <span>${item.attribute[1]}: ${item.attribute[0]}</span>
                              <span>Level: ${item.level}</span>
                              <span>Price: ${item.price} mesos</span>
                              <img src=${item.img} alt="">
                              <button onclick="buyItem()">COMPRAR</button>`
}


/** FUNÇÕES PRINCIPAIS */

// Abre e fecha a janela do shop
function windowShop() {
  shop.classList.toggle('desativado');

  if(menuShop.classList.contains('desativado')) {
    inicialShopScreen();
    }
}

// Voltar para a janela inicial do shop 
function returnShop() {
  inicialShopScreen();
}

// Ação ao selecionar o tipo de item no shop
function selectMenu(event) {
  menuShop.classList.add('desativado'); 
  itemShop.classList.remove('desativado');
  const menuSelected = event.currentTarget.getAttribute('id');
  insertItemDescription(itens[0]);
  

  // Adiciona as tabs de filtro de acordo com o tipo do item
  tabFilterContainer.innerHTML = `<button class="checked" onclick="filterItem('${menuSelected}')">All</button>`;
  nameTabFilter.forEach((type) => {
    const arrayType = type.split('_');
    if(arrayType[0] === menuSelected) {
      tabFilterContainer.innerHTML += `<button onclick="filterItem('${arrayType[1]}')">${arrayType[1]}</button>`;
    }
  })

  // Exibe os itens de acordo com o tipo de item selecionado 
  itens.forEach((item, index) => {
    if(item.id.includes(menuSelected) && player.level >= item.level) {
      selectedItens[index].classList.remove('nofilter')
    }
  });

  // Ativar elementos
  setaVoltar.classList.remove('desativado');
  menuShopMesoPlayer.classList.remove('desativado');
}

menuShopOpcoes.forEach((menu) => {
  menu.addEventListener('click', selectMenu)
})

// Ação para filtrar os itens

// Mostra a descrição dos item quando selecionado
function showItemDescription(event) {
  arrayItem = event.currentTarget.getAttribute('id')
  insertItemDescription(itens[arrayItem])

}

selectedItens.forEach((item) => {
  item.addEventListener('click', showItemDescription)
})

// Comprar item
function buyItem() {

  if(player.meso >= itens[arrayItem].price){
    player.meso -= itens[arrayItem].price
    hud.atualizar();

    // Caso o item ja exista (itens de consumo) ele adiciona na quantidade
    if(itens[arrayItem].id.includes('potion') && playerItens.some(item => item.id === itens[arrayItem].id)) {
      const itemAmount = playerItens.find(item => item.id === itens[arrayItem].id);
      itemAmount.amount += 1; // Aumenta a quantidade do item potion
      document.querySelector(`.${itemAmount.id} .amount-item`).innerHTML = itemAmount.amount; // Exibe graficamente a quantidade de itens
      
    // Caso não exista, adiciona a potion no inventario e exibe a quantidade do mesmo
    }else if(itens[arrayItem].id.includes('potion')){
      playerItens.push(itens[arrayItem])
      const itemAmount = playerItens.find(item => item.id === itens[arrayItem].id);
      itemAmount.amount = 1; // Pega o item potion e adiciona uma propriedade de quantidade
      const slotItem = playerItens.length - 1;
      inventorySlot().innerHTML = `<div class="${playerItens[slotItem].id}"><img class="heal('${playerItens[slotItem].id}')" src=${playerItens[slotItem].img}><span class="amount-item">${playerItens[slotItem].amount}</span></div>`;

    // Caso seja outro tipo de item, adiciona no inventario
    } else {
      playerItens.push(itens[arrayItem])
      inventorySlot().innerHTML = `<div class="${playerItens[playerItens.length - 1].id}"><img src=${playerItens[playerItens.length - 1].img}></div>`;
    }
  }
}

// Filtar o item
function filterItem(type) {
  const tabs =  document.querySelectorAll('.item-shop-filter button');

  // Exibe graficamente o filtro selecionado
  tabs.forEach((tab) => {
    const tabOnclick = tab.getAttribute('onclick');

    if(tabOnclick.includes(type)) {
      tab.classList.add('checked');
    } else {
      tab.classList.remove('checked');
    }
  })

  // Filtra os itens de acordo com o item selecionado
  itens.forEach((item, index) => {
    if(item.id.includes(type) && player.level >= item.level) {
      selectedItens[index].classList.remove('nofilter');
    } else {
      selectedItens[index].classList.add('nofilter');
    }
  })

}

}