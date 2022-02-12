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

console.log(1 == true) // output: true
console.log(1 === true) // output: false


if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
} else {
    console.log('Stop');
}

if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Do some work.');
}


let myVariable = 'I Exist!';

if (myVariable) {
    console.log(myVariable)
} else {
    console.log('The variable does not exist.')
}


// Truthy and Falsy Assignment
let username = '';
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger


let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator

let isNightTime = true;

if (isNightTime) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');



// Else If Statements
let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log('Stop!');
} else if (stopLight === 'yellow') {
    console.log('Slow down.');
} else if (stopLight === 'green') {
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}
// The switch keyword
let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
    console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
    console.log('Papayas are $1.29');
} else {
    console.log('Invalid item');
}

let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

// Prints 'Papayas are $1.29'

