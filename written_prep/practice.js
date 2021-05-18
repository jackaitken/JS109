function solve(s0, s1) {
  for (let i in s1) {
      s1[i] = '';
      debugger;
      if (s1 === s0) {
          return true;
      }
  }
  return false;
}

let str = 'hello';
let str1 = 'hello';

solve(str, str1);