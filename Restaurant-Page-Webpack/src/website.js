function navbar() {
    const container = document.createElement("div")
    const menu = document.createElement("div")
    const home = document.createElement("a")
    const menuContainer = document.createElement("div")
    const about = document.createElement("a")
    const menuitem = document.createElement("a")
    const contact = document.createElement("a")

    container.classList.add("w3-top")
    menu.classList.add("w3-bar")
    menu.classList.add("w3-white")
    menu.classList.add("w3-padding")
    menu.classList.add("w3-card")
    menu.style = "letter-spacing:4px;"

    home.textContent = "Gourmet au Catering"
    home.classList.add("w3-bar-item")
    home.classList.add("w3-button")
    home.href = "#home"

    menuContainer.classList.add("w3-right")
    menuContainer.classList.add("w3-hide-small")

    about.textContent = "About"
    menuitem.textContent = "Menu"
    contact.textContent = "Contact"

    about.classList.add("w3-bar-item")
    about.classList.add("w3-button")
    menuitem.classList.add("w3-bar-item")
    menuitem.classList.add("w3-button")
    contact.classList.add("w3-bar-item")
    contact.classList.add("w3-button")
    
    about.href = "#about"
    menuitem.href = "#menu"
    contact.href = "#contact"

    container.appendChild(menu)
    menu.appendChild(home)
    menu.appendChild(menuContainer)

    menuContainer.appendChild(about)
    menuContainer.appendChild(menuitem)
    menuContainer.appendChild(contact)

    return container
}

function header()
{
    const header = document.createElement("header")
    header.classList.add("w3-display-container","w3-content","w3-wide")
    header.style = "max-width:1600px;min-width:500px"
    header.id = "home"

    const img = document.createElement("img")
    img.classList.add("w3-image")
    img.src = "/images/hamburger.jpg"
    img.alt = "Hamburger Catering"
    img.width = "1600"
    img.height = "800"

    const div = document.createElement("div")
    div.classList.add("w3-display-bottomleft", "w3-padding-large", "w3-opacity")

    const h1 = document.createElement("h1")
    h1.classList.add("w3-xxlarge")
    h1.textContent = "Le Catering"

    header.appendChild(img)
    header.appendChild(div)
    div.appendChild(h1)

    return header
}

function pageContent(){
    const divContainer = document.createElement("div")
    divContainer.classList.add("w3-content")
    divContainer.style = "max-width:1100px"

    const aboutContainer = document.createElement("div")
    aboutContainer.classList.add("w3-row","w3-padding-64")
    aboutContainer.id = "about"

    const imgdiv = document.createElement("div")
    imgdiv.classList.add("w3-col", "m6", "w3-padding-large", "w3-hide-small")

    const img = document.createElement("img")
    img.src = "images/tablesetting2.jpg"
    img.classList.add("w3-round", "w3-image", "w3-opacity-min")
    img.alt = "Table Setting"
    img.width = "600"
    img.height = "750"

    const aboutCat = document.createElement("div")
    aboutCat.classList.add("w3-col", "m6", "w3-padding-large")

    const h1 = document.createElement("h1")
    h1.classList.add("w3-center")
    h1.textContent = "About Catering"

    const br = document.createElement("br")
    const h5 = document.createElement("h5")
    h5.classList.add("w3-center")
    h5.textContent = "Tradition since 1889"

    const aboutCatContent = document.createElement("p")
    aboutCatContent.classList.add("w3-large")


    divContainer.appendChild(aboutContainer)
    aboutContainer.appendChild(imgdiv)
    imgdiv.appendChild(img)

    aboutContainer.appendChild(aboutCat)
    aboutCat.appendChild(h1)
    aboutCat.appendChild(br)
    aboutCat.appendChild(h5)
    aboutCat.appendChild(aboutCatContent)
    return divContainer
}
function initializeWebsite() {

    const content = document.getElementById("content")
    content.appendChild(navbar())
    content.appendChild(header())
    content.appendChild(pageContent())

}

export default initializeWebsite