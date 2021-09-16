/*
 *
 * Integer Reverse
 *
 * Given a positive integer, return its digits reversed.
 *
 * - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
 * - Only use integers and math in your solution.
 *
 */

function reverseInteger(number) {
  let result = 0;
  // smaller power of 10
  let power = 10;
  // while the number is not 0
  while (number > 0) {}
  // make room in result
  result *= 10;
  // add the new digit
  result += (number % power) / (power / 10);
  // remove the digit from number
  number -= number % power;
  // update power for the next iteartion 10 at first and then 100 => 1000 => 10000 depending on how big is the initial number
  power *= 10;
  // return result
  return result;
}
