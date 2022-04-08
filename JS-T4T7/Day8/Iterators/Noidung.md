## Higher-order functions
- we can assign functions to variables, and we can reassign them to new variables.
```html
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
// rename function with shorter name
const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
```
- If we could look up the address in memory of `busy` and the address in memory of `announceThatIAmDoingImportantWork` they would point to the same place.
- Pass function like parameters :
  - A `higher-order function` is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters `callback functions`.
```html
const higherOrderFunc = param => {
param();
return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);
```
 - Pass `anonymous function` (a function without a name) that counts to 10. Anonymous functions can be arguments too!
```html
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});
```