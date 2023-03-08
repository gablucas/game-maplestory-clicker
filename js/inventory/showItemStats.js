import { itens } from "../itens.js";

export function showItemStats({ currentTarget }) {

  if (currentTarget.firstElementChild) {
    const itemID = currentTarget.firstElementChild.getAttribute('class');
    const itemType = itemID.split('-');
    const item = itens[itemType[1]].find((itemFind) => itemFind.id === itemID);
    const showItemStatsElement = document.createElement('div');
    showItemStatsElement.setAttribute('id', 'showItemStats');

    showItemStatsElement.innerHTML = `<span>${item.name}</span>
                                      <span>${item.attribute[1]}: ${item.attribute[0]}</span>
                                      <span>Level: ${item.level}</span>`

    document.body.append(showItemStatsElement);


    function moveItemStats(event) {
      showItemStatsElement.style.top = 15 + event.pageY + 'px';
      showItemStatsElement.style.left = 15 + event.pageX + 'px';
    }

    function removeItemStats() {
      showItemStatsElement.remove();

      currentTarget.removeEventListener('mousemove', moveItemStats);
      currentTarget.removeEventListener('mouseleave', removeItemStats);
    }


    currentTarget.addEventListener('mousemove', moveItemStats);
    currentTarget.addEventListener('mouseleave', removeItemStats);
  }


}