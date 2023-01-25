function createProject() {
    const project_name = document.getElementById("project_name")
    const btn = document.getElementById("btn_add")

    btn.addEventListener("click", function () {
        localStorage.setItem('project_name', project_name)
        // const h1 = document.getElementById("")
        // h1.textContent = localStorage.getItem('project_name')
    })
}

function loadProjects() {

}

export default createProject