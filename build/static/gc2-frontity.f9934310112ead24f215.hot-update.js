webpackHotUpdate("gc2-frontity",{

/***/ "./packages/grafikcentralen/src/components/page.js":
/*!*********************************************************!*\
  !*** ./packages/grafikcentralen/src/components/page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _acf_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acf/hero */ \"./packages/grafikcentralen/src/components/acf/hero.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-on-screen */ \"./node_modules/react-on-screen/lib/index.js\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _acf_link_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acf/link_blocks */ \"./packages/grafikcentralen/src/components/acf/link_blocks.js\");\n/* harmony import */ var _acf_front_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acf/front_form */ \"./packages/grafikcentralen/src/components/acf/front_form.js\");\n/* harmony import */ var _acf_om_oss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acf/om_oss */ \"./packages/grafikcentralen/src/components/acf/om_oss.js\");\n/* harmony import */ var _acf_clients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./acf/clients */ \"./packages/grafikcentralen/src/components/acf/clients.js\");\n/* harmony import */ var _acf_pageIntro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./acf/pageIntro */ \"./packages/grafikcentralen/src/components/acf/pageIntro.js\");\n/* harmony import */ var _acf_infoBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./acf/infoBox */ \"./packages/grafikcentralen/src/components/acf/infoBox.js\");\n/* harmony import */ var _acf_styled_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./acf/styled_list */ \"./packages/grafikcentralen/src/components/acf/styled_list.js\");\n/* harmony import */ var _acf_static_banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./acf/static_banner */ \"./packages/grafikcentralen/src/components/acf/static_banner.js\");\n/* harmony import */ var _acf_blog_front__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./acf/blog_front */ \"./packages/grafikcentralen/src/components/acf/blog_front.js\");\n/* harmony import */ var _acf_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./acf/footer */ \"./packages/grafikcentralen/src/components/acf/footer.js\");\n/* harmony import */ var _acf_portfolio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./acf/portfolio */ \"./packages/grafikcentralen/src/components/acf/portfolio.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Block=({isVisible,text,image})=>{const style={background:isVisible?'red':'blue',height:\"500px\"};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{text:text,image:image,isVisible:isVisible});};const Page=({state})=>{const data=state.source.get(state.router.link);const blocks=state.source.page[data.id].acf.innehall;let block;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"Fragment\"],{children:[blocks.map((x,i)=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:[block=x.acf_fc_layout,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(react_on_screen__WEBPACK_IMPORTED_MODULE_3___default.a,{when:block===\"hero\",offset:350,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(Block,{text:x.text,animation:true,image:x.image})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_link_blocks__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{when:block===\"link_blocks\",title:x.title,text:x.text,blocks:x.blocks,arrow:x.arrow}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_front_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:block===\"front_form\",text:x.text}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_om_oss__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{when:block===\"om_oss\",rubrik:x.rubrik,divider:x.divider,logo:x.logo,introtext:x.introtext,profilbild:x.profilbild,argument:x.argument}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_clients__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:block===\"clients\",introtext:x.introtext,clients:x.clients}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_pageIntro__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{when:block===\"page_intro\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_infoBox__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:block===\"infobox\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_styled_list__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{when:block===\"styled_list\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_static_banner__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{when:block===\"static_banner\",api:state.source.data,data:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_front_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:block===\"kontaktformular\",text:x.text}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_blog_front__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{when:block===\"blog_front\",header:x.header,startpost:x.startpost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_portfolio__WEBPACK_IMPORTED_MODULE_15__[\"default\"],{when:block===\"fullpage_portfolio\",data:x})]})},i)),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_acf_footer__WEBPACK_IMPORTED_MODULE_14__[\"default\"],{})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ncmFmaWtjZW50cmFsZW4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcz9iMWI1Il0sIm5hbWVzIjpbIkJsb2NrIiwiaXNWaXNpYmxlIiwidGV4dCIsImltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiUGFnZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJibG9ja3MiLCJwYWdlIiwiaWQiLCJhY2YiLCJpbm5laGFsbCIsImJsb2NrIiwibWFwIiwieCIsImkiLCJhY2ZfZmNfbGF5b3V0IiwidGl0bGUiLCJhcnJvdyIsInJ1YnJpayIsImRpdmlkZXIiLCJsb2dvIiwiaW50cm90ZXh0IiwicHJvZmlsYmlsZCIsImFyZ3VtZW50IiwiY2xpZW50cyIsImhlYWRlciIsInN0YXJ0cG9zdCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQSxLQUFNQSxNQUFLLENBQUcsQ0FBQyxDQUFFQyxTQUFGLENBQWNDLElBQWQsQ0FBb0JDLEtBQXBCLENBQUQsR0FBaUMsQ0FDN0MsS0FBTUMsTUFBSyxDQUFHLENBQ1ZDLFVBQVUsQ0FBRUosU0FBUyxDQUFJLEtBQUosQ0FBWSxNQUR2QixDQUVWSyxNQUFNLENBQUUsT0FGRSxDQUFkLENBSUEsTUFDRSx5RUFBQyxpREFBRCxFQUFNLElBQUksQ0FBRUosSUFBWixDQUFrQixLQUFLLENBQUVDLEtBQXpCLENBQWdDLFNBQVMsQ0FBR0YsU0FBNUMsRUFERixDQUdELENBUkQsQ0FVQSxLQUFNTSxLQUFJLENBQUUsQ0FBQyxDQUFDQyxLQUFELENBQUQsR0FBWSxDQUN0QixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENB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Q0Ysd0VBQUMsb0RBQUQsSUFoQ0UsR0FERixDQW9DRCxDQXpDRCxDQTBDbUJhLHVIQUFPLENBQUM1QixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ3JhZmlrY2VudHJhbGVuL3NyYy9jb21wb25lbnRzL3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCJcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vYWNmL2hlcm9cIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCJcclxuaW1wb3J0IFRyYWNrVmlzaWJpbGl0eSBmcm9tICdyZWFjdC1vbi1zY3JlZW4nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rQmxvY2tzIGZyb20gXCIuL2FjZi9saW5rX2Jsb2Nrc1wiO1xyXG5pbXBvcnQgRnJvbnRfZm9ybSBmcm9tIFwiLi9hY2YvZnJvbnRfZm9ybVwiO1xyXG5pbXBvcnQgT21fb3NzIGZyb20gXCIuL2FjZi9vbV9vc3NcIjtcclxuaW1wb3J0IENsaWVudHMgZnJvbSBcIi4vYWNmL2NsaWVudHNcIjtcclxuaW1wb3J0IHBhZ2VJbnRybyBmcm9tIFwiLi9hY2YvcGFnZUludHJvXCI7XHJcbmltcG9ydCBQYWdlSW50cm8gZnJvbSBcIi4vYWNmL3BhZ2VJbnRyb1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi9hY2YvaW5mb0JveFwiO1xyXG5pbXBvcnQgU3R5bGVkX2xpc3QgZnJvbSBcIi4vYWNmL3N0eWxlZF9saXN0XCI7XHJcbmltcG9ydCBTdGF0aWNCYW5uZXIgZnJvbSBcIi4vYWNmL3N0YXRpY19iYW5uZXJcIjtcclxuaW1wb3J0IEJsb2dGcm9udCBmcm9tIFwiLi9hY2YvYmxvZ19mcm9udFwiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vYWNmL2Zvb3RlclwiXHJcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4vYWNmL3BvcnRmb2xpb1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQmxvY2sgPSAoeyBpc1Zpc2libGUgLCB0ZXh0LCBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGlzVmlzaWJsZSAgPyAncmVkJyA6ICdibHVlJyxcclxuICAgICAgaGVpZ2h0OiBcIjUwMHB4XCJcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVybyB0ZXh0PXt0ZXh0fSBpbWFnZT17aW1hZ2V9IGlzVmlzaWJsZSA9e2lzVmlzaWJsZSB9Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBQYWdlID0oe3N0YXRlfSk9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xyXG4gIGNvbnN0IGJsb2NrcyA9IHN0YXRlLnNvdXJjZS5wYWdlW2RhdGEuaWRdLmFjZi5pbm5laGFsbFxyXG5cclxuICBsZXQgYmxvY2tcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICB7YmxvY2tzLm1hcCgoeCxpKT0+IFxyXG4gICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICBcclxuICAgXHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2Jsb2NrID0geC5hY2ZfZmNfbGF5b3V0fVxyXG4gICAgICAgIFxyXG4gICAgICAgIDxUcmFja1Zpc2liaWxpdHkgd2hlbj17YmxvY2sgPT09IFwiaGVyb1wifSBvZmZzZXQ9ezM1MH0+XHJcbiAgICAgICAgICA8QmxvY2sgdGV4dD17eC50ZXh0fSBhbmltYXRpb249e3RydWV9IGltYWdlPXt4LmltYWdlfS8+XHJcbiAgICAgICAgPC9UcmFja1Zpc2liaWxpdHk+XHJcblxyXG4gICAgICAgIDxMaW5rQmxvY2tzIHdoZW49e2Jsb2NrID09PSBcImxpbmtfYmxvY2tzXCJ9IHRpdGxlPXt4LnRpdGxlfSB0ZXh0PXt4LnRleHR9IGJsb2Nrcz17eC5ibG9ja3N9IGFycm93PXt4LmFycm93fSAvPlxyXG4gICAgICAgIDxGcm9udF9mb3JtIHdoZW49e2Jsb2NrID09PSBcImZyb250X2Zvcm1cIn10ZXh0PXt4LnRleHR9Lz5cclxuICAgICAgICA8T21fb3NzIHdoZW49e2Jsb2NrID09PSBcIm9tX29zc1wifSBydWJyaWs9e3gucnVicmlrfSBkaXZpZGVyPXt4LmRpdmlkZXJ9IGxvZ289e3gubG9nb30gaW50cm90ZXh0PXt4LmludHJvdGV4dH0gcHJvZmlsYmlsZD17eC5wcm9maWxiaWxkfSBhcmd1bWVudD17eC5hcmd1bWVudH0vPlxyXG4gICAgICAgIDxDbGllbnRzIHdoZW49e2Jsb2NrID09PSBcImNsaWVudHNcIn0gaW50cm90ZXh0PXt4LmludHJvdGV4dH0gY2xpZW50cz17eC5jbGllbnRzfS8+XHJcbiAgICAgICAgPFBhZ2VJbnRybyB3aGVuPXtibG9jayA9PT0gXCJwYWdlX2ludHJvXCJ9IGFwaT17eH0gLz5cclxuICAgICAgICA8SW5mb0JveCB3aGVuPXtibG9jayA9PT0gXCJpbmZvYm94XCJ9IGFwaT17eH0gLz5cclxuICAgICAgICA8U3R5bGVkX2xpc3Qgd2hlbj17YmxvY2sgPT09IFwic3R5bGVkX2xpc3RcIn0gYXBpPXt4fSAvPlxyXG4gICAgICAgIDxTdGF0aWNCYW5uZXIgd2hlbj17YmxvY2sgPT09IFwic3RhdGljX2Jhbm5lclwifSBhcGk9e3N0YXRlLnNvdXJjZS5kYXRhfSBkYXRhPXt4fSAvPlxyXG4gICAgICAgIDxGcm9udF9mb3JtIHdoZW49e2Jsb2NrID09PSBcImtvbnRha3Rmb3JtdWxhclwifSB0ZXh0PXt4LnRleHR9Lz5cclxuICAgICAgICA8QmxvZ0Zyb250IHdoZW49e2Jsb2NrID09PSBcImJsb2dfZnJvbnRcIn0gaGVhZGVyPXt4LmhlYWRlcn0gc3RhcnRwb3N0PXt4LnN0YXJ0cG9zdH0gLz5cclxuICAgICAgICA8UG9ydGZvbGlvIHdoZW49e2Jsb2NrID09PSBcImZ1bGxwYWdlX3BvcnRmb2xpb1wifSBkYXRhPXt4fSAvPlxyXG5cclxuICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApfVxyXG4gICBcclxuICA8Rm9vdGVyIC8+XHJcbjwvPlxyXG4gICAgKVxyXG59XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFBhZ2UpXHJcbiAgICAgIFxyXG4gICAgICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/grafikcentralen/src/components/page.js\n");

/***/ })

})