'use strict';

// STRICT MODE  -  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode

/* FUNCTIONS

function logger() {
  console.log('Hello World');
}

// calling / running / invoking the function
logger();

const fruitProcessor = (apples, oranges) => {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
};

console.log(fruitProcessor(5, 0));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// FUNCTION DECLARATION

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1983);

// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

// ARROW FUNCTION - ES6

const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(1952);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1983, 'Felipe'));


function cutFruitPieces(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1983, 'Felipe'));
console.log(yearsUntilRetirement(1952, 'Mike'));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
// ARRAYS

const friends = ['Michael', 'Steven', 'Peter'];

const y = new Array(1983, 1984, 2010, 2017);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Felipe';
const felipe = [firstName, 'Barcon', 2022 - 1983, 'Web Developer', friends];
console.log(felipe);

// Exercice

function calcAge(birthYear) {
  return 2022 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2017];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[years.length - 1]);
console.log(age1, age2);

const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];
console.log(ages);


// METHODS

// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // push method return the new length of the array value
console.log(newLength);

friends.unshift('John');

// Remove elements

const popped = friends.pop(); // remove and return the last element
console.log(popped);
console.log(friends);

friends.shift(); // remove and return the first element

// Find element

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('John')); // Use strict equality

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
}
*/

/*
// OBJECTS

const felipe = {
  firstName: 'Felipe',
  lastName: 'Barcon',
  age: 39,
  job: 'Front end developper',
  friends: ['Michael', 'Steven', 'Peter'],
};

console.log(felipe.firstName);
console.log(felipe['lastName']);

const nameKey = 'Name';
console.log(felipe['first' + nameKey]);
console.log(felipe['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Felipe? Choose between firstName, lastName, age, job and friends'
);

if (felipe[interestedIn]) {
  console.log(felipe[interestedIn]);
} else {
  console.log(
    'Wrong request, Choose between firstName, lastName, age, job and friends'
  );
}

// ADD new properties

felipe.location = 'Switzerland';
felipe['hobby'] = 'Photography';

console.log(
  `${felipe.firstName} has ${felipe.friends.length} friends and his best friend is ${felipe.friends[0]}`
);



// OBJECTS METHODS

const felipe = {
  firstName: 'Felipe',
  lastName: 'Barcon',
  birthYear: 1983,
  job: 'Front end developper',
  friends: ['Michael', 'Steven', 'Peter'],
  hasDrivesLicence: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDrivesLicence ? 'a' : 'no'} driver's license`;
  },
};

// console.log(felipe.calcAge(1983));
// console.log(felipe['calcAge'](1983));
console.log(felipe.calcAge());
console.log(felipe.age);
console.log(felipe.getSummary());
*/

/*
// LOOPS

// FOR LOOP keeps running condition is true

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🚡`);
}


const felipe = [
  'Felipe',
  'Barcon',
  2022 - 1983,
  'Web Developer',
  ['Michael', 'Steven', 'Peter'],
  true,
];

const types = [];

for (let i = 0; i < felipe.length; i++) {
  console.log(felipe[i], typeof felipe[i]);

  types.push(typeof felipe[i]);
}

console.log(types);

const years = [1991, 1983, 2010, 2017];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// continue and break

for (let i = 0; i < felipe.length; i++) {
  if (typeof felipe[i] !== 'string') continue;
  console.log(felipe[i], typeof felipe[i]);
}

for (let i = 0; i < felipe.length; i++) {
  if (typeof felipe[i] === 'number') break;
  console.log(felipe[i], typeof felipe[i]);
}


// Inverse Loop

const felipe = [
  'Felipe',
  'Barcon',
  2022 - 1983,
  'Web Developer',
  ['Michael', 'Steven', 'Peter'],
  true,
];

for (let i = felipe.length - 1; i >= 0; i--) {
  console.log(i, felipe[i]);
}

// Loop inside a Loop

for (let exercice = 1; exercice < 4; exercice++) {
  console.log(`------ Starting exercice ${exercice}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercices ${exercice} Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


// WHILE LOOP

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`There is a ${dice}, You win!`);
}

*/
