/*
https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-learn-javascript-syntax-classes/projects/school-catalog
School Catalogue

Let’s put your knowledge of classes to the test by creating a digital school 
catalog for the New York City Department of Education. The Department of Education 
wants the catalog to hold quick reference material for each school in the city.


*/ 

class School {
  constructor (name, level, numbersOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numbersOfStudents;
  }

  get name(){
    return this._name; 
  }

  get level() {
    return this._level;
  }

  get numbersOfStudents() {
    return this._numberOfStudents;
  }

  set numbersOfStudents(value) {
    if (isNaN(value)) {
      console.log("Invalid input: numberOfStudents must be set to a Number.")
    } else {
      this._numberOfStudents = value;
    }
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numbersOfStudents} students at the ${this.level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers){
    let randomIndex = Math.floor(Math.random() * substituteTeachers.length)
    return substituteTeachers[randomIndex]
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeam = sportsTeams;
  }

  get sportsTeams() {
    for (let sports in sportsTeams) {
      console.log(sports);
    }
  }
}

class MiddleSchool extends School {
  
}


//Tests

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(lorraineHansbury)
console.log(lorraineHansbury.quickFacts())
console.log (School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith)