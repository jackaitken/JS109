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

17. 
```js
let a = 4; // line 1

do { // line 3 
	a = 5; 
  let b = 3;  // line 5
  break;
} while(true) // line 7

console.log(a) // line 9
console.log(b)
```
This code snippet will output to the console `5`, but when the execution reaches line 10, a `ReferenceError` will be thrown because the variable `b` is block scoped and not reachable by the `console.log` statement.

On line 1 a global variable `a` is declared and initialzied to the number literal `4`. 

Lines 3 - 7 define a `do...while` loop that will run infinitely unless met with some terminating event. On line 4, the global variable `a` is reassigned to the number literal `5`, and on line 5 a variable `b` that is block scoped to the `do...while` loop is declared and initialized to the number literal `3`. Line 6 contains a `break` statement, which exits the `do...while` loop. Execution resumes after line 7.

On line 9 the `console.log` method is called passing in the value associated with the global variable `a` as argument. This logs to the console: `5` and `console.log` returns `undefined`. Since the variable `b` is block scoped, and not visible in the global scope, the code on line 10 will throw an error.

This code snippet demonstrates how global variables are accessible within block scope, and also how variables declared within block scope are not accessible in the global scope.

18. 
```js
let a = 4; // 1 
let b = 2; // 2 

while (true) { // 4
	let c = 3; 
	let a = c;  // 6
  break; 
}              // 8

console.log(a) // 10
console.log(b) // 11
```

On line 1 a global variable `a` is declared and initialized to the number literal `4`. On line 2 a global variable `b` is declared and initialized to the number literal `2`.

Lines 4 - 8 define a `while` loop that will run infinitely unless met with some terminating event. On line 5 a variable `c` that is block scoped, is declared initialized to the number literal `3`. On line 6 a variable `a` that is also block scoped, is initialized to the value stored in the variable `c`: `3`. This local variable `a` shadows the global variable `a`. Any changes on one variable will not affect the other because they are completely separate variables. On line 7 the `break` statement terminates the `while` loop and execution resumes after line 8.

On line 10 the `console.log` method is invoked and to it the value stored in the global variable `a` is passed as argument. `4` is output to the console and `console.log` returns `undefined`.

On line 11 the `console.log` method is invoked and to it the value stored in the global variable `b` is passed as argument. `2` is output to the console and `console.log` returns `undefined`.

The variables declared on lines 5 and 6 are block scoped to the `while` loop, thus they are inaccessible to the global scope. Although a variable `a` is declared, this is a completely separate variable that has not effect on the global variable `a`.

This demonstrates global scope and block scope.

19. 
```js
function example(str) { // line 1
	let i = 3;            // line 2
  while (true) {        // line 3
	  console.log(str);   // line 4
    i -= 1;             // line 5
    if (i == 0) break;  // line 6
  }                     // line 7
}                       // line 8
example('hello')
```
On line 1, a function `example` is declared and one parameter: `str` is defined. On line 9 the function `example` is invoked and to it the string literal `'hello'` is passed as argument. This will be passed to the function as the paramter `str`. The execution moves to line 2.

On line 2, a variable `i` is declared in function scope, and lines 3 - 7 define a `while` loop that will run infinitely unless met with some terminating condition.

On line 4 the `console.log` method is called and the value stored in the paramter `str` is passed as argument. `hello` is output to the console.

`hello` will be output 2 more times as the variable `i` is decremented using the subtraction assignment operator `-=` on line 5. Each time the `while` loop iterates through, `i` will be decremented by `1` and assigned a new value that is 1 less than its previous value. It continues to iterate because the `if` condition on line `6` checks if `i === 0`. While `i` is not equal to `0` it will continue looping. Each time the execution reaches line 4, the value stored in the variable `str` is output to the console.

Finally after 3 iterations, the variable `i` is equal to `0` and the `while` loop is terminated using a  `break` statement.

This demonstrates how variables declared in functions can be reassigned within block scope.
20. 

```js
function greetings(str) { // line 1
	console.log(str)
  console.log("Goodbye"); // line 3
} // line 4

let word = "Hello"; // line 6

console.log(greetings(word)); // line 8
```
On line 1 a function `greetings` is declared and it defines one parameter: `str`. This is a variable local to the `greetings` function.

On line 6, a global variable `word` is declared and initialized to the string literal `'Hello'`. 

