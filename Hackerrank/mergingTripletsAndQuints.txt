//Write a function mergingTripletsAndQuints which takes in two arrays as arguments. This function will return a new array replacing the //elements in array1 if they are divisible by 3 or 5. The number should be replaced with the sum of itself added to the element at the //corresponding index in array2.
function mergingTripletsAndQuints(array1, array2) {
 // ADD CODE HERE
  //Replaceing elements in array1 if (mod 3 or 5)
  for (let i=0; i < array1.length; i++) {
    if (array1[i] % 3 == 0|| array1[i] % 5 == 0) {
      array1[i] += array2[i]
      
    }
  }
  return array1
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]