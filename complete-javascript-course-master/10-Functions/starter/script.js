'use strict';

// DEFAULT PARAMETERS

console.log('---------Default Parameters---------');

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

// DEFAULT PARAMETERS

console.log('---------Default Parameters---------');
