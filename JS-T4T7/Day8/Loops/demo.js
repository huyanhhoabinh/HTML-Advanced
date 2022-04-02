const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
    console.log(`I would love to visit ${vacationSpots[i]}`);
}

// demo
// Write your code below
let bobsFollowers = ['A','B', 'C', 'D'];
let tinasFollowers  = ['A','B', 'E'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
};

/*While*/
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;
while(currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

/* Do while*/
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
    console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
    console.log(secondMessage)
};