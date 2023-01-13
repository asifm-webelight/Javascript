const FactoryFunction = string =>{
    const capitalizeString = () => string.toUpperCase() //Private Function
    const printString = () => console.log(`----${capitalizeString()}----`) //Public Function
    return {printString}
}

const taco = FactoryFunction('taco')
//taco.capitalizeString() Error
taco.printString()


//Second Example
const counterCreator = () =>{
    let count = 0
    return () => {
        console.log(count)
        count++
    }
}

const counter = counterCreator()
counter()
counter()
counter()
counter()