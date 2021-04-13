// var numJewelsInStones = function (jewels, stones) {
//   const jArr = jewels.split("");
//   const sArr = stones.split("");

//   let result = 0;

//   for (var i = 0; i < sArr.length; i++) {
//     for (var y = 0; y < jArr.length; y++) {
//       if (sArr[i] === jArr[y]) {
//         result = ++result;
//       }
//     }
//   }
//   return result;
// };

// var testy = function (jewels, stones) {
//   const jArr = jewels.split("");
//   let result = 0;

//   stones.split("").filter((stone) => {
//     if (jArr.includes(stone)) {
//       result++;
//     }
//   });
//   return result;
// };
// console.log(testy("aA", "aAABb"));
// -------------------------------------------END OF CHALLENGE-------------------------------------------

// var smallerNumbersThanCurrent = function (nums) {
//   let resultsArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (j != i && nums[j] < nums[i]) {
//         counter++;
//       }
//     }
//     resultsArr.push(counter);
//   }
//   return resultsArr;
// };

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
// -------------------------------------------END OF CHALLENGE-------------------------------------------

// var numberOfSteps = function (num) {
//   let steps = 0;
//   while (num > 0) {
//     if (num % 2 === 0) {
//       num = num / 2;
//     } else {
//       num--;
//     }
//     steps++;
//   }
//   return steps;
// };

// console.log(numberOfSteps(123));
// -------------------------------------------END OF CHALLENGE-------------------------------------------

// var restoreString = function (s, indices) {
//   let result = [];

//   for (let i = 0; i < indices.length; i++) {
//     result[indices[i]] = s[i];
//   }

//   return result.join("");
// };

// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

// -------------------------------------------END OF CHALLENGE-------------------------------------------

// var subtractProductAndSum = function (n) {
//   var nArr = n.toString().split(""); // ['1', '2']
//   nArr = nArr.map((char) => (char = parseInt(char)));

//   let sumOfDigits = 0;
//   let productOfDigits = 1;

//   nArr.forEach((num) => (sumOfDigits = sumOfDigits + num));
//   nArr.forEach((num) => (productOfDigits = productOfDigits * num));
//   return productOfDigits - sumOfDigits;
// };

// console.log(subtractProductAndSum(4421));

// -------------------------------------------END OF CHALLENGE-------------------------------------------

// var runningSum = function (nums) {
//   return (sum = 0), nums.map((num) => (sum = sum + num));
// };

// console.log(runningSum([1, 2, 3, 4]));
// -------------------------------------------END OF CHALLENGE-------------------------------------------

// var calculateTime = function (keyboard, word) {
//   let moves = 0; // keeps track of how many moves it took to get to required letter
//   let current = 0; // keeps track of your current position
//   let keyboardArr = keyboard.split("");

//   //   for (let letter of word) {
//   //     let currentIndex = keyboardArr.indexOf(letter); //retuns the index of matching given letter from the keybooard;
//   //     moves += Math.abs(currentIndex - current); //difference between current and required indexes
//   //     current = currentIndex; //sets the current step to the index it stopped on
//   //   }

//   word.split("").forEach((letter) => {
//     let currentIndex = keyboardArr.indexOf(letter); //retuns the index of matching given letter from the keybooard;
//     moves += Math.abs(currentIndex - current); //difference between current and required indexes
//     current = currentIndex; //sets the current step to the index it stopped on
//   });

//   return moves;
// };

// console.log(calculateTime("abc", "cab"));

// -------------------------------------------END OF CHALLENGE-------------------------------------------

// var findMaxConsecutiveOnes = function (nums) {
//   let max = 0;
//   let current = 0;

//   for (let num of nums) {
//     if (num === 1) {
//       current++;
//     } else {
//       max = Math.max(current, max);
//       current = 0;
//     }
//     max = Math.max(current, max);
//   }
//   return max;
// };

// console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));

// -------------------------------------------END OF CHALLENGE-------------------------------------------

// Input: nums = [555,901,482,1771]
//   let counter = 0;

//   for (let num of nums) {
//     if (num.toString().split("").length % 2 == 0) {
//       counter++;
//     }
//   }

//   nums.filter((num) => {
//     if (num.toString().split("").length % 2 === 0) {
//       counter++;
//     }
//   });
//   return counter;
// };

// console.log(findNumbers([555, 901, 482, 1771]));
// -------------------------------------------END OF CHALLENGE-------------------------------------------

//[-4,-1,0,3,10]
// var sortedSquares = function (nums) {
//   //https://leetcode.com/problems/squares-of-a-sorted-array/solution/
//   //   let sortedArr = [];

//   //   for (let num of nums) {
//   //     num = num * num;
//   //     sortedArr.push(num);
//   //     sortedArr = sortedArr.sort((a, b) => a - b);
//   //   }
//   //   return sortedArr;
//   // ------------------OR
//   sortedArr = [];
//   left = 0;
//   right = nums.length - 1;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     square = 0;

//     if (Math.abs(nums[left]) < Math.abs(nums[right])) {
//       square = nums[right];
//       right--;
//     } else {
//       square = nums[left];
//       left++;
//     }
//     sortedArr[i] = square * square;
//   } AIDA
//   return sortedArr;
// };

// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// -------------------------------------------END OF CHALLENGE-------------------------------------------

// const vowels = ["a", "e", "i", "o", "u"];
// let sArr = [];

// var removeVowels = function (s) {
//   sArr = s.split("");
//   for (let i = 0; i < vowels.length; i++) {
//     for (let x = 0; x < sArr.length; x++) {
//       if (sArr[x] === vowels[i]) {
//         delete sArr[sArr.indexOf(sArr[x])];
//       }
//     }
//   }
//   return sArr.join("");
// };

// console.log(removeVowels("leetcodeisacommunityforcoders"));

// -------------------------------------------END OF CHALLENGE-------------------------------------------

/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * for example input:  [1,0,2,3,0,4,5,0]
 * output should be:   [1,0,0,2,3,0,0,4]
 */
// var duplicateZeros = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i + 1, 0, 0);
//       arr.pop();
//       i++;
//     }
//   }
//   console.log(arr)
// };

// console.log(duplicateZeros([0,4,1,0,0,8,0,0,3]));

// -------------------------------------------END OF CHALLENGE-------------------------------------------