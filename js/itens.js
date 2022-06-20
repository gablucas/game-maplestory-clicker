const weapons = [];
const defenses = [];
const potions = [];

function weaponsFactory(name, level, atk, price, img) {
  this.name = name;
  this.level = level;
  this.atk = atk;
  this.price = price;
  this.img = img;
  weapons.push(this);
}

const wp1 = new weaponsFactory('Wooden Sword', 1, 1, 100, 'img/itens/weapons/woodensword.png');
const wp2 = new weaponsFactory('Two-Handed Sword', 1, 1, 100, 'img/itens/weapons/twohandedsword.png');
const wp3 = new weaponsFactory('Scimitar', 1, 1, 100, 'img/itens/weapons/scimitar.png');
const wp4 = new weaponsFactory('Lionheart', 1, 1, 100, 'img/itens/weapons/lionheart.png');
const wp5 = new weaponsFactory('Sparta', 1, 1, 100, 'img/itens/weapons/sparta.png');
const wp6 = new weaponsFactory('Broadsword', 1, 1, 100, 'img/itens/weapons/broadsword.png');
const wp7 = new weaponsFactory('Zard', 1, 1, 100, 'img/itens/weapons/zard.png');
const wp8 = new weaponsFactory('Berseker', 1, 1, 100, 'img/itens/weapons/berseker.png');
const wp9 = new weaponsFactory('Maple Soul Rohen', 1, 1, 100, 'img/itens/weapons/maplesoulrohen.png');
const wp10 = new weaponsFactory("Devil's Sunrise", 1, 1, 100, 'img/itens/weapons/devilssunrise.png');
const wp11 = new weaponsFactory('The Beheader', 1, 1, 100, 'img/itens/weapons/thebeheader.png');
const wp12 = new weaponsFactory("Heaven's Gate", 1, 1, 100, 'img/itens/weapons/heavensgate.png');
const wp13 = new weaponsFactory("Stonetooth Sword", 1, 1, 100, 'img/itens/weapons/stonetoothsword.png');
const wp14 = new weaponsFactory('Dragon Claymore', 1, 1, 100, 'img/itens/weapons/dragonclaymore.png');
const wp15 = new weaponsFactory('Doombringer', 1, 1, 100, 'img/itens/weapons/doombringer.png');
const wp16 = new weaponsFactory('Blue Screamer', 1, 1, 100, 'img/itens/weapons/bluescreamer.png');
const wp17 = new weaponsFactory("Raven's Wing", 1, 1, 100, 'img/itens/weapons/ravenswing.png');
const wp18 = new weaponsFactory('Blue Screamer', 1, 1, 100, 'img/itens/weapons/bluescreamer.png');
const wp19 = new weaponsFactory("Amaterasu's", 1, 1, 100, 'img/itens/weapons/amaterasus.png');
const wp20 = new weaponsFactory('Beast Bro Zweihander', 1, 1, 100, 'img/itens/weapons/beastbrozweihander.png');
const wp21 = new weaponsFactory('Maple Amethysian Claymore', 1, 1, 100, 'img/itens/weapons/mapleamethysianclaymore.png');
const wp22 = new weaponsFactory('Timeless Nibleheim', 1, 1, 100, 'img/itens/weapons/timelessnibleheim.png');
const wp23 = new weaponsFactory('Bain Sword', 1, 1, 100, 'img/itens/weapons/bainsword.png');
const wp24 = new weaponsFactory('Maple Pyrope Rohen', 1, 1, 100, 'img/itens/weapons/maplepyroperohen.png');
const wp25 = new weaponsFactory('Beryl Maple Lightcaller', 1, 1, 100, 'img/itens/weapons/berylmaplelightcaller.png');
const wp26 = new weaponsFactory('Tempest Claymore', 1, 1, 100, 'img/itens/weapons/tempestclaymore.png');
const wp27 = new weaponsFactory('Cursed Kaiserium', 1, 1, 100, 'img/itens/weapons/cursedkaiserium.png');
const wp28 = new weaponsFactory('Pioner Sword', 1, 1, 100, 'img/itens/weapons/pionersword.png');
const wp29 = new weaponsFactory('Sweetwater', 1, 1, 100, 'img/itens/weapons/sweetwater.png');
const wp30 = new weaponsFactory("Ryude's Sword", 1, 1, 100, 'img/itens/weapons/ryudessword.png');
const wp31 = new weaponsFactory('Maple Saint', 1, 1, 100, 'img/itens/weapons/maplesaint.png');
const wp32 = new weaponsFactory("Zakum's Poisonic", 1, 1, 100, 'img/itens/weapons/zakumspoisonic.png');
const wp33 = new weaponsFactory('Jaihin', 1, 1, 100, 'img/itens/weapons/jaihin.png');
const wp34 = new weaponsFactory('Utgard', 1, 1, 100, 'img/itens/weapons/utgard.png');
const wp35 = new weaponsFactory('Royal Von Leon Sword', 1, 1, 100, 'img/itens/weapons/royalvonleonsword.png');
const wp36 = new weaponsFactory('AbsoLab Broad Saber', 1, 1, 100, 'img/itens/weapons/absolabbroadsaber.png');
const wp37 = new weaponsFactory('Maple Treasure', 1, 1, 100, 'img/itens/weapons/mapletreasure.png');
const wp38 = new weaponsFactory('Arcane Umbra', 1, 1, 100, 'img/itens/weapons/arcaneumbra.png');
const wp39 = new weaponsFactory('AbsoLab Broad Saber', 1, 1, 100, 'img/itens/weapons/absolabbroadsaber.png');
const wp40 = new weaponsFactory('Fafnir Penitent Tears', 1, 1, 100, 'img/itens/weapons/fafnirpenitenttears.png');
const wp41 = new weaponsFactory('Sealed Genesis', 1, 1, 100, 'img/itens/weapons/sealedgenesis.png');


