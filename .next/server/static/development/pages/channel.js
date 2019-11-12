module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/fernando/Documentos/Platzi/Next.js/podcast/pages/channel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    query
  }) {
    let idChannel = query.id;
    let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
    let {
      body: {
        channel
      }
    } = await reqChannel.json();
    let reqAudio = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`);
    let {
      body: {
        audio_clips: audioClips
      }
    } = await reqAudio.json();
    let reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`);
    let {
      body: {
        channels: series
      }
    } = await reqSeries.json();
    return {
      channel,
      audioClips,
      series
    };
  }

  render() {
    const {
      channel,
      audioClips,
      series
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
      className: "jsx-2953540546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Podcast"), __jsx("h1", {
      className: "jsx-2953540546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, channel.title), __jsx("h2", {
      className: "jsx-2953540546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Series"), series.map(serie => __jsx("div", {
      className: "jsx-2953540546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, serie.title)), __jsx("h2", {
      className: "jsx-2953540546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Ultimos Podcasts"), audioClips.map(clip => __jsx("div", {
      className: "jsx-2953540546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, clip.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2460055036",
      __self: this
    }, "header.jsx-2953540546{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-2953540546{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-2953540546 img.jsx-2953540546{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h1.jsx-2953540546{font-weiht:600px;padding:15px;}h2.jsx-2953540546{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHc0IsQUFPRSxBQU9LLEFBS0QsQUFJTCxXQXRCTyxDQXVCSCxDQWhCRixJQWFqQixDQU4yQyxTQU4zQixDQWdCRyxFQXZCSCxBQW1CZixVQVg4RCxHQVAxQyxDQXVCVCxTQUNTLEtBWFAsR0FaYixRQWFBLEVBV0EsMkJBakJBIiwiZmlsZSI6Ii9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG5cbiAgICBsZXQgcmVxQ2hhbm5lbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApXG4gICAgbGV0IHsgYm9keTogeyBjaGFubmVsIH0gfSA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXG5cbiAgICBsZXQgcmVxQXVkaW8gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKVxuICAgIGxldCB7IGJvZHk6IHsgYXVkaW9fY2xpcHM6IGF1ZGlvQ2xpcHMgfSB9ID0gYXdhaXQgcmVxQXVkaW8uanNvbigpXG5cbiAgICBsZXQgcmVxU2VyaWVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYClcbiAgICBsZXQgeyBib2R5OiB7IGNoYW5uZWxzOiBzZXJpZXMgfSB9ID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIFxuXG4gICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCAgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8PiBcbiAgICAgIDxoZWFkZXI+UG9kY2FzdDwvaGVhZGVyPlxuICAgICAgPGgxPnsgY2hhbm5lbC50aXRsZSB9PC9oMT5cblxuICAgICAgPGgyPlNlcmllczwvaDI+XG4gICAgICB7IHNlcmllcy5tYXAoKHNlcmllKSA9PiAoXG4gICAgICAgIDxkaXY+eyBzZXJpZS50aXRsZSB9PC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxoMj5VbHRpbW9zIFBvZGNhc3RzPC9oMj5cbiAgICAgIHsgYXVkaW9DbGlwcy5tYXAoKGNsaXApID0+IChcbiAgICAgICAgPGRpdj57IGNsaXAudGl0bGUgfTwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlodDogNjAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweFxuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgYmFja2dvdW5kOiB3aGl0ZTtcbiAgICAgICAgfSAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIH1cblxuICBcbn0iXX0= */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/pages/channel.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "330043127",
      __self: this
    }, "body{margin:0;font-family:system-ui;backgound:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FeUIsQUFHb0IsU0FDYSxzQkFDTixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZmVybmFuZG8vRG9jdW1lbnRvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0L3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgIGxldCByZXFDaGFubmVsID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YClcbiAgICBsZXQgeyBib2R5OiB7IGNoYW5uZWwgfSB9ID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcblxuICAgIGxldCByZXFBdWRpbyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApXG4gICAgbGV0IHsgYm9keTogeyBhdWRpb19jbGlwczogYXVkaW9DbGlwcyB9IH0gPSBhd2FpdCByZXFBdWRpby5qc29uKClcblxuICAgIGxldCByZXFTZXJpZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKVxuICAgIGxldCB7IGJvZHk6IHsgY2hhbm5lbHM6IHNlcmllcyB9IH0gPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG4gICAgXG5cbiAgICByZXR1cm4geyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0ICB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDw+IFxuICAgICAgPGhlYWRlcj5Qb2RjYXN0PC9oZWFkZXI+XG4gICAgICA8aDE+eyBjaGFubmVsLnRpdGxlIH08L2gxPlxuXG4gICAgICA8aDI+U2VyaWVzPC9oMj5cbiAgICAgIHsgc2VyaWVzLm1hcCgoc2VyaWUpID0+IChcbiAgICAgICAgPGRpdj57IHNlcmllLnRpdGxlIH08L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGgyPlVsdGltb3MgUG9kY2FzdHM8L2gyPlxuICAgICAgeyBhdWRpb0NsaXBzLm1hcCgoY2xpcCkgPT4gKFxuICAgICAgICA8ZGl2PnsgY2xpcC50aXRsZSB9PC9kaXY+XG4gICAgICApKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhbm5lbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhbm5lbCBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWh0OiA2MDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICBiYWNrZ291bmQ6IHdoaXRlO1xuICAgICAgICB9ICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgfVxuXG4gIFxufSJdfQ== */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/pages/channel.js */"));
  }

});

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/channel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fernando/Documentos/Platzi/Next.js/podcast/pages/channel.js */"./pages/channel.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map