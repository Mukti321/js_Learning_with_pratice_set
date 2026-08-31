//      LEVEL - 1
//------------------------------
// function, function declartaion, Function Call / Invocation
function greet() {
  console.log("good morning");
}
greet();

// parameter, multiple parameter & arguments
function add(a, b, c) {
  return (a + b + c) / 3;
}
console.log(add(53, 26, 57));

// return &  default parameter

//Create square(n) that returns the square of a number.
// return :-
function square(n) {
  return n * n;
}
console.log(square(5));

//default parameter
function minus(a, b = 5) {
  //  here b is default parameter
  return a - b;
}
console.log(minus(7));

//      LEVEL - 2
//------------------------------
//  Function Expression & Anonymous Function
let a = function (a, b) {
  return a + b;
};
console.log(a(57, 55));

// Arrow Function
const mul = (a, b) => {
  return a * b;
};
console.log(mul(182, 161));

// implicit Return
//==================
// Q.1  Return the cube of a number using an arrow function with implicit return.
const cube = (n) => n * n * n;
console.log(cube(7));

//IIFE (Immediately Invoked Function Expression)
//===================================================
// Q.1 Use an IIFE to print "Welcome to JavaScript"
(function () {
  let a = 262;
  console.log(a);
  console.log("Welcome to JavaScript");
})();

(() => {
  let b = true;
  console.log(b);
})();

//     LEVEL - 3
//------------------------------
//  Global Scope
let age = 26;
let gs = () => {
  console.log(age);
};
gs();

// local/ Function Scope
let ls = () => {
  let age = 56;
  console.log(age);
};
ls();

// block scope
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y);
}

// lexical scope
let outer = () => {
  let age = 24;
  let name = "mukti";
  let inner = () => {
    console.log(age);
  };
  inner();
  console.log(name);
};
outer();

// Scope Chain
let child = "harsh";
let outside = () => {
  let toy = "ball";
  let inside = () => {
    console.log(`the child name is ${child}`);
    console.log(`the child toy is ${toy}`);
  };
  inside();
};
outside();

//     LEVEL - 4
//------------------------------
// Callback Function
let plus = (a, b, callback) => {
  console.log(`the addition is ${a + b} `);
  callback(143, 17);
};
let sub = (c, d) => {
  console.log(`the subtraction is ${c - d} `);
};
plus(12, 16, sub);

// Q.1 Create a function that receives two numbers and a callback, then uses the callback to print their sum.

let cdd = (a, b, callback) => {
  console.log(a + b);
  callback(75, 55);
};
cdd(99, 15, (c, d) => {
  console.log(c + d);
});

//======================================================
let dd = (a, b, callback) => {
  callback(a, b);
};
dd(992, 125, (c, d) => {
  console.log(c + d);
});

// Create calculate(a, b, operation) and use a callback to multiply two numbers
let cal = (a, b, operation) => {
  operation(a, b);
};
cal(6, 4, (c, d) => {
  console.log(c * d);
});

//  First-Class Functions
//============================
// Definition: In JavaScript, functions can be treated like values: stored in variables, passed as arguments, and returned.

// Function Returning Function
let rfc = () => {
  return () => {
    console.log("done");
  };
};
const result = rfc();
result();

//     LEVEL - 5
//------------------------------
// Nested Function :-
//=========================
let ou = () => {
  let ins = () => {
    console.log("inner side function say Hello");
  };
  ins();
};
ou();

// closure :-
//=====================
//Closure = jab inner function, outer function ke variables ko yaad rakhta hai, even after outer function ka execution complete ho gaya ho.
let oh = () => {
  let name = "mukti Prasad";

  let lh = () => {
    console.log(name);
  };
  return lh;
};
let rs = oh();
rs();

// Create a counter closure that increases by 1 on every call
let counter = () => {
  let count = 0;

  return () => {
    count++;
    console.log(count);
  };
};
let res = counter();
res();
res();
res();
res();

