function factorial(num) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log("Factorial of 5:", factorial(5)); 