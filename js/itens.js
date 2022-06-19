const potions = []

function potionsFactory(hp, price, img) {
  this.hp = hp;
  this.price = price;
  this.img = img;
  potions.push(this);
}

const potion1 = new potionsFactory(10, 10, 'img/itens/potions/hp1.png')