#Object

##Creating Objects
- We use curly braces, `{}`, to designate an object literal:
```html
let spaceship = {}; // spaceship is an empty object
```
- Data of object:  data is organized into key-value pairs ![img.png](keyvalue.png)
```html
// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
```
    The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.
- Accessing Properties: Let’s explore the first way— dot notation, `.`
```html
let spaceship = {
homePlanet: 'Earth',
color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

// If we try to access a property that does not exist on that object, undefined will be returned.

spaceship.favoriteIcecream; // Returns undefined
```
