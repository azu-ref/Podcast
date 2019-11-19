webpackHotUpdate("static/development/pages/podcast.js",{

/***/ "./components/VolverLink.js":
/*!**********************************!*\
  !*** ./components/VolverLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VolverLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var VolverLink =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VolverLink, _React$Component);

  function VolverLink() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VolverLink);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(VolverLink).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VolverLink, [{
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("nav", {
        className: "jsx-3523419518"
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        route: "channel",
        params: {
          slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_8__["default"])(clip.channel.title),
          id: clip.channel.id
        }
      }, __jsx("a", {
        className: "jsx-3523419518" + " " + 'close'
      }, "< Volver"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3523419518"
      }, "nav.jsx-3523419518{background:none;}nav.jsx-3523419518 a.jsx-3523419518{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9jb21wb25lbnRzL1ZvbHZlckxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JlLEFBRzJCLEFBR0ssZ0JBRnZCLEtBR2UsYUFDRCxZQUNHLGVBQ00sa0RBQ3ZCIiwiZmlsZSI6Ii9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9jb21wb25lbnRzL1ZvbHZlckxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9sdmVyTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNsaXAgfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4gPD5cblx0XHRcdDxuYXY+XG5cdFx0XHRcdDxMaW5rIHJvdXRlPSdjaGFubmVsJyBwYXJhbXM9e3tcblx0XHRcdFx0c2x1Zzogc2x1ZyhjbGlwLmNoYW5uZWwudGl0bGUpLFxuXHRcdFx0XHRpZDogY2xpcC5jaGFubmVsLmlkXG5cdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2xvc2UnPlxuXHRcdFx0XHRcdFx0Jmx0OyBWb2x2ZXJcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvbmF2PlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdG5hdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvPlxuXHR9XG59Il19 */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/components/VolverLink.js */"));
    }
  }]);

  return VolverLink;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=podcast.js.74be40da5447fe99856c.hot-update.js.map