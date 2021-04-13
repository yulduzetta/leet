// You just learned about Big O notation and that a linear search has a
// growth rate of O(n). A binary search, on the other hand,
// has a better growth rate of O(log n).
// How do you know these classifications are correct, though?
// You can test them yourself!
// Recall that benchmarking is the act of measuring the performance of a process.
// To get an accurate reading, you want to run a benchmark test several times and
// calculate the average. Fortunately, there are libraries that will do this for you,
// one of which is Benchmark.js.
// Benchmark.js can be used in the browser (front end) or in Node.js (back end)

const Benchmark = require("benchmark");
const { linearSearch, binarySearch } = require("./search");

const numbers = [];
for (let i = 1; i <= 1000000; i++) {
  // populate the array with the numbers 1 to 1,000,000
  numbers.push(i);
}

// grab the last number in the array as the number we want to find
// const target = numbers[numbers.length - 1]; // ---> binary search O(log n) is optimal

// Update the target number to the first index as such:
const target = numbers[0]; // ---> linear search O(n) is optimal 


const suite = new Benchmark.Suite();

suite
  .add("linear search", function () {
    linearSearch(numbers, target);
  })
  .add("binary search", function () {
    binarySearch(numbers, target, 0, numbers.length - 1);
  })
  .on("complete", function () {
    // print the test's name and average time in milliseconds
    // loop over and print each result
    // console.log(`${this[0].name} averaged ${this[0].stats.mean*1000} milliseconds.`);

    this.forEach((result) =>
      console.log(
        `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
      )
    );
  })
  .run();

// In console output, if you scroll down farther, you'll eventually see a
// property called stats.mean with a value along the lines of 1.152989052573267e-8.
// This is the average (i.e., mean) runtime in seconds calculated by Benchmark.js.
// Because the given code took nowhere near a second to run,
// Node.js appended e-8 to the end to denote the number of leading zeros that simply wouldn't fit.
