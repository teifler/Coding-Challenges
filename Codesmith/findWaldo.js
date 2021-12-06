//https://csx.codesmith.io/units/functions-execution-context/challenge-find-waldo


function findWaldo(obj){ 
	//Check argument (obj) for key "Waldo" if found return unknown
	if ("Waldo" in obj) {
    return "unknown"
  } else {
    //If object has no key waldo return the following:
    return "Where\'s Waldo?"
  }
}
// Uncomment these to check your work!
// const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
// const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
// console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
// console.log(findWaldo(supernatural)) // should log: 'unknown'