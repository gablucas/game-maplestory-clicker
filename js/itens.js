const weapons = [];
const defenses = [];
const potions = [];


function weaponsFactory(name, level, attribute, price, id, img) {
  this.name = name;
  this.level = level;
  this.attribute = [attribute, 'Atk'];
  this.price = price;
  this.id = `weapon_${id}`;
  this.img = img;
  weapons.push(this);
}

const wp1 = new weaponsFactory('Wooden Sword', 1, 1, 100, 'sword_01', 'img/itens/weapons/woodensword.png');
const wp2 = new weaponsFactory('Two-Handed Sword', 1, 2, 100, 'sword_02', 'img/itens/weapons/twohandedsword.png');
const wp3 = new weaponsFactory('Scimitar', 1, 3, 100, 'sword_03', 'img/itens/weapons/scimitar.png');
const wp4 = new weaponsFactory('Lionheart', 1, 4, 100, 'sword_04', 'img/itens/weapons/lionheart.png');
const wp5 = new weaponsFactory('Sparta', 1, 5, 100, 'sword_05', 'img/itens/weapons/sparta.png');
// const wp6 = new weaponsFactory('Broadsword', 1, 1, 100, 'sword_06', 'img/itens/weapons/broadsword.png');
// const wp7 = new weaponsFactory('Zard', 1, 1, 100, 'sword_07', 'img/itens/weapons/zard.png');
// const wp8 = new weaponsFactory('Berseker', 1, 1, 100, 'sword_08', 'img/itens/weapons/berseker.png');
// const wp9 = new weaponsFactory('Maple Soul Rohen', 1, 1, 100, 'sword_09', 'img/itens/weapons/maplesoulrohen.png');
// const wp10 = new weaponsFactory("Devil's Sunrise", 1, 1, 100, 'sword_10', 'img/itens/weapons/devilssunrise.png');
// const wp11 = new weaponsFactory('The Beheader', 1, 1, 100, 'sword_11', 'img/itens/weapons/thebeheader.png');
// const wp12 = new weaponsFactory("Heaven's Gate", 1, 1, 100, 'sword_12', 'img/itens/weapons/heavensgate.png');
// const wp13 = new weaponsFactory("Stonetooth Sword", 1, 1, 100, 'sword_13', 'img/itens/weapons/stonetoothsword.png');
// const wp14 = new weaponsFactory('Dragon Claymore', 1, 1, 100, 'sword_14', 'img/itens/weapons/dragonclaymore.png');
// const wp15 = new weaponsFactory('Doombringer', 1, 1, 100, 'sword_15', 'img/itens/weapons/doombringer.png');
// const wp16 = new weaponsFactory('Blue Screamer', 1, 1, 100, 'sword_16', 'img/itens/weapons/bluescreamer.png');
// const wp17 = new weaponsFactory("Raven's Wing", 1, 1, 100, 'sword_17', 'img/itens/weapons/ravenswing.png');
// const wp18 = new weaponsFactory('Blue Screamer', 1, 1, 100, 'sword_18', 'img/itens/weapons/bluescreamer.png');
// const wp19 = new weaponsFactory("Amaterasu's", 1, 1, 100, 'sword_19', 'img/itens/weapons/amaterasus.png');
// const wp20 = new weaponsFactory('Beast Bro Zweihander', 1, 1, 100, 'sword_20', 'img/itens/weapons/beastbrozweihander.png');
// const wp21 = new weaponsFactory('Maple Amethysian Claymore', 1, 1, 100, 'sword_21', 'img/itens/weapons/mapleamethysianclaymore.png');
// const wp22 = new weaponsFactory('Timeless Nibleheim', 1, 1, 100, 'sword_22', 'img/itens/weapons/timelessnibleheim.png');
// const wp23 = new weaponsFactory('Bain Sword', 1, 1, 100, 'sword_23', 'img/itens/weapons/bainsword.png');
// const wp24 = new weaponsFactory('Maple Pyrope Rohen', 1, 1, 100, 'sword_24', 'img/itens/weapons/maplepyroperohen.png');
// const wp25 = new weaponsFactory('Beryl Maple Lightcaller', 1, 1, 100, 'sword_25', 'img/itens/weapons/berylmaplelightcaller.png');
// const wp26 = new weaponsFactory('Tempest Claymore', 1, 1, 100, 'sword_26', 'img/itens/weapons/tempestclaymore.png');
// const wp27 = new weaponsFactory('Cursed Kaiserium', 1, 1, 100, 'sword_27', 'img/itens/weapons/cursedkaiserium.png');
// const wp28 = new weaponsFactory('Pioner Sword', 1, 1, 100, 'sword_28', 'img/itens/weapons/pionersword.png');
// const wp29 = new weaponsFactory('Sweetwater', 1, 1, 100, 'sword_29', 'img/itens/weapons/sweetwater.png');
// const wp30 = new weaponsFactory("Ryude's Sword", 1, 1, 100, 'sword_30', 'img/itens/weapons/ryudessword.png');
// const wp31 = new weaponsFactory('Maple Saint', 1, 1, 100, 'sword_31', 'img/itens/weapons/maplesaint.png');
// const wp32 = new weaponsFactory("Zakum's Poisonic", 1, 1, 100, 'sword_32', 'img/itens/weapons/zakumspoisonic.png');
// const wp33 = new weaponsFactory('Jaihin', 1, 1, 100, 'sword_33', 'img/itens/weapons/jaihin.png');
// const wp34 = new weaponsFactory('Utgard', 1, 1, 100, 'sword_34', 'img/itens/weapons/utgard.png');
// const wp35 = new weaponsFactory('Royal Von Leon Sword', 1, 1, 100, 'sword_35', 'img/itens/weapons/royalvonleonsword.png');
// const wp36 = new weaponsFactory('AbsoLab Broad Saber', 1, 1, 100, 'sword_36', 'img/itens/weapons/absolabbroadsaber.png');
// const wp37 = new weaponsFactory('Maple Treasure', 1, 1, 100, 'sword_37', 'img/itens/weapons/mapletreasure.png');
// const wp38 = new weaponsFactory('Arcane Umbra', 1, 1, 100, 'sword_38', 'img/itens/weapons/arcaneumbra.png');
// const wp39 = new weaponsFactory('AbsoLab Broad Saber', 1, 1, 100, 'sword_39', 'img/itens/weapons/absolabbroadsaber.png');
// const wp40 = new weaponsFactory('Fafnir Penitent Tears', 1, 1, 100, 'sword_40', 'img/itens/weapons/fafnirpenitenttears.png');
// const wp41 = new weaponsFactory('Sealed Genesis', 1, 1, 100, 'sword_41', 'img/itens/weapons/sealedgenesis.png');

