function shop() {
  document.querySelector('#shop').classList.toggle('desativado');
}

const menushop = document.querySelectorAll('#shop .menu-shop li');

function selecionarShop(event) {
  document.querySelector('#shop .menu-shop').classList.add('desativado')
  document.querySelector(`.${event.currentTarget.getAttribute('class')}-shop`).classList.remove('desativado');
}

menushop.forEach((menu) => {
  menu.addEventListener('click', selecionarShop)
})



