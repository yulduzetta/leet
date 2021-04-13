// Usecase: a nonprofit organization could have been
// recording individual donations in a text file.
// You were able to convert the text file to JSON but
// now need to find the most common donation amount.
// example:
// const numbers = [11, 12, 11]; // should return 11 appeared 2 times
const numbers = [
  41,
  24,
  28,
  1,
  40,
  41,
  32,
  33,
  50,
  5,
  34,
  5,
  21,
  21,
  43,
  43,
  21,
  4,
  49,
  24,
];

const dupes = (arr) => {
  // O(n2) VERY BAD SOLUTION
  let maxNumber;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let tempCount = 0;
    for (let j = 0; j < arr.length; j++) {
      //compare 2 indexes
      if (arr[j] === arr[i]) {
        // if same, increase counter
        tempCount++;
      }
    }
    // if counter > current most appearing count
    // update "most" variables to match

    if (tempCount > maxCount) {
      maxCount = tempCount;
      maxNumber = arr[i];
    }
  }
  return `${maxNumber} appeared ${maxCount} times`;
};

const dupesEfficient = (arr) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (map[value] === undefined) {
      map[value] = 1;
    } else {
      map[value]++;
    }
  }

  let mostValue;
  let mostCount = 0;

  for (const value in map) {
    if (map[value] > mostCount) {
      mostCount = map[value];
      mostValue = value;
    }
  }
  return `${mostValue} appeared ${mostCount} times.`;
};

console.log(dupes([1, 2, 3, 2, 2, 3]));
console.log(dupesEfficient([1, 2, 3, 2, 2]));

// duplicates test averaged 1215.2608282857145 milliseconds.
// optimized test averaged 1.8414965365218763 milliseconds.