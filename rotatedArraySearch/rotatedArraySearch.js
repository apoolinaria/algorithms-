/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 *
 * find the range that we are working with
    while the end is larger than start
        set the midpoint
        check if midpoint is the target
        if yes return the index
        if not set up a new range
            if the start range is smaller than the midpoint === true
            if the midpoint is larger than target ===  true

 */

var rotatedArraySearch = function (rotated, target) {
  let start = 0;
  let end = rotated.length - 1;
  while (start < end) {
    let midpoint = Math.floor((end + start) / 2);
    if (rotated[midpoint] === target) {
      return target;
    }
    if (rotated[start] < rotated[midpoint]) {
      if (rotated[start] >= target && rotated[midpoint] > target)
        end = midpoint - 1;
      else start = midpoint + 1;
    } else {
      if (rotated[midpoint] < target && rotated[end] >= target)
        start = midpoint + 1;
      else end = midpoint - 1;
    }
  }
  return -1;
};
