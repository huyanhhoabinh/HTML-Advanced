# Table và Form
## 1 : Table
- Tạo table `<table>`
- Table row `<tr>`
- Table data `<td>`
- Table heading `<th>` : sử dụng như table data nhưng thể hiện rõ ràng , scope attribute để thể hiện là tiêu đề của dòng hay cột
- Table border `<table border="1">` giá trị của border thể hiện độ dày của viền - hiện tại đã lỗ thời dùng css để thay cho
- Spanning Columns `colspan=2` span multiple Columns
- Spanning Rows `rowspan=2` span multiple rows
- table body, table header, table footer
```
table, td {
  border: 1px solid black;
}
```
```
<table>
  <tr>
  </tr>
  <tr>
  </tr>
</table>
```
```html
table, th, td {
  border: 1px solid black;
  font-family: Arial, sans-serif;
  text-align: center;
}
```
- Bài tập
