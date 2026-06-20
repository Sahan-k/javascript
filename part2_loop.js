// challenge 1
let cities = ["New york","Tokyo","Paris","London"];
let visitedcities = [];
for(let i = 0;i<cities.length;i++){
  if(cities[i] == "Paris"){
    continue;
  }
  visitedcities.push(cities[i]);
}
console.log(visitedcities);


//challenge 2 for of loop

let numbers = [1,2,3,4,5];
let smallNumbers = [];
for (const num of numbers) {
  if(num === 4){
    break;
  }
  smallNumbers.push(num);
  
}
console.log(smallNumbers);

// for in loop

let citiesPopulation = {
  "London": 890000,
  "New Yoork": 840000,
  "Paris": 220000,
  "Berlin": 350000
}

let cityNewPopulation = {}
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if(city === "Berlin"){
    break;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}
console.log(cityNewPopulation);

// challenge 4

let worldcities = {
  "London": 890000,
  "New Yoork": 840000,
  "Paris": 220000,
  "Berlin": 350000
}
 let largeCities = {}
 for (const city in worldcities){
  if(worldcities[city] < 300000){
    continue;
  }
  largeCities[key] = worldcities[key];
 }
 console.log(largeCities);

 // challenge 5

let teaCollection = ["earl grey", "green tea","chai","oolong tea"];
let availableTeas = []
teaCollection.forEach((tea) => {
    if (tea === "chai"){
      return;
    }
  availableTeas.push(tea);
  
}); 
console.log(availableTeas);

//or
let teaCollection2 = ["earl grey", "green tea","chai","oolong tea"];
let availableTeas2 = []
teaCollection2.forEach(function(teas) {
    if (teas === "chai"){
      return;
    }
  availableTeas2.push(teas);
  
}); 
console.log(availableTeas2);

//challenege of for of loop

let myNewTeas = ["chai","green tea","black tea","jasmine tea","herbal tea"];
let shortteas = [];

for (const tea of myNewTeas){
  if (tea.length > 10){
    break;
  }
  shortteas.push(tea);
}
console.log(shortteas);
