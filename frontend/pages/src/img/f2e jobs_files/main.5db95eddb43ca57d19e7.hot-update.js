webpackHotUpdate("main",{

/***/ "./src/component/NavTop.js":
/*!*********************************!*\
  !*** ./src/component/NavTop.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/ButtonCompany */ "./src/component/ButtonCompany.js");
/* harmony import */ var _NavTop_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavTop.css */ "./src/component/NavTop.css");
/* harmony import */ var _NavTop_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_NavTop_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/NavTop.js";






var logo_yourator = __webpack_require__(/*! ../img/youratorlogo.png */ "./src/img/youratorlogo.png");

var logo_104 = __webpack_require__(/*! ../img/104logo.png */ "./src/img/104logo.png");

var logo_meetjobs = __webpack_require__(/*! ../img/meetjobslogo.svg */ "./src/img/meetjobslogo.svg");

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.nav_search_click = function () {
      document.querySelector('.nav_top_search');
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var current_source = this.props.jobs_data.source || 'yourator';
      document.querySelector(".nav_top_".concat(current_source)).classList.remove('nav_top_not_selected');
      document.querySelector(".nav_top_".concat(current_source)).classList.add('nav_top_selected');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var current_source = this.props.jobs_data.source || 'yourator';
      console.log('curr', current_source);
      document.querySelectorAll('.nav_top_option').forEach(function (ele) {
        ele.classList.remove('nav_top_selected');
        ele.classList.add('nav_top_not_selected');
      });
      document.querySelector(".nav_top_".concat(current_source)).classList.remove('nav_top_not_selected');
      document.querySelector(".nav_top_".concat(current_source)).classList.add('nav_top_selected');
      document.querySelector('.jobsContainer').className = "jobsContainer jobsContainer_".concat(current_source);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "nav_top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_yourator nav_top_option nav_top_not_selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_option_p",
        style: {
          pointerEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "yourator")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_meetjobs nav_top_option nav_top_not_selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_option_p",
        style: {
          pointerEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "meetjobs")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_104 nav_top_option nav_top_not_selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_option_p",
        style: {
          pointerEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "104")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_search nav_top_option  nav_top_selected",
        onClick: this.nav_search_click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav_top_option_p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        action: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        style: {
          height: '100%',
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    jobs_data: state.jobs
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {})(Nav));

/***/ })

})
//# sourceMappingURL=main.5db95eddb43ca57d19e7.hot-update.js.map