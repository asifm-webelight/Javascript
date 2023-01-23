function menuSection() {
    const menuDivContainer = document.createElement("div")
    menuDivContainer.classList.add("w3-row", "w3-padding-64")
    menuDivContainer.id = "menu"

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("w3-col", "l6", "w3-padding-large")

    const h1 = document.createElement("h1")
    h1.classList.add("w3-center")
    h1.textContent = "Our Menu"

    //First Item
    const item1 = document.createElement("h4")
    item1.textContent = "The Beary Best Porridge"
    const para1 = document.createElement("p")
    para1.classList.add("w3-text-grey")
    para1.textContent = "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back. $5"
    const br = document.createElement("br")

    //Second Item
    const item2 = document.createElement("h4")
    item2.textContent = "Beary Bowl"
    const para2 = document.createElement("p")
    para2.classList.add("w3-text-grey")
    para2.textContent = "Get a big ole bowl of our berries! Side of honey is $1 extra. $7"
    const br2 = document.createElement("br")

    //Third Item
    const item3 = document.createElement("h4")
    item3.textContent = "Honeycomb"
    const para3 = document.createElement("p")
    para3.classList.add("w3-text-grey")
    para3.textContent = "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal. $6"
    const br3 = document.createElement("br")

    //Fourth Item
    const item4 = document.createElement("h4")
    item4.textContent = "Scrambled eggs"
    const para4 = document.createElement("p")
    para4.classList.add("w3-text-grey")
    para4.textContent = "Scrambled eggs, roasted red pepper and garlic, with green onions $7.50"
    const br4 = document.createElement("br")

    //Fifth Item
    const item5 = document.createElement("h4")
    item5.textContent = "Blueberry Pancakes"
    const para5 = document.createElement("p")
    para5.classList.add("w3-text-grey")
    para5.textContent = "With syrup, butter and lots of berries $8.50"
    const br5 = document.createElement("br")

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("w3-col", "l6", "w3-padding-large")

    const img = document.createElement("img")
    img.src = "images/tablesetting.jpg"
    img.classList.add("w3-round", "w3-image", "w3-opacity-min")
    img.alt = "Menu"
    img.style = "width:100%"

    menuDivContainer.appendChild(menuContainer)
    menuContainer.appendChild(h1)
    menuContainer.appendChild(item1)
    menuContainer.appendChild(para1)
    menuContainer.appendChild(br)

    menuContainer.appendChild(item2)
    menuContainer.appendChild(para2)
    menuContainer.appendChild(br2)

    menuContainer.appendChild(item3)
    menuContainer.appendChild(para3)
    menuContainer.appendChild(br3)

    menuContainer.appendChild(item4)
    menuContainer.appendChild(para4)
    menuContainer.appendChild(br4)

    menuContainer.appendChild(item5)
    menuContainer.appendChild(para5)
    menuContainer.appendChild(br5)

    menuDivContainer.appendChild(imgContainer)
    imgContainer.appendChild(img)

    return menuDivContainer
}

export default menuSection