function Student(name, grade){
    this.name = name 
    this.grade = grade
}

Student.prototype.sayName = function() {
    console.log(this.name)
}

Student.prototype.goToProm = function(){
    console.log("Eh. go to prom ??")
}

function EighthGrader(name){
    this.name = name
    this.grade = 8
}    


EighthGrader.prototype = Object.create(Student.prototype)
const carl = new EighthGrader("carl")
carl.sayName()
carl.grade