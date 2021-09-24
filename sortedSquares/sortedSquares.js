/*Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/
var sortedSquares = function (nums) {
  let result = [];
  let right = nums.length - 1;
  let left = 0;
  let point = right;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result[point] = nums[left] ** 2;
      point--;
      left++;
    } else {
      result[point] = nums[right] ** 2;
      point--;
      right--;
    }
  }
  return result;
  // iterate over the array to compute squared array
  // iterate over the array with two pointers sprting the array
};
