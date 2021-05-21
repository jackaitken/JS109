function func(s) {
  let substrArr = [];

  for (let i = 0; i < 1; i++) {
    for (let j = 1; j < s.length; j ++) {
      substrArr.push(s.slice(i, j));
    }
  }
  
  for (let word of substrArr) {
    let diff = s.length - word.length;
    debugger;
    if (word.repeat(diff - 1) === s) {
      return [word, diff - 1];
    }
  }
  return [s, 1];
}

console.log(func('abababab'));

// Tests
console.log(JSON.stringify(func('abababab')) === JSON.stringify(["ab", 4]));
console.log(JSON.stringify(func('abcde')) === JSON.stringify(["abcde", 1]));


/*
Given a string s
find a minimum substring t
and the maximum number k
such that the entire string s is equal to t repeated k times
we should return an array

We need to return an array containing the minimum substring and the 

We need to find a minimum substring within a given string
We also need to find a maximum number k, such that if we repeat a substring k
times it would be equal to s

Mental Model
  'ababab' is our string s
  'ab' is our substring t
  'ab' repeated k times (3) is eqaul to s

ALGORITHM
  We need to iterate through the string
  find a minumum substring 
  and check if it equal to the input string
  if it is we should return an array containing the substring and the
  number of times it was repeated


We now have an array of substrings
Can we use repeat to change the length of the substring to the length of the 
input string and then check if they're equal?
*/


// let substrArr = [];

// // for (let i = 0; i < 1; i++) {
// //   for (let j = 1; j < s.length; j ++) {
// //     substrArr.push(s.slice(i, j));
// //   }
// // }
// for (let j = 1; j < s.length; j ++) {
//   substrArr.push(s.slice(0, j));
// }

// console.log(substrArr);
// for (let word of substrArr) {
//   let diff = s.length - word.length;
//   console.log(diff);
//   if (word.repeat(diff - 1) === s) {
//     return [word, diff - 1];
//   }
// }
// return [s, 1];

