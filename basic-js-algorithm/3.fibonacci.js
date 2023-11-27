function fibonacci(n) {
  if (n < 2) return 1;
  let a = 0,
    b = 1,
    aux;

  for (let i = 2; i <= n; i++) {
    aux = b;
    b = a + b;
    a = aux;
  }

  return b;
}

fibonacci(6);
