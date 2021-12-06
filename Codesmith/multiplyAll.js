//Create a function multiplyAll that takes an
//unknown number of integer arguments, multiplies them all together, and returns the result.


// ADD CODE HERE 
function multiplyAll (...arr) {
  //Product needs to be one otherweise we multiplicate with zero
  let product =1;
  //iterate through arguments(elements) and multiplicate each element with the product - then return it end of the function
  for (let i=0; i < arr.length; i++) {
    product *= arr[i];  
  }
  return product;
}
// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375