/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/

var maxSubArray = function (nums) {
  // keep track of the max sum
  let maxSum = 0;
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
  // keep track of the current sum
  //iterate over the array
  // if the cuurent
};

// //
// var nums = [-2,1,-3,4,-1,2,1,-5,4]
// // Output: 6
// console.log(maxSubArray(nums))

// nums2 = [1]
// // Output: 1
// console.log(maxSubArray(nums2))

// nums3 = [5,4,-1,7,8]
// // Output: 23
// console.log(maxSubArray(nums3))
