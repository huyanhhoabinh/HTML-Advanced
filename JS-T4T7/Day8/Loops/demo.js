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