'use strict';

/*

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

///////////////////////////////////////////
// OBJECT.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1983;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////////
// INHERITANCE between Classes: Constructor and Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Student.prototype is now an object that inherits from Person.prototype
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////////
// INHERITANCE between Classes: ES6 Classes

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

///////////////////////////////////////////
// INHERITANCE between Classes: Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

///////////////////////////////////////////
// Another Class Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening and account ${owner}`);
  }

  // Public interface
  deposit(value) {
    this.movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved for ${value}`);
    }
  }
}

const acc1 = new Account('Felipe', 'CHF', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-50);

acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
acc1.approveLoan(100);

console.log(acc1);
console.log(acc1.pin);
