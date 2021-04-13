// CONSTRAINS:
// No caps
// String only
// Single word

const isPalindrome = (word) => {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord === word;
};

console.log(isPalindrome("tot"));
