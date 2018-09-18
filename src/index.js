module.exports = function getZerosCount(number) {
  // your implementation

  let arr = [];
  let divisor = 5;

  while (divisor <= number) {
    arr.push(parseInt(number / divisor));
    divisor *= 5;
  }

  return arr.reduce((p, c) => p + c, 0);
}
