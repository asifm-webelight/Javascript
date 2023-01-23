function header() {
    const header = document.createElement("header")
    header.classList.add("w3-display-container", "w3-content", "w3-wide")
    header.style = "max-width:1600px;min-width:500px"
    header.id = "home"

    const img = document.createElement("img")
    img.classList.add("w3-image")
    img.src = "/images/hamburger.jpg", img.alt = "Hamburger Catering", img.width = "1600", img.height = "800"

    const div = document.createElement("div")
    div.classList.add("w3-display-bottomleft", "w3-padding-large", "w3-opacity")

    const h1 = document.createElement("h1")
    h1.classList.add("w3-xxlarge")
    h1.textContent = "Beary's Breakfast Bar"

    header.appendChild(img)
    header.appendChild(div)
    div.appendChild(h1)

    return header
}
export default header