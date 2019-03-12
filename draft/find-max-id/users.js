const assert = require('assert');

// GIVEN AN ARRAY OF OBJECTS FIND THE LARGEST ID
const characters = [
    { id: 1, first: "Tim", last: "Draper" },
    { id: 17, first: "David", last: "Boies" },
    { id: 199, first: "Tim", last: "Kemp" },
    { id: 75, first: "Henry", last: "Mosley" },
    { id: 444, first: "Elizabeth", last: "Holmes" },
    { id: 95, first: "Donald", last: "Lucas" },
    { id: 186, first: "Larry", last: "Ellison" },
    { id: 364, first: "Channing", last: "Robertson" },
    { id: 285, first: "Charles", last: "Fleischmann" },
    { id: 33, first: "John", last: "Howard" }
]

// NATURAL STARTING PLACE IS TO LOOP OVER THE ARRAY
let max = 0;
characters.forEach(character => {
  if( character.id > max ) {
    max = character.id;
  }
});
assert(max === 444);

// WE LEARN THAT MAP CREATE A NEW ARRAY BY CALLING A FUNCTION ON EVERY ELEMENT IN THE ARR
const ids = characters.map(user => user.id)
const sorted = ids.sort((a,b) => a - b);
assert(sorted[sorted.length-1] === 444);
// THAT COULD BE SHORTENED TO 1 LINE
assert(characters.map(user => user.id).sort((a,b) => a-b)[characters.length-1] === 444);

// Math.max() CAN TAKE A LIST OF NUMBERS Math.max(-1,-2,-3)
// OR AN ARRAY OF NUMBERS USING THE SPREAD OPERATOR: Math.max(...array)
// COMBINE THAT WITH MAP AND YOU HAVE A VERY ELEGANT SOLUTION
assert(Math.max(...characters.map(user => user.id)) === 444);``