On line 8, the greetings function is invoked and the return value of the function is passed to the `console.log` method as argument. Whatever the return value of `greetings` is will be output to the console.

The `greetings` function is invoked and the value stored in the variable `word` is passed as argument. this value is passed into the function as the parameter `str`. The execution moves to the `greetings` function. On line 2, the `console.log` method is invoked and the value stored in the variable `str` is passed as argument. `Hello` is output to the console and the `console.log` method will have a return value of `undefined`. On line 3, the `console.log` method is invoked again and this time passed the string literal `'Goodbye'` as argument. `Goodbye` is output to the console.

Because the `greetings` function has no explicit return value the return value of the function is `undefined`. Therefore the `console.log` invocation on line 8, will output to the console: `undefined`.

This demonstrates how functions with no explicit return value will implicitly have the return value of `undefined`.


21. 
```js
let arr = [1, 2, 3, 4]; // line 1

let counter = 0; // line 3
let sum = 0; 

while (true) { // line 5
  sum += arr[counter]; 
  counter += 1; // line 7
  if (counter === arr.length) break;
} // line 9

console.log(`Your total is ${sum}`); // line 11
```
On line 1 a global variable `arr` is declared and initialized to a reference which point to an array literal.

On line 3 a global variable `counter` is declared and initialized to the number `0`. On line 4 another global variable `sum` is declared and initialized to the number `0`.

Lines 5 - 10 define a while loop that will run infinitely unless met with some terminating condition. On line 7, the global variable `sum` is incremented by the value that is stored in the array referenced by the global variable `arr` at the `counter` index. On the first iteration `counter` is equal to `0`, so the element at index `0` in the array is `1`. Therefore `sum` is incremented by `1`. `sum` will continue to be incremented as the loop iterates.

On line 8 the global variable `counter` is incremented by 1. On line 9 an `if` statement checks whether the value stored in the variable `counter` is equal to the length of the array referenced by the global variable `arr`. Only when that condition returns `true` will the `while` loop terminate.

Once the loop terminates, `sum` contains the value `10` and `counter` contains the value `10`.

The `console.log` method is called on line 12 and a template string is passed as argument. The current value of the variable `sum` will be inserted and `Your total is 10`, will be output to the console. `console.log` will return `undefined`.


22.
```js
let array = [1, 2, 3];

function shadows(array) {
    array.push(4, 5);
    return array;
}

console.log(array);
```
This code snippet will output `[1, 2, 3]` and the `console.log` method will return `undefined`.

On line 1 a global variable `array` is declared and initialized to a reference which points to the array literal: `[1, 2, 3]`.

On line 3 a function `shadows` is defined and it specifies one parameter: `array`. This function is never invoked.

On line 8 the `console.log` method is called and to it the array referenced by the global variable `array` is passed as argument. `[1, 2, 3]` is output to the console and `console.log` returns `undefined`.

Had the `shadows` function been invoked and the the array referenced by the global variable `array` was passed as argument, the array would have been passed by reference. The local variable `array` in the `shadows` function references the same array referenced by the global variable `array`. Therefore pushing the numbers `4` and `5` to the array, would have mutated the array referenced by the global variable `array`. This of course did not happen however since `shadows` was never invoked.


23. 

```js
let a = "Hello";

if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}
```
This code snippet will output: `Hello is truthy`. `console.log` will return `undefined`.

On line 1 a global variable `a` is declared and initialized to the string literal `"Hello"`.

Lines 3 - 7 contain an `if...else` statement. The expression in the `if` condition, checks whether the value stored in the global variable `a` is a truthy value, or in other words if the value evaluates to `true`. Because the string `"Hello"` evaluates to `true`, the code on line 4 is executed. The `console.log` method is invoked and the string `"Hello is truthy"` is passed as argument. `Hello is truthy` is output to the console and `console.log` returns `undefined`.

This code snippet demonstrates truthy vs. falsy values in JavaScript.

24. 

```js
function test() {
	console.log("Written assessment"); 
}

const exam = test()

if (exam) {
	console.log("written assessment"); 
} else {
 console.log("interview"); 
}
```

On line 1 a function `test` is defined in the global scope, which specifies no parameters. On line 5, a constant variable `exam` is declared in the global scope. The value stored in the variable `exam` will be the return value of the `test` function. Because `test` was invoked, the execution moves to the `test` function.

