// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings
//   .reduce(async (previousPromise, rating) => {
//     await previousPromise;
//     sum = await sumFunction(sum, rating);
//   }, Promise.resolve())
//   .then(() => {
//     console.log(sum);
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   });

// custom search
// Array.prototype.customForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// // Example usage:
// const numbers = [1, 2, 3, 4, 5];

// numbers.customForEach((element, index) => {
//   console.log(`Element at index ${index}: ${element}`);
// });

//longest word
// const str = "I love coding in the javascript";
// const arr =str.split(" ").reduce((acc,cu)=>{
//    if(acc.length > cu.length){
// return acc;
//    }
//    return cu;
// },""
// );

// console.log(arr);

// const arr =[1,3,"string",3,2,1,1,"string",5,5,2,2];
// function removeDuplicates(arr){
// let uniqueElements=[];
// for(let i =0;i<arr.length;i++){
//    if(uniqueElements.length === 0){
//       uniqueElements.push(arr[i]);
//    }
//    if(!uniqueElements.includes(arr[i])){
//       uniqueElements.push(arr[i]);
//    }
// }
//  return uniqueElements

// }
// console.log(removeDuplicates(arr));

// const arr =[1,3,"string",3,2,1,1,"string",5,5,2,2];
//  console.log([...new Set(arr)]);
// const str1="silent";
// const str2="listen";

// console.log(str1.split('').sort().join('') === str2.split('').sort().join(''));
// console.log(str2.split('').sort().join(''));

// prime numbers

// const num = 7;

// function isPrime(n){
// for(let i =2;i<n/2;i++){
//    if(n % i===0){
//       return false;
//    }
// }
//    return true;
// }

// console.log(isPrime(num));

// merge sorted arrays in sorted manner without built in functions (using for loop)
// let arr = [1, 2, 4, 5, 8, 10];
// let arr2 = [3, 6, 7, 9, 10];

// function merge(arr, arr2) {
//   let mergedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr[i] < arr2[j]) {
//         mergedArray.push(arr[i]);
//       } else {
//         mergedArray.push(arr2[j]);
//       }
//     }
//   }
//   return [...new Set(mergedArray)];
// }
// console.log(merge(arr, arr2));

// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0, j = 0;

//     // Traverse both arrays and compare elements
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     // If any elements are remaining in arr1, append them
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//    //  // If any elements are remaining in arr2, append them
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// // Example usage:
// const arr1 = [1, 3, 5, 7,9,10];
// const arr2 = [2, 4, 6, 8];
// const merged = mergeSortedArrays(arr1, arr2);
// console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
