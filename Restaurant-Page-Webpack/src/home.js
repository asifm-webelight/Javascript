import about from "./about"
import menuSection from "./menu"
import contact from "./contact"

function pageContent() {
    const pageContentdivContainer = document.createElement("div")
    pageContentdivContainer.classList.add("w3-content")
    pageContentdivContainer.style = "max-width:1100px"

    pageContentdivContainer.appendChild(about())
    const hr = document.createElement("hr")
    pageContentdivContainer.appendChild(hr)

    pageContentdivContainer.appendChild(menuSection())
    const hr2 = document.createElement("hr")
    pageContentdivContainer.appendChild(hr2)
    pageContentdivContainer.appendChild(contact())

    return pageContentdivContainer
}

export default pageContent