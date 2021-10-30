// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


// 1a. Schrijf een array-methode om een nieuwe array met alle tv-namen te verzamelen.
//schrijf een nieuwe variabele om alle tv namen in te verzamelen
const inventoryNames = inventory.map((name) => {
return 'Tv naam' + name.name;
})
//log de namen in de console
console.log(inventoryNames);

//1b. Schrijf een array methode die alle objecten laat zien van televiesie's die al zijn uitverkocht.
const inventorySoldOut = inventory.filter((soldout) => {
  return soldout.originalStock === soldout.sold;
})
//Log de objecten in de console
console.log(inventorySoldOut);

//1c. Schrijf een array methode die alle objecten verzameld van televieis die over ambilight beschikken
const televisionHasAmbilight = inventory.filter((ambilight) => {
  return ambilight.options.ambiLight === true;
})

//log het antwoord
console.log(televisionHasAmbilight)

//1d. Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

//maak een array waar de namen en prijzen van de tv's worden verzameld.
const pricesAndNames = inventory.map((priceAndName) => {
  return priceAndName.price + ", " + priceAndName.name;
})

// console.log(pricesAndNames)

//gebruik de array om de tv's per prijs en naam te filteren om deze te sorteren.
const sortedByPrice = pricesAndNames.sort((a, b) => {
  if(a < b){
    return -1;
  }
  if( a > b){
    return 1;
  }
  return 0;
})
//Log de gesorteerde objecten in de console.
console.log(sortedByPrice);

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let stockSold = 0;
let totalOriginalStock = 0;
for (let i = 0; i < inventory.length; i++){
  totalOriginalStock += inventory[i].originalStock;
  stockSold += inventory[i].sold;
}

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

//2b
const numbersBought = document.getElementById("Ingekocht");
numbersBought.innerHTML = totalOriginalStock;
//2d
const numbersSold = document.getElementById("Verkocht");
numbersSold.innerHTML = stockSold;
//2e

let leftInInventory = totalOriginalStock - stockSold;

const inStock = document.getElementById("Voorraad");
inStock.innerHTML = leftInInventory;

// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.)
// in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
// Dat er dubbele namen in zitten, is niet erg.

//Maak een variabele die een lijst maakt van alle merken
function listNames([]){

// Maak een array van alle namen worden verzameld
const brandNames = inventory.map((brandName) => {
  return brandName.brand;
})
// Maak een node waar alle list items in terecht kunnen
const listOfBrands = document.getElementById("Merklijst");

  //maak van elke naam een <li> element en plaats hier de naam in. Zorg daarna dat deze in de juiste node komt
  brandNames.forEach(brandName => {
    let newBrand = document.createElement('li');
    newBrand.textContent = brandName;
    listOfBrands.appendChild(newBrand);
  })
}

//roep de functie aan
listNames(inventory);
// dit is de methode in een for loop

// const listOfBrands = document.getElementById("Merklijst");
// for (let i = 0; i < inventory.length; i++){
//     let newBrand = document.createElement('li');
//   newBrand.textContent = inventory[i].brand;
//   listOfBrands.appendChild(newBrand)
// }
// return listOfBrands
// }

// listNames(inventory)
//koppel deze merken aan een lijst in het HTML bestand
// const listOfBrands = document.getElementById("Merklijst").value;
// listOfBrands.innerHTML = ' '

// Opdracht 4b: Schrijf de code uit 4a om naar een functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!


// zie het antwoord van 4a