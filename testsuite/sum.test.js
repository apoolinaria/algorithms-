const sum = require('./sum');
const threeSum = require('../algorithms/threeSum/threeSum');

test('adds 1+2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('has to return nested arrays of triplets', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
