// sum of numbers from 1 to 5
let sum = 0;
let i=1;

while (i<=5) {
  sum += i;
  i++;
}
console.log(sum);

// write a while loop that counts down from 5 to 1 and stores the numbers in array named countdown

let countdown = []
let j = 5;
while(j > 0){
  countdown.push(j);
  j--;
}
console.log(countdown);

// challenge 3

let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter your favourite tea (type "stop " to finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

// for loop

let numbers = [2,4,6];
let multipliednumber = [];
 for (let i=0; i < numbers.length; i++) {
      multipliednumber.push(numbers[i] * 2);
 }
 console.log(multipliednumber);

//for loop challenge 2

let cities = ["Paris","New york","Tokyo","London"];
let citylist = [];
for(let i =0;i < cities.length;i++){
  citylist.push(cities[i]);
}
console.log(citylist);


// using unshift
let cities = ["Paris","New york","Tokyo","London"];
let citylist = [];
for(let i = cities.length-1; i >= 0;i--){
  citylist.unshift(cities[i]);
}
console.log(citylist);
 
 //or

let cities = ["Paris","New york","Tokyo","London"];
let citylist = [];
for(let i =0;i < cities.length;i++){
  citylist.unshift(cities[i]);
}
console.log(citylist);