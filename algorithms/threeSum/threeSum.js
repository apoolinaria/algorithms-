// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
var threeSum = function (nums) {
  let result = [];
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] == sorted[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = sorted.length - 1;

    while (right > left) {
      let sum = sorted[i] + sorted[left] + sorted[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        while (sorted[left] == sorted[left - 1] && right > left) {
          left++;
        }
      }
    }
    /*
      check if i is not the first and if its not the same as the current value
        continue
      initiate pointers
      while right is larger than left
        compute the sum
        if sum is larger than 0
          decremenet the right pointer
        else
          incremement the left pointer
        else add to the result
          update the pointer while left is the same as left +1 and l<right
         increment left (only one side has to be incremented sin)
         */
  }
  return result;
};

module.exports = threeSum;
