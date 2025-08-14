function sumN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("Sum from 1 to 10:", sumN(10)); 
