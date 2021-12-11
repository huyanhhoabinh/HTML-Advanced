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

