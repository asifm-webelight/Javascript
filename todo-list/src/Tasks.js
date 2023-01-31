let tasks_list = []

if (localStorage.getItem('task_name') == null) {
    let tasks_list = []
}
else {
    tasks_list = JSON.parse(localStorage.getItem('task_name'))
}

const todo_form = document.getElementById('todo_form')
todo_form.addEventListener('submit', event => {
    event.preventDefault()
    let task_name_ele = document.getElementById('task_name')
    let date_ele = document.getElementById('date')
    let priority_ele = document.getElementById('priority')
    let project_title_ele = document.getElementById('project_title')

    const text = task_name_ele.value.trim()
    const date = date_ele.value
    const priority = priority_ele.value
    const project_title = project_title_ele.textContent

    if (text != '') {
        addTask(text, date, priority, project_title)
        task_name_ele.value = ''
        date_ele.value = ''
        // priority_ele.value = ''
        project_title_ele.value = ''
    }
})
function addTask(name, date, priority, project_title) {
    const task = {
        id: Date.now(),
        checked: false,
        name,
        date,
        priority,
        project_title,
    }
    tasks_list.push(task)
    localStorage.setItem('task_name', JSON.stringify(tasks_list))
    loadTask()
}

function loadTask() {
    const list_task = document.getElementById('list_task')
    const content = JSON.parse(localStorage.getItem('task_name'))
    // console.log('Displaying Title', project_title.textContent)

    if (content != null) {
        for (var value of content) {
            // console.log(tasks_list)
            if (project_title.textContent === value.project_title) {
                // console.log('Displaying Values of title', value.project_title)
                const row = document.createElement('div')
                const node = document.querySelector(`[data-key='${value.id}']`)
                row.setAttribute('data-key', value.id)
                row.classList.add('row', 'g-3', 'mt-2')
                row.id = value.id

                const checked = document.createElement('div')
                checked.classList.add('col-auto')

                const check_input = document.createElement('input')
                check_input.classList.add('form-check-input')
                check_input.setAttribute('type', 'checkbox')

                const itemdiv = document.createElement('div')
                itemdiv.classList.add('col-8')
                const item_label = document.createElement('label')
                item_label.classList.add('strikethrough')
                item_label.textContent = value.name
                // item_label.setAttribute('data-key', value.id)

                const datediv = document.createElement('div')
                datediv.classList.add('col-1')

                const date_label = document.createElement('label')
                date_label.textContent = value.date

                const priority_div = document.createElement('div')
                priority_div.classList.add('col-auto')

                const priority_btn = document.createElement('button')
                priority_btn.classList.add('btn', 'btn-outline-primary', 'btn-sm')
                priority_btn.textContent = value.priority

                const deletediv = document.createElement('div')
                deletediv.classList.add('col-auto')

                const btndel = document.createElement('button')
                btndel.classList.add('btn', 'btn-sm', 'delete-todo')
                const deleteimg = document.createElement('img')
                deleteimg.classList.add('delete')
                deleteimg.src = './img/delete.svg'
                btndel.appendChild(deleteimg)

                const editdiv = document.createElement('div')
                editdiv.classList.add('col-auto')

                const btnedit = document.createElement('button')
                btnedit.classList.add('btn', 'btn-sm', 'edit-todo')
                const editimg = document.createElement('img')
                editimg.classList.add('edit')
                editimg.src = './img/edit.svg'
                editimg.setAttribute('data-bs-toggle', 'modal')
                editimg.setAttribute('data-bs-target', '#exampleModal')
                btnedit.appendChild(editimg)

                checked.appendChild(check_input)
                itemdiv.appendChild(item_label)
                datediv.appendChild(date_label)
                priority_div.appendChild(priority_btn)
                deletediv.appendChild(btndel)
                editdiv.appendChild(btnedit)

                row.appendChild(checked)
                row.appendChild(itemdiv)
                row.appendChild(datediv)
                row.appendChild(priority_div)
                row.appendChild(deletediv)
                row.appendChild(editdiv)
                if (node) {
                    list_task.replaceChild(row, node)
                }
                else {
                    list_task.appendChild(row)
                }

                btndel.addEventListener('click', () => {
                    var index = tasks_list.findIndex(x => x.id === Number(row.id))
                    deleteTodo(index)
                })
                btnedit.addEventListener('click', () => {
                    var index = tasks_list.findIndex(x => x.id === Number(row.id))
                    editTodo(index, value.project_title)
                })
            }
        }
    }

}

function deleteTodo(index) {

    tasks_list.splice(index, 1)
    localStorage.setItem('task_name', JSON.stringify(tasks_list))
    loadTask()
    // location.reload()
}
function editTodo(index, project_title) {
    const edit_todo_form = document.getElementById('edit_todo_form')
    edit_todo_form.addEventListener('submit', event => {
        event.preventDefault()
        let todo_name = document.getElementById('todo_name')
        let todo_date = document.getElementById('todo_date')
        let todo_priority = document.getElementById('todo_priority')
        let todo_pro_title = project_title
        tasks_list.splice(index, 1)
        addTask(todo_name.value, todo_date.value, todo_priority.value, todo_pro_title)
        loadTask()
        // location.reload()
    })
}

export default loadTask