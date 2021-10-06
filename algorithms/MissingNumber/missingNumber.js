/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
*/
// math solution if we sum up all the number that are in range until the n
// n*(n+1)/2
// the difference between sum of nums and the above is the number that is missing

var missingNumber = function (nums) {
  var n = nums.length;
  var total = 0;
  for (var i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return (n * (n + 1)) / 2 - total;
};
