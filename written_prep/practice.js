/*
Sherlock on Pockets (6 kyu)

Sherlock has to find suspects on his latest case. He will use your method, dear Watson. 
Suspect in this case is a person which has something not allowed in his/her pockets.

Allowed items are defined by array of numbers.

Pockets contents are defined by object properties where the key is a person and value 
is one or few things represented by an array of numbers (can be null or empty array if 
empty), example:

- Write method which helps Sherlock to find suspects.
- If no suspect is found or there are no pockets (pockets == null),
- the method should return null
*/

const pockets = {
  bob: [1],
  tom: [2, 5],
  jane: [7]
};

function findSuspects(pockets, allowedItems) {
  return Object.keys(pockets).filter(person => {
    return pockets[person].some(item => {
      return (!allowedItems.includes(item))
    });
  });
}

/*
we need to look through the object and check if there are any people who have
items that at not in the allowed items array

ALGORITHM:
  - get each person and their items
  - assign variable = person
  - assign variable = their items
  - iterate through their items:
    - if there is any item that is not in the allowed item list
      return that person as a suspect.
*/

console.log(findSuspects(pockets, [1, 2])); // ["tom", "jane"]
console.log(findSuspects(pockets, [1, 7, 5, 2])); // null
console.log(findSuspects(pockets, [])); // ["bob", "tom", "jane"]
console.log(findSuspects(pockets, [7])); // ["bob", "tom"]