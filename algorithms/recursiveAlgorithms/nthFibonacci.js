function iterativeNthFibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let secondPrevious = 1;
  let previous = 1;

  let current = 2;
  for (let i = 2; i <= n; i++) {
    current = secondPrevious + previous;
    secondPrevious = previous;
    previous = current;
  }

  return current;
}

function recursiveNthFibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return recursiveNthFibonacci(n - 1) + recursiveNthFibonacci(n - 2);
}
