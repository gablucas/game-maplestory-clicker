import { itens, itensKeys } from "../itens.js"
import { exibirItens } from "../shop/shopElements.js"

  // Adiciona todos os itens no shop
export function addItensShop() {
  itensKeys.forEach((key) => {
    itens[key].forEach((item) => {
      exibirItens.innerHTML +=
      `<li id="${item.id}" class="hide"><div class="img-item"><img src=${item.img} alt=""></img></div>
      <span class="item-info">${item.name}</span>
      <span class="item-info">${item.price} mesos</span></li>`
    })
  })
}

