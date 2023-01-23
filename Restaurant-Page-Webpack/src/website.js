import navbar from "./navbar"
import header from "./header"
import pageContent from "./home"
import footer from "./footer"

function initializeWebsite() {

    const content = document.getElementById("content")
    content.appendChild(navbar())
    content.appendChild(header())
    content.appendChild(pageContent())
    content.appendChild(footer())
}

export default initializeWebsite