function potionsFactory(name, level, restore, price, img) {
  this.name = name;
  this.level = level;
  this.restore = restore;
  this.price = price;
  this.img = img;
  potions.push(this);
}

const hp1 = new potionsFactory('Begginner HP', 1, 10, 5, 'img/itens/potions/hp1.png');
const mp1 = new potionsFactory('Begginner MP', 1, 10, 5, 'img/itens/potions/mp1.png');
const hp2 = new potionsFactory('Adventurer HP', 10, 40, 10, 'img/itens/potions/hp2.png');
const mp2 = new potionsFactory('Adventurer MP', 10, 40, 10, 'img/itens/potions/mp2.png');
const hp3 = new potionsFactory('Brave HP', 10, 40, 10, 'img/itens/potions/hp3.png');
const mp3 = new potionsFactory('Brave MP', 10, 40, 10, 'img/itens/potions/mp3.png');
const hp4 = new potionsFactory('Hero HP', 10, 40, 10, 'img/itens/potions/hp4.png');
const mp4 = new potionsFactory('Hero MP', 10, 40, 10, 'img/itens/potions/mp4.png');
const hp5 = new potionsFactory('Transcendent HP', 10, 40, 10, 'img/itens/potions/hp5.png');
const mp5 = new potionsFactory('Transcendent MP', 10, 40, 10, 'img/itens/potions/mp5.png');
const hp6 = new potionsFactory('Godness HP', 10, 40, 10, 'img/itens/potions/hp6.png');
const mp6 = new potionsFactory('Godness MP', 10, 40, 10, 'img/itens/potions/mp6.png');
const hp7 = new potionsFactory('Overpower HP', 10, 40, 10, 'img/itens/potions/hp7.png');
const mp7 = new potionsFactory('Overpower MP', 10, 40, 10, 'img/itens/potions/mp7.png');
const hp8 = new potionsFactory('Forged By Gods HP', 10, 40, 10, 'img/itens/potions/hp8.png');
const mp8 = new potionsFactory('Forged By Gods MP', 10, 40, 10, 'img/itens/potions/mp8.png');




