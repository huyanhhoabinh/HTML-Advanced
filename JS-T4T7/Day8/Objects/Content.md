#Object

##Creating Objects
- We use curly braces, `{}`, to designate an object literal:
```html
let spaceship = {}; // spaceship is an empty object
```
- Data of object:  data is organized into key-value pairs ![img.png](keyvalue.png)
```html
// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
```
    The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.
- Accessing Properties: 
  - Let’s explore the first way— dot notation, `.`
  - Bracket Notation (use bracket notation when accessing keys that have numbers, spaces, or special characters in them)
```html
let spaceship = {
homePlanet: 'Earth',
color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

// If we try to access a property that does not exist on that object, undefined will be returned.

spaceship.favoriteIcecream; // Returns undefined
```

```html
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
```
- Property Assignment: Objects are mutable meaning we can update them after we create them!
  - If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
  - If there was no property with that name, a new property will be added to the object.
  - You can delete a property from an object with the `delete` operator.
  - ![img.png](propertyassignment.png)
```html
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

const spaceship = {
'Fuel Type': 'Turbo Fuel',
homePlanet: 'Earth',
mission: 'Explore the universe'
};

delete spaceship.mission;  // Removes the mission property
```
- Methods: When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
```html
const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
const alienShip = {
invade () {
console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
}
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
```
- Nested Objects: objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!
  - We can chain operators to access nested properties.
```html

const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};


spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
```
- Pass By Reference: when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a `const` variable).
```html
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'
 
```

```html
However, reassignment of the spaceship variable wouldn’t work in the same way
let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.
```

- Looping Through Objects
```html

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


```
# ADVANCED OBJECTS
## The `this` Keyword
```html
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
// More
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
      console.log(dietType);
  }
};
goat.diet();
// Output will be "ReferenceError: dietType is not defined"

// How to solve

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet();
// Output: herbivore

```
- The `this` keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the `dietType` property of goat by using property dot notation.
## Arrow Functions and this :
```html

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet(); // Prints undefined
```
## Privacy :
- Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be `mutable` or able to change in value.
```html
const bankAccount = {
  _amount: 1000
}
```
- In the example above, the `_amount` is not intended to be directly manipulated.
## Getters :
- `Getters` are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method
  - We use the `get` keyword followed by a function.
  - We use an `if...else` conditional to check if both `_firstName` and `_lastName` exist (by making sure they both return truthy values) and then return a different value depending on the result.
  - We can access the calling object’s internal properties using this. In `fullName`, we’re accessing both `this._firstName` and `this._lastName`.
  - In the last line we call `fullName` on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
```html
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'
```
## Setters
- Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

```html

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};


person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
```
## Factory Functions
- A factory function is a function that returns an object and can be reused to make multiple object instances
```html
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


```
## Property Value Shorthand
- ES6 introduced some new shortcuts for assigning properties to variables known as `destructuring`.
```html

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
// shorhand
const monsterFactory = (name, age) => {
  return {
    name,
    age
  }
};
```

## Destructured Assignment
- We often want to extract key-value pairs from objects and save them as variables.
```html
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'


const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'
```
[References](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Built-in Object Methods
[Refer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)
- we have access to object instance methods like: `.hasOwnProperty()`, `.valueOf()`, and many more!, `Object.assign()`, `Object.entries()`, and `Object.keys()`
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)



