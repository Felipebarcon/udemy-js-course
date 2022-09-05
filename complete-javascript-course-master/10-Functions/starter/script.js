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
  console.log('🤟');
};
document.body.addEventListener('click', high5); // high5 ==> callback function

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
