/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    p3.textContent = `You can also contact us by phone 00553123-2323 or email bearybreakfastbar@gmail.com, or you can send us a
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function footer(){
    const footer = document.createElement("footer")
    footer.classList.add("w3-center", "w3-light-grey", "w3-padding-32")

    const p = document.createElement("p")
    const d = new Date()
    p.textContent = `© ${d.getFullYear()} - Beary's Breakfast Bar`


    footer.appendChild(p)
    return footer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function pageContent() {
    const pageContentdivContainer = document.createElement("div")
    pageContentdivContainer.classList.add("w3-content")
    pageContentdivContainer.style = "max-width:1100px"

    pageContentdivContainer.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_0__["default"])())
    const hr = document.createElement("hr")
    pageContentdivContainer.appendChild(hr)

    pageContentdivContainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])())
    const hr2 = document.createElement("hr")
    pageContentdivContainer.appendChild(hr2)
    pageContentdivContainer.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])())

    return pageContentdivContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageContent);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSection);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");





function initializeWebsite() {

    const content = document.getElementById("content")
    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])())
    content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])())
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])())
    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDLG9EQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS13ZWJwYWNrLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS13ZWJwYWNrLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXdlYnBhY2svLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS13ZWJwYWNrLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utd2VicGFjay8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS13ZWJwYWNrLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXdlYnBhY2svLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS13ZWJwYWNrLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidzMtcm93XCIsIFwidzMtcGFkZGluZy02NFwiKVxuICAgIGFib3V0Q29udGFpbmVyLmlkID0gXCJhYm91dFwiXG5cbiAgICBjb25zdCBpbWdkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW1nZGl2LmNsYXNzTGlzdC5hZGQoXCJ3My1jb2xcIiwgXCJtNlwiLCBcInczLXBhZGRpbmctbGFyZ2VcIiwgXCJ3My1oaWRlLXNtYWxsXCIpXG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nLnNyYyA9IFwiaW1hZ2VzL3RhYmxlc2V0dGluZzIuanBnXCIsIGltZy5jbGFzc0xpc3QuYWRkKFwidzMtcm91bmRcIiwgXCJ3My1pbWFnZVwiLCBcInczLW9wYWNpdHktbWluXCIpLCBpbWcuYWx0ID0gXCJUYWJsZSBTZXR0aW5nXCIsIGltZy53aWR0aCA9IFwiNjAwXCIsIGltZy5oZWlnaHQgPSBcIjc1MFwiXG5cbiAgICBjb25zdCBhYm91dENhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBhYm91dENhdC5jbGFzc0xpc3QuYWRkKFwidzMtY29sXCIsIFwibTZcIiwgXCJ3My1wYWRkaW5nLWxhcmdlXCIpXG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGgxLmNsYXNzTGlzdC5hZGQoXCJ3My1jZW50ZXJcIilcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIlxuXG4gICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKVxuICAgIGg1LmNsYXNzTGlzdC5hZGQoXCJ3My1jZW50ZXJcIilcbiAgICBoNS50ZXh0Q29udGVudCA9IFwiVHJhZGl0aW9uIHNpbmNlIDE4ODlcIlxuXG4gICAgY29uc3QgYWJvdXRDYXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBhYm91dENhdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInczLWxhcmdlXCIpXG4gICAgYWJvdXRDYXRDb250ZW50LmlubmVyVGV4dCA9IGBCZWFyeSdzIGhhcyB0aGUgYmVzdCBwb3JyaWRnZSEgVGhlIGF0bW9zcGhlcmUgYW5kIGN1c3RvbWVyIHNlcnZpY2UgbWFrZSB5b3UgZmVlbCBsaWtlIHlvdSBhcmUgc2l0dGluZyBpbiB0aGUgbWlkZGxlIG9mIHRoZSB3b29kcywgZWF0aW5nIGxpa2UgYSBiZWFyISBUaGlzIGlzIGV4YWN0bHkgdGhlIGtpbmQgb2YgcGxhY2UgdGhhdCBJIGxpa2UgdG8gcmV0dXJuIHRvIGFnYWluIGFuZCBhZ2Fpbi5gXG5cbiAgICBjb25zdCBhYm91dENhdENvbnRlbnRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGFib3V0Q2F0Q29udGVudEJvdHRvbS5jbGFzc0xpc3QuYWRkKFwidzMtbGFyZ2VcIiwgXCJ3My10ZXh0LWdyZXlcIiwgXCJ3My1oaWRlLW1lZGl1bVwiKVxuICAgIGFib3V0Q2F0Q29udGVudEJvdHRvbS5pbm5lclRleHQgPSBgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpblxuICAgIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICB0ZW1wb3JpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkXG4gICAgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuYFxuXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nZGl2KVxuICAgIGltZ2Rpdi5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENhdClcbiAgICBhYm91dENhdC5hcHBlbmRDaGlsZChoMSlcbiAgICBhYm91dENhdC5hcHBlbmRDaGlsZChicilcbiAgICBhYm91dENhdC5hcHBlbmRDaGlsZChoNSlcbiAgICBhYm91dENhdC5hcHBlbmRDaGlsZChhYm91dENhdENvbnRlbnQpXG4gICAgYWJvdXRDYXQuYXBwZW5kQ2hpbGQoYWJvdXRDYXRDb250ZW50Qm90dG9tKVxuXG4gICAgcmV0dXJuIGFib3V0Q29udGFpbmVyXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQiLCJmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3REaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFjdERpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidzMtY29udGFpbmVyXCIsIFwidzMtcGFkZGluZy02NFwiKVxuICAgIGNvbnRhY3REaXZDb250YWluZXIuaWQgPSBcImNvbnRhY3RcIlxuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG4gICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwMS50ZXh0Q29udGVudCA9IGBEbyBub3QgaGVzaXRhdGUgdG8gY29udGFjdCB1cy5gXG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcDIuY2xhc3NMaXN0LmFkZChcInczLXRleHQtYmx1ZS1ncmV5XCIsIFwidzMtbGFyZ2VcIilcblxuICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKVxuICAgIGIudGV4dENvbnRlbnQgPSBcIjEyMyBGb3Jlc3QgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZVwiXG4gICAgcDIuYXBwZW5kQ2hpbGQoYilcblxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwMy50ZXh0Q29udGVudCA9IGBZb3UgY2FuIGFsc28gY29udGFjdCB1cyBieSBwaG9uZSAwMDU1MzEyMy0yMzIzIG9yIGVtYWlsIGJlYXJ5YnJlYWtmYXN0YmFyQGdtYWlsLmNvbSwgb3IgeW91IGNhbiBzZW5kIHVzIGFcbiAgICBtZXNzYWdlIGhlcmU6YFxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5hY3Rpb24gPSBcIiNcIlxuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXROYW1lLmNsYXNzTGlzdC5hZGQoXCJ3My1pbnB1dFwiLCBcInczLXBhZGRpbmctMTZcIilcbiAgICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiLCBpbnB1dE5hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWVcIiwgaW5wdXROYW1lLnJlcXVpcmVkLCBpbnB1dE5hbWUubmFtZSA9IFwiTmFtZVwiXG5cbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGlucHV0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXROdW1iZXIuY2xhc3NMaXN0LmFkZChcInczLWlucHV0XCIsIFwidzMtcGFkZGluZy0xNlwiKVxuICAgIGlucHV0TmFtZS50eXBlID0gXCJudW1iZXJcIiwgaW5wdXROdW1iZXIucGxhY2Vob2xkZXIgPSBcIkhvdyBNYW55IFBlb3BsZVwiLCBpbnB1dE5hbWUucmVxdWlyZWQsIGlucHV0TmFtZS5uYW1lID0gXCJQZW9wbGVcIlxuXG4gICAgY29uc3QgZGF0ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGlucHV0RGF0ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBpbnB1dERhdGVUaW1lLmNsYXNzTGlzdC5hZGQoXCJ3My1pbnB1dFwiLCBcInczLXBhZGRpbmctMTZcIilcbiAgICBpbnB1dERhdGVUaW1lLnR5cGUgPSBcImRhdGV0aW1lLWxvY2FsXCIsIGlucHV0RGF0ZVRpbWUucGxhY2Vob2xkZXIgPSBcIkRhdGUgYW5kIHRpbWVcIiwgaW5wdXREYXRlVGltZS5yZXF1aXJlZCwgaW5wdXREYXRlVGltZS5uYW1lID0gXCJkYXRlXCIsIGlucHV0RGF0ZVRpbWUudmFsdWUgPSBcIjIwMjAtMTEtMTZUMjA6MDBcIlxuXG4gICAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBpbnB1dE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGlucHV0TXNnLmNsYXNzTGlzdC5hZGQoXCJ3My1pbnB1dFwiLCBcInczLXBhZGRpbmctMTZcIilcbiAgICBpbnB1dE1zZy50eXBlID0gXCJ0ZXh0XCIsIGlucHV0TXNnLnBsYWNlaG9sZGVyID0gXCJNZXNzYWdlIFxcIFNwZWNpYWwgcmVxdWlyZW1lbnRzXCIsIGlucHV0RGF0ZVRpbWUucmVxdWlyZWQsIGlucHV0RGF0ZVRpbWUubmFtZSA9IFwibWVzc2FnZVwiXG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3My1idXR0b25cIiwgXCJ3My1saWdodC1ncmV5XCIsIFwidzMtc2VjdGlvblwiKVxuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIiwgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTRU5EIE1FU1NBR0VcIlxuXG5cbiAgICBjb250YWN0RGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGgxKVxuICAgIGNvbnRhY3REaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYnIpXG4gICAgY29udGFjdERpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwMSlcbiAgICBjb250YWN0RGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHAyKVxuICAgIGNvbnRhY3REaXZDb250YWluZXIuYXBwZW5kQ2hpbGQocDMpXG4gICAgY29udGFjdERpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKVxuICAgIG5hbWUuYXBwZW5kQ2hpbGQoaW5wdXROYW1lKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobnVtYmVyKVxuICAgIG51bWJlci5hcHBlbmRDaGlsZChpbnB1dE51bWJlcilcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVUaW1lKVxuICAgIGRhdGVUaW1lLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRpbWUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChtc2cpXG4gICAgbXNnLmFwcGVuZENoaWxkKGlucHV0TXNnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocClcbiAgICBwLmFwcGVuZENoaWxkKGJ1dHRvbilcblxuICAgIHJldHVybiBjb250YWN0RGl2Q29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCJmdW5jdGlvbiBmb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ3My1jZW50ZXJcIiwgXCJ3My1saWdodC1ncmV5XCIsIFwidzMtcGFkZGluZy0zMlwiKVxuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKClcbiAgICBwLnRleHRDb250ZW50ID0gYMKpICR7ZC5nZXRGdWxsWWVhcigpfSAtIEJlYXJ5J3MgQnJlYWtmYXN0IEJhcmBcblxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHApXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJcbiIsImZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ3My1kaXNwbGF5LWNvbnRhaW5lclwiLCBcInczLWNvbnRlbnRcIiwgXCJ3My13aWRlXCIpXG4gICAgaGVhZGVyLnN0eWxlID0gXCJtYXgtd2lkdGg6MTYwMHB4O21pbi13aWR0aDo1MDBweFwiXG4gICAgaGVhZGVyLmlkID0gXCJob21lXCJcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcInczLWltYWdlXCIpXG4gICAgaW1nLnNyYyA9IFwiL2ltYWdlcy9oYW1idXJnZXIuanBnXCIsIGltZy5hbHQgPSBcIkhhbWJ1cmdlciBDYXRlcmluZ1wiLCBpbWcud2lkdGggPSBcIjE2MDBcIiwgaW1nLmhlaWdodCA9IFwiODAwXCJcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInczLWRpc3BsYXktYm90dG9tbGVmdFwiLCBcInczLXBhZGRpbmctbGFyZ2VcIiwgXCJ3My1vcGFjaXR5XCIpXG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGgxLmNsYXNzTGlzdC5hZGQoXCJ3My14eGxhcmdlXCIpXG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkJlYXJ5J3MgQnJlYWtmYXN0IEJhclwiXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXYpXG4gICAgZGl2LmFwcGVuZENoaWxkKGgxKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyIiwiaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0XCJcbmltcG9ydCBtZW51U2VjdGlvbiBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIlxuXG5mdW5jdGlvbiBwYWdlQ29udGVudCgpIHtcbiAgICBjb25zdCBwYWdlQ29udGVudGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwYWdlQ29udGVudGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidzMtY29udGVudFwiKVxuICAgIHBhZ2VDb250ZW50ZGl2Q29udGFpbmVyLnN0eWxlID0gXCJtYXgtd2lkdGg6MTEwMHB4XCJcblxuICAgIHBhZ2VDb250ZW50ZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KCkpXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIilcbiAgICBwYWdlQ29udGVudGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChocilcblxuICAgIHBhZ2VDb250ZW50ZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKCkpXG4gICAgY29uc3QgaHIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpXG4gICAgcGFnZUNvbnRlbnRkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaHIyKVxuICAgIHBhZ2VDb250ZW50ZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QoKSlcblxuICAgIHJldHVybiBwYWdlQ29udGVudGRpdkNvbnRhaW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlQ29udGVudCIsImZ1bmN0aW9uIG1lbnVTZWN0aW9uKCkge1xuICAgIGNvbnN0IG1lbnVEaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudURpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidzMtcm93XCIsIFwidzMtcGFkZGluZy02NFwiKVxuICAgIG1lbnVEaXZDb250YWluZXIuaWQgPSBcIm1lbnVcIlxuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3My1jb2xcIiwgXCJsNlwiLCBcInczLXBhZGRpbmctbGFyZ2VcIilcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgaDEuY2xhc3NMaXN0LmFkZChcInczLWNlbnRlclwiKVxuICAgIGgxLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiXG5cbiAgICAvL0ZpcnN0IEl0ZW1cbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuICAgIGl0ZW0xLnRleHRDb250ZW50ID0gXCJUaGUgQmVhcnkgQmVzdCBQb3JyaWRnZVwiXG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHBhcmExLmNsYXNzTGlzdC5hZGQoXCJ3My10ZXh0LWdyZXlcIilcbiAgICBwYXJhMS50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBCYWJ5IEJlYXIgaGltc2VsZiwgdGhpcyBwb3JyaWRnZSBpcyBndWFyZW50ZWVkIHRvIGJlIGp1c3QgcmlnaHQsIG9yIHlvdXIgbW9uZXkgYmFjay4gJDVcIlxuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpXG5cbiAgICAvL1NlY29uZCBJdGVtXG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcbiAgICBpdGVtMi50ZXh0Q29udGVudCA9IFwiQmVhcnkgQm93bFwiXG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHBhcmEyLmNsYXNzTGlzdC5hZGQoXCJ3My10ZXh0LWdyZXlcIilcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9IFwiR2V0IGEgYmlnIG9sZSBib3dsIG9mIG91ciBiZXJyaWVzISBTaWRlIG9mIGhvbmV5IGlzICQxIGV4dHJhLiAkN1wiXG4gICAgY29uc3QgYnIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpXG5cbiAgICAvL1RoaXJkIEl0ZW1cbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuICAgIGl0ZW0zLnRleHRDb250ZW50ID0gXCJIb25leWNvbWJcIlxuICAgIGNvbnN0IHBhcmEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwYXJhMy5jbGFzc0xpc3QuYWRkKFwidzMtdGV4dC1ncmV5XCIpXG4gICAgcGFyYTMudGV4dENvbnRlbnQgPSBcIkFyZSB5b3UgYSBiZWFyIGxpa2UgdXM/IFRoZW4geW91IHdpbGwgbG92ZSBvdXIgaG9uZXljb21iLiBBbmQsIHllcyBodW1hbnMsIGl0IGlzIGp1c3QgYSBwaWVjZSBvZiBob25leWNvbWIsIG5vdCB0aGUgcG9wdWxhciBicmVha2Zhc3QgY2VyZWFsLiAkNlwiXG4gICAgY29uc3QgYnIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpXG5cbiAgICAvL0ZvdXJ0aCBJdGVtXG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcbiAgICBpdGVtNC50ZXh0Q29udGVudCA9IFwiU2NyYW1ibGVkIGVnZ3NcIlxuICAgIGNvbnN0IHBhcmE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwYXJhNC5jbGFzc0xpc3QuYWRkKFwidzMtdGV4dC1ncmV5XCIpXG4gICAgcGFyYTQudGV4dENvbnRlbnQgPSBcIlNjcmFtYmxlZCBlZ2dzLCByb2FzdGVkIHJlZCBwZXBwZXIgYW5kIGdhcmxpYywgd2l0aCBncmVlbiBvbmlvbnMgJDcuNTBcIlxuICAgIGNvbnN0IGJyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKVxuXG4gICAgLy9GaWZ0aCBJdGVtXG4gICAgY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcbiAgICBpdGVtNS50ZXh0Q29udGVudCA9IFwiQmx1ZWJlcnJ5IFBhbmNha2VzXCJcbiAgICBjb25zdCBwYXJhNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcGFyYTUuY2xhc3NMaXN0LmFkZChcInczLXRleHQtZ3JleVwiKVxuICAgIHBhcmE1LnRleHRDb250ZW50ID0gXCJXaXRoIHN5cnVwLCBidXR0ZXIgYW5kIGxvdHMgb2YgYmVycmllcyAkOC41MFwiXG4gICAgY29uc3QgYnI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpXG5cbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3My1jb2xcIiwgXCJsNlwiLCBcInczLXBhZGRpbmctbGFyZ2VcIilcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWcuc3JjID0gXCJpbWFnZXMvdGFibGVzZXR0aW5nLmpwZ1wiXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJ3My1yb3VuZFwiLCBcInczLWltYWdlXCIsIFwidzMtb3BhY2l0eS1taW5cIilcbiAgICBpbWcuYWx0ID0gXCJNZW51XCJcbiAgICBpbWcuc3R5bGUgPSBcIndpZHRoOjEwMCVcIlxuXG4gICAgbWVudURpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMSlcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmExKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnIpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0yKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTIpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChicjIpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0zKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTMpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChicjMpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW00KVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTQpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChicjQpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW01KVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTUpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChicjUpXG5cbiAgICBtZW51RGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcilcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgcmV0dXJuIG1lbnVEaXZDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVNlY3Rpb24iLCJmdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidzMtdG9wXCIpXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcInczLWJhclwiLCBcInczLXdoaXRlXCIsIFwidzMtcGFkZGluZ1wiLCBcInczLWNhcmRcIilcbiAgICBtZW51LnN0eWxlID0gXCJsZXR0ZXItc3BhY2luZzo0cHg7XCJcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkJlYXJ5J3MgQnJlYWtmYXN0IEJhclwiXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwidzMtYmFyLWl0ZW1cIiwgXCJ3My1idXR0b25cIilcbiAgICBob21lLmhyZWYgPSBcIiNob21lXCJcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidzMtcmlnaHRcIiwgXCJ3My1oaWRlLXNtYWxsXCIpXG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcInczLWJhci1pdGVtXCIsIFwidzMtYnV0dG9uXCIpXG4gICAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCJcbiAgICBhYm91dC5ocmVmID0gXCIjYWJvdXRcIlxuXG4gICAgY29uc3QgbWVudWl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIG1lbnVpdGVtLmNsYXNzTGlzdC5hZGQoXCJ3My1iYXItaXRlbVwiLCBcInczLWJ1dHRvblwiKVxuICAgIG1lbnVpdGVtLnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICBtZW51aXRlbS5ocmVmID0gXCIjbWVudVwiXG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJ3My1iYXItaXRlbVwiLCBcInczLWJ1dHRvblwiKVxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxuICAgIGNvbnRhY3QuaHJlZiA9IFwiI2NvbnRhY3RcIlxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgbWVudS5hcHBlbmRDaGlsZChob21lKVxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXQpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51aXRlbSlcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QpXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhciIsImltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCJcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCJcbmltcG9ydCBwYWdlQ29udGVudCBmcm9tIFwiLi9ob21lXCJcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCJcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=