import { filterItens } from "../shop/filterItens.js";
import { descriptionItemElement, itemShop, menuShop, menuShopMesoPlayer, menuTab, setaVoltar, shop } from "../shop/shopElements.js";

// Abre e fecha a janela do shop
export function windowShop() {
  shop.classList.toggle('desativado');

  if(menuShop.classList.contains('desativado')) {
    resetShop();
  } 
}

// Ação ao selecionar uma opção do menu
 export function selectMenuOption(event) {
  const menuSelected = event.currentTarget.getAttribute('id');

  menuShop.classList.add('desativado'); 
  itemShop.classList.remove('desativado');

  menuTab[0].setAttribute('id', `filter-all-${menuSelected}`);

  // Exibe as tabs de acordo com o tipo de item
  menuTab.forEach((type) => {
    const getType = type.getAttribute('id');

    if (getType.includes(menuSelected) || getType.includes('filter-items')) {
      type.classList.remove('hide');
    } else {
      type.classList.add('hide');
    }
  })

  // Ativar elementos
  setaVoltar.classList.remove('desativado');
  menuShopMesoPlayer.classList.remove('desativado');

  filterItens(menuSelected)
}

// Exibe a tela inicial do shop e reseta o filtro de itens - Usada nas funções windowShop() e returnShop();
function resetShop() {
  setaVoltar.classList.add('desativado');
  itemShop.classList.add('desativado');
  menuShopMesoPlayer.classList.add('desativado');
  menuShop.classList.remove('desativado');

  descriptionItemElement.innerHTML = "";  

  menuTab.forEach((tab, index) => {
    if (index === 0) {
      tab.classList.add('checked')
    } else {
      tab.classList.remove('checked')
    }
  })
}

export function returnMenuOptions() {
  resetShop();
}

// Ação ao selecionar uma tab do menu
function selectMenuTab(event) {
  menuTab.forEach(type => type.classList.remove('checked'));
  event.currentTarget.classList.add('checked');

  const typeSelected = event.currentTarget.getAttribute('id').split('-')[2]
  filterItens(typeSelected)
}

menuTab.forEach((type) => {
  type.addEventListener('click', selectMenuTab)
})
