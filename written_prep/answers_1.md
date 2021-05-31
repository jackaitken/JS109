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
function fix(value) {   // line 1
  value[1] = 'x';       // line 2
  return value;         // line 3
}                       // line 4
                        // line 5
let s = 'abc';          // line 6
let t = fix(s);         // line 7

// What values do `s` and `t` have? why? 

```
The final values of the global variables `s` and `t` will be `abc` and `abc`.

On line 6, the global variable `s` is declared and initialized to the string literal `'abc'`. 

On line 7, the global variable `t` is declared and to it the return value of the function invocation `fix(s)` is assigned as it's value. This means that the global variable `t` will contain whatever `fix`'s return value is after passing in the string stored in the global variable `s`. JavaScript will pass the string by value.

Because line 7 includes a function invocation, the execution moves to the `fix` function, which defines a parameter, `value`. `value` contains the value, which was passed as argument to the `fix` function: `abc`.

On line 2, inside the function body, the element at index 1 in the string stored in the variable `value` is referenced using the square bracket index reference. This element is reassigned to the string literal `'x'`. However, strings are immutable, so the string stored in the local variable `value` is not changed. Therefore on line 3, when the variable `value` is explicitly returned, the string `abc` is returned and assigned to the global variable `t`.

This code demonstrates pass by value as well as the immutablity of strings. 


11. 
```js
let greeting = 'Hello'; // Line 1

while (true) {          // Line 2
  greeting = 'Hi';
  break;
}

console.log(greeting);  // Line 7
```
This code snippet will output `Hi` to the console and it will return `undefined`.

On line 1 a global variable `greeting` is declared and initialized to the string literal `'Hello'`. 

From lines 2 - 5 a `while` loop is defined. The condition `true` signifies that this loop will run infinitely unless it encounters some kind of terminating event.

On line 3, the global variable `greeting` is reassigned to the string literal `Hi`, then on line 4, the `break` statement terminates the loop.

Finally, on line 7, the `console.log` method is invoked and the value stored inside of the global variable `greeting` is passed as argument. Since `greeting` was reassigned to the string literal `'Hi'`, this will output `Hi` to the console and  `console.log` will return `undefined`. 

This code demonstrates global variable scope and block scope. In particular it shows how global variables are accessible from inside nested block scope. It also demonstrates variable reassignment.

12. 

```js
function anyNegatives(arr) {
  arr.forEach(num => {
    if (num < 0) return true;
  });
}

let numbers = [1, 2, 3, -5, 4];

if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}

//What is output to console, and why? What concepts are illustrated?
```
This code snippet will output `The array contains no negatives!` to the console. The function `anyNegatives` will return undefined.

On line 1 a function `anyNegatives` is declared and it defines one parameter: `arr`. `anyNegatives` attempts to use to the array method `forEach` to check if any number is less than 0. It does this with a callback function that defines a parameter `num`. Through each iteration of the callback, each number in the array will be passed into the callback as the parameter `num`. However, `forEach` always returns `undefined`. Therefore `anyNegatives` will also always return `undefined`.

On line 7, a variable `numbers` is declared in the global scope and initialized to a reference which points to the array literal: `[1, 2, 3, -5, 4]`. From lines 9 - 13 an `if...else` statement is defined and the `if` condition checks the return value of the function invocation `anyNegatives(numbers)`. It will check `anyNegatives`'s return value and either the code in the `if` block or the `else` block depending on the return values's truthiness. 

Because `undefined` evaluates to `false`, the code on line 12 will be executed and `The array contains no negatives!` will be output using the `console.log` method.


13. 

```js
function capitalizeFirstLetter(word) {
  word = word[0].toUpperCase() + word.slice(1);
  return word;
}

