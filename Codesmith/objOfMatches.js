//Challenge: objOfMatches
//https://csx.codesmith.io/units/callbacks/challenge-obj-of-matches

// ADD CODE HERE
const objOfMatches = (arr1,arr2, callback) => {
  const matches = {}
  for (let i =0; i < arr1.length; i++) {
    if (callback(arr1[i]) === arr2[i]) {
    	result[arr1[i]]= arr2[i]
    }
   }
  return matches;
}

// Uncomment these to check your work!
 const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
 const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
 function uppercaser(str) { return str.toUpperCase(); }
 console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
