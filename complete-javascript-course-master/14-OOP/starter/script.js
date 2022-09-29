'use strict';
///////////////////////////////////////////
// Constructor Function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!!
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};

const felipe = new Person('Felipe', 1983); // => instance of Person
console.log(felipe);
console.log(felipe instanceof Person);

Person.hey = function () {
  console.log('Hey there 🤟');
  console.log(this);
};

Person.hey();

// 1. New empty object is created {}
// 2. function is called, this = new empty object {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 1992);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

///////////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

felipe.calcAge();

console.log(felipe.__proto__);
console.log(felipe.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(felipe));

Person.prototype.species = 'Homo Sapiens';
console.log(felipe);
console.log(felipe.hasOwnProperty('firstName'));
console.log(felipe.hasOwnProperty('species'));

///////////////////////////////////////////
// Prototypal inheritance on Built-in-Objects

// Object.prototype (top of prototype chain)
console.log(felipe.__proto__.__proto__);
console.log(felipe.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 9, 8, 6, 7, 4, 3, 4, 7, 8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

///////////////////////////////////////////
// ES6 CLASSES

// class expression
//const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 🤟');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////////
// GETTERS AND SETTERS

// const walter = new PersonCl('Walter', 1965);

const account = {
  owner: 'Felipe',
  movements: [200, 300, 500, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

///////////////////////////////////////////
// STATIC METHODS

// Array.from(document.querySelectorAll('h1'));

PersonCl.hey();
