import { itens } from "../itens.js";
import { buyItem } from "./buyItem.js";
import { sellItem } from "./sellItem.js";
import { descriptionItemElement } from "./shopElements.js";

// Mostra a descrição dos item quando selecionado
export function showItemDescription() {

  const itensElements = document.querySelectorAll('.item-shop-exibir li')

  function handleClick(event) {
    const id = event.currentTarget.getAttribute('id');
    const type = id.split('-')[1]
  
    const selectedItem = itens[type].find((item) => item.id === id);
  
    descriptionItemElement.innerHTML = `<span>${selectedItem.name}</span>
                                        <span>${selectedItem.attribute[1]}: ${selectedItem.attribute[0]}</span>
                                        <span>Level: ${selectedItem.level}</span>
                                        <span>Price: ${selectedItem.price} mesos</span>
                                        <img src=${selectedItem.img} alt="">
                                        <div class=shopButtons>
                                          <button class='${id}' id='buyItem'>COMPRAR</button>
                                          <button class='${id}' id='sellItem'>VENDER</button>
                                        </div>
                                        `


    // Assim que o player clica no item, é adicionado um evento para compra e venda do mesmo
    const btnBuy = document.querySelector('#buyItem');
    btnBuy.addEventListener('click', buyItem);

    const btnSell = document.querySelector('#sellItem');
    btnSell.addEventListener('click', sellItem);
}

  itensElements.forEach((item) => {
    item.addEventListener('click', handleClick)
  })
}