On line 2, inside the function body the `console.log` method is invoked and the string `"Written assessment"` is passed as argument. `Written assessment` is output to the console. `console.log` returns `undefined`. Since the `test` function has no explicit return value, the return value of `test` is `undefined`. Therefore the global variable `exam` is initialized to `undefined`.

Lines 7 - 11 define an `if...else` statement. The expression in the `if` condition checks if the value stored in the global variable `exam` is truthy. Since the value stored in `exam` is `undefined`- a falsy value - the code on line 8 will be bypassed and the code on line 10 will be executed. The `console.log` method is invoked and the string `"interview"` is passed as argument. `interview` is output to the console and the `console.log` method returns `undefined`.

This code snippet demonstrates truthy and falsy values in JavaScript, or in other words values that evaluate to `true` or `false`.


25. 

```js
//what will be logged to the console?

let obj = {a: 1, b: 2}; // line 1 

function shadows(a) {  // line 3 
  console.log(obj[a]); // line 4
  console.log(obj.a);   // line 5
}
shadows("b");  // line 7
```
On line 1 a global variable `obj` is declared and initialized to a reference, which points to the object literal: `{a: 1, b: 2}`.

Lines 3 - 6 define a function `shadows` in the global scope, which specifies one argument `a`.

On line 7, the function `shadows` is invoked and to it the string literal `'b'` is passed as argument. The execution moves to the `shadows` function.

Object properties can be referenced using either dot notation or bracket notation. Dot notation requires that that key used must exist in the object that is referenced. Bracket notation allows for the values stored in variables to access values in an object, but only if the value stored in a variable is a key in the object referenced.

On line 4 the bracket notation property accessor is used and the value stored in the local variable `a`: `'b'`, accesses the key of the same name: `'b'` in the object referenced by the global variable `obj`. This value is passed to the `console.log` method and `2` is output to the console. `console.log` returns undefined.

On line 5 the dot notation property accessor is used and the key `a` is referenced in the object referenced by the global variable `obj`. This value is passed to the `console.log` method and `1` is output to the console. `console.log` returns undefined.

The return value of the function `shadows` is `undefined`.

This code snippet demonstrates the two ways to access object properties: Through dot notation or bracktet notation.

26. 
```js
let peopleCities = {
	boris: "Moscow",
  thomas: "New York",
  stephen: "New Mexico",
}; 

let city = peopleCities.boris; 
console.log(city); 
```
On line 1 a global variable `peopleCities` is declared and initialized to a reference, which points to an object literal.

On line 7 a global variable `city` is declared. The key `'boris'`is accessed using dot notation in the object referenced by the global variable `peopleCities`. This returns the value `'Moscow'`. The global variable `city` is initialized to `'Moscow'`.

On line 7 the `console.log` method is invoked and to it the value stored in the global variable `city` is passed as argument. `'Moscow'` is output to the console and the `console.log` method returns `undefined`.

This code snippet demonstrates how to access object properties with dot notation.


27. 
```js
let peopleCities = {
	name: "Thomas",
  location: "New York",
  occupation: "Web Developer",
}; 

console.log(peopleCities["name"]); 
```

On line 1 a global variable `peopleCities` is declared and initialized to a reference, which points to an object literal.

On line 7, using bracket notation, the key `'name'` in the object referenced by the global variable `obj` is accessed using bracket notation and the value `'Thomas'` is returned. This value is passed to the `console.log` method as argument and `Thomas` is output to the console. `console.log` returns `undefined`.

This demonstrates how to access object properties using the square bracket property accessor.

28. 
```js
let peopleCities = {
	boris: "Moscow",
  thomas: "New York",
  stephen: "New Mexico",
}; 

let friend = "stephen"; 
peopleCities[friend]; 
```

On line 1 an global variable `peopleCities` is declared and initialized to a reference which points to an object literal.

On line 7 a global variable `friend` is declared and initialized to the string literal `'stephen'`.

Object properties can be accessed using bracket notation. This allows for the values stored in variables to access keys in objects, only if the value stored in the variable is a key that exists in the object being referenced.

On line 8, using bracket notation, the value stored in the global variable `friend`: `'stephen'` accesses the key of the same name in the object referenced by the global variable `peopleCities`. This returns `'New Mexico'` but this value is never output or saved to a variable.

This code snippet demonstrates how object properties can be accessed using bracket notation.