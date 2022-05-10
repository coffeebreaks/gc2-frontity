webpackHotUpdate("gc2-frontity",{

/***/ "./packages/grafikcentralen/src/components/page.js":
/*!*********************************************************!*\
  !*** ./packages/grafikcentralen/src/components/page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _acf_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acf/hero */ \"./packages/grafikcentralen/src/components/acf/hero.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-on-screen */ \"./node_modules/react-on-screen/lib/index.js\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _acf_link_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acf/link_blocks */ \"./packages/grafikcentralen/src/components/acf/link_blocks.js\");\n/* harmony import */ var _acf_front_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acf/front_form */ \"./packages/grafikcentralen/src/components/acf/front_form.js\");\n/* harmony import */ var _acf_om_oss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acf/om_oss */ \"./packages/grafikcentralen/src/components/acf/om_oss.js\");\n/* harmony import */ var _acf_clients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./acf/clients */ \"./packages/grafikcentralen/src/components/acf/clients.js\");\n/* harmony import */ var _acf_pageIntro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./acf/pageIntro */ \"./packages/grafikcentralen/src/components/acf/pageIntro.js\");\n/* harmony import */ var _acf_infoBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./acf/infoBox */ \"./packages/grafikcentralen/src/components/acf/infoBox.js\");\n/* harmony import */ var _acf_styled_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./acf/styled_list */ \"./packages/grafikcentralen/src/components/acf/styled_list.js\");\n/* harmony import */ var _acf_static_banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./acf/static_banner */ \"./packages/grafikcentralen/src/components/acf/static_banner.js\");\n/* harmony import */ var _acf_blog_front__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./acf/blog_front */ \"./packages/grafikcentralen/src/components/acf/blog_front.js\");\n/* harmony import */ var _acf_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./acf/footer */ \"./packages/grafikcentralen/src/components/acf/footer.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Block=({isVisible,text,image})=>{const style={background:isVisible?'red':'blue',height:\"500px\"};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{text:text,image:image,isVisible:isVisible});};const Page=({state})=>{const data=state.source.get(state.router.link);const blocks=state.source.page[data.id].acf.innehall;let block;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"Fragment\"],{children:[blocks.map((x,i)=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:[block=x.acf_fc_layout,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(react_on_screen__WEBPACK_IMPORTED_MODULE_3___default.a,{when:block===\"hero\",offset:350,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(Block,{text:x.text,animation:true,image:x.image})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_link_blocks__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{when:block===\"link_blocks\",title:x.title,text:x.text,blocks:x.blocks,arrow:x.arrow}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_front_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:block===\"front_form\",text:x.text}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_om_oss__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{when:block===\"om_oss\",rubrik:x.rubrik,divider:x.divider,logo:x.logo,introtext:x.introtext,profilbild:x.profilbild,argument:x.argument}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_clients__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:block===\"clients\",introtext:x.introtext,clients:x.clients}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_pageIntro__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{when:block===\"page_intro\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_infoBox__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:block===\"infobox\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_styled_list__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{when:block===\"styled_list\",api:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_static_banner__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{when:block===\"static_banner\",api:state.source.data,data:x}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_front_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{when:block===\"kontaktformular\",text:x.text}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_blog_front__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{when:block===\"blog_front\",header:x.header,startpost:x.startpost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_blog_front__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{when:block===\"blog_front\",header:x.header,startpost:x.startpost})]})},i)),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_acf_footer__WEBPACK_IMPORTED_MODULE_14__[\"default\"],{})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ncmFmaWtjZW50cmFsZW4vc3JjL2NvbXBvbmVudHMvcGFnZS5qcz9iMWI1Il0sIm5hbWVzIjpbIkJsb2NrIiwiaXNWaXNpYmxlIiwidGV4dCIsImltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiUGFnZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJibG9ja3MiLCJwYWdlIiwiaWQiLCJhY2YiLCJpbm5laGFsbCIsImJsb2NrIiwibWFwIiwieCIsImkiLCJhY2ZfZmNfbGF5b3V0IiwidGl0bGUiLCJhcnJvdyIsInJ1YnJpayIsImRpdmlkZXIiLCJsb2dvIiwiaW50cm90ZXh0IiwicHJvZmlsYmlsZCIsImFyZ3VtZW50IiwiY2xpZW50cyIsImhlYWRlciIsInN0YXJ0cG9zdCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQkEsS0FBTUEsTUFBSyxDQUFHLENBQUMsQ0FBRUMsU0FBRixDQUFjQyxJQUFkLENBQW9CQyxLQUFwQixDQUFELEdBQWlDLENBQzdDLEtBQU1DLE1BQUssQ0FBRyxDQUNWQyxVQUFVLENBQUVKLFNBQVMsQ0FBSSxLQUFKLENBQVksTUFEdkIsQ0FFVkssTUFBTSxDQUFFLE9BRkUsQ0FBZCxDQUlBLE1BQ0UseUVBQUMsaURBQUQsRUFBTSxJQUFJLENBQUVKLElBQVosQ0FBa0IsS0FBSyxDQUFFQyxLQUF6QixDQUFnQyxTQUFTLENBQUdGLFNBQTVDLEVBREYsQ0FHRCxDQVJELENBVUEsS0FBTU0sS0FBSSxDQUFFLENBQUMsQ0FBQ0MsS0FBRCxDQUFELEdBQVksQ0FDdEIsS0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgs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QXhFLEVBbEJGLEdBSEYsRUFBVVosQ0FBVixDQURFLENBREYsQ0FnQ0Ysd0VBQUMsb0RBQUQsSUFoQ0UsR0FERixDQW9DRCxDQXpDRCxDQTBDbUJhLHVIQUFPLENBQUM1QixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ3JhZmlrY2VudHJhbGVuL3NyYy9jb21wb25lbnRzL3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCJcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vYWNmL2hlcm9cIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCJcclxuaW1wb3J0IFRyYWNrVmlzaWJpbGl0eSBmcm9tICdyZWFjdC1vbi1zY3JlZW4nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rQmxvY2tzIGZyb20gXCIuL2FjZi9saW5rX2Jsb2Nrc1wiO1xyXG5pbXBvcnQgRnJvbnRfZm9ybSBmcm9tIFwiLi9hY2YvZnJvbnRfZm9ybVwiO1xyXG5pbXBvcnQgT21fb3NzIGZyb20gXCIuL2FjZi9vbV9vc3NcIjtcclxuaW1wb3J0IENsaWVudHMgZnJvbSBcIi4vYWNmL2NsaWVudHNcIjtcclxuaW1wb3J0IHBhZ2VJbnRybyBmcm9tIFwiLi9hY2YvcGFnZUludHJvXCI7XHJcbmltcG9ydCBQYWdlSW50cm8gZnJvbSBcIi4vYWNmL3BhZ2VJbnRyb1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi9hY2YvaW5mb0JveFwiO1xyXG5pbXBvcnQgU3R5bGVkX2xpc3QgZnJvbSBcIi4vYWNmL3N0eWxlZF9saXN0XCI7XHJcbmltcG9ydCBTdGF0aWNCYW5uZXIgZnJvbSBcIi4vYWNmL3N0YXRpY19iYW5uZXJcIjtcclxuaW1wb3J0IEJsb2dGcm9udCBmcm9tIFwiLi9hY2YvYmxvZ19mcm9udFwiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vYWNmL2Zvb3RlclwiXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBCbG9jayA9ICh7IGlzVmlzaWJsZSAsIHRleHQsIGltYWdlIH0pID0+IHtcclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZDogaXNWaXNpYmxlICA/ICdyZWQnIDogJ2JsdWUnLFxyXG4gICAgICBoZWlnaHQ6IFwiNTAwcHhcIlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvIHRleHQ9e3RleHR9IGltYWdlPXtpbWFnZX0gaXNWaXNpYmxlID17aXNWaXNpYmxlIH0vPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2UgPSh7c3RhdGV9KT0+IHtcclxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XHJcbiAgY29uc3QgYmxvY2tzID0gc3RhdGUuc291cmNlLnBhZ2VbZGF0YS5pZF0uYWNmLmlubmVoYWxsXHJcblxyXG4gIGxldCBibG9ja1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIHtibG9ja3MubWFwKCh4LGkpPT4gXHJcbiAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgIFxyXG4gICBcclxuICAgICAgPFN3aXRjaD5cclxuICAgICAgICBcclxuICAgICAgICB7YmxvY2sgPSB4LmFjZl9mY19sYXlvdXR9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFRyYWNrVmlzaWJpbGl0eSB3aGVuPXtibG9jayA9PT0gXCJoZXJvXCJ9IG9mZnNldD17MzUwfT5cclxuICAgICAgICAgIDxCbG9jayB0ZXh0PXt4LnRleHR9IGFuaW1hdGlvbj17dHJ1ZX0gaW1hZ2U9e3guaW1hZ2V9Lz5cclxuICAgICAgICA8L1RyYWNrVmlzaWJpbGl0eT5cclxuXHJcbiAgICAgICAgPExpbmtCbG9ja3Mgd2hlbj17YmxvY2sgPT09IFwibGlua19ibG9ja3NcIn0gdGl0bGU9e3gudGl0bGV9IHRleHQ9e3gudGV4dH0gYmxvY2tzPXt4LmJsb2Nrc30gYXJyb3c9e3guYXJyb3d9IC8+XHJcbiAgICAgICAgPEZyb250X2Zvcm0gd2hlbj17YmxvY2sgPT09IFwiZnJvbnRfZm9ybVwifXRleHQ9e3gudGV4dH0vPlxyXG4gICAgICAgIDxPbV9vc3Mgd2hlbj17YmxvY2sgPT09IFwib21fb3NzXCJ9IHJ1YnJpaz17eC5ydWJyaWt9IGRpdmlkZXI9e3guZGl2aWRlcn0gbG9nbz17eC5sb2dvfSBpbnRyb3RleHQ9e3guaW50cm90ZXh0fSBwcm9maWxiaWxkPXt4LnByb2ZpbGJpbGR9IGFyZ3VtZW50PXt4LmFyZ3VtZW50fS8+XHJcbiAgICAgICAgPENsaWVudHMgd2hlbj17YmxvY2sgPT09IFwiY2xpZW50c1wifSBpbnRyb3RleHQ9e3guaW50cm90ZXh0fSBjbGllbnRzPXt4LmNsaWVudHN9Lz5cclxuICAgICAgICA8UGFnZUludHJvIHdoZW49e2Jsb2NrID09PSBcInBhZ2VfaW50cm9cIn0gYXBpPXt4fSAvPlxyXG4gICAgICAgIDxJbmZvQm94IHdoZW49e2Jsb2NrID09PSBcImluZm9ib3hcIn0gYXBpPXt4fSAvPlxyXG4gICAgICAgIDxTdHlsZWRfbGlzdCB3aGVuPXtibG9jayA9PT0gXCJzdHlsZWRfbGlzdFwifSBhcGk9e3h9IC8+XHJcbiAgICAgICAgPFN0YXRpY0Jhbm5lciB3aGVuPXtibG9jayA9PT0gXCJzdGF0aWNfYmFubmVyXCJ9IGFwaT17c3RhdGUuc291cmNlLmRhdGF9IGRhdGE9e3h9IC8+XHJcbiAgICAgICAgPEZyb250X2Zvcm0gd2hlbj17YmxvY2sgPT09IFwia29udGFrdGZvcm11bGFyXCJ9IHRleHQ9e3gudGV4dH0vPlxyXG4gICAgICAgIDxCbG9nRnJvbnQgd2hlbj17YmxvY2sgPT09IFwiYmxvZ19mcm9udFwifSBoZWFkZXI9e3guaGVhZGVyfSBzdGFydHBvc3Q9e3guc3RhcnRwb3N0fSAvPlxyXG4gICAgICAgIDxCbG9nRnJvbnQgd2hlbj17YmxvY2sgPT09IFwiYmxvZ19mcm9udFwifSBoZWFkZXI9e3guaGVhZGVyfSBzdGFydHBvc3Q9e3guc3RhcnRwb3N0fSAvPlxyXG5cclxuICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApfVxyXG4gICBcclxuICA8Rm9vdGVyIC8+XHJcbjwvPlxyXG4gICAgKVxyXG59XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFBhZ2UpXHJcbiAgICAgIFxyXG4gICAgICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/grafikcentralen/src/components/page.js\n");

/***/ })

})