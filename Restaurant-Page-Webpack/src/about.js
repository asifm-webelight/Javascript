function about() {
    const aboutContainer = document.createElement("div")
    aboutContainer.classList.add("w3-row", "w3-padding-64")
    aboutContainer.id = "about"

    const imgdiv = document.createElement("div")
    imgdiv.classList.add("w3-col", "m6", "w3-padding-large", "w3-hide-small")

    const img = document.createElement("img")
    img.src = "images/tablesetting2.jpg", img.classList.add("w3-round", "w3-image", "w3-opacity-min"), img.alt = "Table Setting", img.width = "600", img.height = "750"

    const aboutCat = document.createElement("div")
    aboutCat.classList.add("w3-col", "m6", "w3-padding-large")

    const h1 = document.createElement("h1")
    h1.classList.add("w3-center")
    h1.textContent = "About Us"

    const br = document.createElement("br")
    const h5 = document.createElement("h5")
    h5.classList.add("w3-center")
    h5.textContent = "Tradition since 1889"

    const aboutCatContent = document.createElement("p")
    aboutCatContent.classList.add("w3-large")
    aboutCatContent.innerText = `Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.`

    const aboutCatContentBottom = document.createElement("p")
    aboutCatContentBottom.classList.add("w3-large", "w3-text-grey", "w3-hide-medium")
    aboutCatContentBottom.innerText = `Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
    temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

    aboutContainer.appendChild(imgdiv)
    imgdiv.appendChild(img)

    aboutContainer.appendChild(aboutCat)
    aboutCat.appendChild(h1)
    aboutCat.appendChild(br)
    aboutCat.appendChild(h5)
    aboutCat.appendChild(aboutCatContent)
    aboutCat.appendChild(aboutCatContentBottom)

    return aboutContainer

}

export default about