// INTRODUCTION TO JAVASCRIPT
var x = "hello";

// build in method
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// variable

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;

let favoriteAnimal = 'dog';
console.log('My favorite animal: ' + favoriteAnimal);

let myName  = 'armadillo';
let myCity  = 'Ha Noi';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

// CONDITION STATEMENT


let sale = true;
if(sale) {
    console.log('Time to buy!');
}

let sale = true;

sale = false;

if(sale) {
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.');
}


