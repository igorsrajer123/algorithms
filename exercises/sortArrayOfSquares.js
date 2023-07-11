function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) leftArray.push(array[i]);
    else rightArray.push(array[i]);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];

    let j = i - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

var sortedSquares = function (nums) {
  return insertionSort(nums.map((element) => Math.pow(element, 2)));
};
