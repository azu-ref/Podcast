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
        className: "jsx-2633817483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Podcast"), __jsx("div", {
        className: "jsx-2633817483" + " " + 'modal',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2633817483" + " " + 'clip',
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
        className: "jsx-2633817483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        className: "jsx-2633817483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2633817483" + " " + 'player',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2633817483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, clip.title), __jsx("h6", {
        className: "jsx-2633817483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, clip.channel.title), __jsx("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-2633817483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-2633817483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2753324266",
        __self: this
      }, "header.jsx-2633817483{color:#fff;background:#8756ca;padding:15px;text-align:center;}nav.jsx-2633817483{background:none;}nav.jsx-2633817483 a.jsx-2633817483{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-2633817483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-2633817483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-2633817483 div.jsx-2633817483{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-2633817483{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-2633817483{margin:0;}h6.jsx-2633817483{margin:0;margin-top:1em;}audio.jsx-2633817483{margin-top:2em;width:100%;}.modal.jsx-2633817483{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9wb2RjYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDZSxBQUdzQixBQU1LLEFBR0ssQUFPUixBQU9BLEFBU0YsQUFPRSxBQUtKLEFBR0EsQUFJTSxBQUtBLFNBWGpCLEFBR2lCLEVBL0NJLEFBZ0NQLEVBT2UsRUFZaEIsQUFLTCxDQWxEUixLQUdlLEFBZ0ROLEVBeEJxQixDQWU5QixFQUlBLEVBTVUsRUF6REssSUFTRCxFQWlESCxJQW5CUyxHQXRDQSxFQTBESixDQWpEQyxLQXVCUyxPQU8xQixDQW9CQSxFQTFEQSxBQVN1QixhQUlULEFBT08sQ0FZUyxXQWxCTixpQkFtQnhCLFFBdkJBLHFEQUtxQixHQU1JLGdCQUxYLFlBQ2QsdUVBS1csdUNBQ2EsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6Ii9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9wb2RjYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFZvbHZlckxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9Wb2x2ZXJMaW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG5cdFx0bGV0IGlkUG9kY2FzdCA9IHF1ZXJ5LmlkXG5cblx0XHRsZXQgcmVxUG9kY2FzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7aWRQb2RjYXN0fS5tcDNgKVxuXHRcdGxldCB7IGJvZHk6IHsgYXVkaW9fY2xpcDogY2xpcCB9fSA9IGF3YWl0IHJlcVBvZGNhc3QuanNvbigpXG5cblx0XHRyZXR1cm4geyBjbGlwIH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgeyBjbGlwIH0gPSB0aGlzLnByb3BzXG5cblx0XHRyZXR1cm4gPD5cblx0XHRcdDxoZWFkZXI+UG9kY2FzdDwvaGVhZGVyPlxuXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2RhbCc+XHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaXAnPlxuICAgICAgICAgIDxWb2x2ZXJMaW5rIGNsaXA9e2NsaXB9Lz5cblxuXHRcdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjbGlwLnVybHMuaW1hZ2UgfHwgXG5cdFx0XHRcdFx0XHRcdGNsaXAuY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cblx0XHRcdFx0XHQ8L3BpY3R1cmU+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cblx0XHRcdFx0XHRcdFx0PGgzPnsgY2xpcC50aXRsZSB9PC9oMz5cblx0XHRcdFx0XHRcdFx0PGg2PnsgY2xpcC5jaGFubmVsLnRpdGxlIH08L2g2PlxuXHRcdFx0XHRcdFx0XHQ8YXVkaW8gY29udHJvbHMgYXV0b1BsYXk9e3RydWV9PlxuXHRcdFx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPXtjbGlwLnVybHMuaGlnaF9tcDN9IHR5cGU9J2F1ZGlvL21wZWcnIC8+XG5cdFx0XHRcdFx0XHRcdDwvYXVkaW8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGhlYWRlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBuYXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IGEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jbGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubW9kYWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblx0XHQ8Lz5cblx0fSBcbn0iXX0= */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/pages/podcast.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1768601800",
        __self: this
      }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9wb2RjYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHeUIsQUFHb0IsU0FDYSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoiL2hvbWUvZmVybmFuZG8vRG9jdW1lbnRvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0L3BhZ2VzL3BvZGNhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVm9sdmVyTGluayBmcm9tICcuLi9jb21wb25lbnRzL1ZvbHZlckxpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcblx0XHRsZXQgaWRQb2RjYXN0ID0gcXVlcnkuaWRcblxuXHRcdGxldCByZXFQb2RjYXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vYXVkaW9fY2xpcHMvJHtpZFBvZGNhc3R9Lm1wM2ApXG5cdFx0bGV0IHsgYm9keTogeyBhdWRpb19jbGlwOiBjbGlwIH19ID0gYXdhaXQgcmVxUG9kY2FzdC5qc29uKClcblxuXHRcdHJldHVybiB7IGNsaXAgfVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB7IGNsaXAgfSA9IHRoaXMucHJvcHNcblxuXHRcdHJldHVybiA8PlxuXHRcdFx0PGhlYWRlcj5Qb2RjYXN0PC9oZWFkZXI+XG5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsJz5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xpcCc+XG4gICAgICAgICAgPFZvbHZlckxpbmsgY2xpcD17Y2xpcH0vPlxuXG5cdFx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2NsaXAudXJscy5pbWFnZSB8fCBcblx0XHRcdFx0XHRcdFx0Y2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxuXHRcdFx0XHRcdDwvcGljdHVyZT5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxuXHRcdFx0XHRcdFx0XHQ8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxuXHRcdFx0XHRcdFx0XHQ8aDY+eyBjbGlwLmNoYW5uZWwudGl0bGUgfTwvaDY+XG5cdFx0XHRcdFx0XHRcdDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17dHJ1ZX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cblx0XHRcdFx0XHRcdFx0PC9hdWRpbz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0aGVhZGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNsaXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBwaWN0dXJlIGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXllciB7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgYXVkaW8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXHRcdDwvPlxuXHR9IFxufSJdfQ== */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/pages/podcast.js */"));
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
//# sourceMappingURL=podcast.js.4cfe88c0784b115322d9.hot-update.js.map