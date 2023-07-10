function iterativeBinarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
      console.log("Element found!");
      return x;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log("Element not found!");
  return null;
}

function recursiveBinarySearch(arr, x, start, end) {
  if (start > end) {
    console.log("Element not found!");
    return;
  }

  let mid = Math.floor((end + start) / 2);

  if (arr[mid] === x) {
    console.log("Element found!");
    return x;
  }

  if (arr[mid] > x) return recursiveBinarySearch(arr, x, start, mid - 1);
  else return recursiveBinarySearch(arr, x, mid + 1, end);
}
