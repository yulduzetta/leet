// choose first item in array as pivot point
// create empty left array
// create empty right array

// loop over items
//   if items[i] less than pivot
//     push into left array
//   else
//     push into right

// run same logic again on left and right arrays
// return sorted left array + pivot + sorted right array

const quickSort = (arr) => {
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  if (arr.length <= 0) {
    return arr;
  }

  // start at index 1 to ignore pivot
  for (let i = 1; i < arr.length; i++) {
    // push into different arrays based on value compared to pivot
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  // merge arrays and pivot together
  // merge the sorted arrays and pivot together
  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
};

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

console.log(quickSort(numbers, 0));
