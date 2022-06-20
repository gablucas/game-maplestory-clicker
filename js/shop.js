/** ABRIR JANELA DO SHOP */
function shop() {
  document.querySelector('#shop').classList.toggle('desativado');
}

/** ABRIR ABA DO ITENS SELECIONADO */
function selectedItemShop(item) {
  document.querySelector('.menu-shop').classList.add('desativado'); 
  document.querySelector('.item-shop').classList.remove('desativado');
  item.forEach((item) => {
    document.querySelector('.item-shop').innerHTML +=
       `<li><div><img src=${item.img} alt=""></img></div>
       <span>${item.name}</span>
       <span>${item.price} mesos</span></li>`
  })
}

/** AÇÃO AO SELECIONAR O TIPO DE ITEM NO SHOP */
const menushop = document.querySelectorAll('.menu-shop li');

function selecionarMenu(event) {
  const menu = event.currentTarget.getAttribute('class');

  if(menu === 'weapon') {
    selectedItemShop(weapons);
  }else if(menu === 'defense') {
    selectedItemShop(defenses);
  }else if(menu === 'potion') {
    selectedItemShop(potions);
  }
}

menushop.forEach((menu) => {
  menu.addEventListener('click', selecionarMenu)
})


