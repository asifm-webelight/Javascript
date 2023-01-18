class Person {

    static species() {
        return 'Homo Sapiens'
    }
    static speciesSentence() {
        return `Humans Are Classified As ${this.species()}`
    }
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.hasjob = false
    }
    //instance method
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    setFirstName(firstName) {
        this.firstName = firstName
    }

    setLastName(lastName) {
        this.lastName = lastName
    }
}

const p1 = new Person('Tony', 'Stark')
//console.log(p1.species())  Error
console.log(Person.speciesSentence())