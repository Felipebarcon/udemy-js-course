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
