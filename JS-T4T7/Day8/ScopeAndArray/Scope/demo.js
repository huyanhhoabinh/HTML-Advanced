// Blocks and Scope
const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue
}

//
const city = 'New York City';
const logCitySkyline = () => {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());
//
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

