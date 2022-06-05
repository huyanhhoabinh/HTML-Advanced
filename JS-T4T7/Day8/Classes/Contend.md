# Classes
- Đây là cách ta tạo ra 1 object
```html
let halley = {
  _name: 'Halley',
  _behavior: 0,
 
  get name() {
    return this._name;
  },
 
  get behavior() {
    return this._behavior;
  },
 
  incrementBehavior() {
    this._behavior++;
  }
}

class Dog {
constructor(name) {
this._name = name;
this._behavior = 0;
}

get name() {
return this._name;
}
get behavior() {
return this._behavior;
}

incrementBehavior() {
this._behavior ++;
}
}
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
```
- Mỗi lần tạo 1 object ta đều phải code lại mà không sử dụng lại được, sử dụng class để giảm việc duplicate code
- VD: 
```html
class Dog {
constructor(name) {
this.name = name;
this.behavior = 0;
}
}


```
- Để tạo 1 instance của Dog class thì ta dùng từ kháo `new`

```html
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}
 
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```

- Method trong class khá giống trong object, có điều không cách nhau bởi dấu ;
```html

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```