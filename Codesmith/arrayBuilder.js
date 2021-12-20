//Challenge: arrayBuilder
//https://csx.codesmith.io/units/functions-execution-context/challenge-array-builder

function arrayBuilder(obj) {
  // ADD CODE HERE
	let outputArr=[];
  	for (const item in obj) {
  		if (obj[item] > 1) {
      		for(let j=0; j < (obj[item]); j++) {
        		arr.push(item);
      		}
    		} else {
      		outputArr.push(item);
    		}
    
	}
	return outputArr
}
  

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []