// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const differenceArray = getDifferenceArr(arr1, arr2);
console.log(differenceArray);

let oddArr = differenceArray.filter((value) => value % 2 !== 0);
let evenArr = getDifferenceArr(oddArr, differenceArray);

let resultArr = [];
resultArr.push(...oddArr.reverse(), ...arr1, ...evenArr.sort());

function getDifferenceArr(lessArray, moreArray) {
  return moreArray.filter((value) => !lessArray.includes(value));
}

console.log(resultArr);
