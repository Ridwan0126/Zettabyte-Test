// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  var count = 0;
  while (num) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}

console.log(result(number));
