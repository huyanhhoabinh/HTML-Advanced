# Kiến thức về array
- Array được khai báo bên trong dấu `[]`, các phần tử sẽ được xếp cạnh nhau như thế này : `1,2,3,'Xinchao',true`
- Mỗi phần tử trong mảng gọi là element
- Mỗi phần tử là 1 kiểu dữ liệu khác nhau
```
let time = [10, true, '2022'];
```
- Cách truy cập vào phần tử trong array bằng index giống như số thứ tự trong 1 danh sách
- Index của mảng bắt đầu từ con số 0 `time[0]`
- Thay đổi phần tử ở index trong mảng, hoặc truy cập vào phần tử là 1 index không có trong mảng
# Arrays with let and const :
- You may recall that you can declare variables with both the `let` and `const` keywords. Variables declared with `let` can be reassigned.
- Variables declared with the `const` keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a `const` array, but cannot reassign a new array or a different value.

# Một số thuộc tính của mạng:
- .length property
- .push() method:
```html
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```

- .pop() method : remove last item of array
```html
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
```
- Array with let and const
[- More array method ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()
    - Use the .shift() method to remove the first item from the array
    - .unshift('popcorn')
```html

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
```
- Arrays and Functions
  - So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.
  - In Javascript objects and arrays are passed by reference
```html
const flowers = ['peony', 'daffodil', 'marigold'];
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
console.log(flowers);

```
  
- NestArray
```html
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```
- [bài tập](https://cafedev.vn/tu-hoc-javascript-bai-tap-full-bai-huong-dan-ve-array-va-ham-array-trong-javascript/)
# Bài tập
- Bài 1: Đoạn code này sẽ hiển thị gì?
```
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); 
```
- Bài 2:
Hãy thử 5 phép toán trong mảng.
1) Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
2) Thêm “Rock-n-Roll” vào cuối.
3) Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
4) Tách giá trị đầu tiên của mảng và hiển thị nó.
5) Thêm trước `Rap` và `Reggae` vào mảng.
- Bài 3:
```html
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
```
