// hoisting
greetWorld(); // Output: Hello, World!

function greetWorld() {
    console.log('Hello, World!');
}

// call function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();

// parameter and arguments
const width = 10;
const height = 10;
function caculateArea(width, height) {
    console.log(width*height);
}

caculateArea(width, height);

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');

// Default Parameters
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}


// Return
function rectangleArea(width, height) {
    let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}

function monitorCount(rows, columns) {
    return rows*columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);

// Helper function
function multiplyByNineFifths(number) {
    return number * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59


function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows , columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost  = costOfMonitors(5,4);
console.log(totalCost);

// Function Expressions


const plantNeedsWater = function(day) {
    if(day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

// Arrow Functions
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};



const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};


// Concise Body Arrow Functions
const squareNum = (num) => {
    return num * num;
};
const squareNum = num => num * num;

const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
};
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

