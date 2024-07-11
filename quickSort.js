const arr = [8, 2, 4, 1, 3, 7, 5, 6];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
const sortedArray = quickSort(arr);
console.log(sortedArray);
