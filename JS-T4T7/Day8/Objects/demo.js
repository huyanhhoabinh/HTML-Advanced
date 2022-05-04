let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;


/* Bracket Notation*/
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth',
    numCrew: 5
};

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];

console.log(isActive);

/* Property assignment*/
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


/*Methods*/

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
    retreat: function() {
        console.log(retreatMessage);
    },
    takeOff: function() {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};

alienShip.retreat();
alienShip.takeOff();



let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave  = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [{
    name:'henry'
}];

let firstPassenger = spaceship.passengers[0];




/*Pass by reference*/

const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
};

let paintIt = obj => {
    obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

//
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

/* However, reassignment of the spaceship variable wouldn’t work in the same way:*/

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

/*Demo*/

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
    obj.disabled = true;
};

greenEnergy(spaceship);

remotelyDisable(spaceship);
console.log(spaceship);

/*For in*/

let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// for...in
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for(let crew in spaceship.crew) {
    console.log(`${crew}: ${spaceship.crew[crew].name}`);
}


for(let crew in spaceship.crew) {
    console.log(`${spaceship.crew[crew].name}: ${spaceship.crew[crew].degree}`);
}
// Demo Getters method

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if(typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
};
console.log(robot.energyLevel);


// Demo Setters method
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if(typeof num === 'number' && num >= 0){
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

// Demo Function factory

const robotFactory = (model , mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();

// Build in object method
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);



