"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-star";
exports.ids = ["vendor-chunks/tsparticles-shape-star"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/cjs/StarDrawer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StarDrawer = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass StarDrawer {\n    draw(context, particle, radius) {\n        const sides = particle.sides, inset = particle.starInset ?? 2;\n        context.moveTo(0, 0 - radius);\n        for (let i = 0; i < sides; i++) {\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius * inset);\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius);\n        }\n    }\n    getSidesCount(particle) {\n        const star = particle.shapeData;\n        return Math.round((0, tsparticles_engine_1.getRangeValue)(star?.sides ?? star?.nb_sides ?? 5));\n    }\n    particleInit(container, particle) {\n        const star = particle.shapeData, inset = (0, tsparticles_engine_1.getRangeValue)(star?.inset ?? 2);\n        particle.starInset = inset;\n    }\n}\nexports.StarDrawer = StarDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvU3RhckRyYXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90Zm9saW8vLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvU3RhckRyYXdlci5qcz81ZjI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGFyRHJhd2VyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY2xhc3MgU3RhckRyYXdlciB7XG4gICAgZHJhdyhjb250ZXh0LCBwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IHNpZGVzID0gcGFydGljbGUuc2lkZXMsIGluc2V0ID0gcGFydGljbGUuc3Rhckluc2V0ID8/IDI7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKDAsIDAgLSByYWRpdXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGVzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQucm90YXRlKE1hdGguUEkgLyBzaWRlcyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygwLCAwIC0gcmFkaXVzICogaW5zZXQpO1xuICAgICAgICAgICAgY29udGV4dC5yb3RhdGUoTWF0aC5QSSAvIHNpZGVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDAsIDAgLSByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFNpZGVzQ291bnQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgc3RhciA9IHBhcnRpY2xlLnNoYXBlRGF0YTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmdlVmFsdWUpKHN0YXI/LnNpZGVzID8/IHN0YXI/Lm5iX3NpZGVzID8/IDUpKTtcbiAgICB9XG4gICAgcGFydGljbGVJbml0KGNvbnRhaW5lciwgcGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgc3RhciA9IHBhcnRpY2xlLnNoYXBlRGF0YSwgaW5zZXQgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkoc3Rhcj8uaW5zZXQgPz8gMik7XG4gICAgICAgIHBhcnRpY2xlLnN0YXJJbnNldCA9IGluc2V0O1xuICAgIH1cbn1cbmV4cG9ydHMuU3RhckRyYXdlciA9IFN0YXJEcmF3ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-star/cjs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/cjs/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadStarShape = void 0;\nconst StarDrawer_1 = __webpack_require__(/*! ./StarDrawer */ \"(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js\");\nasync function loadStarShape(engine, refresh = true) {\n    await engine.addShape(\"star\", new StarDrawer_1.StarDrawer(), refresh);\n}\nexports.loadStarShape = loadStarShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCLHFCQUFxQixtQkFBTyxDQUFDLG1GQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXN0YXIvY2pzL2luZGV4LmpzPzJlYzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRTdGFyU2hhcGUgPSB2b2lkIDA7XG5jb25zdCBTdGFyRHJhd2VyXzEgPSByZXF1aXJlKFwiLi9TdGFyRHJhd2VyXCIpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZFN0YXJTaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFNoYXBlKFwic3RhclwiLCBuZXcgU3RhckRyYXdlcl8xLlN0YXJEcmF3ZXIoKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRTdGFyU2hhcGUgPSBsb2FkU3RhclNoYXBlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/cjs/index.js\n");

/***/ })

};
;