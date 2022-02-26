webpackHotUpdate("gc2-frontity",{

/***/ "./packages/grafikcentralen/src/components/page.js":
/*!*********************************************************!*\
  !*** ./packages/grafikcentralen/src/components/page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _acf_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acf/hero */ \"./packages/grafikcentralen/src/components/acf/hero.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-on-screen */ \"./node_modules/react-on-screen/lib/index.js\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Block=({isVisable,text,image})=>{const style={background:isVisible?'red':'blue',height:\"500px\"};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_acf_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{text:text,image:image,isVisable:isVisable});};const Page=({state})=>{const data=state.source.get(state.router.link);const blocks=state.source.page[data.id].acf.innehall;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"],{children:blocks.map((x,i)=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{children:x.acf_fc_layout===\"hero\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_on_screen__WEBPACK_IMPORTED_MODULE_3___default.a,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Block,{text:x.text,animation:true,image:x.image})}):\"\"},i))});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ncmFmaWtjZW50cmFsZW4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcz9iMWI1Il0sIm5hbWVzIjpbIkJsb2NrIiwiaXNWaXNhYmxlIiwidGV4dCIsImltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaXNWaXNpYmxlIiwiaGVpZ2h0IiwiUGFnZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJibG9ja3MiLCJwYWdlIiwiaWQiLCJhY2YiLCJpbm5laGFsbCIsIm1hcCIsIngiLCJpIiwiYWNmX2ZjX2xheW91dCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsS0FBTUEsTUFBSyxDQUFHLENBQUMsQ0FBRUMsU0FBRixDQUFhQyxJQUFiLENBQW1CQyxLQUFuQixDQUFELEdBQWdDLENBQzVDLEtBQU1DLE1BQUssQ0FBRyxDQUNWQyxVQUFVLENBQUVDLFNBQVMsQ0FBRyxLQUFILENBQVcsTUFEdEIsQ0FFVkMsTUFBTSxDQUFFLE9BRkUsQ0FBZCxDQUlBLE1BQ0Usd0VBQUMsaURBQUQsRUFBTSxJQUFJLENBQUVMLElBQVosQ0FBa0IsS0FBSyxDQUFFQyxLQUF6QixDQUFnQyxTQUFTLENBQUVGLFNBQTNDLEVBREYsQ0FHRCxDQVJELENBVUEsS0FBTU8sS0FBSSxDQUFFLENBQUMsQ0FBQ0MsS0FBRCxDQUFELEdBQVksQ0FDdEIsS0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxLQUFNQyxPQUFNLENBQUdOLEtBQUssQ0FBQ0UsTUFBTixDQUFhSyxJQUFiLENBQWtCTixJQUFJLENBQUNPLEVBQXZCLEVBQTJCQyxHQUEzQixDQUErQkMsUUFBOUMsQ0FFRSxNQUNKLHNKQUlNSixNQUFNLENBQUNLLEdBQVAsQ0FBVyxDQUFDQyxDQUFELENBQUdDLENBQUgsR0FDYix1RkFFS0QsQ0FBQyxDQUFDRSxhQUFGLEdBQW9CLE1BQXBCLENBQ0QsdUVBQUMsc0RBQUQsV0FDRSx1RUFBQyxLQUFELEVBQU8sSUFBSSxDQUFFRixDQUFDLENBQUNuQixJQUFmLENBQXFCLFNBQVMsQ0FBRSxJQUFoQyxDQUFzQyxLQUFLLENBQUVtQixDQUFDLENBQUNsQixLQUEvQyxFQURGLEVBREMsQ0FJTCxFQU5BLEVBQVVtQixDQUFWLENBREUsQ0FKTixFQURJLENBb0JILENBeEJELENBeUJtQkUsdUhBQU8sQ0FBQ2hCLElBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9ncmFmaWtjZW50cmFsZW4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIlxyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi9hY2YvaGVyb1wiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIlxyXG5pbXBvcnQgVHJhY2tWaXNpYmlsaXR5IGZyb20gJ3JlYWN0LW9uLXNjcmVlbic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBCbG9jayA9ICh7IGlzVmlzYWJsZSwgdGV4dCwgaW1hZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpc1Zpc2libGUgPyAncmVkJyA6ICdibHVlJyxcclxuICAgICAgaGVpZ2h0OiBcIjUwMHB4XCJcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVybyB0ZXh0PXt0ZXh0fSBpbWFnZT17aW1hZ2V9IGlzVmlzYWJsZT17aXNWaXNhYmxlfS8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUGFnZSA9KHtzdGF0ZX0pPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuICBjb25zdCBibG9ja3MgPSBzdGF0ZS5zb3VyY2UucGFnZVtkYXRhLmlkXS5hY2YuaW5uZWhhbGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG48PlxyXG4gICAgIFxyXG4gICAgXHJcblxyXG4gICAgIHtibG9ja3MubWFwKCh4LGkpPT4gXHJcbiAgICA8ZGl2IGtleT17aX0+XHJcbiAgICBcclxuICAgICAgICB7eC5hY2ZfZmNfbGF5b3V0ID09PSBcImhlcm9cIj8gIFxyXG4gICAgICAgIDxUcmFja1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICA8QmxvY2sgdGV4dD17eC50ZXh0fSBhbmltYXRpb249e3RydWV9IGltYWdlPXt4LmltYWdlfS8+XHJcbiAgICAgICAgPC9UcmFja1Zpc2liaWxpdHk+XHJcbiAgOiBcIlwifVxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApfVxyXG4gICBcclxuPC8+XHJcbiAgICApXHJcbn1cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUGFnZSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/grafikcentralen/src/components/page.js\n");

/***/ })

})