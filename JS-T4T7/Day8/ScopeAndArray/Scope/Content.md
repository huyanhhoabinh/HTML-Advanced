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
## Scope - Block scope:
- Là variables được khai báo bên trong block
```html
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError
```
## Scope Pollution:
- Khi khai báo global thì nó sẽ được lưu ở 1 nơi gọi là `global namespace` => cho phép truy cập từ bất cứ đâu trong chương trình và nó sẽ tồn tại cho đến khi chương trình kết thúc, quá nhiều biến global sẽ dẫn tới đầy bộ nhớ.

```html
let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100
```

## Practice Good Scoping:
- Làm code dễ đọc vì chia các dòng code vào các khối (block)
- Làm code dễ hiểu hơn, mỗi biến sẽ được sử dụng ở 1 phần trong chương trình
- Tiết kiệm bộ nhớ (các biến local sẽ được xoá ngay khi đoạn code trong block được chạy)
- Nếu một biến không cần tồn tại bên ngoài block thì hãy làm như thế.
Example :
```html
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError
```
[Tham khảo](https://caodang.fpt.edu.vn/tin-tuc-poly/phan-biet-su-khac-nhau-giua-var-let-va-const-trong-lap-trinh-es6.html#:~:text=T%C3%B3m%20l%E1%BA%A1i%2C%20s%E1%BB%B1%20kh%C3%A1c%20nhau,vi%20l%C3%A0%20kh%E1%BB%91i%20m%C3%A3%20(block))


