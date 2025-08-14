function countDigits(num) {
  let count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log("Number of digits in 12345:", countDigits(12345)); 