class User{
    constructor(){}
}

//console.log(typeof User) //function
//console.log(User()) //The constructor() method is called automatically by new, so we can initialize the object there.

//const obj = new User()
//console.log(obj)
//console.log(User) //Class User


let User = class MyClass{
    sayHi(){
        console.log("Hello")
    }
}
new User().sayHi()
alert(MyClass)