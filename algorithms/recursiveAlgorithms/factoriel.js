function iterativeFactoriel(num) {
  let retVal = 1;
  for (let i = num; i >= 1; i--) {
    retVal *= i;
  }

  return retVal;
}

function recursiveFactoriel(num) {
  if (num === 1) return num;

  return num * recursiveFactoriel(num - 1);
}
