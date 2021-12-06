//Challenge https://csx.codesmith.io/units/functions-execution-context/challenge-functions-es6
//For this challenge, convert the function myJob from ES5 syntax to arrow function syntax.

//ES5 
/*
function myJob (name, profession) {
  return `Hi, my name is ${name} and I'm a ${profession}.`
}
*/ 

// ES6 Solution
let myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`
console.log(myJob("Jon", "Knights Watchman"));