import loadTask from "./Tasks"

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
// console.log(project_list.length)

function addProject(name) {
    const project = {
        id: Date.now(),
        name,
    }
    project_list.push(project)
    localStorage.setItem('project_name', JSON.stringify(project_list))
    loadProjects()
}

function loadProjects() {
    const project_list1 = document.getElementById("list_project")
    const content = JSON.parse(localStorage.getItem('project_name'))

    if (content != null) {
        for (var value of content) {

            const item = document.createElement("a")
            const node = document.querySelector(`[data-key='${value.id}']`)
            item.setAttribute('data-key', value.id)
            item.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center')
            item.id = value.id

            const img = document.createElement("img")
            img.classList.add("delete")
            img.src = "./img/delete.svg"

            const btn = document.createElement("button")
            btn.classList.add('btn', 'btn-sm', 'delete-project')
            item.textContent = value.name

            if (node) {
                btn.appendChild(img)
                item.appendChild(btn)
                project_list1.replaceChild(item, node)
            }
            else {
                btn.appendChild(img)
                item.appendChild(btn)
                project_list1.appendChild(item)
            }
            btn.addEventListener('click', () => {
                var index = project_list.findIndex(x => x.id === Number(item.id))
                var removeEle = document.getElementById(item.id)
                removeEle.parentNode.removeChild(removeEle)
                deleteProject(index)
            });
            const h1 = document.getElementById('project_title')
            if (h1.textContent == '') {
                h1.textContent = item.textContent
                loadTask()
            }
            item.addEventListener('click', () => {
                const list_task = document.getElementById('list_task')
                list_task.textContent = ''
                h1.textContent = item.textContent
                loadTask()
            })
        }
    }
}

function deleteProject(index) {
    project_list.splice(index, 1)
    localStorage.setItem('project_name', JSON.stringify(project_list))
    location.reload()
    // loadProjects()
}

export { loadProjects }
