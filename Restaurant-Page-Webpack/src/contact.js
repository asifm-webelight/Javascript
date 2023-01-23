function contact() {
    const contactDivContainer = document.createElement("div")
    contactDivContainer.classList.add("w3-container", "w3-padding-64")
    contactDivContainer.id = "contact"

    const h1 = document.createElement("h1")
    h1.textContent = "Contact"
    const br = document.createElement("br")

    const p1 = document.createElement("p")
    p1.textContent = `Do not hesitate to contact us.`

    const p2 = document.createElement("p")
    p2.classList.add("w3-text-blue-grey", "w3-large")

    const b = document.createElement("b")
    b.textContent = "123 Forest Drive, Forestville, Maine"
    p2.appendChild(b)

    const p3 = document.createElement("p")
    p3.textContent = `You can also contact us by phone 1234567890 or email bearybreakfastbar@gmail.com, or you can send us a
    message here:`

    const form = document.createElement("form")
    form.action = "#"

    const name = document.createElement("p")
    const inputName = document.createElement("input")
    inputName.classList.add("w3-input", "w3-padding-16")
    inputName.type = "text", inputName.placeholder = "Name", inputName.required, inputName.name = "Name"

    const number = document.createElement("p")
    const inputNumber = document.createElement("input")
    inputNumber.classList.add("w3-input", "w3-padding-16")
    inputName.type = "number", inputNumber.placeholder = "How Many People", inputName.required, inputName.name = "People"

    const dateTime = document.createElement("p")
    const inputDateTime = document.createElement("input")
    inputDateTime.classList.add("w3-input", "w3-padding-16")
    inputDateTime.type = "datetime-local", inputDateTime.placeholder = "Date and time", inputDateTime.required, inputDateTime.name = "date", inputDateTime.value = "2020-11-16T20:00"

    const msg = document.createElement("p")
    const inputMsg = document.createElement("input")
    inputMsg.classList.add("w3-input", "w3-padding-16")
    inputMsg.type = "text", inputMsg.placeholder = "Message \ Special requirements", inputDateTime.required, inputDateTime.name = "message"

    const p = document.createElement("p")
    const button = document.createElement("button")
    button.classList.add("w3-button", "w3-light-grey", "w3-section")
    button.type = "submit", button.textContent = "SEND MESSAGE"


    contactDivContainer.appendChild(h1)
    contactDivContainer.appendChild(br)
    contactDivContainer.appendChild(p1)
    contactDivContainer.appendChild(p2)
    contactDivContainer.appendChild(p3)
    contactDivContainer.appendChild(form)

    form.appendChild(name)
    name.appendChild(inputName)
    form.appendChild(number)
    number.appendChild(inputNumber)
    form.appendChild(dateTime)
    dateTime.appendChild(inputDateTime)
    form.appendChild(msg)
    msg.appendChild(inputMsg)
    form.appendChild(p)
    p.appendChild(button)

    return contactDivContainer
}

export default contact