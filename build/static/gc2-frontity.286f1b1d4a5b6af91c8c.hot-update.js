webpackHotUpdate("gc2-frontity",{

/***/ "./packages/grafikcentralen/src/components/page.js":
/*!*********************************************************!*\
  !*** ./packages/grafikcentralen/src/components/page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _acf_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acf/hero */ \"./packages/grafikcentralen/src/components/acf/hero.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-on-screen */ \"./node_modules/react-on-screen/lib/index.js\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Block=({isVisible,text,image})=>{const style={background:isVisible?'red':'blue',height:\"500px\"};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_acf_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{text:text,image:image,isVisible:isVisible});};const Page=({state})=>{const data=state.source.get(state.router.link);const blocks=state.source.page[data.id].acf.innehall;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"],{children:blocks.map((x,i)=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{children:x.acf_fc_layout===\"hero\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_on_screen__WEBPACK_IMPORTED_MODULE_3___default.a,{offset:400,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Block,{text:x.text,animation:true,image:x.image})}):\"\"},i))});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ncmFmaWtjZW50cmFsZW4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcz9iMWI1Il0sIm5hbWVzIjpbIkJsb2NrIiwiaXNWaXNpYmxlIiwidGV4dCIsImltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiUGFnZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJibG9ja3MiLCJwYWdlIiwiaWQiLCJhY2YiLCJpbm5laGFsbCIsIm1hcCIsIngiLCJpIiwiYWNmX2ZjX2xheW91dCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsS0FBTUEsTUFBSyxDQUFHLENBQUMsQ0FBRUMsU0FBRixDQUFjQyxJQUFkLENBQW9CQyxLQUFwQixDQUFELEdBQWlDLENBQzdDLEtBQU1DLE1BQUssQ0FBRyxDQUNWQyxVQUFVLENBQUVKLFNBQVMsQ0FBSSxLQUFKLENBQVksTUFEdkIsQ0FFVkssTUFBTSxDQUFFLE9BRkUsQ0FBZCxDQUlBLE1BQ0Usd0VBQUMsaURBQUQsRUFBTSxJQUFJLENBQUVKLElBQVosQ0FBa0IsS0FBSyxDQUFFQyxLQUF6QixDQUFnQyxTQUFTLENBQUdGLFNBQTVDLEVBREYsQ0FHRCxDQVJELENBVUEsS0FBTU0sS0FBSSxDQUFFLENBQUMsQ0FBQ0MsS0FBRCxDQUFELEdBQVksQ0FDdEIsS0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxLQUFNQyxPQUFNLENBQUdOLEtBQUssQ0FBQ0UsTUFBTixDQUFhSyxJQUFiLENBQWtCTixJQUFJLENBQUNPLEVBQXZCLEVBQTJCQyxHQUEzQixDQUErQkMsUUFBOUMsQ0FFRSxNQUNKLHNKQUlNSixNQUFNLENBQUNLLEdBQVAsQ0FBVyxDQUFDQyxDQUFELENBQUdDLENBQUgsR0FDYix1RkFFS0QsQ0FBQyxDQUFDRSxhQUFGLEdBQW9CLE1BQXBCLENBQ0QsdUVBQUMsc0RBQUQsRUFBaUIsTUFBTSxDQUFFLEdBQXpCLFVBQ0UsdUVBQUMsS0FBRCxFQUFPLElBQUksQ0FBRUYsQ0FBQyxDQUFDbEIsSUFBZixDQUFxQixTQUFTLENBQUUsSUFBaEMsQ0FBc0MsS0FBSyxDQUFFa0IsQ0FBQyxDQUFDakIsS0FBL0MsRUFERixFQURDLENBSUwsRUFOQSxFQUFVa0IsQ0FBVixDQURFLENBSk4sRUFESSxDQW9CSCxDQXhCRCxDQXlCbUJFLHVIQUFPLENBQUNoQixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ3JhZmlrY2VudHJhbGVuL3NyYy9jb21wb25lbnRzL3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCJcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vYWNmL2hlcm9cIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCJcclxuaW1wb3J0IFRyYWNrVmlzaWJpbGl0eSBmcm9tICdyZWFjdC1vbi1zY3JlZW4nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgQmxvY2sgPSAoeyBpc1Zpc2libGUgLCB0ZXh0LCBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGlzVmlzaWJsZSAgPyAncmVkJyA6ICdibHVlJyxcclxuICAgICAgaGVpZ2h0OiBcIjUwMHB4XCJcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVybyB0ZXh0PXt0ZXh0fSBpbWFnZT17aW1hZ2V9IGlzVmlzaWJsZSA9e2lzVmlzaWJsZSB9Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBQYWdlID0oe3N0YXRlfSk9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xyXG4gIGNvbnN0IGJsb2NrcyA9IHN0YXRlLnNvdXJjZS5wYWdlW2RhdGEuaWRdLmFjZi5pbm5laGFsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbjw+XHJcbiAgICAgXHJcbiAgICBcclxuXHJcbiAgICAge2Jsb2Nrcy5tYXAoKHgsaSk9PiBcclxuICAgIDxkaXYga2V5PXtpfT5cclxuICAgIFxyXG4gICAgICAgIHt4LmFjZl9mY19sYXlvdXQgPT09IFwiaGVyb1wiPyAgXHJcbiAgICAgICAgPFRyYWNrVmlzaWJpbGl0eSBvZmZzZXQ9ezQwMH0+XHJcbiAgICAgICAgICA8QmxvY2sgdGV4dD17eC50ZXh0fSBhbmltYXRpb249e3RydWV9IGltYWdlPXt4LmltYWdlfS8+XHJcbiAgICAgICAgPC9UcmFja1Zpc2liaWxpdHk+XHJcbiAgOiBcIlwifVxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApfVxyXG4gICBcclxuPC8+XHJcbiAgICApXHJcbn1cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUGFnZSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/grafikcentralen/src/components/page.js\n");

/***/ })

})