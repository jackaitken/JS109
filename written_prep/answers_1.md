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
let name = 'Jack'

let func = name => {
  name = 'Bill'
  console.log(name);
};

func(name);

console.log(name);
```
This code will output `Bill` and then `Jack` and it will have a return value of `undefined`.

On line 104 a global variable `name` is delcared and initialized to the string literal `'Jack'`. On line line 106, a function `func` is defined and it specifies one parameter `name`. This parameter is local to the function. On line 111 the function `func` is invoked and to it the global variable `name` is passed as argument to `func`. The value stored inside `name` is passed by value to `func`'s parameter `name`.

On line 107 the variable `name`, which is local to `func` is reassigned to the string literal `'Bill'`. However, because the local variable `name` has the same identifier as the global variable `name`, the local variable will shadow the global variable. Therefore this reassignment occurs locally and does not affect the global variable. On line 108 the `console.log` method is invoked and the value stored inside the local variable `name` is passed as argument. Since the local variable has been reassigned it will output to the console `Bill`. `console.log` always has a return value of `undefined` so `func`'s return value is `undefined`

Once the execution continues on line 113, the `console.log` method is invoked again and this time the value stored inside the global variable `name` is passed as argument. This will output `Jack` to the console. `console.log` will return `undefined`.

This demonstrates global variable scope as well as function scope and variable shadowing. In particular this demonstrates how global variables are accessible within nested scope and how local variables of the same identifier as global variables will shadow those global variables.


7. 
```js
function fix(value) {
  value.toUpperCase(); 
  value.concat('!'); 
  return value; 
}

const s = 'hello'; 
const t = fix(s); 

// What values do `s` and `t` have? why? 
```

The global variables `s` and `t` have the ending values of the `hello` and `world` respectively.

On line 134 a variable `s` is declared in the global scope and initialized to the string literal `'hello'`. On line 135, a variable `t` is declared in the global scope and initialized to the return value of the function invocation `fix(s)`. The function `fix` is invoked and to it the string stored in the global variable `s` is passed as argument. Whatever this function returns will be assigned to the global variable `t`.

After the function invocation the execution moves to the `fix` function. On line 128, the function `fix` defines one parameter: `value`. This is a variable local to the function `fix`. On line 129 and 130, two string methods are called on the local variable `value`, but since these are non-mutating method calls, that do not mutate the value stored in the local variable `value`. When `value` is retunred on line 131, `value` contains the value `'hello'`.

Nothing is output to the console, and the return value of `fix` is `hello`.

This demonstrates pass by value, and the immutability of primitive data types like strings.

8. 
```js
function fix(value) {
  value = value.toUpperCase(); 
  return value.concat('!'); 
}

let s = 'hello'; 
let t = fix(s); 

// What values do `s` and `t` have? why? 
```

The values of the global variables `s` and `t` are the strings `hello` and `HELLO!` respectively. 

On line 157 the global variable `s` is declared and initialized to the string literal `'hello'`. 

On line 158, the global variable `t` is declared and assigned to the return value of the function invovation `fix(s)`. This means that whatever this `fix` function returns given that the argument is the string stored in the global variable `s`, will be assigned to the global variable `t`.

The execution moves to the `fix` function, which defines one parameter: `value`. This parameter stores the value that was passed into the function as argument. On line 153, inside the function body, `value` is reassigned. It is reassigned to the result of calling the string method `toUpperCase` on the value stored in the local variable `value`. Since strings are immutable, this returns a new string `'HELLO'`. This is the new value assigned to `value`.

On line 154 the string method `concat` is called on the variable `value` and the strings `'HELLO'` and `'!'` are concatenated and a new string is returned.

This return value is assigned to the global variable `t`, which is why the ending values of `s` and `t` are `hello` and `HELLO!`.

This demonstrates pass by value and the immutabilty of primitive data types likes strings.


9. 
```js
function fix(value) {
	value += 'xyz'; 
  value = value.toUpperCase(); 
  return value.concat('!'); 
}

let s = 'hello'; 
let t = fix(s); 
// What values do `s` and `t` have? why? 
```
The global variables `s` and `t` contain the values `hello` and `HELLOXYZ!` respectively.

On line 186 a variable `s` is declared in the global scope and initialized to a string literal `'hello'`.

On line 187, a variable `t` is declared and to it the return value of the function invocation `fix(s)` will be assigned as its value. 

This function invocation moves the execution to the `fix` function, which defines a parameter `value`, which is a variable local to the function. This parameter stores the value that was passed into the function as argument: `hello`. 

On line 181, using the addition assignment operator `+=` the local variable `value` is reassigned to a new string that inclues the original string `hello` and a new string `xyz`.

On line 182, `value` is reassigned again to a new string, which is the result of calling `value.toUpperCase()`. This assigns the string `HELLOXYZ` to the `value` variable.

Finally on line 183, `value` is returned after the string method `concat` is called on `value`. The string stored in `value` and an `'!'` are concatenated to return a new string that is now assigned to the global variable `t`.

This code demonstrates pass by value and the immutability of strings. 

10. 

```js
function fix(value) {
  value[1] = 'x'; 
  return value;  
}

let s = 'abc'; 
let t = fix(s); 

// What values do `s` and `t` have? why? 

```
On line 214, the global variable `s` is declared and initialized to the string literal `'abc'`. 

On line 215, the global variable `t` is declared and to it the return value of the function invocation `fix(s)` is assigned as it's value. This means that the global variable `t` will contain whatever `fix`'s return value is.

Because this is a function invocation, the execution moves to the `fix` function, which defines a parameter, `value`. `value` contains the value, which was passed by value as argument to the `fix` function: `abc`.

On line 210 in the function body, using square bracket notation, the character at index 1, in the string referred to by the local variable `value` is reassigned to the character `x`. However the local variable `value` is never reassigned, so when `value` is returned on line 211, the string `'abc'` is returned and assigned to the global variable `t`.

This code demonstrates pass by value as well as the immutablity of strings. 
