function solve(s){
  let oddSubstrs = getSubstrs(s);
  return oddSubstrs.length;
}

function getSubstrs(s) {
  let substrs = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j ++) {
      let substr = s.slice(i, j);
      if (Number(substr) % 2 !== 0) {
        substrs.push(substr);
      }
    }
  }
  return substrs;
}

console.log(solve('65612824988293231418955126174537'));