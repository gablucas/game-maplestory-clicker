const shop = document.querySelector('#shop');
const menushop = document.querySelector('.menu-shop');
const itemshop = document.querySelector('.item-shop');
const itensmenushop = document.querySelectorAll('.menu-shop li');

/** ABRIR JANELA DO SHOP */
function windowShop() {
  shop.classList.toggle('desativado');

  if(menushop.classList.contains('desativado')) {
    menushop.classList.remove('desativado')
    itemshop.classList.add('desativado')
  }
}

/** ABRIR ABA DO ITENS SELECIONADO, ESSA FUNÇÃO É USADA NA AÇÃO ABAIXO*/
function selectedItem(item) {
  menushop.classList.add('desativado'); 
  itemshop.classList.remove('desativado');

  item.forEach((item) => {
    itemshop.innerHTML +=
       `<li><div><img src=${item.img} alt=""></img></div>
       <span>${item.name}</span>
       <span>${item.price} mesos</span></li>`
  })
}

/** AÇÃO AO SELECIONAR O TIPO DE ITEM NO SHOP */
function selecionarMenu(event) {
  const menu = event.currentTarget.getAttribute('class');

  if(menu === 'weapon') {
    selectedItem(weapons);
  }else if(menu === 'defense') {
    selectedItem(defenses);
  }else if(menu === 'potion') {
    selectedItem(potions);
  }
}

itensmenushop.forEach((menu) => {
  menu.addEventListener('click', selecionarMenu)
})


