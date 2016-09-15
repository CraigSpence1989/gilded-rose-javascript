function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for(let itemCount = 0; itemCount < items.length; itemCount++){

    if(items[itemCount].name.includes('Sulfuras')){
      undefined
    }else{
      let multiplier = calculateDegradeRate(items[itemCount].name, items[itemCount].sell_in)
      items[itemCount].quality < 0 || (items[itemCount].quality ==50 && multiplier > 0 ) ? multiplier = 0 : undefined

      items[itemCount].name.includes("Backstage") && items[itemCount].sell_in < 0 ?
        items[itemCount].quality = 0 :
        items[itemCount].quality += (1 * multiplier)
    }
  }
}

function calculateDegradeRate(name, sell_in, quality){
  let degradeValue = -1

  name == 'Aged Brie'
    ? degradeValue = 1 : undefined

  if(name.includes('Backstage')){
    degradeValue = 1
    sell_in <= 5 ? degradeValue = degradeValue * 3 :
      sell_in <= 10 ? degradeValue = degradeValue * 2 : undefined
  }

  (sell_in <= 0) || name.includes('Conjured') ? degradeValue = degradeValue * 2 : undefined

  return degradeValue
}
