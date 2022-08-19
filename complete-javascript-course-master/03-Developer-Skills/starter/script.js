// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// PROBLEM 1

// We work for a company building a smart home thermometer. Our most recent task is this : "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in min that somethimes there might be a sense error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanting the problem
// - What is te temp amplitude? Difference between highest and lowest temp

// - How to cpompute max and min tem?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substact min form max (amplitude) and return it

const calcTempAmplitude = function (temp) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temp.length; i++) {
    // use this variable because it's use several times
    const currTemp = temp[i];
    // if a value is different from a number ignore it and continue
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 1
// Function should now receive 2 array of temps

// 1) Understanding the problem
// With 2 arrays should we implement function twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temp.length; i++) {
    // use this variable because it's use several times
    const currTemp = temp[i];
    // if a value is different from a number ignore it and continue
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) Find the bug
  // console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());

*/
