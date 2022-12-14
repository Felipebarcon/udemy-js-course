'use strict';

// DEFAULT PARAMETERS

console.log('---------Default Parameters---------');
// DEFAULT PARAMETERS

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  /*
  ES5 WAY
  numPassengers = numPassengers || 1;
  price = price || 199;
  */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH345', 2, 899);
createBooking('LH567', 5);

createBooking('LH789', undefined, 1000);

console.log('---------Value vs Reference---------');

const flight = 'LH234';
const felipe = {
  name: 'Felipe Barcon',
  passport: 245558455,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH9999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 245558455) {
    //alert('Check in');
  } else {
    //alert('Wrong passport!');
  }
};

checkIn(flight, felipe);
console.log(flight); // primitive ==> flightNum contains a copy of flight so flight is not changed
console.log(felipe); // passenger is copying the reference in memory so the changes happened in the original object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(felipe);
checkIn(flight, felipe); // the passport is not the same so Wrong Passport

// In JavaScript we never pass  by references only by values

console.log('---------Functions accepting Callback Functions---------');

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HIGH-ORDER FUNCTION

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // we are only passing the value of the function, we don't call the function
transformer('JavaScript is the best!', oneWord); // we are only passing the value of the function, we don't call the function

// JS uses callbacks all the time
const high5 = function () {
  console.log('????');
};
//document.body.addEventListener('click', high5); // high5 ==> callback function

['Felipe', 'Marta', 'Adam'].forEach(high5);

console.log('---------My callback functions---------');

// function that take a salary and multiply by 12
const yearSalary = function (salary) {
  return salary * 12;
};

// function that calculates the taxes to pay yearly

const yearlyTax = function (salary, fn) {
  const income = fn(salary);
  console.log(income / 5);
};

yearlyTax(6500, yearSalary);

console.log('---------Function returning functions---------');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Felipe');

greet('Hello')('Felipe Barcon');

// Challenge same greet function but in arrow function
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Salut')('Felipe');

console.log('---------The call and apply Methods---------');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Felipe Barcon');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
//book(23, 'Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 685, 'Melina Mourot');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 854, 'Theo Mourot');
console.log(swiss);

// Apply Method ==> Take an array as second argument != Not use in modern JavaScript
const flightData = [583, 'John Doe'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData); // same as the apply but with spread operator

console.log('---------The Bind Method---------');
// Bind return a new method where the This will be always defined to Eurowings

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Louis Mourot');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application ==> preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

console.log('---------Immediately Invoked Function Expressions---------');

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// IIFE ARROW
(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);

console.log('---------CLOSURES---------');

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); // to see the closure environment on the console.

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

// Re-assigning f function
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
