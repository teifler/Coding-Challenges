/* Write a function addingAllTheWeirdStuff which adds the sum of all the odd 
numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should 
also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
*/



function addingAllTheWeirdStuff(array1, array2){
  // ADD CODE HERE
  let sumEven = 0;
  let sumOdd = 0;
  //over20 will be true if there is a num higher than 20 in array2
  let over20 = false; 
   
  for (let i=0; i < array2.length; i++) {
	  //check if there is a num > 20
    if (array2[i] > 20) {
      over20 = true;
    }
	//Sum all odd numbers
  	if ((array2[i] % 2) != 0) {
      sumOdd += array2[i];
    } else {
	  //sum all even numbers
      sumEven += array2[i]
    }
  }
  
//Add sumEven to element if element > 10 else add oddsum to element
  for (let i=0; i < array1.length; i++ ) {
    if (array1[i] > 10) {
      array1[i]+= sumEven;
    } else {
      array1[i]+= sumOdd;
    }
  }
  //If there was a num > 20 add 1 to each element in array
  if (over20) {
    for (let i=0; i < array1.length; i++ ) {
      array1[i]+= 1;
    }
  }
  return array1
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
