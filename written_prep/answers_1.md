1. What will the following code return? What will it output? What concepts does it demonstrate?

```js
let number;
number = 'ten';
let counter = 1;

if (number === 'seven') {
  counter += 1;
} else {
  counter -= 1;
}

console.log(counter);
```

The return value of this snippet will be `undefined` and it will output `0`.

On line 4, a global variable `number` is declared and initialized to `undefined`

On line 5, the global variable `number` is explicitly assigned to the string literal `'ten'`.

On line 6, a global variable `counter` is declared and initialized to the number `1`.

From lines 8 - 12 an `if...else` statement is defined.

On line 8, the `if` statement's condition evaluates the expression `number === 'seven'`. This expression will return a truthy or falsy value. If it is truthy, then the code on line 9 will run, if it is falsy, it will bypass the code in the `if` block and run the code in the `else` block on line 11.

The expression in the `if` statement's condition returns false because the global variable `number` is not equal to `'seven'`, therefore the code in the `else` block on line 11 is triggered and the subtraction assignment operator decrements the value of the global variable `counter` by `1`. 

Finally on line 14 the `console.log()` method is invoked and the value referenced by the global variable `counter` is passed as argument. This will output `0` and because the return value of `console.log()` is `undefined`, `undefined` will be the return value.

This code snippet demonstrates variable assignment and reassignment as well as how global variables are accessible within block scope.