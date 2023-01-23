function footer(){
    const footer = document.createElement("footer")
    footer.classList.add("w3-center", "w3-light-grey", "w3-padding-32")

    const p = document.createElement("p")
    const d = new Date()
    p.textContent = `© ${d.getFullYear()} - Beary's Breakfast Bar`
    
    footer.appendChild(p)
    return footer
}

export default footer
