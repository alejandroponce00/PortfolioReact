"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Pauser = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass Pauser extends tsparticles_engine_1.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this.handleClickMode = (mode) => {\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            }\n            else {\n                container.play();\n            }\n        };\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact() {\n    }\n    isEnabled() {\n        return true;\n    }\n    reset() {\n    }\n}\nexports.Pauser = Pauser;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXBhdXNlL2Nqcy9QYXVzZXIuanM/ZGJmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGF1c2VyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY2xhc3MgUGF1c2VyIGV4dGVuZHMgdHNwYXJ0aWNsZXNfZW5naW5lXzEuRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tNb2RlID0gKG1vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RlICE9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuZ2V0QW5pbWF0aW9uU3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgIH1cbiAgICBhc3luYyBpbnRlcmFjdCgpIHtcbiAgICB9XG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgfVxufVxuZXhwb3J0cy5QYXVzZXIgPSBQYXVzZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/cjs/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadExternalPauseInteraction = void 0;\nconst Pauser_1 = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js\");\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container) => new Pauser_1.Pauser(container), refresh);\n}\nexports.loadExternalPauseInteraction = loadExternalPauseInteraction;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9DQUFvQztBQUNwQyxpQkFBaUIsbUJBQU8sQ0FBQywyRkFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Rmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1wYXVzZS9janMvaW5kZXguanM/MTk0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEV4dGVybmFsUGF1c2VJbnRlcmFjdGlvbiA9IHZvaWQgMDtcbmNvbnN0IFBhdXNlcl8xID0gcmVxdWlyZShcIi4vUGF1c2VyXCIpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZEV4dGVybmFsUGF1c2VJbnRlcmFjdGlvbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZEludGVyYWN0b3IoXCJleHRlcm5hbFBhdXNlXCIsIChjb250YWluZXIpID0+IG5ldyBQYXVzZXJfMS5QYXVzZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRFeHRlcm5hbFBhdXNlSW50ZXJhY3Rpb24gPSBsb2FkRXh0ZXJuYWxQYXVzZUludGVyYWN0aW9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/index.js\n");

/***/ })

};
;