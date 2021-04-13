// FizzBuzz
// The criteria for FizzBuzz is to print the numbers 1 to 100.
// However, you print "Fizz" for every multiple of 3,
// "Buzz" for every multiple of 5,
// and "FizzBuzz" for every multiple of 3 and 5.

const fizBuzz = () => {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizBuzz());
