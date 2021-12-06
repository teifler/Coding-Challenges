//https://www.hackerrank.com/challenges/camelcase/problem


//It is a concatenation of one or more words consisting of English letters.
//All letters in the first word are lowercase. 
//For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

function camelcase(s) {
    //Split the argument string into single chars
    let strArr = s.split('')
    //Counter starts at one because first word starts with lowercase
    let counter = 1
    //For loop to iterate through the string and check for upperCase --> If found counter++
    for (let i=0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toUpperCase()) {
            counter++
        }
    }
    return counter
}

