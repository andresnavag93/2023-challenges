function primeFactor(n) {
  const factors = [];
  let divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

console.log(primeFactor(14));
console.log(primeFactor(38));
