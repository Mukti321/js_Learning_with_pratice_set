// Array in JavaScript
//=============================
//Array is a collection of multiple values stored in a single variable.
let iplTeams = ["CSK", "MI", "RCB", "KKR", "DC", "SRH", "RR", "PBKS"];
console.log(iplTeams);

// ex:2 Practice: `colors` naam ka array banao jisme 3 colors ho.
let colors = ["navy bue", "marron", "white"];
console.log(colors);

// Access Array Elements by Index
//==================================
// Array indexing starts from 0
const wwe = [
  "The Rock",
  "John Cena",
  "Stone Cold",
  "Hulk Hogan",
  "The Undertaker",
];
console.log(wwe[1]);
console.log(wwe[2]);

// length of an Array
//--------------------------
// length returns the total number of elements in an array.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums.length);

// Add elements in array
//--------------------------
// A value can be added by assigning it to a new index.
const marks = [96, 99, 78, 88, 90];
marks[3] = 87;
console.log(marks);

// Empty Array
//--------------------------
// An array can be declared without any elements. It is called an empty array.
const emptyArray = [];
console.log(emptyArray);

// different data types in an array
//--------------------------
// An array can contain values of different data types.
const mixeddata = [1, "heelo", true, null, undefined];
console.log(mixeddata);

const mixeddata1 = [1666, "hello", false, null, undefined, [1, 2, 3]];
console.log(mixeddata1);
