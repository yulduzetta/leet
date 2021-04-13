/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1 = nums1.filter((el) => el != 0); // 1 iteration

  // concat 2 arrays
  nums1 = nums1.concat(nums2).sort();
  //   let sorted = false;

  //   // bubble sort
  //   while (!sorted) {
  //     sorted = true;

  //     for (let i = 0; i < nums1.length - 1; i++) {
  //       // compare arr[i] to arr[i+1]
  //       // swap places if needed
  //       // if swapped, set sorted = false to run while loop again

  //       if (nums1[i] > nums1[i + 1]) {
  //         let temp = nums1[i + 1];
  //         nums1[i + 1] = nums1[i];
  //         nums1[i] = temp;
  //         sorted = false;
  //       }
  //     }
  //   }
  return nums1;
};

// input:  [0], 0, [1], 1

// output: [1,2,2,3,5,6]

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([0], 0, [1], 1));
// -------------------------------------------END OF CHALLENGE-------------------------------------------
