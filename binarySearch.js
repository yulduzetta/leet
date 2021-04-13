const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];
// Assumption: binary search assumes the passed data is sorted in some way

// function below runs only 1 time
const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2); // middle index of the arr

  if (num === arr[middle]) {
    return "found it";
  } else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  } else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }

  return false;
};

// recursion + binary search
const binaryRecursion = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2); // middle index of the arr
  if (left > right) {
    return -1; // if index is never found
  } else if (num === arr[middle]) {
    return middle;
  } else if (num < arr[middle]) {
    console.log(`bring right down to ${middle - 1}`);
    return binaryRecursion(arr, num, left, middle - 1);
  } else if (num > arr[middle]) {
    console.log(`bring left up to ${middle + 1}`);
    return binaryRecursion(arr, num, middle + 1, right);
  }
};

// console.log(binarySearch(data, 71));

// set left and right on initial call
// OUTPUT (3 iterations)
// bring right down to 3
// bring right down to 0
console.log(binaryRecursion(data, 12, 0, data.length - 1));
