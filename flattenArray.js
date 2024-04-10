const arr = [1, 2, 4, [7, 8, 9], [232, [45, 5, [2, 3], 3]]];

function flattenArray(arr) {
  let flatArray = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flattenArray(item));
    } else flatArray.push(item);
  });
  return flatArray;
}
console.log(flattenArray(arr));
