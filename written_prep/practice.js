function wave(str) {
  str = str.toLowerCase();
  let strArr = new Array(str.length).fill(str);
  let waveArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let curWord = strArr[i];
    curWord = curWord.split('');
    debugger;
    if (curWord[i] === ' ') {
      continue;
    } else {
      curWord[i] = curWord[i].toUpperCase()
      curWord = curWord.join('');
      waveArr.push(curWord);
    }
  }

  return waveArr;
}

console.log(wave('two words'));

/*
Given a string input we need to return an array of the same length, but 
beginning with the first character, it should be uppercased. Then sequentially
then next letter should be uppercased with every other letter lower cased

can contain more than one word and we should bypass white spaces.


Algorithm
  - set a variable equal to an empty array
  - lowercase the entire array
  - create an array of length str.length and fill it with the str
  - iterate over that array
    - for each element in the array:
      - if element[index] === '':
        - continue
      - else:
        - uppercase the letter at the current index
        - push that string to the array
*/