import { itens } from "../itens.js";
import { buyItem } from "./buyItem.js";
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
                                        <button class='${id}' id='buyItem'>COMPRAR</button>`


    // Assim que o player clica no item, é adicionado um evento para compra do mesmo
    const btnBuy = document.querySelector('#buyItem');
    btnBuy.addEventListener('click', buyItem);
}

  itensElements.forEach((item) => {
    item.addEventListener('click', handleClick)
  })
}
