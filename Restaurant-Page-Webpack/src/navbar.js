function navbar() {
    const container = document.createElement("div")
    container.classList.add("w3-top")

    const menu = document.createElement("div")
    menu.classList.add("w3-bar", "w3-white", "w3-padding", "w3-card")
    menu.style = "letter-spacing:4px;"

    const home = document.createElement("a")
    home.textContent = "Beary's Breakfast Bar"
    home.classList.add("w3-bar-item", "w3-button")
    home.href = "#home"

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("w3-right", "w3-hide-small")

    const about = document.createElement("a")
    about.classList.add("w3-bar-item", "w3-button")
    about.textContent = "About"
    about.href = "#about"

    const menuitem = document.createElement("a")
    menuitem.classList.add("w3-bar-item", "w3-button")
    menuitem.textContent = "Menu"
    menuitem.href = "#menu"

    const contact = document.createElement("a")
    contact.classList.add("w3-bar-item", "w3-button")
    contact.textContent = "Contact"
    contact.href = "#contact"

    container.appendChild(menu)
    menu.appendChild(home)
    menu.appendChild(menuContainer)

    menuContainer.appendChild(about)
    menuContainer.appendChild(menuitem)
    menuContainer.appendChild(contact)

    return container
}

export default navbar