//     LEVEL - 6
//------------------------------
// Rest parameter
//Use a rest parameter to calculate the sum of any number of arguments

let cal1 = (...val) => {
  let sum = 0;
  for (let i of val) {
    sum = sum + i;
  }
  return sum;
};
console.log(cal1(1, 2, 3, 4, 5));

// Spread with Function Calls
//Use spread to pass an array of 3 numbers into a function.
const arr = [15, 17, 25];
let arf = (a, b, c) => {
  return a * b * c;
};
console.log(arf(...arr));

// pure function
let pureExample = (a, b) => {
  return a + b;
};
console.log(pureExample(5, 3));
console.log(pureExample(5, 3));

// impure function
//=========================
let count = 0;
let myChangeValue = () => {
  count++; //count = count + 1;
};
myChangeValue();
myChangeValue();
myChangeValue();
myChangeValue();
myChangeValue();
console.log(count);

//Function Composition
//===============================
// Function Composition ka simple meaning hai:

// Ek function ka output, dusre function ka input ban jaye.

// Matlab multiple functions ko combine karke ek naya function banana.

const addOne = (n) => n + 2;
const addTwo = (n) => n * 2;
console.log(addTwo(addOne(15)));

//  Currying
//===========================
// Ek function ke multiple parameters ko ek-ek karke alag function calls mein lena.
const score = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(score(10)(20));

// Q.1 Create a curried function that multiplies two numbers.
const multiplayTwoNum = (a) => {
  return (b) => {
    return a * b;
  };
};
console.log(multiplayTwoNum(10)(5));

// this method in Function
const user = {
  username: "mukti prasad",
  age: 23,
  Occupations: "job holder",
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website `);
    console.log(this);
  },
};
console.log(user.username);
user.username = "sam";
console.log(user.username);
user.welcomeMessage();
console.log(user.age);

// this method in  arrow Function
const chai = () => {
  let username = "dash";
  console.log(`${this.username}`);
  console.log(this);
};
chai();

// call() method
//==============

// call() ka use karke hum kisi function ko manually call kar sakte hain aur decide kar sakte hain ki us function ke andar this kis object ko refer karega.

// Example :1
//==============
const newflim = {
  flimname: "ramayana",
};

const anotherflim = {
  anoherflimname: "mahabharat",
};

function releaseflim() {
  console.log(`hey, ${this.flimname} movie is a best movie forever`);
}
releaseflim.call(newflim); // this line using call() method( here this call() method refer to newflim object)

console.log(anotherflim.anoherflimname);

// apply() method
//==============

// apply() ek function ka method hai, jiska use hum function ko call/execute karne ke liye karte hain aur saath mein decide karte hain ki function ke andar this kis object ko refer karega.

//apply() function ke arguments ko ek ARRAY ke form mein leta hai.

// Ex:1
//===========
const empName = {
  username: "dash",
};
function empprint() {
  console.log(`hello ${this.username}`);
}
empprint.apply(empName);

// ex:2
//============
const address = {
  username: "sam",
};
function details(age, city) {
  console.log(`hello ${this.username}`);
  console.log(`Your age is: ${age}`);
  console.log(`Your City is: ${city}`);
}
details.apply(address, [23, "bangalore"]);

// ex:3
//=========
// Use apply() to calculate the sum of three numbers
function sumthree(a, b, c) {
  return a + b + c;
}
console.log(sumthree.apply(null, [1, 2, 3]));

// bind() Method —
//=====================
// bind() ek function ka naya function banata hai, jisme this ki value pehle se fix/set kar di jaati hai.

//  Sabse important difference:
// call() → function turant execute karta hai.
// apply() → function turant execute karta hai.
// bind() → function turant execute nahi karta, balki naya function return karta hai.

function welcome() {
  console.log(this.name);
}
const stu = {
  name: "raj",
};
const newWelcome = welcome.bind(stu);
newWelcome();
