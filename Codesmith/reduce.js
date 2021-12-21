//Challenge: reduce
//https://csx.codesmith.io/units/callbacks/challenge-reduce

// ADD CODE HERE
const reduce = (arr, callback1, iniVal) => {
  if (Array.isArray(arr)) {
    let acc;
    if (iniVal === undefined) {
      acc = arr[0];
      arr.shift();
    } else {
      acc = iniVal;
      
    }
    for (let i=0; i < arr.length; i++) {
    iniVal= callback1(iniVal, arr[i])
  	}
  	return iniVal
  } else {
    console.log("First Element should be an array")
  }
  
}
// Uncomment these to check your work!
 const nums = [4, 1, 3];
 const add = function(a, b) { return a + b; }
 console.log(reduce(nums, add, 0)); // should log 8