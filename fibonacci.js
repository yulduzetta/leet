// https://courses.bootcampspot.com/courses/451/pages/17-dot-5-2-pseudocode-the-fibonacci-sequence?module_item_id=114864
// The Fibonacci sequence adds the previous two numbers to create the next number.
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc...

// given a number, returns the value at that point in the sequence.
// For example, fibonacci(6) would return 8, and fibonacci(8) would return 21.

// LINEAR --> OPTIMAL
const fibonacciSequence = (num) => {
  if (num <= 2) return 1;

  let fbArr = [1, 1];
  for (let i = 2; i < num; i++) {
    fbArr.push(fbArr[i - 1] + fbArr[i - 2]);
  }
  return fbArr[fbArr.length - 1];
};

// RECURSION --> VERY BAD IDEA TO USE THIS METHOD
const fibonacciSequenceRecursion = (num) => {
  console.log("fibonacci of " + num);
  if (num <= 2) return 1;
  else
    return (
      fibonacciSequenceRecursion(num - 1) + fibonacciSequenceRecursion(num - 2)
    );
};

console.log(fibonacciSequence(8));
console.log(fibonacciSequenceRecursion(8));
