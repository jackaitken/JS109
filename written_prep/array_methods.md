1. `filter`

`filter` is an array method that performs selection. It takes a callback function as argument, and for each iteration through the callback function, `filter` will makes its selection based on the truthiness of each iteration's return value. `filter` will use the return value of each iteration through the callback for it's own return value, which is a new array of the selected elements.

2. `forEach`

`forEach` is an array method that performs iteration. It takes a callback function as an argument. `forEach` always returns `undefined`, and it does not care about the return value of the callback function. `forEach` is especially useful to iterate through a collection, but it cannot return a new array.

3. `map`

The array method `map`, performs transformation and given an array of length n, will always return a new array of the same length. `map` takes a callback function as argument and relies on the return value through each iteration of the callback to perform some type of transformation on the calling array. It will transform each element and return a new array.

```js
let arr = [1, 2, 3, 4];

let newArr = arr.filter(num => num % 2 === 0);

newArr;
// [2, 4]
```
On line 1 a global variable `arr` is declared and initialized to a reference, which points to the array literal: `[1, 2, 3, 4]`.

On line 3, the array method `filter` is called on the array referenced by the variable `arr`. `filter` is a selection method that uses a selection criteron to build and return a new array with the selected elements.

A callback function with one parameter: `num` is passed as argument to the `filter` method. On each iteration through the callback function the current array element will be passed into the callback as the parameter `num`. 

This callback uses the remainder operator `%` to check if the current array element is even. If the return value of a given iteration through the callback is truthy, then this element will be selected and added to the new array.

Once this new array is returned by `filter` the global variable `newArr` will contain a reference, which points to this new array. The array referenced by `newArr` will contain the even elements from the original array: `[2, 4]`. Nothing is output to the console. The global variable `newArr` will have the return value `[2, 4]`.

The code snippet demonstrates the array method `filter` and how a selection method works.


Defining callbacks:
  a callback function with one parameter: `insert` is passed as argument to the array method `insert`.

