function towerBuilder(nFloors) {
  let tower = [];
  let nAsterisks = 1;

  for (let level = 0; level < nFloors; level++) {
    let spaces;
    let asterisks
    let newLevel;
    spaces = nFloors - nAsterisks;
    if (spaces < 0) {
      asterisks = '*'.repeat(nAsterisks);
      tower.push(asterisks);
      return tower;
    }
    let space = ' '.repeat(spaces);
    asterisks = '*'.repeat(nAsterisks);
    newLevel = `${space}${asterisks}${space}`
    nAsterisks += 2;
    tower.push(newLevel);
  }
  return tower;
}

console.log(towerBuilder(6));

// Test Cases

console.log(JSON.stringify(towerBuilder(1)) === ['*']);
console.log(JSON.stringify(towerBuilder(2)) === [" * ","***"]);
console.log(JSON.stringify(towerBuilder(3)) === ["  *  "," *** ","*****"]);

/*
Given a number of floors greater than 0 build a tower represented by *

Input:
  Number of floors greater than 0
Output:
  an array of centered asterisks in strings

Rules:
  1. We need to space out each asterisk in each string based on the floor
     for example:
      '  *  ', 
      ' *** ', 
      '*****'
  2. Each floor level the amount of asterisks increases by 2
  3.

  Algorithm
    We should initialize an empty array to store our strings
    we should create a for loop that will iterate n amount of times, to create n floors
    on each floor we need to pad the start and pad the end based on the difference
    of the number of asterisks and the number of total floors
*/