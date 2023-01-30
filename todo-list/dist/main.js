/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
const project_list = []
function createProject() {

    function loadProjects(project) {
        const project_list1 = document.getElementById("list_project")
        const item = document.createElement("a")
        item.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center')
        const img = document.createElement("img")
        img.classList.add("delete")
        img.src = "./img/delete.svg"
        const btn = document.createElement("button")
        btn.classList.add('btn', 'btn-sm', 'delete-project')
        btn.appendChild(img)
        item.id = 'item'
        const content = JSON.parse(localStorage.getItem('project_name'))
        console.log(content)
        for (var value of content) {
            item.textContent = value
        }

        //item.textContent = project.name //Through Array, it must be fetch from the localstorage
        item.appendChild(btn)
        project_list1.appendChild(item)
    }

    function addProject(name) {
        const project = {
            id: Date.now(),
            name,
            tasks: [],
        }
        project_list.push(project)
        loadProjects(project)
        localStorage.setItem('project_name', JSON.stringify(project_list))
    }
    const project_form = document.getElementById("project-form")
    project_form.addEventListener('submit', event => {
        event.preventDefault()
        const project_name = document.getElementById('project_name')
        const text = project_name.value.trim()
        if (text != '') {
            addProject(text)
            project_name.value = ''
            project_name.focus()
        }
    })

}




/***/ }),

/***/ "./src/Tasks.js":
/*!**********************!*\
  !*** ./src/Tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTask() {
    const project_list1 = document.getElementById('list_project')
    const item = document.getElementsByTagName('a')
    const h1 = document.getElementById("project_title")
    project_list1.addEventListener('click', event => {
        h1.textContent = item.text
        console.log(item)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

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
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks */ "./src/Tasks.js");

/**
// add project 
// list project
// delete project


add task[task name, date, priority, ] to the respective project
list task
delete task
edit task

 */




(0,_Project__WEBPACK_IMPORTED_MODULE_0__.createProject)()
;(0,_Tasks__WEBPACK_IMPORTED_MODULE_1__["default"])()
// loadProjects()


// Project
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlOzs7Ozs7VUNWZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXVEO0FBQ3ZCOztBQUVoQyx1REFBYTtBQUNiLG1EQUFVO0FBQ1Y7OztBQUdBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RfbGlzdCA9IFtdXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuXG4gICAgZnVuY3Rpb24gbG9hZFByb2plY3RzKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdF9saXN0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdF9wcm9qZWN0XCIpXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScsICdsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uJywgJ2QtZmxleCcsICdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicsICdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpXG4gICAgICAgIGltZy5zcmMgPSBcIi4vaW1nL2RlbGV0ZS5zdmdcIlxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXNtJywgJ2RlbGV0ZS1wcm9qZWN0JylcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgaXRlbS5pZCA9ICdpdGVtJ1xuICAgICAgICBjb25zdCBjb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdF9uYW1lJykpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgICAgIGZvciAodmFyIHZhbHVlIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSB2YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lIC8vVGhyb3VnaCBBcnJheSwgaXQgbXVzdCBiZSBmZXRjaCBmcm9tIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgIHByb2plY3RfbGlzdDEuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0X2xpc3QucHVzaChwcm9qZWN0KVxuICAgICAgICBsb2FkUHJvamVjdHMocHJvamVjdClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RfbmFtZScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RfbGlzdCkpXG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RfZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpXG4gICAgcHJvamVjdF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJylcbiAgICAgICAgY29uc3QgdGV4dCA9IHByb2plY3RfbmFtZS52YWx1ZS50cmltKClcbiAgICAgICAgaWYgKHRleHQgIT0gJycpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3QodGV4dClcbiAgICAgICAgICAgIHByb2plY3RfbmFtZS52YWx1ZSA9ICcnXG4gICAgICAgICAgICBwcm9qZWN0X25hbWUuZm9jdXMoKVxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfSIsImZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgY29uc3QgcHJvamVjdF9saXN0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0X3Byb2plY3QnKVxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfdGl0bGVcIilcbiAgICBwcm9qZWN0X2xpc3QxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dFxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2siLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLyoqXG4vLyBhZGQgcHJvamVjdCBcbi8vIGxpc3QgcHJvamVjdFxuLy8gZGVsZXRlIHByb2plY3RcblxuXG5hZGQgdGFza1t0YXNrIG5hbWUsIGRhdGUsIHByaW9yaXR5LCBdIHRvIHRoZSByZXNwZWN0aXZlIHByb2plY3Rcbmxpc3QgdGFza1xuZGVsZXRlIHRhc2tcbmVkaXQgdGFza1xuXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgbG9hZFByb2plY3RzIH0gZnJvbSBcIi4vUHJvamVjdFwiXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9UYXNrc1wiXG5cbmNyZWF0ZVByb2plY3QoKVxuY3JlYXRlVGFzaygpXG4vLyBsb2FkUHJvamVjdHMoKVxuXG5cbi8vIFByb2plY3QiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=