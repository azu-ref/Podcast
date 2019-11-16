webpackHotUpdate("static/development/pages/podcast.js",{

/***/ "./pages/podcast.js":
/*!**************************!*\
  !*** ./pages/podcast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_VolverLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/VolverLink */ "./components/VolverLink.js");







var _jsxFileName = "/home/fernando/Documentos/Platzi/Next.js/podcast/pages/podcast.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("header", {
        className: "jsx-626797614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Podcast"), __jsx("div", {
        className: "jsx-626797614" + " " + 'modal',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-626797614" + " " + 'clip',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(_components_VolverLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        clip: clip,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx("picture", {
        className: "jsx-626797614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        className: "jsx-626797614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-626797614" + " " + 'player',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-626797614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, clip.title), __jsx("h6", {
        className: "jsx-626797614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, clip.channel.title), __jsx("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-626797614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-626797614",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2001177295",
        __self: this
      }, "header.jsx-626797614{color:#fff;background:#8756ca;padding:15px;text-align:center;}.clip.jsx-626797614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-626797614{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-626797614 div.jsx-626797614{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-626797614{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-626797614{margin:0;}h6.jsx-626797614{margin:0;margin-top:1em;}audio.jsx-626797614{margin-top:2em;width:100%;}.modal.jsx-626797614{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9wb2RjYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDZSxBQUdzQixBQU9FLEFBT0EsQUFTRixBQU9FLEFBS0osQUFHQSxBQUlNLEFBS0EsU0FYakIsQUFHaUIsRUF0Q0ksQUF1QlAsRUFPZSxFQVloQixBQUtMLE1BQ0MsRUF4QnFCLENBZTlCLEVBSUEsRUFNVSxFQWhESyxNQWlESixJQW5CUyxHQTdCQSxFQWlESixNQTFCVSxPQU8xQixDQW9CQSxFQWpEQSxhQUljLEFBT08sQ0FZUyxXQWxCTixpQkFtQnhCLDZEQWxCcUIsR0FNSSxnQkFMWCxZQUNkLHVFQUtXLHVDQUNhLDhFQUNYLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS9mZXJuYW5kby9Eb2N1bWVudG9zL1BsYXR6aS9OZXh0LmpzL3BvZGNhc3QvcGFnZXMvcG9kY2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBWb2x2ZXJMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvVm9sdmVyTGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuXHRcdGxldCBpZFBvZGNhc3QgPSBxdWVyeS5pZFxuXG5cdFx0bGV0IHJlcVBvZGNhc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9hdWRpb19jbGlwcy8ke2lkUG9kY2FzdH0ubXAzYClcblx0XHRsZXQgeyBib2R5OiB7IGF1ZGlvX2NsaXA6IGNsaXAgfX0gPSBhd2FpdCByZXFQb2RjYXN0Lmpzb24oKVxuXG5cdFx0cmV0dXJuIHsgY2xpcCB9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHsgY2xpcCB9ID0gdGhpcy5wcm9wc1xuXG5cdFx0cmV0dXJuIDw+XG5cdFx0XHQ8aGVhZGVyPlBvZGNhc3Q8L2hlYWRlcj5cblxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGlwJz5cbiAgICAgICAgICA8Vm9sdmVyTGluayBjbGlwPXtjbGlwfS8+XG5cblx0XHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2xpcC51cmxzLmltYWdlIHx8IFxuXHRcdFx0XHRcdFx0XHRjbGlwLmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XG5cdFx0XHRcdFx0PC9waWN0dXJlPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BsYXllcic+XG5cdFx0XHRcdFx0XHRcdDxoMz57IGNsaXAudGl0bGUgfTwvaDM+XG5cdFx0XHRcdFx0XHRcdDxoNj57IGNsaXAuY2hhbm5lbC50aXRsZSB9PC9oNj5cblx0XHRcdFx0XHRcdFx0PGF1ZGlvIGNvbnRyb2xzIGF1dG9QbGF5PXt0cnVlfT5cblx0XHRcdFx0XHRcdFx0XHQ8c291cmNlIHNyYz17Y2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2F1ZGlvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRoZWFkZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jbGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubW9kYWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblx0XHQ8Lz5cblx0fSBcbn0iXX0= */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/pages/podcast.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1768601800",
        __self: this
      }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9wb2RjYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHeUIsQUFHb0IsU0FDYSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoiL2hvbWUvZmVybmFuZG8vRG9jdW1lbnRvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0L3BhZ2VzL3BvZGNhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVm9sdmVyTGluayBmcm9tICcuLi9jb21wb25lbnRzL1ZvbHZlckxpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcblx0XHRsZXQgaWRQb2RjYXN0ID0gcXVlcnkuaWRcblxuXHRcdGxldCByZXFQb2RjYXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vYXVkaW9fY2xpcHMvJHtpZFBvZGNhc3R9Lm1wM2ApXG5cdFx0bGV0IHsgYm9keTogeyBhdWRpb19jbGlwOiBjbGlwIH19ID0gYXdhaXQgcmVxUG9kY2FzdC5qc29uKClcblxuXHRcdHJldHVybiB7IGNsaXAgfVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB7IGNsaXAgfSA9IHRoaXMucHJvcHNcblxuXHRcdHJldHVybiA8PlxuXHRcdFx0PGhlYWRlcj5Qb2RjYXN0PC9oZWFkZXI+XG5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsJz5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpcCc+XG4gICAgICAgICAgPFZvbHZlckxpbmsgY2xpcD17Y2xpcH0vPlxuXG5cdFx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2NsaXAudXJscy5pbWFnZSB8fCBcblx0XHRcdFx0XHRcdFx0Y2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxuXHRcdFx0XHRcdDwvcGljdHVyZT5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxuXHRcdFx0XHRcdFx0XHQ8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxuXHRcdFx0XHRcdFx0XHQ8aDY+eyBjbGlwLmNoYW5uZWwudGl0bGUgfTwvaDY+XG5cdFx0XHRcdFx0XHRcdDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17dHJ1ZX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cblx0XHRcdFx0XHRcdFx0PC9hdWRpbz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0aGVhZGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2xpcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBhdWRpbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdH0gXG59Il19 */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/pages/podcast.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, idPodcast, reqPodcast, _ref2, clip;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idPodcast = query.id;
                _context.next = 4;
                return fetch("https://api.audioboom.com/audio_clips/".concat(idPodcast, ".mp3"));

              case 4:
                reqPodcast = _context.sent;
                _context.next = 7;
                return reqPodcast.json();

              case 7:
                _ref2 = _context.sent;
                clip = _ref2.body.audio_clip;
                return _context.abrupt("return", {
                  clip: clip
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=podcast.js.2a060e2fc5be6887849c.hot-update.js.map