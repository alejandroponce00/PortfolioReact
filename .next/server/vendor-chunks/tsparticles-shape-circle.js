"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-circle";
exports.ids = ["vendor-chunks/tsparticles-shape-circle"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CircleDrawer = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass CircleDrawer {\n    draw(context, particle, radius) {\n        if (!particle.circleRange) {\n            particle.circleRange = { min: 0, max: Math.PI * 2 };\n        }\n        const circleRange = particle.circleRange;\n        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);\n    }\n    getSidesCount() {\n        return 12;\n    }\n    particleInit(container, particle) {\n        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {\n            max: 360,\n            min: 0,\n        };\n        particle.circleRange = !(0, tsparticles_engine_1.isObject)(angle)\n            ? {\n                min: 0,\n                max: (angle * Math.PI) / 180,\n            }\n            : { min: (angle.min * Math.PI) / 180, max: (angle.max * Math.PI) / 180 };\n    }\n}\nexports.CircleDrawer = CircleDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9DaXJjbGVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90Zm9saW8vLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9DaXJjbGVEcmF3ZXIuanM/YjMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2lyY2xlRHJhd2VyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY2xhc3MgQ2lyY2xlRHJhd2VyIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgaWYgKCFwYXJ0aWNsZS5jaXJjbGVSYW5nZSkge1xuICAgICAgICAgICAgcGFydGljbGUuY2lyY2xlUmFuZ2UgPSB7IG1pbjogMCwgbWF4OiBNYXRoLlBJICogMiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNpcmNsZVJhbmdlID0gcGFydGljbGUuY2lyY2xlUmFuZ2U7XG4gICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHJhZGl1cywgY2lyY2xlUmFuZ2UubWluLCBjaXJjbGVSYW5nZS5tYXgsIGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIDEyO1xuICAgIH1cbiAgICBwYXJ0aWNsZUluaXQoY29udGFpbmVyLCBwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBzaGFwZURhdGEgPSBwYXJ0aWNsZS5zaGFwZURhdGEsIGFuZ2xlID0gc2hhcGVEYXRhPy5hbmdsZSA/PyB7XG4gICAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgfTtcbiAgICAgICAgcGFydGljbGUuY2lyY2xlUmFuZ2UgPSAhKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmlzT2JqZWN0KShhbmdsZSlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IChhbmdsZSAqIE1hdGguUEkpIC8gMTgwLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7IG1pbjogKGFuZ2xlLm1pbiAqIE1hdGguUEkpIC8gMTgwLCBtYXg6IChhbmdsZS5tYXggKiBNYXRoLlBJKSAvIDE4MCB9O1xuICAgIH1cbn1cbmV4cG9ydHMuQ2lyY2xlRHJhd2VyID0gQ2lyY2xlRHJhd2VyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadCircleShape = void 0;\nconst CircleDrawer_1 = __webpack_require__(/*! ./CircleDrawer */ \"(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js\");\nasync function loadCircleShape(engine, refresh = true) {\n    await engine.addShape(\"circle\", new CircleDrawer_1.CircleDrawer(), refresh);\n}\nexports.loadCircleShape = loadCircleShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsdUJBQXVCLG1CQUFPLENBQUMseUZBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLWNpcmNsZS9janMvaW5kZXguanM/OWNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZENpcmNsZVNoYXBlID0gdm9pZCAwO1xuY29uc3QgQ2lyY2xlRHJhd2VyXzEgPSByZXF1aXJlKFwiLi9DaXJjbGVEcmF3ZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkQ2lyY2xlU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShcImNpcmNsZVwiLCBuZXcgQ2lyY2xlRHJhd2VyXzEuQ2lyY2xlRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkQ2lyY2xlU2hhcGUgPSBsb2FkQ2lyY2xlU2hhcGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/cjs/index.js\n");

/***/ })

};
;