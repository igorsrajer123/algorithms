function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i][0] < pivot[0]) rightArray.push(array[i]);
    else leftArray.push(array[i]);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

var sortPeople = function (names, heights) {
  let newArray = [];
  for (let i = 0; i < names.length; i++) {
    newArray.push([heights[i], names[i]]);
  }

  return quickSort(newArray).map((element) => element[1]);
};