function defensesFactory(name, level, attribute, price, id, img) {
  this.name = name;
  this.level = level;
  this.attribute = [attribute, 'Def'];
  this.price = price;
  this.id = `defense_${id}`;
  this.img = img;
  defenses.push(this);
}

const dh1 = new defensesFactory('Red Headband', 1, 1, 1, 'helmet_01', 'img/itens/defenses/redheadband.png');
// const dh2 = new defensesFactory('White Bandana', 1, 1, 1, 'helmet_02', 'img/itens/defenses/whitebandana.png');
// const dh3 = new defensesFactory('Metal Gear', 1, 1, 1, 'helmet_03', 'img/itens/defenses/metalgear.png');
// const dh4 = new defensesFactory('Metal Coif', 1, 1, 1, 'helmet_04', 'img/itens/defenses/metalcoif.png');
// const dh5 = new defensesFactory('Steel Helmet', 1, 1, 1, 'helmet_05', 'img/itens/defenses/steelhelmet.png');
// const dh6 = new defensesFactory('Great Brown Helmet', 1, 1, 1, 'helmet_06', 'img/itens/defenses/greatbrownhelmet.png');
// const dh7 = new defensesFactory('Iron Burgernet Helm', 1, 1, 1, 'helmet_07', 'img/itens/defenses/ironburgernethelm.png');
// const dh8 = new defensesFactory('Steel Full Helm', 1, 1, 1, 'helmet_08', 'img/itens/defenses/steelfullhelm.png');
// const dh9 = new defensesFactory('Brown Skull Cap', 1, 1, 1, 'helmet_09', 'img/itens/defenses/brownskullcap.png');
// const dh10 = new defensesFactory('Iron Viking Helm', 1, 1, 1, 'helmet_10', 'img/itens/defenses/ironvikinghelm.png');
// const dh11 = new defensesFactory('Red Baseball Cap', 1, 1, 1, 'helmet_11', 'img/itens/defenses/redebaseballcap.png');
// const dh12 = new defensesFactory('Steel Nordic Helm', 1, 1, 1, 'helmet_12', 'img/itens/defenses/steelnordichelm.png');
// const dh13 = new defensesFactory('Old Steel Nordic Helm', 1, 1, 1, 'helmet_13', 'img/itens/defenses/oldsteelnordichelm.png');
// const dh14 = new defensesFactory('Jousting Helmet', 1, 1, 1, 'helmet_14', 'img/itens/defenses/joustinghelmet.png');
// const dh15 = new defensesFactory('Emerald Dome', 1, 1, 1, 'helmet_15', 'img/itens/defenses/emeralddome.png');
// const dh16 = new defensesFactory('Red Duke', 1, 1, 1, 'helmet_16', 'img/itens/defenses/redduke.png');
// const dh17 = new defensesFactory('Brown Bamboo Hat', 1, 1, 1, 'helmet_17', 'img/itens/defenses/brownbamboohat.png');
// const dh18 = new defensesFactory('Steel Sharp Helm', 1, 1, 1, 'helmet_18', 'img/itens/defenses/steelsharphelm.png');
// const dh19 = new defensesFactory('Silver Crusader Helm', 1, 1, 1, 'helmet_19', 'img/itens/defenses/silvercrusadehelm.png');
// const dh20 = new defensesFactory('Red Oriental Helm', 1, 1, 1, 'helmet_20', 'img/itens/defenses/redorientalhelm.png');
// const dh21 = new defensesFactory('Silver Planet', 1, 1, 1, 'helmet_21', 'img/itens/defenses/silverplanet.png');
// const dh22 = new defensesFactory('Dark Dome', 1, 1, 1, 'helmet_22', 'img/itens/defenses/darkdome.png');
// const dh23 = new defensesFactory('Dark Falcon', 1, 1, 1, 'helmet_23', 'img/itens/defenses/darkfalcon.png');
// const dh24 = new defensesFactory('Zakum Helmet', 1, 1, 1, 'helmet_24', 'img/itens/defenses/zakumhelmet.png');
// const dh25 = new defensesFactory('Dark Valhalla Helmet', 1, 1, 1, 'helmet_25', 'img/itens/defenses/darkvalhallahelmet.png');
// const dh26 = new defensesFactory('Dark Lich Helmet', 1, 1, 1, 'helmet_26', 'img/itens/defenses/darkarlichelmet.png');
// const dh27 = new defensesFactory('Drake Hat', 1, 1, 1, 'helmet_27', 'img/itens/defenses/drakehat.png');
// const dh28 = new defensesFactory('Maple Hat', 1, 1, 1, 'helmet_28', 'img/itens/defenses/maplehat.png');
// const dh29 = new defensesFactory('Dark Grace Helmet', 1, 1, 1, 'helmet_29', 'img/itens/defenses/darkgracehelmet.png');
// const dh30 = new defensesFactory('Blue Dragon Helmet', 1, 1, 1, 'helmet_30', 'img/itens/defenses/bluedragonhelmet.png');
// const dh31 = new defensesFactory('Herculean Helmet', 1, 1, 1, 'helmet_31', 'img/itens/defenses/herculeanhelmet.png');
// const dh32 = new defensesFactory('Bosshunter Helm', 1, 1, 1, 'helmet_32', 'img/itens/defenses/bosshunterhelm.png');
// const dh33 = new defensesFactory('Bosshunter Faceguard', 1, 1, 1, 'helmet_33', 'img/itens/defenses/bosshunterfaceguard.png');
// const dh34 = new defensesFactory("Warrior's Helmet", 1, 1, 1, 'helmet_34', 'img/itens/defenses/warriorshelmet.png');
// const dh35 = new defensesFactory('Blitz Helm', 1, 1, 1, 'helmet_35', 'img/itens/defenses/blitzhelm.png');
// const dh36 = new defensesFactory('Aran Helmet', 1, 1, 1, 'helmet_36', 'img/itens/defenses/aranhelmet.png');
// const dh37 = new defensesFactory('Powerfull Visitor Helm', 1, 1, 1, 'helmet_37', 'img/itens/defenses/powerfullvisitorhelm.png');
// const dh38 = new defensesFactory('Wise Visitor Helm', 1, 1, 1, 'helmet_38', 'img/itens/defenses/wisevisitorhelmet.png');
// const dh39 = new defensesFactory('Dexterious Visitor Helm', 1, 1, 1, 'helmet_39', 'img/itens/defenses/dexterousvisitorhelmet.png');
// const dh40 = new defensesFactory('Lucky Visitor Helm', 1, 1, 1, 'helmet_40', 'img/itens/defenses/luckyvisitorhelmet.png');
// const dh41 = new defensesFactory('Max Von Leon Helmet', 1, 1, 1, 'helmet_41', 'img/itens/defenses/marxvonleonhelmet.png');
// const dh42 = new defensesFactory("Amaterasu's Helm", 1, 1, 1, 'helmet_42', 'img/itens/defenses/amaterasushelm.png');
// const dh43 = new defensesFactory('Oyamatsumis Helm', 1, 1, 1, 'helmet_43', 'img/itens/defenses/oyamatsumishelm.png');
// const dh44 = new defensesFactory("High Knight's Helm", 1, 1, 1, 'helmet_44', 'img/itens/defenses/highknightshelm.png');
// const dh45 = new defensesFactory("Yukimura's Helm", 1, 1, 1, 'helmet_45', 'img/itens/defenses/yukimurashelm.png');
// const dh46 = new defensesFactory("Kanetsuku's Helm", 1, 1, 1, 'helmet_46', 'img/itens/defenses/kanetsukushelm.png');
// const dh47 = new defensesFactory("Hideyoshi's Helm", 1, 1, 1, 'helmet_47', 'img/itens/defenses/hideyoshishelm.png');
// const dh48 = new defensesFactory('Legendary Ravana Helmet', 1, 1, 1, 'helmet_48', 'img/itens/defenses/legendaryravanahelmet.png');
// const dh49 = new defensesFactory('Muneshiges Helm', 1, 1, 1, 'helmet_49', 'img/itens/defenses/muneshigeshelm.png');
// const dh50 = new defensesFactory("The Bladed Falcon's helm", 1, 1, 1, 'helmet_50', 'img/itens/defenses/thebladedfalconshelm.png');
// const dh51 = new defensesFactory('Viking Helmet', 1, 1, 1, 'helmet_51', 'img/itens/defenses/vikinghelmet.png');
// const dh52 = new defensesFactory('Shadow Thanatos Helm', 1, 1, 1, 'helmet_52', 'img/itens/defenses/shadowthanatoshelm.png');
// const dh53 = new defensesFactory('Necromancer Warrior Hat', 1, 1, 1, 'helmet_53', 'img/itens/defenses/necromancerwarriorhat.png');
// const dh54 = new defensesFactory('Couples Army Helm', 1, 1, 1, 'helmet_54', 'img/itens/defenses/couplesarmyhelm.png');
// const dh55 = new defensesFactory("Dragon Emperor's Helm", 1, 1, 1, 'helmet_55', 'img/itens/defenses/dragonemperorshelm.png');
// const dh56 = new defensesFactory('Arcane Umbra Knight Hat', 1, 1, 1, 'helmet_56', 'img/itens/defenses/arcaneumbraknighthat.png');
const da1 = new defensesFactory('Yellow Jangoon Armor', 1, 1, 1, 'armor_01', 'img/itens/defenses/yellowjangoonarmor.png');
// const da2 = new defensesFactory('Brown Hard Leather Top', 1, 1, 1, 'armor_02', 'img/itens/defenses/brownhardleathertop.png');
// const da3 = new defensesFactory('Steel Corporal', 1, 1, 1, 'armor_03', 'img/itens/defenses/steelcorporal.png');
// const da4 = new defensesFactory('Black Bennis Chain Mail', 1, 1, 1, 'armor_04', 'img/itens/defenses/blackbennischainmail.png');
// const da5 = new defensesFactory('Red Hwarang Shirt', 1, 1, 1, 'armor_05', 'img/itens/defenses/redhwarangshirt.png');
// const da6 = new defensesFactory('Orihalcon Master Sergeant', 1, 1, 1, 'armor_06', 'img/itens/defenses/orihalconmastersergeant.png');
// const da7 = new defensesFactory('Dark Night Shift', 1, 1, 1, 'armor_07', 'img/itens/defenses/darknightshift.png');
// const da8 = new defensesFactory('Blue Lolico Armor', 1, 1, 1, 'armor_08', 'img/itens/defenses/bluelolicoarmor.png');
// const da9 = new defensesFactory('Dark Master Sergeant', 1, 1, 1, 'armor_09', 'img/itens/defenses/darkmastersergeant.png');
// const da10 = new defensesFactory('Brown Corporal', 1, 1, 1, 'armor_10', 'img/itens/defenses/browncorporal.png');
// const da11 = new defensesFactory('Red Legolier', 1, 1, 1, 'armor_11', 'img/itens/defenses/redlegolier.png');
// const da12 = new defensesFactory('Dark Shadow', 1, 1, 1, 'armor_12', 'img/itens/defenses/darkshadow.png');
// const da13 = new defensesFactory('Umber Shouder Mail', 1, 1, 1, 'armor_13', 'img/itens/defenses/umbershoudermail.png');
// const da14 = new defensesFactory('Red Orientican', 1, 1, 1, 'armor_14', 'img/itens/defenses/redorientican.png');
// const da15 = new defensesFactory('Dark Scorpio', 1, 1, 1, 'armor_15', 'img/itens/defenses/darlscorpio.png');
// const da16 = new defensesFactory('Bronze Platine', 1, 1, 1, 'armor_16', 'img/itens/defenses/bronzeplatine.png');
// const da17 = new defensesFactory('Mithril Platine', 1, 1, 1, 'armor_17', 'img/itens/defenses/mithrilplatine.png');
// const da18 = new defensesFactory('Orihalcon Platine', 1, 1, 1, 'armor_18', 'img/itens/defenses/orihalconplatine.png');
// const da19 = new defensesFactory('Green Commodore Armor', 1, 1, 1, 'armor_19', 'img/itens/defenses/greencommodore.png');
// const da20 = new defensesFactory('Blue Commodore Armor', 1, 1, 1, 'armor_20', 'img/itens/defenses/bluecommodore.png');
// const da21 = new defensesFactory('Dark Commodore Armor', 1, 1, 1, 'armor_21', 'img/itens/defenses/darkcommodore.png');
// const da22 = new defensesFactory('Dark Brown Stealer', 1, 1, 1, 'armor_22', 'img/itens/defenses/darkbrownstealer.png');
// const da23 = new defensesFactory('Dark Studded Top', 1, 1, 1, 'armor_23', 'img/itens/defenses/darkstuddedtop.png');
// const da24 = new defensesFactory('Eagle Eye Warrior Armor', 1, 1, 1, 'armor_24', 'img/itens/defenses/eagleeyewarriorarmor.png');
// const da25 = new defensesFactory('Eagle Eye Assassin Shirt', 1, 1, 1, 'armor_25', 'img/itens/defenses/eagleeyeassassinshirt.png');
// const da26 = new defensesFactory('Blizzard Armor', 1, 1, 1, 'armor_26', 'img/itens/defenses/blizzardarmor.png');
// const da27 = new defensesFactory('Golden Armor', 1, 1, 1, 'armor_27', 'img/itens/defenses/goldenarmor.png');
// const da28 = new defensesFactory('Golden Armor2', 1, 1, 1, 'armor_28', 'img/itens/defenses/goldenarmor2.png');
// const da29 = new defensesFactory('Bosshunter Armor', 1, 1, 1, 'armor_29', 'img/itens/defenses/bosshunterarmor.png');
// const da30 = new defensesFactory('Galatic Hero suit', 1, 1, 1, 'armor_30', 'img/itens/defenses/galaticherosuit.png');
// const da31 = new defensesFactory('Stealth Suit', 1, 1, 1, 'armor_31', 'img/itens/defenses/stealthsuit.png');
// const da32 = new defensesFactory('Aran Armor', 1, 1, 1, 'armor_32', 'img/itens/defenses/aranarmor.png');
// const da33 = new defensesFactory('Brave Soldier Armor', 1, 1, 1, 'armor_33', 'img/itens/defenses/bravesoldierarmor.png');
// const da34 = new defensesFactory('Chaos Armor', 1, 1, 1, 'armor_34', 'img/itens/defenses/chaosarmor.png');
// const da35 = new defensesFactory('Nox Von Leon Battle Suit', 1, 1, 1, 'armor_35', 'img/itens/defenses/noxvonleonbattlesuit.png');
// const da36 = new defensesFactory('Falcon Wing Sentinel Suit', 1, 1, 1, 'armor_36', 'img/itens/defenses/falconwingsentinelsuit.png');
// const da37 = new defensesFactory('Agares Bloody Mail', 1, 1, 1, 'armor_37', 'img/itens/defenses/agaresbloodymail.png');
// const da38 = new defensesFactory('Force Walker Plate Mail', 1, 1, 1, 'armor_38', 'img/itens/defenses/forcewalkerplatemail.png');
// const da39 = new defensesFactory('Lionheart Battle Mail', 1, 1, 1, 'armor_39', 'img/itens/defenses/lionheartbattlemail.png');
// const da40 = new defensesFactory('Crown Suit', 1, 1, 1, 'armor_40', 'img/itens/defenses/crownsuit.png');
// const da41 = new defensesFactory('Abyss Taragon', 1, 1, 1, 'armor_41', 'img/itens/defenses/abysstaragon.png');
// const da42 = new defensesFactory("Musashi's armor'", 1, 1, 1, 'armor_42', 'img/itens/defenses/musashisarmor.png');
// const da43 = new defensesFactory('Fearless Warriors Armor', 1, 1, 1, 'armor_43', 'img/itens/defenses/fearlesswarriorsarmor.png');
// const da44 = new defensesFactory('The Bladed Falcons Armor', 1, 1, 1, 'armor_44', 'img/itens/defenses/thebladedfalconsarmor.png');
// const da45 = new defensesFactory('Legendary Knight Armor', 1, 1, 1, 'armor_45', 'img/itens/defenses/legendaryknightarmor.png');
// const da46 = new defensesFactory('Grand Agares Mail', 1, 1, 1, 'armor_46', 'img/itens/defenses/grandagaresmail.png');
// const da47 = new defensesFactory('The Bladed Falcons Armor', 1, 1, 1, 'armor_47', 'img/itens/defenses/thebladedfalconsarmor2.png');
// const da48 = new defensesFactory('Old Kaiser Armor', 1, 1, 1, 'armor_48', 'img/itens/defenses/oldkaiserarmor.png');
// const da49 = new defensesFactory("High Knight's Armor", 1, 1, 1, 'armor_49', 'img/itens/defenses/highknightsarmor.png');
// const da50 = new defensesFactory('Kaiser Brave Mail', 1, 1, 1, 'armor_50', 'img/itens/defenses/kaiserbravemail.png');
// const da51 = new defensesFactory('Luminous Memory Mail', 1, 1, 1, 'armor_51', 'img/itens/defenses/luminousmemorymail.png');
// const da52 = new defensesFactory('Gold Label Knight', 1, 1, 1, 'armor_52', 'img/itens/defenses/goldlabelknight.png');
// const da53 = new defensesFactory('Shadow Thanatos Armor', 1, 1, 1, 'armor_53', 'img/itens/defenses/shadowthanatosarmor.png');
// const da54 = new defensesFactory('Ecletic Taragon', 1, 1, 1, 'armor_54', 'img/itens/defenses/ecletictaragon.png');
// const da55 = new defensesFactory('Muspell Warrior Suit', 1, 1, 1, 'armor_55', 'img/itens/defenses/muspellwarriorsuit.png');
// const da56 = new defensesFactory('Pensalir Battle Mail', 1, 1, 1, 'armor_56', 'img/itens/defenses/pensalirbattlemail.png');
// const da57 = new defensesFactory('Pensalir Sentinel Suit', 1, 1, 1, 'armor_57', 'img/itens/defenses/pensalirsentinelsuit.png');
// const da58 = new defensesFactory('Warriors Armor', 1, 1, 1, 'armor_58', 'img/itens/defenses/warriorsarmor.png');
// const da59 = new defensesFactory('Kasumigiri Armor', 1, 1, 1, 'armor_59', 'img/itens/defenses/kasumigiriarmor.png');
// const da60 = new defensesFactory('Arcane Umbra Knight Suit', 1, 1, 1, 'armor_60', 'img/itens/defenses/arcaneumbraknightsuit.png');
// const da61 = new defensesFactory('Lake Monster Invincible Armor', 1, 1, 1, 'armor_61', 'img/itens/defenses/lakemonsterinvinciblearmor.png');
const db1 = new defensesFactory('Black Shoes of Death', 1, 1, 1, 'boots_01', 'img/itens/defenses/blackshoesofdeath.png');
// const db2 = new defensesFactory('Royal Costume Shoes', 1, 1, 1, 'boots_02', 'img/itens/defenses/royalcostumeshoes.png');
// const db3 = new defensesFactory('Snow Storm Boots', 1, 1, 1, 'boots_03', 'img/itens/defenses/snowstormboots.png');
// const db4 = new defensesFactory('Shadow Sandals', 1, 1, 1, 'boots_04', 'img/itens/defenses/shadowsandals.png');
// const db5 = new defensesFactory('Steel Greaves', 1, 1, 1, 'boots_05', 'img/itens/defenses/steelgreaves.png');
// const db6 = new defensesFactory('Silver Chain Boots', 1, 1, 1, 'boots_07', 'img/itens/defenses/silverchainboots.png');
// const db7 = new defensesFactory('Gold Chain Boots', 1, 1, 1, 'boots_08', 'img/itens/defenses/goldchainboots.png');
// const db8 = new defensesFactory('Bronze Greaves', 1, 1, 1, 'boots_09', 'img/itens/defenses/bronzegreaves.png');
// const db9 = new defensesFactory('Dark War Boots', 1, 1, 1, 'boots_10', 'img/itens/defenses/darkwarboots.png');
// const db10 = new defensesFactory('Gold War Boots', 1, 1, 1, 'boots_11', 'img/itens/defenses/goldwarboots.png');
// const db11 = new defensesFactory('Timeless Moonsteead', 1, 1, 1, 'boots_12', 'img/itens/defenses/timelessmoonsteead.png');
// const db12 = new defensesFactory('Reverse Grabbe', 1, 1, 1, 'boots_13', 'img/itens/defenses/reversegrabbe.png');
// const db13 = new defensesFactory('Aran Combat Shoes', 1, 1, 1, 'boots_14', 'img/itens/defenses/arancombatshoes.png');
// const db14 = new defensesFactory('Brave Soldier Shoes', 1, 1, 1, 'boots_15', 'img/itens/defenses/bravesoldiershoes.png');
// const db15 = new defensesFactory('Musashi Shoes', 1, 1, 1, 'boots_16', 'img/itens/defenses/musashishoes.png');
// const db16 = new defensesFactory('Powerful Visitor Boots', 1, 1, 1, 'boots_17', 'img/itens/defenses/powerfulvisitorboots.png');
// const db17 = new defensesFactory('Wise Visitor Boots', 1, 1, 1, 'boots_18', 'img/itens/defenses/wisevisitorboots.png');
// const db18 = new defensesFactory('Dexterous Visitor Boots', 1, 1, 1, 'boots_19', 'img/itens/defenses/dexterousvisitorboots.png');
// const db19 = new defensesFactory('Lucky Visitor Boots', 1, 1, 1, 'boots_20', 'img/itens/defenses/luckyvisitorboots.png');
// const db20 = new defensesFactory('Arcane Umbra Knight Shoes', 1, 1, 1, 'boots_21', 'img/itens/defenses/arcaneumbraknightshoes.png');
const db21 = new defensesFactory('Bosshunter Greaves', 1, 1, 1, 'boots_22', 'img/itens/defenses/bosshuntergreaves.png');
const db22 = new defensesFactory('Cursed Huntershoes', 1, 1, 1, 'boots_23', 'img/itens/defenses/cursedhuntershoes.png');
const dp1 = new defensesFactory('Black Jangoon Pants', 1, 1, 1, 'pants_01', 'img/itens/defenses/blackjangoonpants.png');
// const dp2 = new defensesFactory('Black Suit Pants', 1, 1, 1, 'pants_02', 'img/itens/defenses/blacksuitpants.png');
// const dp3 = new defensesFactory('Grey Thick Sweat Pants', 1, 1, 1, 'pants_03', 'img/itens/defenses/greythicksweatpants.png');
// const dp4 = new defensesFactory('Brown Lolico Pants', 1, 1, 1, 'pants_04', 'img/itens/defenses/brownlolicopants.png');
// const dp5 = new defensesFactory('Steel Corporal Pants', 1, 1, 1, 'pants_05', 'img/itens/defenses/steelcorporalpants.png');
// const dp6 = new defensesFactory('Black Split Pants', 1, 1, 1, 'pants_06', 'img/itens/defenses/blacksplitpants.png');
// const dp7 = new defensesFactory('Blue Nightshift Pants', 1, 1, 1, 'pants_07', 'img/itens/defenses/bluenightshiftpants.png');
// const dp8 = new defensesFactory('Blue Lolico Pants', 1, 1, 1, 'pants_08', 'img/itens/defenses/bluelolicopants.png');
// const dp9 = new defensesFactory('Black Stealer Pants', 1, 1, 1, 'pants_09', 'img/itens/defenses/blackstealerpants.png');
// const dp10 = new defensesFactory("Dark Hunter's Pants", 1, 1, 1, 'pants_10', 'img/itens/defenses/darkhunterspants.png');
// const dp11 = new defensesFactory('Dark Legolier Pants', 1, 1, 1, 'pants_11', 'img/itens/defenses/darklegolierpants.png');
// const dp12 = new defensesFactory('Dark Shadow Pants', 1, 1, 1, 'pants_12', 'img/itens/defenses/darkshadowpants.png');
// const dp13 = new defensesFactory('Umber Shouldermail Pants', 1, 1, 1, 'pants_13', 'img/itens/defenses/umbershouderlmailpants.png');
// const dp14 = new defensesFactory('Dark Orientican Pants', 1, 1, 1, 'pants_14', 'img/itens/defenses/darkorienticanpants.png');
// const dp15 = new defensesFactory('Dark Scorpio Pants', 1, 1, 1, 'pants_15', 'img/itens/defenses/darkscorpiopants.png');
// const dp16 = new defensesFactory('Bronze Platine Pants', 1, 1, 1, 'pants_16', 'img/itens/defenses/bronzeplatinepants.png');
// const dp17 = new defensesFactory('Mithril Platine Pants', 1, 1, 1, 'pants_17', 'img/itens/defenses/mithrilplatinepants.png');
// const dp18 = new defensesFactory('Orihalcon Platine Pants', 1, 1, 1, 'pants_18', 'img/itens/defenses/orihalconplatinepants.png');
// const dp19 = new defensesFactory('Dark Studded Pants', 1, 1, 1, 'pants_19', 'img/itens/defenses/darkstuddedpants.png');
// const dp21 = new defensesFactory('Green Commodore Pants', 1, 1, 1, 'pants_20', 'img/itens/defenses/greencommodorepants.png');
// const dp22 = new defensesFactory('Blue Commodore Pants', 1, 1, 1, 'pants_21', 'img/itens/defenses/bluecommodorepants.png');
// const dp23 = new defensesFactory('Dark Commodore Pants', 1, 1, 1, 'pants_22', 'img/itens/defenses/darkcommodorepants.png');
// const dp24 = new defensesFactory('Black Neos Pants', 1, 1, 1, 'pants_23', 'img/itens/defenses/blackneopants.png');
// const dp25 = new defensesFactory('Dark Legolier Pants', 1, 1, 1, 'pants_24', 'img/itens/defenses/darklegoilerpants.png');
// const dp26 = new defensesFactory('Black Knucklevest Pants', 1, 1, 1, 'pants_25', 'img/itens/defenses/blackknucklevestpants.png');
// const dp27 = new defensesFactory('Dark Brown Stealer Pants', 1, 1, 1, 'pants_26', 'img/itens/defenses/darkbrownstealerpants.png');


