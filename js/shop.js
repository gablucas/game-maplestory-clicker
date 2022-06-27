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

// Mostra o item selecionado - Usado na função itemDescription()
function displaySelectedItem(action) {
  if(action === "remove") {
    selectedItens[arrayItem].children[1].classList.remove('selected');
    selectedItens[arrayItem].children[2].classList.remove('selected');
  } else if(action === "add") {
    selectedItens[arrayItem].children[1].classList.add('selected');
    selectedItens[arrayItem].children[2].classList.add('selected');
  }
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
  itens.forEach((tipoItem, index) => {
    if(tipoItem.id.includes(menuSelected)) {
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
  displaySelectedItem("remove")

  arrayItem = event.currentTarget.getAttribute('id')
  insertItemDescription(itens[arrayItem])
  displaySelectedItem("add")
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
    if(itens[arrayItem].id.includes('potion') && playerItens.some(item => item.name === itens[arrayItem].name)) {
      playerItens.some((item) => {
        if(item.name === itens[arrayItem].name) {
          item.teste += 1;
        }
      })
    } else {
      playerItens.push(itens[arrayItem])
      bagInventory[emptySlot()].innerHTML = `<img class="${playerItens[playerItens.length - 1].id}" src=${playerItens[playerItens.length - 1].img}>`;
    }
  }
}

// Filtar o item
function filterItem(type) {
  const tabs =  document.querySelectorAll('.item-shop-filter button');

  tabs.forEach((tab) => {
    const tabOnclick = tab.getAttribute('onclick');
    console.log(tabOnclick)

    if(tabOnclick.includes(type)) {
      tab.classList.add('checked');
    } else {
      tab.classList.remove('checked');
    }
  })

  itens.forEach((item, index) => {
    if(item.id.includes(type)) {
      selectedItens[index].classList.remove('nofilter');
    } else {
      selectedItens[index].classList.add('nofilter');
    }
  })


}