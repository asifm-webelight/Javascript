const personFactory = (name,age) => {
    const sayHello = () => console.log('hello!')
    return {name, age, sayHello}
}

const am = personFactory('am',27)
console.log(am.name)


am.sayHello()

//Bank Example
const bank = (name,acno,branch) => {
    return {name, acno, branch}
}

const b1 = bank("HDFC", 123, "AH")
console.log("Name Of The Bank:", b1.name, "Account No:", b1.acno, "Branch:" , b1.branch)

const b2 = bank("SBI", 010, "AH")
console.log("Name Of The Bank:", b2.name, "Account No:", b2.acno, "Branch:" , b2.branch)

//Simple Hack

const Name = "Maynard"
const color = "red"
const number = 34
const food = "rice"

console.log(Name, color, number, food)
console.log({Name, color, number, food})
