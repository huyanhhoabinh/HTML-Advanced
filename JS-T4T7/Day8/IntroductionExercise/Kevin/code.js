const kelvin = 293;
let celsius = kelvin - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

