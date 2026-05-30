//array practices

let teaFlavours = ["green", "black", "oolong tea", "black tea"];

const firstTea = teaFlavours[0]

// challenge 2

let cities = ["London","Tokyo","Paris","New York"];
const favoritecity =  cities[2];

//challenge 3

let teaTypes = ["herbal Tea","white tea","masala chai"];
teaTypes[1] = "jasmine tea"
console.log(teaTypes);

//challenge 4

// let citiesVisisted = ["Mumabi","Sidney"]
citiesVisisted.push("Berlin")
console.log(citiesVisisted);
     
//another method
let citiesVisisted = ["Mumabi","Sidney"];
citiesVisisted[citiesVisisted.length] = "Berlin";
console.log(citiesVisisted);

//challenge 5

let teaOrders = ["chai","iced tea","matcha","earl grey"];
console.log(teaOrders.pop());
console.log(teaOrders);

//challenge 6

let popularTeas = ["green tea","oolong tea","chai"];
let softCopyTeas = popularTeas;
softCopyTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);

//challenge 7

let topCities = ["Berlin","Singapore","New York"];
let hardCopyCities = [...topCities]
let hardCopyCities = topCities.slice()
topCities.pop();
console.log(hardCopyCities);

//challenge 8

let europeanCities = ["Paris","Rome"];
let asianCities = ["Tokyo","Bangkok"];
let worldCities =[ europeanCities, asianCities]
let mergecities = europeanCities.concat(asianCities)
console.log(worldCities);
console.log(mergecities);
console.log(typeof worldCities);

//challenge 9

let teaMenu = ["masala tea","oolong tea","green tea","earl grey"];

let size = teaMenu.length;

//challenge 10

let cityBucketList = ["kyoto","London","Cape Town","Vancouver"];

let isLondoninlist = cityBucketList.includes("London");

console.log(isLondoninlist);
