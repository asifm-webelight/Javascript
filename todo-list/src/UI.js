// function createProject() {

//     const project_name = document.getElementById('project_name')
//     const btn = document.getElementById('btn_add')
//     const project_list = []
//     btn.addEventListener('click', () => {

//         project_list.push(project_name.value)
//         console.log(project_list)
//         localStorage.setItem('project_name', JSON.stringify(project_list))
//     })
// }

// function loadProjects() {
//     const project_list = document.getElementById("list_project")
//     const item = document.createElement("a")
//     item.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center')
//     const img = document.createElement("img")
//     img.classList.add("delete")
//     img.src = "./img/delete.svg" 
//     item.textContent = JSON.parse(localStorage.getItem('project_name'))
//     item.appendChild(img)
//     project_list.appendChild(item)
// }

// export { createProject, loadProjects }

export default class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }
    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setTasks(tasks) {
        this.tasks = tasks
    }
    getTasks() {
        return this.tasks
    }
    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
    }
    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName)
    }
    addTask(newTask) {
        if (this.tasks.find((task) => task.getName() === newTask.name)) return this.tasks.push(newTask)
    }
    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName)
    }
}
