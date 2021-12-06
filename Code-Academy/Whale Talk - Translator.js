//String to be converted into whale speak
const input = "a whale of a deal!"

//Array of letters to look for inside 'Input' string to convert from normal speak to  whale speak
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//Find vowels in Input string and translate them into whale language.
for (i=0; i < input.length; i++) {
  for (j=0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee')
      } else if (input[i] === 'u') {
        resultArray.push('uu')
      } else {
      resultArray.push(vowels[j])
      }
   }
  } 
}

whaleSing = resultArray.join('')
console.log(whaleSing.toUpperCase())
