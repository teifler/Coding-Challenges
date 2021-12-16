//https://csx.codesmith.io/units/functions-execution-context/challenge-disemvowel
function disemvowel(string) {
  console.log("hi")
  let searchString = string.toLowerCase();
	let temp = "";
  for (let i = 0; i < string.length; i++ ) {
  	if (searchString[i]== "a" || searchString[i]== "e" || searchString[i]== "i" || searchString[i]== "o" || searchString[i]== "u" ) {
    } else {
      temp += string[i]
    }
  }
  return temp
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
//console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'