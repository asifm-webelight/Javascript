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

//Child Class
class Worker extends Person {

    constructor(firstName, lastName, job) {
        super(firstName, lastName)
        this.job = job
        this.hasjob = true
    }

    setJob(job) {
        this.job = job
    }
}
const w1 = new Worker('Harry', 'Potter', 'Software Engineer')
console.log(w1)
w1.setJob('Web Developer')
console.log(w1)
console.log(w1.fullName())