# Blocks and Scope
## Khái niệm Scope và khái niệm block
- Scope:
  - Phạm vi biến có thể được truy cập và tham chiếu
  - Hình dung scope như là phạm vi tầm nhìn: ở bất cứ nơi đâu cũng có thể nhìn thấy mặt trăng, mặt trời, vì sao (globally) còn các con sông, khung cảnh thì ở mỗi thành phố sẽ khác nhau (locally), nhưng trong mỗi thành phố đều có thể nhìn thấy mặt trăng, các vì sao 
- blocks : 
  - A block is the code found inside a set of curly braces {}
  - help us group one or more statements together and serve as an important structural marker for our code.

VD: Một code block có thể là 1 function (body của function cũng là 1 code block)
```html
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
}
```

## Scope - Global Scope:
- Là variables được khai báo bên ngoài block (global variables)
Example:
```html
const color = 'blue';
const returnSkyColor = () => {
  return color; // blue 
};
console.log(returnSkyColor()); // blue
```
```html
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());
```
## Scope - Blocl scope:
- Là variables được khai báo bên trong block
```html
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError
```