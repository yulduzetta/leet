const numbers = [
  54,
  8,
  87,
  88,
  100,
  98,
  17,
  72,
  67,
  42,
  40,
  34,
  55,
  18,
  33,
  94,
  59,
  68,
  92,
  2,
];

const bubbleSort = (arr) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      // compare arr[i] to arr[i+1]
      // swap places if needed
      // if swapped, set sorted = false to run while loop again

      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
  }

  return arr;
};

console.log(bubbleSort(numbers));
