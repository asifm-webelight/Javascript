const Person = (name) =>{
    const sayName = () => console.log(`My Name Is ${name}`)
    return {sayName}
}

const Nerd = (name) =>{
    const {sayName} = Person(name) //inherit
    const doSomethingNerdy = () => console.log('nerd stuff')
    return {sayName,doSomethingNerdy}
}

const jeff = Nerd ('jeff')
jeff.sayName()
jeff.doSomethingNerdy()




//Object Assign
/*const Nerd = (name) => {
    const prototype = Person(name)
    const doSomethingNerdy = () => console.log('nerd stuff')
    return Object.assign({}, prototype, {doSomethingNerdy})
}*/