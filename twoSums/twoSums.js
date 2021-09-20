/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*
*/

var twoSum = function (nums, target) {
  let hashMap = {}
  for (let i = 0; i < nums.length; i++){
    let difference = (nums[i]-target)
    if(hashMap[difference] !== undefined){
      return [hashMap[difference], i]
    }
    hashMap[nums[i]] = i
  }

  return [];
};

// brute force O(n2)
/*
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        break;
      }
    }
  }
  return result;

/*