'use strict';

function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  /*console.log(firstName);  work because the parent scope is the global scope*/

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reassigning outer scope's variable
      output = 'New Output';

      const str = `Oh and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str); blocked scope so not accessible
    console.log(millenial); // var = function scope so still in the same function and are accessible
    // add(2, 3);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1983);

/*
console.log(age); // reference error out of scope
print() // out of scope*/

// Variables

/*console.log(me);
console.log(job);
console.log(year);*/

var me = 'Felipe'; // undefined
let job = 'Web Developer'; // Cannot access before initialisation ==> TDZ
const year = 1983; // Cannot access before initialisation ==> TDZ

// Functions

console.log(addDecl(2, 3));

/*console.log(addExpr(2, 3)); // Cannot access before initialisation ==> TDZ
console.log(addArrow(2, 3)); // Cannot access before initialisation ==> TDZ*/

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCard(); // deleteShoppingCard() called because hoisting numProducts = undefined

var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// THIS KEYWORD

console.log(this); // Window

const calcMultiply = function (num1, num2) {
  console.log(num1 * num2);
  console.log(this); // undefined
};
calcMultiply(2, 6);

const calcMultiplyArrow = (num1, num2) => {
  console.log(num1 * num2);
  console.log(this); // window
};
calcMultiplyArrow(5, 6);

//Felipe Object and THIS KEYWORD

const felipe = {
  firstName: 'Felipe',
  year: 1983,
  calcAge: function () {
    console.log(this); // Felipe Object
    // console.log(new Date().getFullYear() - this.year); error year undefined

    /*    Solution 1
        const self = this;
        const isMillennial = function () {
          console.log(self.year >= 1981 && self.year <= 1996);
        };*/

    // Solution 2 as arrow functions don't have they own this keyword they user their parents this keyword
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

felipe.calcAge(); // this keyword undefined if we don't define a self variable = this with self == true

const theo = {
  year: 2017,
};

theo.calcAge = felipe.calcAge; // method borrowing
theo.calcAge(); // 5

/*const f = felipe.calcAge;
f(); error year === undefined*/

felipe.greet(); // Hey undefined ==> arrow functions does not have they this keyword use the this keyword from the global scope "window object"
console.log(this.firstName); // undefined

var firstName2 = 'Jonas'; // create firstName2 on window.firstName2
console.log(this.firstName2); // Jonas

// Arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr2(2, 5);
addExpr2(2, 5, 8, 12); // extra arguments exists

var addArrow2 = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow2(2, 5, 8, 12); // On arrow function extra arguments don't exist and throw an error
