const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// Assumption: num arg is guaranteed to be present in data array
const indexOfGiveneValue = (num) => data.indexOf(num);

// Assumption: num arg is not guaranteed to be present in data array
// Note: the method below is aka 'linear search' for it sequentially looks through every number in
// the array to find the index that corresponds to the input number.
// One optimization you could make is to add a break or
//return statement once the index is found.
// There's no point continuing the for loop execution if you
// already have what you're looking for.
// This helps reduce the time needed for numbers at the beginning of
// the array—but if you search for a number like 87 or 99,
// you're still traversing every previous index
const findIndexLinear = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
    }
  }
};

const findIndex = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      return `${num} found at index ${i}`;
    }
  }
  return `The number (${num}) you provided does not exist in the data array`;
};

console.log(indexOfGiveneValue(23));
console.log(findIndex(232));
