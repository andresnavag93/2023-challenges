function isPrime(n) {
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  let divisor = 3;
  limit = Math.sqrt(n);
  while (divisor < limit) {
    if (n % 2 === 0) return false;
    divisor++;
  }
  return true;
}

console.log(isPrime(13));
console.log(isPrime(33));
console.log(isPrime(24));
