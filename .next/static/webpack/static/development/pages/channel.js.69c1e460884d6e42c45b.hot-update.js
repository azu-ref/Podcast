webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/fernando/Documentos/Platzi/Next.js/podcast/pages/_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Oh no :(",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, statusCode === 404 ? __jsx("div", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Error 404: Esta pagina no existe :("), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Volver a Home")))) : __jsx("div", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Hubo algun problema :("), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Intenta nuveamente en unos segundos")));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ })

})
//# sourceMappingURL=channel.js.69c1e460884d6e42c45b.hot-update.js.map