function potionsFactory(name, level, attribute, price, id, img) {
  this.name = name;
  this.level = level;
  this.attribute = [attribute, 'Heal'];
  this.price = price;
  this.img = img;
  this.id = `potion_${id}`;
  potions.push(this);
}

const hp1 = new potionsFactory('Begginner HP', 1, 15, 5, 'HP_01', 'img/itens/potions/hp1.png');
const hp2 = new potionsFactory('Adventurer HP', 10, 40, 10, 'HP_02', 'img/itens/potions/hp2.png');
const hp3 = new potionsFactory('Brave HP', 10, 40, 10, 'HP_03', 'img/itens/potions/hp3.png');
const hp4 = new potionsFactory('Hero HP', 10, 40, 10, 'HP_04', 'img/itens/potions/hp4.png');
const hp5 = new potionsFactory('Transcendent HP', 10, 40, 10, 'HP_05', 'img/itens/potions/hp5.png');
const hp6 = new potionsFactory('Godness HP', 10, 40, 10, 'HP_06', 'img/itens/potions/hp6.png');
const hp7 = new potionsFactory('Overpower HP', 10, 40, 10, 'HP_07', 'img/itens/potions/hp7.png');
const hp8 = new potionsFactory('Forged By Gods HP', 10, 40, 10, 'HP_08', 'img/itens/potions/hp8.png');
const mp1 = new potionsFactory('Begginner MP', 1, 10, 5, 'MP_01', 'img/itens/potions/mp1.png');
const mp2 = new potionsFactory('Adventurer MP', 10, 40, 10, 'MP_02', 'img/itens/potions/mp2.png');
const mp3 = new potionsFactory('Brave MP', 10, 40, 10, 'MP_03', 'img/itens/potions/mp3.png');
const mp4 = new potionsFactory('Hero MP', 10, 40, 10, 'MP_04', 'img/itens/potions/mp4.png');
const mp5 = new potionsFactory('Transcendent MP', 10, 40, 10, 'MP_05', 'img/itens/potions/mp5.png');
const mp6 = new potionsFactory('Godness MP', 10, 40, 10, 'MP_06', 'img/itens/potions/mp6.png');
const mp7 = new potionsFactory('Overpower MP', 10, 40, 10, 'MP_07', 'img/itens/potions/mp7.png');
const mp8 = new potionsFactory('Forged By Gods MP', 10, 40, 10, 'MP_08', 'img/itens/potions/mp8.png');


const itens = weapons.concat(defenses, potions);
const exibirItens = document.querySelector('.item-shop-exibir');


itens.forEach((item, index) => {
  exibirItens.innerHTML +=
     `<li id="${index}" class="nofilter"><div class="img-item"><img src=${item.img} alt=""></img></div>
     <span class="item-info">${item.name}</span>
     <span class="item-info">${item.price} mesos</span></li>`
})




