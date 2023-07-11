function iterativeFirstNFibonacci(n) {
  let retVal = [];

  let secondPrevious = 0;
  let previous = 1;
  let sum = 1;

  retVal.push(secondPrevious);
  if (n === 1) {
    return retVal;
  }

  retVal.push(previous);
  if (n === 2) {
    return retVal;
  }

  for (let i = 3; i <= n; i++) {
    sum = secondPrevious + previous;
    secondPrevious = previous;
    previous = sum;
    retVal.push(sum);
  }

  return retVal;
}

function recursiveFirstNFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(`${i}: ${fib(i)}`);
  }
}

function fib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}
