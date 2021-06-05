1. What does the following code output, what does it return. What concepts does it demonstrate?

```js
'1' === 1
```
This code snippet will have a return value of `false` and it will have no output.

The JavaScript strict equality operator `===` compares the equality of two operands of the same data type. In this code snippet, the left operand is of the string type: `'1'`, and the right operand is of the number type `1`. 

This expression returns `false` because the strict equality operator determines to operands of different types to be not equal. This code snippet demonstrates the strict equality operator.

_____________________________________________________________________
This code snippet will return the boolean `false` and it will have no output. This expression uses the strict equality operator to compare two values. The left operand `'1'` is a string literal, the right operand is the number `1`. These are two separate primitive data types: a string and a number. 

The JavaScript strict equality operator `===` compares values of the same data type to check their equality. If they are equal, then the expression returns `true`, if not it returns `false`. While the left operand is a string that contains the number 1, since the data types are different, JavaScript evaluates these two operands as being not identical.

This code demonstrates the strict equality operator. 


1. Same question as above.
```js
'1' == 1
```
This expression will have no output and will have a return value of `true`. 

JavaScript's loose equality operator `==` compares the equality of two operands. If those operands are of the same type, the loose equality operator works no differently from the strict equality operator. However the loose equality operator will also attempt to compare two operands of different types. It does this by implicitly coercing one of the operands to a different type and reattempting an equality comparison. 

The expression above attempts to compare the equality of two different primitive data types: a string and a number. Because they are of different types, JavaScript will implicitly coerce the string (left operand) into a number type and reattempt the comparison `1 == 1`. This expression returns `true` so therefore `'1' == 1` returns `true`.

This expression demonstrates the loose equality operator and implicit coercion.


This code snippet will return the boolean `true` and it will have no output. 

This expression uses the non-strict equality operator `==` to compare the values of two operands. While the operands are of different types (left operand is of the string type, right operand is of the number type), the non-strict equality operator will implicitly coerce two different data types into the same type in order to compare their values.

In this case, JavaScript coerces the left operand from a string into a number and attempts to compare the two operands again. It now makes this comparison `1 == 1`. Since both are now of the number type, JavaScript compares the values and determines that the values are identical, thus this expression returns the boolean value `true`.

This demonstrates the non-strict equality operator.

Corrected:

This code snippet will return the boolean `true` and it will have no output. 

The non-strict equality operator `==` compares two operands and checks to see if they are identical.


Rules:
1. Number and a string:
    The string is coerced into a number.

2. Boolean with any other value:
    The boolean is coerced into a number.

3. Object with a primitive value:
    object is coerced into a primitive value

4. undefined == null

3. 
```js
'1' == true;
```
This expression will return `true`. The loose equality operator will coerce the boolean into a number and reattempt the comparison `'1' == 1`. Then the string will be coerced into a number.

4. 
```js
1 == true;
```

The boolean is coerced into a number and `1 == 1` returns `true`.

5. 
```js
[] == true;
```
The array is coerced into a primitive value and compared: `'' == true`. The boolean is coerced into a number and compared: `'' == 1`. The string is coerced into a number and compared `0 == 1` returns `false`.

6. 
```js
{} == false;
```
The object is coerced into the string `'[object Object]'` and compared. the boolean is coerced into a number and compared: `'[object Object]' == 0` return `false`

7. 
```js
'' == false;
```
The boolean is coerced into a number: `0` and compared. The string is coerced into a number and compared `0 == 0` retuns `true`.

8. 
```js
0 == '';
```

The string is coerced into a number and compared `0 == 0` returns `true`.

9. 
```js
0 == '[]';
```
The string coerces to NaN.

10. 
```js
0 == 'false';
```
The string coerces to NaN

11. 
```js
'[object Object]' == {}
```

The object is coerced into a primitive data type: `'[object Object]'` and compared. This returns `true`.


THE BINARY `+` OPERATOR:

This is different from the unary `+` operator.

Rules:

1. String and any other type:
    General rule is that when a string is compared to any other data type, then the other operand is coerced into a string.

2. Combination of numbers, booleans, null or undefined:
    They are converted to numbers and added together.

3. One or both operands are an object:
    they are both converted to strings and concatenated.


1. 
```js
1 + 1
```
Returns `2`

2. 
```js
'1' + 1
```
returns `'11'`

3. 
```js
'1' + '1'
```

4. 
```js
[1] + 1
```
`'11'`

5. 
```js
[1] + '1'
```
`'11'`

6. 
```js
[1] + {a: 1}
```

`'1[object Object]'`

7. 
```js
1 + true
```
`2`

8. 
```js
true + '1'
```
`'true1'`

9. 
```js
1 + undefined
```

`NaN`. it attempts to convert `undefined` to a number, but that returns NaN. NaN plus anything returns NaN

10. 
```js
null + undefined
```
NaN

11. 
```js
null + null
```
`0`



THE UNARY `+` operator:

the unary `+` operator coerces to a number when possible:

```js
+'' // 0
+'1' // 1
+[] // 0
+'abc' // NaN
```

It can be a little unclear however and when coercion to a Number is the goal
it may be best to use `Number()`

```js

```
