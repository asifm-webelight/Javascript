function Player(name,marker){
    this.name = name 
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}

const player = new Player('Steve','x')
player.sayName()
//console.log(player.name)
//console.log(player.marker)