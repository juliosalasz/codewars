/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let array = [];

  for (let i = 1; i <= n; i++) {
    const divisible = (num) => {
      //if num/3 === Math.floor(num/3) return true

      if (
        num / 3 - Math.floor(num / 3) === 0 &&
        num / 5 - Math.floor(num / 5) === 0
      ) {
        return array.push("FizzBuzz");
      }
      if (num / 3 - Math.floor(num / 3) === 0) {
        return array.push("Fizz");
      } else if (num / 5 - Math.floor(num / 5) === 0) {
        return array.push("Buzz");
      } else {
        return array.push(num.toString());
      }
    };
    divisible(i);
  }
  return array;
};
