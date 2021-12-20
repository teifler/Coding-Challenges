//Challenge: map
//https://csx.codesmith.io/units/callbacks/challenge-map

// ADD CODE HERE
const subtractTwo = (num) => num-2;

const map = (arr, callback) => {
	let result = [];
  for (let i=0; i < arr.length; i++) {
    result.push(subtractTwo(arr[i]))
  }
	return result
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]