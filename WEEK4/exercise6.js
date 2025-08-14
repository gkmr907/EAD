function reverseNumber(num) {
  let rnum = 0;
  while (num > 0) {
    let digit = num % 10;
    rnum= rnum* 10 + digit;
    num = Math.floor(num / 10);
  }
  return rnum;
}
console.log("Reverse of 54321:", reverseNumber(54321));