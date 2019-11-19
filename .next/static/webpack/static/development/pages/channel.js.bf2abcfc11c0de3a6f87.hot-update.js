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
      var _this$props = this.props,
          audioClips = _this$props.audioClips,
          openPodcast = _this$props.openPodcast;
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
          onClick: openPodcast,
          className: "jsx-1112805590" + " " + 'podcast'
        }, __jsx("h3", {
          className: "jsx-1112805590"
        }, clip.title), __jsx("div", {
          className: "jsx-1112805590" + " " + 'meta'
        }, Math.ceil(clip.duration / 60), " minutes")));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1112805590"
      }, "header.jsx-1112805590{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-1112805590{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-1112805590{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-1112805590 img.jsx-1112805590{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-1112805590{padding:5px;font-size:1.5em;font-weight:600;margin:0;text-align:center;}.podcast.jsx-1112805590{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-1112805590:hover{color:#000;}.podcast.jsx-1112805590 h3.jsx-1112805590{margin:0;}.podcast.jsx-1112805590 .meta.jsx-1112805590{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9jb21wb25lbnRzL1BvZGNhc3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHc0IsQUFRRSxBQU1DLEFBTUksQUFNTixBQVFFLEFBUUgsQUFHRixBQUdFLFNBRmIsRUE3Q3FCLEFBMENyQixBQU1tQixDQXRCRCxDQWxCRixDQU1NLEFBb0JDLElBZG1CLFNBWDNCLENBa0JHLEFBc0JBLEVBaERILElBY0YsTUFMaUQsR0FSMUMsQ0EwQlQsQUFzQlgsQ0FsQ3VCLFFBYUgsS0FSUCxHQWxCYixHQWdDYSxLQWJiLEVBUUEsSUFNZSxhQUMyQixPQXBCMUMsR0FOQSw4QkEyQmlCLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL2Zlcm5hbmRvL0RvY3VtZW50b3MvUGxhdHppL05leHQuanMvcG9kY2FzdC9jb21wb25lbnRzL1BvZGNhc3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYXVkaW9DbGlwcywgb3BlblBvZGNhc3QgfSA9IHRoaXMucHJvcHNcblxuXHRcdHJldHVybiA8PlxuXHRcdFx0PGgyPlVsdGltb3MgUG9kY2FzdHM8L2gyPlxuICAgICAgeyBhdWRpb0NsaXBzLm1hcCgoY2xpcCkgPT4gKFxuICAgICAgICA8TGluayByb3V0ZT0ncG9kY2FzdCcgcGFyYW1zPXt7XG4gICAgICAgICAgc2x1Z0NoYW5uZWw6IHNsdWcoY2xpcC5jaGFubmVsLnRpdGxlKSxcbiAgICAgICAgICBpZENoYW5uZWw6IGNsaXAuY2hhbm5lbC5pZCxcbiAgICAgICAgICBzbHVnOiBzbHVnKGNsaXAudGl0bGUpLFxuICAgICAgICAgIGlkOiBjbGlwLmlkXG4gICAgICAgIH19PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncG9kY2FzdCcgb25DbGljaz17IG9wZW5Qb2RjYXN0IH0gPlxuICAgICAgICAgIDxoMz57IGNsaXAudGl0bGUgfTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21ldGEnPlxuICAgICAgICAgICAgICB7IE1hdGguY2VpbChjbGlwLmR1cmF0aW9uIC8gNjApIH0gbWludXRlc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICAgICAgfVxuICAgICAgICBhLmNoYW5uZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhbm5lbCBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvZGNhc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5wb2RjYXN0OmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wb2RjYXN0IC5tZXRhIHtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdH1cbn0iXX0= */\n/*@ sourceURL=/home/fernando/Documentos/Platzi/Next.js/podcast/components/PodcastList.js */"));
    }
  }]);

  return PodcastList;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.bf2abcfc11c0de3a6f87.hot-update.js.map