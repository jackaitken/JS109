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

