/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is fun');

console.log(40 + 8 + 23 - 10);

console.log('Jonas');

let firstName = 'Bob';
console.log(firstName);

// DATA TYPES

Numbers ==> decimals and integers
String
Boolean
Null ==> empty value
Undefined ==> not yet defined (not initialized) let x;
Object
Symbol
BigInt

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof '23');

javascriptIsFun = 'YES!'; // reassigning a value to a variable
console.log(typeof javascriptIsFun);

let year;
console.log(year); // undefined
console.log(typeof year);

year = 2022;
console.log(typeof year); // number

console.log(typeof null); // object it's a bug in JS

// VARIABLES

let age = 30; // let is a block scope
age = 31; // reassigning a value to a variable

const birthYear = 1983; // const is a block scope


// OPERATORS  ==> arithmetic, comparison, logical
const now = 2022;
const ageSarah = now - 1983;
const ageBob = now - 1990;

// ASSIGNMENT OPERATORS

let x = 10 + 5; // 15
x += 10; // 25 (x = x + 10)
x -= 10; // 15 (x = x - 10)
x *= 10; // 150 (x = x * 10)
x /= 10; // 15 (x = x / 10)
x %= 10; // 5 (x = x % 10)
x++; // 16 (x = x + 1)
x--; // 15 (x = x - 1)
x **= 2; // 1600 (x = x ** 2)

// COMPARISON OPERATORS

console.log(ageSarah > ageBob); // true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18; // true


// OPERATORS PROCENDENCY  ==> order of operations (PEMDAS)  ==> parenthesis, exponentiation, multiplication, division, addition, subtraction

let x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

const now = 2022;
const ageSarah = now - 1983;
const ageBob = now - 1990;

const average = (ageSarah + ageBob) / 2;


// STRINGS

const firstName = 'Bob';
const job = 'web developer';
const birthYear = 1983;
const year = 2022;

const bob =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(bob);

// CONCATENATION
const bobNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(bobNew);

console.log(`Just a regular string...`);

// MULTILINE STRINGS  ==> use backticks

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);


// CONDITIONAL STATEMENTS ==> if, else, else if, switch, ternary

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('You are old enough 🚀');
} else {
  const yearsLeft = 18 - age;
  console.log(`You are ${yearsLeft} years left to be old enough 🚫`);
}

const birthYear = 2000;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// TYPE CONVERSION  AND COERCION  ==> converting one data type to another

// type of conversion
const inputYear = '1991';
console.log(Number(inputYear)); // 1991

console.log(Number('Jonas')); // NaN
console.log(typeof NaN); // number

console.log(String(23)); // '23'

// type coercion
console.log('I am ' + 23 + ' years old'); // I am 23 years old
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + '1'; // '11'
n = n - 1; // 10
console.log(n);


// 5 FALSY VALUES ==> false, 0, '', null, undefined, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 10000;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is undefined');
}


// EQUALITY OPERATORS ==> ==, ===, !=, !==

const age = '18';

if (age === 18) console.log('You just became an adult (strict)'); // strict equality FALSE
if (age == 18) console.log('You just became an adult (loose)'); // loose equality TRUE // DONT USE ==

const favouriteNumber = Number(prompt("What's your favorite numer?"));
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favouriteNumber === 7) {
  console.log('7 is a also a great number!');
} else if (favouriteNumber === 9) {
  console.log('9 is also a great number!');
} else {
  console.log('You are not a fan of 23 or 7 or 9');
}

if (favouriteNumber !== 23) console.log('Why not 23?'); // strict equality FALSE


// BOOLEAN LOGIC

const hasDriversLicence = true;
const hasGoodVision = true;
const isTired = true;

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log('You can drive!');
// } else {
//   console.log('Someone else should drive!');
// }

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log('You can drive!');
} else {
  console.log('Someone else should drive!');
}


// THE SWITCH STATEMENT ==> switch (expression) { case value: code... break; }

const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy weekend');
    break;
  default:
    console.log('Unknown day');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy weekend');
} else {
  console.log('Unknown day');
}



// STATEMENTS AND EXPRESSIONS ==> statements are executed, expressions are evaluated

// expession -- as words
3 + 4;
1991;
true && false && !false;

// statement -- as sentences
if (23 > 10) {
  const str = '23 is greater than 10';
}


// THE CONDITIONAL TERNARY OPERATOR ==> condition ? true : false

const age = 38;
age >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to drink milk 🥛');

const drink = age >= 18 ? 'I like to drink wine 🍷' : 'I like to drink milk 🥛';
console.log(drink);

let drink2; // with if else need to declare the variable outside the if else
if (age >= 18) {
  drink2 = 'I like to drink wine 🍷';
} else {
  drink2 = 'I like to drink milk 🥛';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'milk 🥛'}`);
*/
