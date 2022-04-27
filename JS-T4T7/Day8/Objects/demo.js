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




