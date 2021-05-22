1. What happens with this code and why? What does it output?

```js
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

This code outputs `one is two`, `two is thee` `three is one`. The global variables `one` `two` and `three` are passed to the function `messWithVars` by reference. Therefore within the function body on lines 5, 6, and 7 the method `Array.prototype.splice` is called on the function parameters `one` `two` `three`, which refer to the original arrays referenced the global variables `one` `two` `three`.

2. What happens with this code and why? What does it output?

```js
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

This code will output `one is one`, `two is two`, `three is three`. On line 36 the function `messWithVars` is invoked and the execution moves to that function. `messWithVars` defines three parameters, `one` `two`, and `three`. Inside the function body on line 27, the local variable `one` is reassigned to the array referenced by the local variable `two`. On line 28 the local variable `two` is reassigned to the array referenced by the local variable `three` and on line 28, the local variable `three` is reassigned the array referenced by the local variable `one`. 

This reassignment happens within the function scope and does not change the assignments of the global variables and the arrays that they reference. Therefore on lines 38, 39, and 40, the `console.log` method is invoked and passed the global variables `one` `two` and `three`, which contain their original assignments.

This snippet demonstrates how global variables are accessible within block scope, but also how reassignment within block scope does not affect the global assignment of those variables.

3. What happens with this code and why? What does it output?

```js
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```
This code will output: `one is one`, `two is two`, `three is three`. The return value will be `undefined`.

On lines 58 - 60, three global variables are declared: `one`, `two`, and `three` and respectively they are all initiazlied to reference, which each point to an array literal: `["one"]`, `["two"]`, `["three"]`.

On line 62 the function `messWithVars` is invoked and to it the three global variables `one`, `two`, and `three` are passed as argument. All three are passed to the function by reference. On line 52, the function `messWithVars` is declared and it defines three parameters, `one`, `two`, and `three`. These parameters are variables local to the `messWithVars` function, but they all reference the array literals referenced by the global variables of the same name. 

Inside the function body from lines 53 - 55, each of the local variables `one`, `two`, and `three` are reassigned respectively to the array literals `["two"]`, `["three"]`, `["one"]`. Although the variables are reassigned, they shadow the global variables `one` `two` and `three`, so the global variables are not reassigned.

This code demonstrates global variable scope and function scope and variable shadowing. When parameters are defined within a function that are given the same identifier as a global variable, those local variables within the function scope will shadow the global variables.