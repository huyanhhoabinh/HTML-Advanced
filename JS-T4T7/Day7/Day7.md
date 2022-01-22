## Chữa bài tập về nhà
- Giải thích lại các kiến thức ở bài trước thông qua bài Ul, li
## Rà lại kiến thức căn bản JS :
- Các cách để hiển thị dữ liệu trong JS :
  - Writing into an HTML element, using innerHTML
  - Writing into the HTML output using document.write().
  - Writing into an alert box, using window.alert()
  - Writing into the browser console, using console.log()
  Refer : https://www.w3schools.com/js/js_output.asp
- Cú pháp JS :
  - Cách khai báo biến : 
    - var : var a;, var a,b,c;
    - let :
      - Khái niệm block :
        - Code để trong dấu {} gọi là block
        - Let thì có tác dụng trong block
        - var thì có tác dụng global
        - Refer : https://www.w3schools.com/js/js_let.asp
    - const
    - JavaScript Identifiers / Names :
      - một biến thì bắt đầu bằng in hoa, in thường, $ hoặc _
      - Case Sensitive : một biến goSchool và GoSchool là khác nhau
      - Các rule đặt tên biến : Camel Case
  Refer : https://www.w3schools.com/js/js_statements.asp
- Comment : // hoặc comment nhiều dùng /**/
- JavaScript Arithmetic Operators :
  - JavaScript Arithmetic Operators : +, - , *, /, %, **, ++, --
  - JavaScript Assignment Operators
  - JavaScript String Operators
  - JavaScript Comparison Operators
  - JavaScript Logical Operators
  - Refer : https://www.w3schools.com/js/js_operators.asp
- JavaScript Data Types :
  - Main type : 
    - JavaScript Strings
    - JavaScript Numbers
    - JavaScript Booleans
    - JavaScript Arrays : tạo 1 mảng và lấy từng phần tử trong đó ra.
    - The typeof Operator
    - Undefined
  - let x = 16 + 4 + "Volvo"; vs let x = "Volvo" + 16 + 4;
  - JavaScript Types are Dynamic
- JavaScript Functions :

Bài tập :
  Bài 1 : Viết 1 hàm kiểm tra xem 1 số có phải là số nguyên dương hay không (kiểm tra là số nguyên và phải > 0)
  Bài 2: Viết 1 hàm truyền vào 2 số và tính tổng (in ra bằng console.log)
      2.1 Tính tổng 2 số của 1 object :
        let numbers = {
          number1 : 20,
          number2 : 30
        };
      2.2 Làm 1 form có 2 ô input sau đó có 1 button, khi click thì sẽ tính tổng 2 ô, nếu nhập thiếu 1 trọng 2 ô thì sẽ hiện thông báo alert là nhập đủ.