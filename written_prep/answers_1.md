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

2. Describe what the `myFunc()` function does

```js

let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}

myFunc();
```

On line 39, a global vairable `hello` is declared and initialized to the string literal `'Hello World'`. On line 40 the function `myFunc` is declared in the global scope using a function declaration and it defines no parameter. When the `myFunc` function is invoked on line 44, the code inside the body of `myFunc`, on line 41 will run. In the function body, the global variable `hello` is passed to the  `console.log` method as argument. This will output the value assigned to the global variable `hello` and `myFunc` will implicitly return `undefined`. By producing an output to the console `myFunc` demonstrates how functions can produce a side effects. Also it demonstrates how global variables are accessible within a nested scope.

3. What will this code output, what will it return, what concepts does it demonstrate?

```js
let name = 'Jack'

let func = name => {
  name = 'Arlo'
  console.log(name);
}

func(name);
console.log(name);
```

This code snippet will output `Arlo` and `Jack`. The `func` function will have an implicit return value of `undefined` because no return value was explicitly defined.

On line 1, a global variable `name` is declared and initialized to a string literal `'Jack'`. On line 3, a function `func` defines one parameter `name` and inside the function body on line 4, this parameter is assigned the string literal `'Arlo'`. 

On line 8, the `func` function is invoked and to it the global variable `name` is passed as argument.

However, `func`'s `name` parameter is a variable local to the `func` function, and it shares the same identifier as the global variable. Therefore it shadows the global `name` variable and does not mutate it. Therefore on line 4, when `name` is passed to the `console.log` method as argument, it is the local variable `name`, which contains the string literal `'Arlo'`, that is being passed. 

When the execution reaches line 4, it will output to the console `Arlo`. The execution will resume after line 6. The `console.log` method is called in the global scope, and this time the global variable `name` is passed as argument. Since `func` did not mutate this variable, line 7 will output to the console `Jack`.

This code snippet demonstrates variable shadowing, as well as global and local scope. In particular it shows how function parameters are themselves variables, and in the case that a function parameter has the same name as a global variable, that local variable will shadow the global variable.

Future problems:

4. 
```js
let name = 'Jack';

let changeName = name => {
  name = 'Jim';
};

changeName(name);
console.log(name);
```

5. 
```js
let jack = 'Jack';
let name;

let changeName = name => {
  name = 'Jim';
};

changeName(jack);
console.log(jack);
```

6. 
```js

```

7. 
```js

```

8. 
```js

```

9. 
```js

```