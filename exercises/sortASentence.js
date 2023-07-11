function quickSort(array) {
  if (array.length <= 0) return array;

  let pivot = array[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i][0] < pivot[0]) leftArray.push(array[i]);
    else rightArray.push(array[i]);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
var sortSentence = function (s) {
  return quickSort([
    ...s
      .split(" ")
      .map((element) => [
        ...element.match(/\d+/g),
        ...element.match(/[a-zA-Z]+/g),
      ]),
  ])
    .map((element) => element[1])
    .join(" ");
};
