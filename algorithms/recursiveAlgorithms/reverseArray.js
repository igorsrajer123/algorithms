function iterativeReverseArray(array) {
  let retVal = [];
  for (let i = array.length - 1; i >= 0; i--) {
    retVal.push(array[i]);
  }

  return retVal;
}

function recursiveReverseArray(array) {
  if (!array.length) return array;

  return recursiveReverseArray(array.slice(1)).concat(array[0]);
}
