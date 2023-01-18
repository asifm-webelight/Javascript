class Person {               //Person is a function
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

const p1 = new Person('Black', 'Widow')
console.log(p1.firstName)
console.log(p1.lastName)
console.log(p1.fullName())
p1.setFirstName('Mr.')
p1.setLastName('X')
console.log(p1.fullName())
console.log(p1)
