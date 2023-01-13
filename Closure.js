//Closure
var sayHello = function(name){
    var text = "Hello," + name
    return function(){
        console.log(text)
    } 
}

//sayHello("AM")
var helloTodd = sayHello('todd')
helloTodd()
sayHello('bob')()

//Second Example
/*

var myFunction = function(){
    console.log(this)
}
myFunction()

var myObject = {}
myObject.myMethod = function(){
    console.log(this)
}*/