'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to: ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is  your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
///////////////////////////////////////////////////////////
SETS
////////////////////////////////////////////////////////
*/
console.log('------------ SETS -------------');

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear(); // Delete all entries

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = [
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Manager',
  'Chef',
  'Waiter',
];

// Destructuring set to convert into an array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Know how many unique values are in the array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Manager', 'Chef', 'Waiter'])
    .size
);

console.log(new Set('FelipeBarcon').size);

/*
///////////////////////////////////////////////////////////
Looping Objects, Objects Keys, Values and Entries
////////////////////////////////////////////////////////
*/
console.log(
  '------------ Looping Objects, Objects Keys, Values and Entries -------------'
);

// Property NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

//Properties Values
const values = Object.values(openingHours);
// console.log(values);

//Loop until the entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/*
///////////////////////////////////////////////////////////
Optional Chaining
////////////////////////////////////////////////////////
*/

console.log('------------ Optional Chaining -------------');

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example loop on the array and check if the restaurant is open or not

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRistotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Felipe', email: 'hello@felipe.io' }];
console.log(users[0]?.name ?? 'User array empty');

// Same code than up but more complicated
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

/*
///////////////////////////////////////////////////////////
For Of Loop
////////////////////////////////////////////////////////
*/

console.log('------------ For Of Loop -------------');

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of allMenu) console.log(item);

// With Index
for (const [i, el] of allMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...allMenu.entries()]);

/*
///////////////////////////////////////////////////////////
Local Assignment Operators
////////////////////////////////////////////////////////
*/
console.log('------------ Local Assignment Operator -------------');

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Rossi',
};

// OR assignment operator

/*rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10; // same first one but more concise
rest2.numGuests ||= 10; // same first one but more concise*/

// Nullish assignment operator (null or undefined)

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
/*rest1.owner = rest1.owner && '<ANONYMOUS>'; // first value rest1.owner doesn't exist, so it return undefined
rest2.owner = rest2.owner && '<ANONYMOUS>'; // first value exists so it return ANONYMOUS*/

rest1.owner &&= '<ANONYMOUS>'; // rest1.owner falsy so nothing happens
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

/*
///////////////////////////////////////////////////////////
&& and || operators
////////////////////////////////////////////////////////
*/

// Use ANY data type, return ANY data type, short-circuiting ==> if the first operand is true the second will not be evaluated
console.log('------------ OR -------------');
console.log(3 || 'Felipe'); // 3
console.log('' || 'Jonas'); // 'Jonas'
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish Coalescing Operator ==> nullish values are null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0 REAL VALUE

console.log('------------ AND -------------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && undefined);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'cheese');
}

restaurant.orderPizza && restaurant.orderPizza('Chorizo', 'Parmesan');

console.log('-------------- NEXT --------------');

/*
///////////////////////////////////////////////////////////
The Spread Operator (...)
////////////////////////////////////////////////////////
*/

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr3 = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [firstI, secondI, ...others] = [1, 2, 3, 4, 5];
// console.log(firstI, secondI, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const numArry = [23, 5, 7];
add(...numArry);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('cheese');
/*
///////////////////////////////////////////////////////////
The Spread Operator (...)
////////////////////////////////////////////////////////
*/

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];

const goodArr = [1, 2, ...arr1];
// console.log(goodArr);

// console.log(...goodArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array -----------------------------------------------

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays -----------------------------------------------

const menuAll = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuAll);

// Iterables: arrays, strings, maps, sets. NOT objects

const string = 'Felipe';
const letters = [...string, '', 'S.'];
// console.log(letters);

// Real world example -----------------------------------------------
/*const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);*/

// Objects -----------------------------------------------

const newRestaurant = { ...restaurant, founder: 'Giuseppe', foundedIn: 1998 };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/*
///////////////////////////////////////////////////////////
Destructuring Objects
////////////////////////////////////////////////////////
*/

restaurant.orderDelivery({
  time: '22:30',
  address: 'Main Street New York',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Main Street New York',
});

// Destructuring Objects -----------------------------------------------

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

// Default values -----------------------------------------------
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables -----------------------------------------------

let int1 = 111;
let int2 = 999;
const obj = { int1: 23, int2: 7, int3: 14 };

({ int1, int2 } = obj);
// console.log(int1, int2);

// Nested Objects -----------------------------------------------
const {
  fri: { open: op, close: cl },
} = openingHours;
// console.log(op, cl);

//*******************************************************************************//

const arr = [2, 3, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

// Destructuring array -----------------------------------------------
const [w, x, y, z] = arr;
// console.log(w, x, y, z);

// Taking first and second value of categories
//const [first, second] = restaurant.categories;

// Taking first and third value of categories
/*const [first, , second] = restaurant.categories;
console.log(first, second);*/

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
/*const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);*/

[main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring -----------------------------------------------
const nested = [2, 4, [5, 6]];
/*const [i, , j] = nested;
console.log(i, j);*/
const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values -----------------------------------------------
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
