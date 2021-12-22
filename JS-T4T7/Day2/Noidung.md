## Tính coin giải thưởng (10 phút) :
## Đường dẫn file (tương đôi relative và tuyệt đối (absolute)):
![img.png](img.png)
Nói về trường hợp của Xanh
Nói về tên file có dấu cách

## Cách đặt tên file:
- Tất cả các file (ngay cả trên máy Mac) đều có đuôi file mở rộng. Đảm bảo bạn đang sử dụng đúng phần mở rộng khi lưu file.
  - Các file HTML kết thúc bằng .html
  - Các file CSS kết thúc bằng .css
  - file hình ảnh kết thúc bằng .jpg, .png hoặc .gif, tùy thuộc vào kiểu file đó.
  - Các file JavaScript kết thúc bằng .js
- Tên file không bao giờ có dấu cách
  - Trên máy Mac hoặc PC, bạn có thể lưu file có tên “my awesome.html”. Điều này có thể sẽ không hoạt động trên một trang web.
  - Sử dụng dấu gạch ngang trong tên file của bạn thay vì để chỉ khoảng trống. Tên file của bạn sẽ là “my-awesome-website.html” thay thế.
https://hocjavascript.net/clean-code-refactoring/quy-tac-dat-ten-file/

#1. Các nội dung chính của javascript
## Datatype : Kiểu dữ liệu
  - Primitive :
    - string
    - number
    - boolean : isNaN();
  - Object :
    - Cách khai báo :
      - ![img_2.png](img_2.png)
    - Tạo phương thức cho nó :
      - ![img_3.png](img_3.png)
  - Array :
    - ![img_4.png](img_4.png)
## Flow control: 
  - If, else : Có hoặc không
    - ![img_5.png](img_5.png)
  - Switch :
    - ![img_6.png](img_6.png)
  - For: Vòng lặp
    - ![img_7.png](img_7.png)
    - ![img_8.png](img_8.png)
## Operator: Các toán tử
 - ![](img_9.png)
 - ![img_10.png](img_10.png)
 - ![img_11.png](img_11.png)
## Variable: Khai báo biến
 - ![img_12.png](img_12.png)
## Strict mode:
 - Khi để strict mode thì bắt buộc phải khai báo mới dùng được
 - ![img_13.png](img_13.png)
## Scope : Phạm vi khai báo biến
    - Local scope :
![img_14.png](img_14.png)
    - Global
![img_15.png](img_15.png)
    - Loop
![img_16.png](img_16.png)
## Exception:
![img_17.png](img_17.png)
## Output:
![img_18.png](img_18.png)
window.console or just console

#2 Demo cách nhúng js vào trang web

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

# Nội dung chính
## DOM
- Tổng quan về dom
![img_19.png](img_19.png)
- Các loại dom
![img_20.png](img_20.png)

## DOm Hay dùng :
    - HTML Element:
![img_21.png](img_21.png)
    - DOm CSS:
![img_22.png](img_22.png)
    - Dom document:
![img_23.png](img_23.png)

## Bài tập :
- Question 1: Tạo 2 button Hide và Show để thể hiện chức năng ẩn và hiện toạn text
  như hình dưới đây:
  https://www.freecodecamp.org/news/javascript-dom-events-onclick-and-onload/
- 


  
