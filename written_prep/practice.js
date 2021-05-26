var sumOddLengthSubarrays = function(arr) {
  let subArrs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let subarr = arr.slice(i, j);
      if (subarr.length % 2 !== 0) {
        subArrs.push(subarr);
      }
    }
  }
  return subArrs.reduce((outAcc, subarr) => {
    return outAcc + subarr.reduce((innAcc, elem) => {
      return innAcc + elem;
    }, 0);
  }, 0)
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));


/*
for each number in the input array

*/