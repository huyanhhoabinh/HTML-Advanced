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