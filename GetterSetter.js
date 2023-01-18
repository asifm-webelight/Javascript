class Person {

    static get species() {
        return 'Homo Sapiens'
    }
    static speciesSentence() {
        return `Humans Are Classified As ${this.species}`
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

    set setFullName(name) {
        name = name.split(' ')
        this.setFirstName(name[0])
        this.setLastName(name[1])
    }
}

//Child Class
class Worker extends Person {

    constructor(firstName, lastName, job) {
        super(firstName, lastName)
        this.job = job
        this.hasjob = true
    }
    get biography() {
        return `${this.fullName()} is a ${this.job}`.toUpperCase()
    }
    setJob(job) {
        this.job = job
    }
}
const w1 = new Worker('Harry', 'Potter', 'Software Engineer')
console.log(w1)
console.log(w1.biography)
console.log(Worker.speciesSentence())

w1.setFullName = 'Clint Barton'
console.log(w1.fullName())


//Example 2
let user = {
    name: 'John',
    surname: 'Smith',

    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(name) {
        [this.name, this.surname] = name.split(" ")
    }
}

console.log(user.fullName)
user.fullName = 'Alice Cooper'
console.log(user.fullName)


//Example 3

let user = {
    get name() {
        return this._name
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters")
            return
        }
        this._name = value
    }
}

user.name = 'Pete'
console.log(user.name)
user.name = ''




























