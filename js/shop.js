// Variaveis do Shop
const shop = document.querySelector('#shop');
const setaVoltar = document.querySelector('#shop .voltar-shop');

// Variaveis do Menu Shop
const menuShop = document.querySelector('.menu-shop');
const menuShopOpcoes = document.querySelectorAll('.menu-shop li');
const menuShopMesoPlayer = document.querySelector('#shop .meso');

// Variaveis dos itens do Menu Shop
const itemShop = document.querySelector('.item-shop');
const exibirItens = document.querySelector('.itens-shop-exibir')
const descricaoItens = document.querySelector('.item-shop-descricao')

/** ABRIR JANELA DO SHOP */
function windowShop() {
  shop.classList.toggle('desativado');

  if(menuShop.classList.contains('desativado')) {
    setaVoltar.classList.add('desativado');
    menuShopMesoPlayer.classList.add('desativado');
    itemShop.classList.add('desativado');
    menuShop.classList.remove('desativado');
    exibirItens.innerHTML = "";
  }
}

function returnShop() {
  setaVoltar.classList.add('desativado')
  itemShop.classList.add('desativado');
  menuShopMesoPlayer.classList.add('desativado');
  menuShop.classList.remove('desativado');
  exibirItens.innerHTML = "";
}

/** INSERE OS ITENS DE ACORDO COM O TIPO SELECIONADO */
function selectedItem(tipoItem) {
  menuShop.classList.add('desativado'); 
  itemShop.classList.remove('desativado');

  tipoItem.forEach((item, index) => {
    exibirItens.innerHTML +=
       `<li class="${index}"><div><img src=${item.img} alt=""></img></div>
       <span>${item.name}</span>
       <span>${item.price} mesos</span></li>`
  })
}

/** ADICIONA A DESCRICAO DOS ITEM */
function descriptionItem(tipoItem, atribute, indexItem) {
  descricaoItens.innerHTML = `<span>${tipoItem[indexItem].name}</span>
                              <span>${atribute}: ${tipoItem[indexItem].attribute}</span>
                              <span>Level: ${tipoItem[indexItem].level}</span>
                              <span>Price: ${tipoItem[indexItem].price} mesos</span>
                              <img src=${tipoItem[indexItem].img} alt="">
                              <button onclick="buyItem()">COMPRAR</button>`
}

/** AÇÃO AO SELECIONAR O TIPO DE ITEM NO SHOP */
function selecionarMenu(event) {
  const menu = event.currentTarget.getAttribute('class');

  // Verifica o tipo do item selecionado, exibe todos itens, e adiciona o primeiro item na descricao
  if(menu === 'weapon') {
    selectedItem(weapons);
    descriptionItem(weapons, 'Atk', 0);
  }else if(menu === 'defense') {
    selectedItem(defenses);
    descriptionItem(defenses, 'Def', 0);
  }else if(menu === 'potion') {
    selectedItem(potions);
    descriptionItem(potions, 'Heal', 0);
  }

  // Ativar elementos
  setaVoltar.classList.remove('desativado');
  menuShopMesoPlayer.classList.remove('desativado');

  // Armazena todos os itens da opção selecionada pelo usuario
  const itensExibidos = document.querySelectorAll('.itens-shop-exibir li');

  // Mostra a descricao do item quando clica sobre o mesmo
  function descricaoItem(event) {
    const arrayItem = event.currentTarget.getAttribute('class');
    
    if(menu === 'weapon') {
      descriptionItem(weapons, 'Atk', arrayItem);
    }else if(menu === 'defense') {
      descriptionItem(defenses, 'Def', arrayItem);
    }else if(menu === 'potion') {
      descriptionItem(potions, 'Heal', arrayItem);
    }
  }

  itensExibidos.forEach((item) => {
    item.addEventListener('click', descricaoItem)
  })
}

menuShopOpcoes.forEach((menu) => {
  menu.addEventListener('click', selecionarMenu)
})

/** AÇÃO AO COMPRAR O ITEM */
function buyItem() {
  console.log('item comprado')
}



