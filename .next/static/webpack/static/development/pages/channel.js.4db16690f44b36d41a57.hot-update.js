webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/PodcastList.js":
/*!***********************************!*\
  !*** ./components/PodcastList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastList; });
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



var PodcastList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PodcastList, _React$Component);

  function PodcastList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PodcastList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PodcastList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PodcastList, [{
    key: "render",
    value: function render() {
      var audioClips = this.props.audioClips;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("h2", {
        className: "jsx-1112805590"
      }, "Ultimos Podcasts"), audioClips.map(function (clip) {
        return __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          route: "podcast",
          params: {
            slugChannel: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_8__["default"])(clip.channel.title),
            idChannel: clip.channel.id,
            slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_8__["default"])(clip.title),
            id: clip.id
          }
        }, __jsx("a", {
          className: "jsx-1112805590" + " " + 'podcast'
        }, __jsx("h3", {
          className: "jsx-1112805590"
        }, clip.title), __jsx("div", {
          className: "jsx-1112805590" + " " + 'meta'
        }, Math.ceil(clip.duration / 60), " minutes")));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1112805590"
      }, "header.jsx-1112805590{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-1112805590{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-1112805590{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-1112805590 img.jsx-1112805590{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-1112805590{padding:5px;font-size:1.5em;font-weight:600;margin:0;text-align:center;}.podcast.jsx-1112805590{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-1112805590:hover{color:#000;}.podcast.jsx-1112805590 h3.jsx-1112805590{margin:0;}.podcast.jsx-1112805590 .meta.jsx-1112805590{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9jb21wb25lbnRzL1BvZGNhc3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHc0IsQUFRRSxBQU1DLEFBTUksQUFNTixBQVFFLEFBUUgsQUFHRixBQUdFLFNBRmIsRUE3Q3FCLEFBMENyQixBQU1tQixDQXRCRCxDQWxCRixDQU1NLEFBb0JDLElBZG1CLFNBWDNCLENBa0JHLEFBc0JBLEVBaERILElBY0YsTUFMaUQsR0FSMUMsQ0EwQlQsQUFzQlgsQ0FsQ3VCLFFBYUgsS0FSUCxHQWxCYixHQWdDYSxLQWJiLEVBUUEsSUFNZSxhQUMyQixPQXBCMUMsR0FOQSw4QkEyQmlCLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9jb21wb25lbnRzL1BvZGNhc3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYXVkaW9DbGlwcyB9ID0gdGhpcy5wcm9wc1xuXG5cdFx0cmV0dXJuIDw+XG5cdFx0XHQ8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XG4gICAgICB7IGF1ZGlvQ2xpcHMubWFwKChjbGlwKSA9PiAoXG4gICAgICAgIDxMaW5rIHJvdXRlPSdwb2RjYXN0JyBwYXJhbXM9e3tcbiAgICAgICAgICBzbHVnQ2hhbm5lbDogc2x1ZyhjbGlwLmNoYW5uZWwudGl0bGUpLFxuICAgICAgICAgIGlkQ2hhbm5lbDogY2xpcC5jaGFubmVsLmlkLFxuICAgICAgICAgIHNsdWc6IHNsdWcoY2xpcC50aXRsZSksXG4gICAgICAgICAgaWQ6IGNsaXAuaWRcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdwb2RjYXN0Jz5cbiAgICAgICAgICA8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXRhJz5cbiAgICAgICAgICAgICAgeyBNYXRoLmNlaWwoY2xpcC5kdXJhdGlvbiAvIDYwKSB9IG1pbnV0ZXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAuY2hhbm5lbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgIH1cbiAgICAgICAgYS5jaGFubmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb2RjYXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBvZGNhc3QgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdCAubWV0YSB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXHRcdDwvPlxuXHR9XG59Il19 */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/components/PodcastList.js */"));
    }
  }]);

  return PodcastList;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.4db16690f44b36d41a57.hot-update.js.map