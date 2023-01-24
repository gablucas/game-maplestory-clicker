import { addButtonEvents } from './js/display/addButtonEvents.js';
import { addItensShop } from './js/display/addItensShop.js';
import { switchMonster } from './js/monster/switchMonster.js';
import { playerGift } from './js/player/playerGift.js';
import { showItemDescription } from './js/shop/showItemDescription.js';

addButtonEvents() // Adiciona os eventos a todos os botões do game
addItensShop() // Adiciona os itens no shop
showItemDescription() // Adiciona evento de clique em todos os itens do shop (mostra a descrição do mesmo)
playerGift(); // Da 999 potions para o player
switchMonster() // Define o monstro inicialmente