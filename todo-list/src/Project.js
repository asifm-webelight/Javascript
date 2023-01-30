let project_list = []

if (localStorage.getItem('project_name') == null) {
    let project_list = []
}
else {
    project_list = JSON.parse(localStorage.getItem('project_name'))
}
const project_form = document.getElementById("project-form")
project_form.addEventListener('submit', event => {
    event.preventDefault()
    const project_name = document.getElementById('project_name')
    const text = project_name.value.trim()
    if (text != '') {
        addProject(text)
        project_name.value = ''
        project_name.focus()
    }
})
console.log(project_list.length)

function createProject() {
}
function addProject(name) {
    const project = {
        id: Date.now(),
        name,
        tasks: [],
    }
    project_list.push(project)
    // console.log('Array', project_list)
    // console.log('Object', project)
    localStorage.setItem('project_name', JSON.stringify(project_list))
    loadProjects()
}
function loadProjects() {
    const project_list1 = document.getElementById("list_project")

    const content = JSON.parse(localStorage.getItem('project_name'))
    // console.log(content)
    if (content != null) {
        for (var value of content) {
            // console.log(value)

            const item = document.createElement("a")
            item.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center')

            const img = document.createElement("img")
            img.classList.add("delete")
            img.src = "./img/delete.svg"

            const btn = document.createElement("button")
            btn.classList.add('btn', 'btn-sm', 'delete-project')
            item.id = 'item'
            item.textContent = value.name
            // console.log(value.name)
            btn.appendChild(img)
            item.appendChild(btn)
            project_list1.appendChild(item)
        }

    }
    //item.textContent = project.name //Through Array, it must be fetch from the localstorage

    btn.addEventListener('click', event => {

        deleteProject()
    })
}

function deleteProject() {
    //    console.log("Hey")
}

export { createProject, loadProjects }