let word = "javascript";
capitalizeFirstLetter(word); // returns "Javascript"
word; // returns "javascript"
```

This code will not have any output, but the return value of the global variable `word` will be: `javascript` and the return value of the `capitalizeFirstLetter` function will be `Javascript`.

On line 1 a function `capitalizeFirstLetter` is declared and it defines one parameter `word`. This local variable shadows the global variable of the same name. Inside the function body, the local variable `word` is reassigned. The string method `toUpperCase` capitalizes the letter at index 0 in the string, then it is concatenated with the rest of the string after the string method `slice` is called.

On line 6 a global variable `word` is declared and initialized to the string literal `'javascript'`. 

On line 7 the `capitalizeFirstLetter` is invoked and the global variable `word` is passed as argument. However since the variable `word`, which is local to the `capitalizeFirstLetter` function shadows the global variable `word`, the global variable is not reassigned and still retains it's original value: `javascript`.

This code snippet demonstrates variable shadowing and how block scoped variables, with the same name as a global variable will shadow that global variable.

14. 

```js
let name = "nina";

function outer() {
  let name = "jill";
  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }
  return inner();
}

outer();
name;
```
This code snippet will not output anything to the console, but the function `outer` will return `Jill` and the global variable `name` has the return value of `nina`.

On line 1 a global variable `nina` is declared and initialized to the string literal `'nina'`. On line 3 a function `outer` is declared, which takes no arguments. Inside the function body on line 4 a local variable `name` is declared and initalized to the string literal `'jill'`. This is local variable shadows the global variable of the same name.

On line 5, a function `inner` is declared inside of the `outer` function. This takes no arguments as well, but when it it invoked on line 8, `inner` will return the local `name` variable in title form, so that the character at index 0, will be upper cased and the rest of the name is concatenated. This will return `Jill`. This is a new string as strings are immuatable. The local variable `name` still contains the original value `jill`.

The function `outer` uses the return value of `inner` as its own return value. `Jill` is returned.

This demonstrates variable shadowing and the immutability of strings.


15. 
```js
const hottestTemps = [
  {continent : "Africa", country: "Tunisia", temp: 55},
  {continent : "Asia", country: "Iran", temp : 54},
  {continent : "North America", country: "USA", temp : 56.7},
  {continent : "South America", country: "Argentina", temp: 48.9},
  {continent : "Europe", country: "Greece", temp : 49},
  {continent : "Oceania", country: "Australia", temp : 50.7}
];

function toFahrenheit(tempsArr) {
  let newTempsArr = tempsArr.slice();
  newTempsArr.forEach(obj => {
    obj.temp = (obj.temp * 9 / 5) + 32;
  });
}

const hottestTempsInF = toFahrenheit(hottestTemps);
console.log(hottestTempsInF);
console.log(hottestTemps);
```
The return value of the function `toFarenheit` is `undefined`, therefore the call to `console.log(hottestTempsInF)` will return `undefined`. The `console.log(hottestTemps)` call on line 19 will also return `undefined` but it will also output the `hottestTemps` object with the temperatures in farenheit instead of celsius.

On line 1 a global variable `hottestTemps` is declared and initialized to a pointer, which references an array literal, that contains nested objects as the array elements.

The function `toFarenheit` defines a parameter `tempsArr`. When this function is invoked on line 17, the execution moves to the `toFarenheit` function. On line 11, the array method `slice` creates a copy of the `hottestTemps` outer array, but the nested objects are not copied, thus they still reference the same objects. 

The array method `forEach` is called on the copied array, and a callback function, with a parameter `obj` will iterate over each object. Since `obj` will reference the same objects, objects within the `hottestTemps` array will be mutated. 

This demonstrates how global variables are accessible within function, but it also demonstrates how methods like `slice` do not make deep copies.


16. 
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

numbers.filter(num => num % 2 === 0)

console.log(numbers); 
```

On line 1, the global variable `numbers` is declared and initialized to a reference, which points to an array literal: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

On line 3, the array method `filter` is called, which will use a callback function to select items from the `numbers` array and return a new array, with those selected numbers.

the callback function defines a parameter `num`, and on each iteration through the callback function, the current element in the `numbers` array will be passed into the callback as `num`. It will then check using the remainder operator `%`, if the current number is even. It then implicitly returns either `true` or `false` on each iteration. `filter` makes it's selection based on the elements that return `true`.

However, this new array is never assigned to a variable, so this array is never saved. The call to the method `console.log` on line 5, passes the array referenced by the global variable `numbers` and it will output to the console: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. `console.log` always returns `undefined` so this will also return `undefined`.

