// IMPORTANT NOTE: 
// The nested for loop will result in quadratic time complexity.



const Benchmark = require("benchmark");

const { bubbleSort, quickSort } = require("./sort");

//  Unsorted array of random 10,000 digits
const numbers = [];
for (let i = 0; i < 40000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite();

suite
  .add("bubble sort", function () {
    // We also need to make a new copy of the array (called testArray) for each test,
    // or else we'll end up simply running a benchmark on a
    // sorted array after the first test with numbers finishes.
    const testArray = [...numbers];
    bubbleSort(testArray);
  })
  .add("quick sort", function () {
    const testArray = [...numbers];
    quickSort(testArray);
  })
  .add("js sort", function () {
    const testArray = [...numbers];

    // benchmark the built-in sort method
    testArray.sort((a, b) => {
      return a - b;
    });
  })
  .on("complete", function () {
    this.forEach((result) =>
      console.log(
        `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
      )
    );
  })
  .run();

// NOTE: If the array is already sorted, bubble sort only needs to traverse it once,
// resulting in O(n).

// Double the number in the for loop a few times from 10000 to 20000 to 40000, etc.
// Run the script each time. You should see results similar to the following:
// bubble sort averaged 142.16381822727269 milliseconds.
// bubble sort averaged 639.3651497499999 milliseconds.
// bubble sort averaged 2823.1265596000003 milliseconds.
// Yikes, these numbers are escalating too quickly! This doesn't seem to be scaling very well, at least not at a linear or O(n) growth rate. Doubling the size of the input doesn't double the time—it quadruples it!

// That means the complexity of bubble sort is actually O(n2),
// also known as quadratic complexity. Think about the fact that we loop over the
// data again for every item in the array. Even with the while loop optimization,
// there's still a lot of needless looping going on.
// Alas, nested loops almost always result in a time complexity of O(n2).
// So bubble sort is not a great algorithm after all.

// A quick sort's growth rate is actually O(n log n).
// Recall that a binary search was O(log n) for having logarithmic complexity.
// The size of the data was cut in half on each iteration.
// The quick sort also reduces the size of the data on each iteration,
// but it still performs a linear traversal on those smaller data sets.
// Hence, it's a combination of O(n) and O(log n), or rather O(n log n).
