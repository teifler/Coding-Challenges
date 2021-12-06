/* Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. 
The value returned should be an array with the low, high, and range.
Is it working?

getTheRange should be a function
getTheRange([3, 2, 5, 4, 7, 9, 10]) should return [2, 10, 8]
  */


function getTheRange(arr){
  let arrRange = [];
  //Declare highest & lowest with first number of the argument array
  let lowest = arr[0];
  let highest = arr[0];
  //Starts at index 1 because the lowest / highest are initialized with index 0
  for (let i=1; i < arr.length; i++) {
    //Check if number is lower than lowest
    if (arr[i]<lowest) {
      lowest = arr[i];
    } else if (arr[i]>highest) {
      //Check if its higher if yes save num in
        highest = arr[i];
      }
    }
  //Append first lowest then highest and than the range to the array and then return it
  arrRange.push(lowest)
  arrRange.push(highest)
  arrRange.push(highest-lowest)
  return arrRange
}

// Uncomment these to check your work!
 console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]