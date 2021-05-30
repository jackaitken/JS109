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
On line 1, a global variable `arr` is declared and initialized to a reference, which points to an array literal: `[1, 2, 3, 4]`.

On line 3, the array method `filter` is called on the global variable `arr`. `filter` performs a selection on an array based on a selection criterion. It uses the return value of the callback function on each iteration to determine its own return value. If the return value of the callback is truthy then that element will be selected.




