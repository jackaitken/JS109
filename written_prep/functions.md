Ways to define function

1. Function Declaration

Any function definition that does not begin with the word `function` is not a function declaration. Here is an example of a function declaration:

```js
function func () {
  // Some code
}
```

Here is an example of a function expression that contains a function declaration:

```js
let func = function() {
  function innerFunc() {
    // Some code
  }
};
```

However this next inner function would NOT be considered a function declaration because the first word is not `function`.

```js
let func = function () {
  return function innerFunc() {
    // Some code
  }
};
```

```js
(function func() {
  // Some code
});
```

That's also a function expression NOT a function declaration because although it begins with the word `function`, it's wrapped in parentheses.

2. Function Expression

A function expression looks like this:

```js
let func = function() {
  // Some code
};
```

A key difference between function expressions and function declarations is that function expressions CANNOT be invoked before they appear in a program. For example, this would work:

```js
func();

function func() {
  console.log('hello');
}
// hello
```

However, this would not:

```js
func();

let func = function() {
  console.log('hello');
}
// Uncaught ReferenceError: func is not defined
```

This is because function declarations are hoisted to the top of the enclosing function or global scope, but function expressions are not.

3. Arrow function expressions

```js
let add = (a, b) => a + b;
add(2, 4);

// 6
```

Arrow functions are similar to function expressions in that they aren't hoisted like function declarations, but they allow for implicit return values like above. We can omit explicit return statements in arrow functions when there is only one expression as above. 

The single expression can have subexpressions so long as it evaluates to a single value.

If the arrow function has two or more expressions, then we will need to include an explicit return as well as curly braces.

```js
let squaredProduct = (num1, num2) => {
  let product = num1 * num2;
  return product * product;
};

squaredProduct(4, 4);
// 256
```
We can see that there are two expressions here meaning the we can't rely on implicit return. We must explicitly return product * product.

Pass by value - Pass by reference

Different languages handle passing arguments differently. We normally describe it as pass by value and pass by reference. Let's talk about both

1. Pass by value

Pass by value is a term that traditionally means when a value is passed as argument to a function, the function can't do anything to mutate the original variable. No matter what happens in the function, the variable itself will still contain the same value that was passed to the function.

Take this as an example:

```js
let changeName = name => {
  name = 'Jim';
};

let func = () => {
  let name = 'Jack';
  changeName(name);
  console.log(name);
};

func();

// Jack
```
On line 118 we invoke changeName() passing in the local variable name as argument. In changeName() we define an arugment name, but this has no effect on the other name variable. In fact both of these variables are separate and cannot see eachother. More importantly though, we can see that since changeName did not have any effect on the original variable, that it was passed by value.

However this isn't the case in every JavaScript function invocation.

2. Pass by reference

```js
let changeNames = array => {
  for (let i in array) {
    array[i] = array[i].toUpperCase();
  }
}

let arr = ['jack', 'arlo', 'daphne'];
changeNames(arr);
console.log(arr);

// [ 'JACK', 'ARLO', 'DAPHNE' ]
```

Let's take this snippet for example. We invoke changeNames and pass to it a global variable arr. We initalize a `for...in` loop and reassign the current name in array to an upper case name.

We can see that when we log out `arr` on line 141 that those original names have been mutated.

But let's adjust this above program a bit:

```js
let changeNames = array => {
  return array.map(name => name.toUpperCase());
}

let arr = ['jack', 'arlo', 'daphne'];
changeNames(arr);
console.log(arr);
// [ 'jack', 'arlo', 'daphne' ]
```

