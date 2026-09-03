//push() method
//----------------
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
const fruits = ["apple", "kiwi", "banana", "mango"];
let newFruits = fruits.push("papaya");
console.log(newFruits); // push() method not return the array but return the new length of the array.
console.log(fruits);

// unshift() method
//-------------------
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const user = ["John", "Doe", "Smith"];
const newuser = user.unshift("john");
console.log(newuser); // unshift() method not return the array but return the new length of the array.
console.log(user);

// pop() method
//-------------------
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const iplTeam = ["CSK", "RCB", "MI", "KKR"];
const removedTeam = iplTeam.pop();
console.log(removedTeam); // pop() method return the removed element.
console.log(iplTeam);

// shift() method
//-------------------
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const rollno = [192, 193, 194, 195];
const removedrollno = rollno.shift();
console.log(removedrollno); // shift() method return the removed element.
console.log(rollno);

//concatenate() method
//-------------------
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const firstarray = [1, 2, 3];
const secondarray = [4, 5, 6];
const mergearray = firstarray.concat(secondarray);
console.log(mergearray); // concat() method return the new array.

// indexof() method
//----------------------
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const vegetables = ["carrot", "potato", "tomato", "onion"];
const indexvegetable = vegetables.indexOf("tomato");
const indexvegetable1 = vegetables.indexOf("mango");
console.log(indexvegetable); // indexOf() method return the index of the element.
console.log(indexvegetable1); // indexOf() method return the index of the element.