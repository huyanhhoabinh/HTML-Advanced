## CSS Anatomy
- Two different methods, or syntaxes, for writing CSS code :
    - ruleset
    - inline style

- Ruleset Terms:
  - Selector—The beginning of the ruleset used to target the element that will be styled.
  - Declaration Block—The code in-between (and including) the curly braces ({ }) that contains the CSS declaration(s).
  - Declaration—The group name for a property and value pair that applies a style to the selected element.
  - Property—The first part of the declaration that signifies what visual characteristic of the element is to be modified.
  - Value—The second part of the declaration that signifies the value of the property.
- Inline Style Terms:
  - Opening Tag—The start of an HTML element. This is the element that will be styled.
  - Attribute—The style attribute is used to add CSS inline styles to an HTML element.
  - Declaration—The group name for a property and value pair that applies a style to the selected element.
  - Property—The first part of the declaration that signifies what visual characteristic of the element is to be modified.
  - Value—The second part of the declaration that signifies the value of the property.

[//]: # (![img.png]&#40;cssanatomy.png&#41;)
<img src="cssanatomy.png" alt="drawing" width="800px" height="800px"/>
- `Bài tập thực hành :` đổi 1 style từ inline style sang internal style và external style
## Selector :
- Type : type selector matches the type of the element in the HTML document.
```html
p {
  color: green;
}
```
- Universal : the `universal` selector selects all elements of any type.
```html
* { 
  font-family: Verdana;
}
```
- Class : 
```html
<p class='brand'>Sole Shoe Company</p>
// css
.brand {

}
```
- Multiple Classes :
```html
.green {
  color: green;
}
 
.bold {
  font-weight: bold;
}

<h1 class='green bold'> ... </h1>

```
- ID : element needs to be styled uniquely, we can give it an `ID` using the `id` attribute.
```html
<h1 id='large-title'> ... </h1>
#large-title {

}
```
- Attribute
```html
<img src='/images/seasons/cold/winter.jpg'>
<img src='/images/seasons/warm/summer.jpg'>

img[src*='winter'] {
height: 50px;
}

img[src*='summer'] {
height: 100px;
}

a[href*='florence'] {
color: lightgreen;
}


```
- Pseudo-class: how the appearance of certain elements can change, or be in a different state, after certain user interaction. all examples of pseudo-class selectors in action! In fact, `:focus`, `:visited`, `:disabled`, and `:active` are all pseudo-classes
```html

p:hover {
  background-color: lime;
}
```
- Specificity :Specificity is the order by which the browser decides which CSS styles will be displayed  `ID > class > type`
```html
<h1 class='headline'>Breaking News</h1>
h1 {
color: red;
}

.headline {
color: firebrick;
}
```

- Chaining:
```html
h1.special {
 
}


```
- Descendant Combinator: 
```html
<ul class='main-list'>
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>

.main-list li {

}
```
- Chaining and Specificity :
```html
p {
  color: blue;
}
 
.main p {
  color: red;
}


```
- Multiple Selectors:
```html
h1,
.menu {
font-family: Georgia;
}
```
## Visual rule :
- Font Family: like Microsoft Word or Google Docs, chances are that you probably also used a feature that allowed you to change the font you were typing in
```html

h1 {
  font-family: Garamond;
}
```
- Font Size
```html
p {
  font-size: 18px;
}
```
- Font weight :
```html
p {
  font-weight: bold;
}
```
- Text Align :will align text to the element that holds it, otherwise known as its parent.
  - left — aligns text to the left side of its parent element, which in this case is the browser.
  - center — centers text inside of its parent element.
  - right — aligns text to the right side of its parent element.
  - justify— spaces out text in order to align with the right and left side of the parent element.
```html
h1 {
  text-align: right;
}
```
- Color and Background Color :
  - color: this property styles an element’s foreground color
  - background-color: this property styles an element’s background color
```html
h1 {
  color: red;
  background-color: blue;
}
```

- Opacity : It’s measured from 0 to 1, with 1 representing 100%, or fully visible and opaque, and 0 representing 0%, or fully invisible.
```html
.overlay {
  opacity: 0.5;
}
```
- Background Image : CSS has the ability to change the background of an element. One option is to make the background of an element an image
```html
.main-banner {
  background-image: url('https://www.example.com/image.jpg');
}
```
- Important : It will override any style no matter how specific it is. As a result, it should almost never be used. Once !important is used, it is very hard to override.
```html

p {
  color: blue !important;
}
 
.main p {
  color: red;
}
```