//Challenge: DeveloperClass
//https://csx.codesmith.io/units/object-oriented-programming/challenge-developer-class

class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass {
  constructor (name, age) {
    super(name),
    this.age = age;
  }
  introduce() {
    console.log(`Hello World, my name is ${this.name}`)
  }
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
 console.log(thai.name); // -> Logs 'Thai'
console.log(thai.age); // -> Logs 'Hello World, my name is Thai'