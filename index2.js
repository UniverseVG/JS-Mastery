const arr = [2, 3, 6, 8, 12, 36];
const sum = arr.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
}, 0);

console.log(sum);


