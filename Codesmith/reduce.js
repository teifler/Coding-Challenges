//Challenge: reduce
//https://csx.codesmith.io/units/callbacks/challenge-reduce

// ADD CODE HERE
const reduce = (arr, callback1, iniVal) => {
  
  for (let i=0; i < arr.length; i++) {
    iniVal= callback1(iniVal, arr[i])
  }
  return iniVal
}
// Uncomment these to check your work!
 const nums = [4, 1, 3];
 const add = function(a, b) { return a + b; }
 console.log(reduce(nums, add, 5)); // should log 8