function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

gcd(14, 21);
gcd(69, 169);
lcm(14, 21);
lcm(69, 169);
