## JS là gì

- Là ngôn ngữ giúp lập trình tương tác với trang web (tính toán, hiệu ứng...)
- Đi kèm với HTML và CSS => combo tạo nên 1 trang web hoàn thiện, hoàn hảo

## Demo cách nhúng js vào trang web

- Trong cặp thẻ javascript

```
<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
    <script>
        let d = new Date();
        alert("Today's date is " + d);
    </script>
</head>

<body>

</body>
```

- Tạo 1 file javascript riêng

```
project/
├── css/
|   └── style.css
├── js/
|   └── script.js
└── index.html
```

```
<script src="js/script.js"></script>
````

- Nhúng ngay bên trong html

```
<a href="#" onclick="function hi(){alert('Hi!')};hi()">click</a>
```

> VD: Hello world bằng js

## Làm quen với console

- Làm phép cộng, trừ , nhân chia, lấy ra ngày tháng
  "test".length
  "I need upper case".toUpperCase()
  "Hello".getCharAt(0)
  Math.round(4.5), Math.floor(4.5), Math.ceil(4.01)
  Lũy thừa Math.pow(2,3) tương ứng 2 mũ 8
  Math.random(); => Làm sao lấy ra random từ 0 đến 100
- Làm việc với document:
  document.write('<p>Xin chao moi nguoi</p>');
  document.getElementById().innerHTML ="test"
# Khai báo biến
var x,y
Sự khác biệt giữa var và let (let chỉ cho khai báo 1 lần)
Khai báo biến const const FAV_PET = "Cats"; => chỉ gán 1 lần thôi

# Kiểu dữ liệu :
undefined, null, boolean, string, symbol, bigint, number, and object
VD: var x = "dd"


  
