function Person(firstName, lastName) {

    let secret = 'webelight'
    this.firstName = firstName
    this.lastName = lastName
    this.hasJob = false

    this.fullName = function () {
        return this.firstName + ' ' + this.lastName
    }

    this.setFirstName = function (firstName) {
        this.firstName = firstName
    }

    this.setLastName = function (lastName) {
        this.lastName = lastName
    }

    this.getSecret = function () {
        return secret
    }

}

const obj1 = new Person("Tony", "Stark")
console.log(obj1.firstName)
console.log(obj1.lastName)
console.log(obj1.fullName())

obj1.setFirstName('Doctor Stephen')
obj1.setLastName('Strange')
console.log(obj1.fullName())

console.log(obj1.getSecret())