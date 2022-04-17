webpackHotUpdate("gc2-frontity",{

/***/ "./packages/grafikcentralen/src/components/page.js":
/*!*********************************************************!*\
  !*** ./packages/grafikcentralen/src/components/page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _acf_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acf/hero */ \"./packages/grafikcentralen/src/components/acf/hero.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-on-screen */ \"./node_modules/react-on-screen/lib/index.js\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _acf_link_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acf/link_blocks */ \"./packages/grafikcentralen/src/components/acf/link_blocks.js\");\n/* harmony import */ var _acf_front_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acf/front_form */ \"./packages/grafikcentralen/src/components/acf/front_form.js\");\n/* harmony import */ var _acf_om_oss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acf/om_oss */ \"./packages/grafikcentralen/src/components/acf/om_oss.js\");\n/* harmony import */ var _acf_clients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./acf/clients */ \"./packages/grafikcentralen/src/components/acf/clients.js\");\n/* harmony import */ var _acf_blog_front__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./acf/blog_front */ \"./packages/grafikcentralen/src/components/acf/blog_front.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Block=({isVisible,text,image})=>{const style={background:isVisible?'red':'blue',height:\"500px\"};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_acf_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{text:text,image:image,isVisible:isVisible});};const Page=({state})=>{const data=state.source.get(state.router.link);const blocks=state.source.page[data.id].acf.innehall;let block;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"Fragment\"],{children:blocks.map((x,i)=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(\"div\",{children:[\"let block = x.\",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:[block=x.acf_fc_layout,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(react_on_screen__WEBPACK_IMPORTED_MODULE_3___default.a,{when:block===\"hero\",offset:350,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Block,{text:x.text,animation:true,image:x.image})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_acf_link_blocks__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{when:block===\"link_blocks\",title:x.title,text:x.text,blocks:x.blocks,arrow:x.arrow}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_acf_front_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:block===\"front_form\",text:x.text}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_acf_om_oss__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{when:block===\"om_oss\",rubrik:x.rubrik,divider:x.divider,logo:x.logo,introtext:x.introtext,profilbild:x.profilbild,argument:x.argument}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_acf_clients__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:block===\"clients\",introtext:x.introtext,clients:x.clients}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(PageIntro,{when:block===\"page_intro\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(InfoBox,{when:block===\"infobox\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Styled_list,{when:block===\"styled_list\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(StaticBanner,{when:block===\"static_banner\",api:state.source.data,data:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_acf_front_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:block===\"kontaktformular\",text:x.text})]})]},i))});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ncmFmaWtjZW50cmFsZW4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcz9iMWI1Il0sIm5hbWVzIjpbIkJsb2NrIiwiaXNWaXNpYmxlIiwidGV4dCIsImltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiUGFnZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJibG9ja3MiLCJwYWdlIiwiaWQiLCJhY2YiLCJpbm5laGFsbCIsImJsb2NrIiwibWFwIiwieCIsImkiLCJhY2ZfZmNfbGF5b3V0IiwidGl0bGUiLCJhcnJvdyIsInJ1YnJpayIsImRpdmlkZXIiLCJsb2dvIiwiaW50cm90ZXh0IiwicHJvZmlsYmlsZCIsImFyZ3VtZW50IiwiY2xpZW50cyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBLEtBQU1BLE1BQUssQ0FBRyxDQUFDLENBQUVDLFNBQUYsQ0FBY0MsSUFBZCxDQUFvQkMsS0FBcEIsQ0FBRCxHQUFpQyxDQUM3QyxLQUFNQyxNQUFLLENBQUcsQ0FDVkMsVUFBVSxDQUFFSixTQUFTLENBQUksS0FBSixDQUFZLE1BRHZCLENBRVZLLE1BQU0sQ0FBRSxPQUZFLENBQWQsQ0FJQSxNQUNFLHlFQUFDLGlEQUFELEVBQU0sSUFBSSxDQUFFSixJQUFaLENBQWtCLEtBQUssQ0FBRUMsS0FBekIsQ0FBZ0MsU0FBUyxDQUFHRixTQUE1QyxFQURGLENBR0QsQ0FSRCxDQVVBLEtBQU1NLEtBQUksQ0FBRSxDQUFDLENBQUNDLEtBQUQsQ0FBRCxHQUFZLENBQ3RCLEtBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsT0FBTSxDQUFHTixLQUFLLENBQUNFLE1BQU4sQ0FBYUssSUFBYixDQUFrQk4sSUFBSSxDQUFDTyxFQUF2QixFQUEyQkMsR0FBM0IsQ0FBK0JDLFFBQTlDLENBRUEsR0FBSUMsTUFBSixDQUNBLE1BQ0Usd0pBQ0VMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLENBQUNDLENBQUQsQ0FBR0MsQ0FBSCxHQUNiLDJHQUdFLHlFQUFDLG1FQUFELFlBQ0NILEtBQUssQ0FBR0UsQ0FBQyxDQUFDRSxhQURYLENBSUUsd0VBQUMsc0RBQUQsRUFBaUIsSUFBSSxDQUFFSixLQUFLLEdBQUssTUFBakMsQ0FBeUMsTUFBTSxDQUFFLEdBQWpELFVBQ0Usd0VBQUMsS0FBRCxFQUFPLElBQUksQ0FBRUUsQ0FBQyxDQUFDbkIsSUFBZixDQUFxQixTQUFTLENBQUUsSUFBaEMsQ0FBc0MsS0FBSyxDQUFFbUIsQ0FBQyxDQUFDbEIsS0FBL0MsRUFERixFQUpGLENBUUUsd0VBQUMsd0RBQUQsRUFBWSxJQUFJLENBQUVnQixLQUFLLEdBQUssYUFBNUIsQ0FBMkMsS0FBSyxDQUFFRSxDQUFDLENBQUNHLEtBQXBELENBQTJELElBQUksQ0FBRUgsQ0FBQyxDQUFDbkIsSUFBbkUsQ0FBeUUsTUFBTSxDQUFFbUIsQ0FBQyxDQUFDUCxNQUFuRixDQUEyRixLQUFLLENBQUVPLENBQUMsQ0FBQ0ksS0FBcEcsRUFSRixDQVVFLHdFQUFDLHVEQUFELEVBQVksSUFBSSxDQUFFTixLQUFLLEdBQUssWUFBNUIsQ0FBeUMsSUFBSSxDQUFFRSxDQUFDLENBQUNuQixJQUFqRCxFQVZGLENBWUUsd0VBQUMsbURBQUQsRUFBUSxJQUFJLENBQUVpQixLQUFLLEdBQUssUUFBeEIsQ0FBa0MsTUFBTSxDQUFFRSxDQUFDLENBQUNLLE1BQTVDLENBQW9ELE9BQU8sQ0FBRUwsQ0FBQyxDQUFDTSxPQUEvRCxDQUF3RSxJQUFJLENBQUVOLENBQUMsQ0FBQ08sSUFBaEYsQ0FBc0YsU0FBUyxDQUFFUCxDQUFDLENBQUNRLFNBQW5HLENBQThHLFVBQVUsQ0FBRVIsQ0FBQyxDQUFDUyxVQUE1SCxDQUF3SSxRQUFRLENBQUVULENBQUMsQ0FBQ1UsUUFBcEosRUFaRixDQWNFLHdFQUFDLG9EQUFELEVBQVMsSUFBSSxDQUFFWixLQUFLLEdBQUssU0FBekIsQ0FBb0MsU0FBUyxDQUFFRSxDQUFDLENBQUNRLFNBQWpELENBQTRELE9BQU8sQ0FBRVIsQ0FBQyxDQUFDVyxPQUF2RSxFQWRGLENBZ0JFLHdFQUFDLFNBQUQsRUFBVyxJQUFJLENBQUViLEtBQUssR0FBSyxZQUEzQixDQUF5QyxHQUFHLENBQUVFLENBQTlDLEVBaEJGLENBa0JFLHdFQUFDLE9BQUQsRUFBUyxJQUFJLENBQUVGLEtBQUssR0FBSyxTQUF6QixDQUFvQyxHQUFHLENBQUVFLENBQXpDLEVBbEJGLENBb0JFLHdFQUFDLFdBQUQsRUFBYSxJQUFJLENBQUVGLEtBQUssR0FBSyxhQUE3QixDQUE0QyxHQUFHLENBQUVFLENBQWpELEVBcEJGLENBc0JFLHdFQUFDLFlBQUQsRUFBYyxJQUFJLENBQUVGLEtBQUssR0FBSyxlQUE5QixDQUErQyxHQUFHLENBQUVYLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUFqRSxDQUF1RSxJQUFJLENBQUVZLENBQTdFLEVBdEJGLENBd0JFLHdFQUFDLHVEQUFELEVBQVksSUFBSSxDQUFFRixLQUFLLEdBQUssaUJBQTVCLENBQStDLElBQUksQ0FBRUUsQ0FBQyxDQUFDbkIsSUFBdkQsRUF4QkYsR0FIRixHQUFVb0IsQ0FBVixDQURFLENBREYsRUFERixDQXlDRCxDQTlDRCxDQStDbUJXLHVIQUFPLENBQUMxQixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ3JhZmlrY2VudHJhbGVuL3NyYy9jb21wb25lbnRzL3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCJcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vYWNmL2hlcm9cIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCJcclxuaW1wb3J0IFRyYWNrVmlzaWJpbGl0eSBmcm9tICdyZWFjdC1vbi1zY3JlZW4nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rQmxvY2tzIGZyb20gXCIuL2FjZi9saW5rX2Jsb2Nrc1wiO1xyXG5pbXBvcnQgRnJvbnRfZm9ybSBmcm9tIFwiLi9hY2YvZnJvbnRfZm9ybVwiO1xyXG5pbXBvcnQgT21fb3NzIGZyb20gXCIuL2FjZi9vbV9vc3NcIjtcclxuaW1wb3J0IENsaWVudHMgZnJvbSBcIi4vYWNmL2NsaWVudHNcIjtcclxuaW1wb3J0IEJsb2dGcm9udCBmcm9tIFwiLi9hY2YvYmxvZ19mcm9udFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBCbG9jayA9ICh7IGlzVmlzaWJsZSAsIHRleHQsIGltYWdlIH0pID0+IHtcclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZDogaXNWaXNpYmxlICA/ICdyZWQnIDogJ2JsdWUnLFxyXG4gICAgICBoZWlnaHQ6IFwiNTAwcHhcIlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvIHRleHQ9e3RleHR9IGltYWdlPXtpbWFnZX0gaXNWaXNpYmxlID17aXNWaXNpYmxlIH0vPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2UgPSh7c3RhdGV9KT0+IHtcclxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XHJcbiAgY29uc3QgYmxvY2tzID0gc3RhdGUuc291cmNlLnBhZ2VbZGF0YS5pZF0uYWNmLmlubmVoYWxsXHJcblxyXG4gIGxldCBibG9ja1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIHtibG9ja3MubWFwKCh4LGkpPT4gXHJcbiAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgIGxldCBibG9jayA9IHguXHJcbiAgICAgIFxyXG4gICAgICA8U3dpdGNoPlxyXG4gICAgICB7YmxvY2sgPSB4LmFjZl9mY19sYXlvdXR9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxUcmFja1Zpc2liaWxpdHkgd2hlbj17YmxvY2sgPT09IFwiaGVyb1wifSBvZmZzZXQ9ezM1MH0+XHJcbiAgICAgICAgICA8QmxvY2sgdGV4dD17eC50ZXh0fSBhbmltYXRpb249e3RydWV9IGltYWdlPXt4LmltYWdlfS8+XHJcbiAgICAgICAgPC9UcmFja1Zpc2liaWxpdHk+XHJcblxyXG4gICAgICAgIDxMaW5rQmxvY2tzIHdoZW49e2Jsb2NrID09PSBcImxpbmtfYmxvY2tzXCJ9IHRpdGxlPXt4LnRpdGxlfSB0ZXh0PXt4LnRleHR9IGJsb2Nrcz17eC5ibG9ja3N9IGFycm93PXt4LmFycm93fSAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxGcm9udF9mb3JtIHdoZW49e2Jsb2NrID09PSBcImZyb250X2Zvcm1cIn10ZXh0PXt4LnRleHR9Lz5cclxuICAgICAgXHJcbiAgICAgICAgPE9tX29zcyB3aGVuPXtibG9jayA9PT0gXCJvbV9vc3NcIn0gcnVicmlrPXt4LnJ1YnJpa30gZGl2aWRlcj17eC5kaXZpZGVyfSBsb2dvPXt4LmxvZ299IGludHJvdGV4dD17eC5pbnRyb3RleHR9IHByb2ZpbGJpbGQ9e3gucHJvZmlsYmlsZH0gYXJndW1lbnQ9e3guYXJndW1lbnR9Lz5cclxuICAgICAgICBcclxuICAgICAgICA8Q2xpZW50cyB3aGVuPXtibG9jayA9PT0gXCJjbGllbnRzXCJ9IGludHJvdGV4dD17eC5pbnRyb3RleHR9IGNsaWVudHM9e3guY2xpZW50c30vPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxQYWdlSW50cm8gd2hlbj17YmxvY2sgPT09IFwicGFnZV9pbnRyb1wifSBhcGk9e3h9IC8+XHJcblxyXG4gICAgICAgIDxJbmZvQm94IHdoZW49e2Jsb2NrID09PSBcImluZm9ib3hcIn0gYXBpPXt4fSAvPlxyXG4gICAgICBcclxuICAgICAgICA8U3R5bGVkX2xpc3Qgd2hlbj17YmxvY2sgPT09IFwic3R5bGVkX2xpc3RcIn0gYXBpPXt4fSAvPlxyXG5cclxuICAgICAgICA8U3RhdGljQmFubmVyIHdoZW49e2Jsb2NrID09PSBcInN0YXRpY19iYW5uZXJcIn0gYXBpPXtzdGF0ZS5zb3VyY2UuZGF0YX0gZGF0YT17eH0gLz5cclxuXHJcbiAgICAgICAgPEZyb250X2Zvcm0gd2hlbj17YmxvY2sgPT09IFwia29udGFrdGZvcm11bGFyXCJ9IHRleHQ9e3gudGV4dH0vPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgICAgXHJcblxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApfVxyXG4gICBcclxuPC8+XHJcbiAgICApXHJcbn1cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUGFnZSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/grafikcentralen/src/components/page.js\n");

/***/ })

})