1. What does the following code output, what does it return. What concepts does it demonstrate?

```js
'1' === 1
```

This code snippet will return the boolean `false` and it will have no output. This expression uses the strict equality operator to compare two values. The left operand `'1'` is a string literal, the right operand is the number `1`. These are two separate primitive data types: a string and a number. 

The JavaScript strict equality operator `===` compares values of the same data type to check their equality. If they are equal, then the expression returns `true`, if not it returns `false`. While the left operand is a string that contains the number 1, since the data types are different, JavaScript evaluates these two operands as being not identical.

This code demonstrates the strict equality operator. 

1. Same question as above.
```js
'1' == 1
```

This code snippet will return the boolean `true` and it will have no output. 

This expression uses the non-strict equality operator `==` to compare the values of two operands. While the operands are of different types (left operand is of the string type, right operand is of the number type), the non-strict equality operator will implicitly coerce two different data types into the same type in order to compare their values.

In this case, JavaScript coerces the left operand from a string into a number and attempts to compare the two operands again. It now makes this comparison `1 == 1`. Since both are now of the number type, JavaScript compares the values and determines that the values are identical, thus this expression returns the boolean value `true`.

This demonstrates the non-strict equality operator.

Corrected:

This code snippet will return the boolean `true` and it will have no output. 

The non-strict equality operator `==` compares two operands and checks to see if they are identical.