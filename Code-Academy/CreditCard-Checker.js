//https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-ii/modules/fecp-challenge-project-credit-card-checker/projects/credit-card-checker

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// validate credit card via Luhn algorithm 
const validateCred = (arr) => {
  let sum= 0;
  let double = false
  for (let i = arr.length -1; i > -1 ; i--) {
    if (double) {
      /* If over 10 substract 9 from it +1 */ 
      let over10 = arr[i] * 2
      if (over10 > 9) {
        sum += (over10 - 9)
      } else {
        sum+= (arr[i] * 2)
      }
    } else {
      sum += arr[i];
    }
    if (double) {
      double = false;
    } else {
      double = true;
    }
  }
  console.log(sum%10 === 0 ? `Vaild ${idInvalidCardCompanies(arr)} Credit Card: ${arr.join("")}` : `Invalid ${idInvalidCardCompanies(arr)} Credit Card: ${arr.join("")}`);
  return (sum%10 === 0 ? true : false)
}

// Check multiple cards return invaild cards
const findInvalidCards = (nestArr) => {
  let invaildCC = []
  for (let i=0; i < nestArr.length; i++) {
    //Append to invaildCC if invaild
    //Regex
    if (validateCred(nestArr[i]) == false) {
      invaildCC.push(nestArr[i].join(""))
    }
  }
  return "Invaild CCs: " + invaildCC
}


// identifying companies that issued faulty numbers
const idInvalidCardCompanies = nestArr => {
  let checkArray =[];
  //check if array is nested
  if (nestArr[0][0] == undefined) {
    checkArray = nestArr[0]
  } else {
    checkArray = nestArr[0][0]
  }
  for (let i=0; i < nestArr.length; i++) {
    switch (checkArray) {
      case 3:
        return 'Amex'
      case 4:
        return 'Visa'
      case 5:
        return 'Mastercard'
      case 6:
        return 'Discover'
      default:
        return 'Unknown company'
    }
  }
}

console.log(idInvalidCardCompanies(batch))

//Question 7
const convertString = str => {
  ccSplitted = str.split(" ")
  ccSplitted = ccSplitted.map(arr => parseInt(arr))
  return ccSplitted;
}
convertString('4175004137979400 4913844840576754 4917388332072357')

console.log(validateCred(invalid1)) //Invalid Visa Credit Card: 4532778771091795

console.log(validateCred(valid3)) //Vaild Amex Credit Card: 371612019985236

console.log(findInvalidCards(batch)) // Invaild CCs: 4532778771091795,5795593392134643,375796084459914,6011127961777935,5382019772883854,344801968305414,6011377020962656203,4929877169217093

