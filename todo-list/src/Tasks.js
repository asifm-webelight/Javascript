function createTask() {
    const project_list1 = document.getElementById('list_project')
    const item = document.getElementById('item')
    const h1 = document.getElementById("project_title")

    // project_list1.addEventListener('click', event => {
    //     h1.textContent = item.textContent
    //     console.log(item)
    // })
    var listitems = document.querySelectorAll('div a')
    listitems.forEach(function(item){
        item.onclick = function(e){
            // console.log(this.textContent)
        }
    })
}

export default createTask