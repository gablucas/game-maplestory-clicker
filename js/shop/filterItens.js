// Filtra os itens - Usada na função selectMenuOption e selectMenuTab
export function filterItens(type) {
  const itens = document.querySelectorAll('.item-shop-exibir li')

  itens.forEach((item) => {
    if(!item.getAttribute('id').includes(type)) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  })
}