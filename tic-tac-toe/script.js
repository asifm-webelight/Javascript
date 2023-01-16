let turn = "X"

const changeTurn = () =>{

    return turn === "X"?"0":"X"
}

const checkWin = () =>{

}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = document.querySelector('.boxtext')
    element.addEventListener('click',() => {

        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            changeTurn()
            checkWin()
            document.getElementsByClassName(turn)[0].innerText = "Turn For " + turn     
        }

    })
})
