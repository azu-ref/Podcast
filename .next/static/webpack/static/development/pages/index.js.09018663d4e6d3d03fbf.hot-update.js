webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChannelGrid.js":
/*!***********************************!*\
  !*** ./components/ChannelGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/fernando/Documentos/Platzi/Next.js/podcast/components/ChannelGrid.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChannelGrid, _React$Component);

  function ChannelGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChannelGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChannelGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __jsx("div", {
        className: "jsx-1816174070" + " " + 'channels',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, channels.map(function (channel) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/channel?id=".concat(channel.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-1816174070" + " " + 'channel',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, __jsx("img", {
          src: channel.urls.logo_image.original,
          alt: "",
          className: "jsx-1816174070",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }), __jsx("h2", {
          className: "jsx-1816174070",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, channel.title)));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1816174070",
        __self: this
      }, ".channels.jsx-1816174070{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-1816174070 img.jsx-1816174070{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-1816174070{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHc0IsQUFPSyxBQUtOLFlBQ0ksQ0FaRixLQU8wQixTQU4zQixDQVlHLFlBWDRDLElBWW5ELFNBQ1MsS0FQUCxXQUNiLEVBT0EsMkJBYkEiLCJmaWxlIjoiL2hvbWUvZmVybmFuZG8vRG9jdW1lbnRvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0L2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wcyBcblxuICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9J2NoYW5uZWxzJz5cbiAgICAgIHsgY2hhbm5lbHMubWFwKChjaGFubmVsKSA9PiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0keyBjaGFubmVsLmlkIH1gfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2NoYW5uZWwnPlxuICAgICAgICAgICAgPGltZyBzcmM9eyBjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCB9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8aDI+eyBjaGFubmVsLnRpdGxlIH08L2gyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICkpIH1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jaGFubmVscyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICB9XG5cbiAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgfVxufSJdfQ== */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/components/ChannelGrid.js */"));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.09018663d4e6d3d03fbf.hot-update.js.map