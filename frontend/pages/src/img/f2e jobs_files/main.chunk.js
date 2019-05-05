(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Banner_favo.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Banner_favo.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner_container {\n  overflow: hidden;\n}\n\n.not_current_banner {\n  position: absolute;\n  top: 0px;\n  -webkit-animation-name: oxxo;\n          animation-name: oxxo;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-transform: translate(2000px, 0);\n          transform: translate(2000px, 0);\n}\n\n.current_banner {\n  -webkit-animation-name: oxxo_2;\n          animation-name: oxxo_2;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.not_default_banner,\n.default_banner {\n  -webkit-animation-duration: 0s;\n          animation-duration: 0s;\n}\n\n.banner {\n  background-color: #654321;\n  display: -webkit-flex;\n  display: flex;\n  background-size: 100% auto;\n  -webkit-align-items: center;\n          align-items: center;\n  position: relative;\n  overflow: hidden;\n  height: 53.6vw;\n  max-height: 612px;\n}\n\n@-webkit-keyframes oxxo {\n  from {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  to {\n    -webkit-transform: translate(-100%, 0px);\n            transform: translate(-100%, 0px);\n  }\n}\n\n@keyframes oxxo {\n  from {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  to {\n    -webkit-transform: translate(-100%, 0px);\n            transform: translate(-100%, 0px);\n  }\n}\n\n@-webkit-keyframes oxxo_2 {\n  from {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n  }\n  to {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n\n@keyframes oxxo_2 {\n  from {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n  }\n  to {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n\n.banner::after {\n  /* content: '';\n  padding-top: 53.74%; */\n}\n\n.bannerText {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  /* background-color: white; */\n  color: #444;\n  -webkit-align-content: center;\n          align-content: center;\n  font-size: 14px;\n}\n\n.bannerLogo {\n  width: 15.6vw;\n  height: 6.24vw;\n  margin-top: 20px;\n  margin-left: 20px;\n  /* background-color: #fff; */\n}\n\n.bannerText p {\n  text-align: center;\n  margin-bottom: 2vw;\n  margin: 0;\n}\n\n@media screen and (min-width: 720px) {\n  .bannerText {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .bannerText {\n    font-size: 28px;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ButtonCompany.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/ButtonCompany.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttonCompanyContainer {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n}\n\n.logo {\n  display: inline-block;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #aaa;\n}\n\n.current_logo {\n  position: relative;\n  z-index: 1;\n}\n.logo_1 {\n  position: absolute;\n  bottom: 60px;\n}\n\n.logo_2 {\n  position: absolute;\n  bottom: 120px;\n}\n\n.down_to_buttom {\n  position: absolute;\n  bottom: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/CardJob.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/CardJob.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".company,\n.jobTitle {\n  display: none;\n  line-height: 22px;\n}\n\n.location {\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.salary {\n  font-size: 15px;\n  line-height: 21px;\n}\n\n.description,\n.description_wide {\n  display: none;\n  color: #666;\n  font-size: 12px;\n  text-align: justify;\n}\n.addToFavo {\n  background-color: #443a42;\n  color: white;\n  text-align: center;\n  padding: 1px;\n  transition: background-color 1s;\n}\n\n.removeFavo {\n  background-color: #ffeacc;\n  text-align: center;\n  padding: 1px;\n  transition: background-color 1s;\n}\n\n.cardJobContainer {\n  width: 420px;\n  margin: 10px;\n}\n\n.jobCard {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  /* box-shadow: 5px 5px 1px 1px rgba(150, 150, 150, 0.1); */\n}\n\n.jobCard:hover {\n  -webkit-transform: translate(-5px, -5px);\n          transform: translate(-5px, -5px);\n  box-shadow: 5px 5px 2px 2px rgba(170, 170, 170, 0.3);\n  cursor: pointer;\n}\n\n.jobCard p {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.companyJobTitle {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.companyJobTitle {\n  display: none;\n}\n\n.company,\n.jobTitle {\n  display: block;\n}\n\n.jobCardImgContainer {\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  position: relative;\n}\n\n.jobCardImgContainer img {\n  /* display: block;\n  margin: 0px auto; */\n  position: absolute;\n  top: -9999px;\n  bottom: -9999px;\n  left: -9999px;\n  right: -9999px;\n  margin: auto;\n}\n\n.jobCardText {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  padding: 10px;\n}\n\n.jobCardText {\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.description {\n  display: none;\n}\n\n.description_wide {\n  display: block;\n}\n\n.jobsContainer {\n  background-color: #fff;\n  position: relative;\n  z-index: 5;\n}\n\n.jobsContainer_yourator {\n  border-top: 3px solid #000dff;\n  border-bottom: 3px solid #000dff;\n  /* border-radius: 0px 0px 10px 10px; */\n}\n.jobsContainer_104 {\n  border-top: 3px solid #f55555;\n  border-bottom: 3px solid #f55555;\n  /* border-radius: 0px 0px 10px 10px; */\n}\n.jobsContainer_meetjobs {\n  border-top: 3px solid #52e5e7;\n  border-bottom: 3px solid #52e5e7;\n  /* border-radius: 0px 0px 10px 10px; */\n}\n\n.jobsContainer_search {\n  border-top: 3px solid #443a42;\n  border-bottom: 3px solid #443a42;\n  /* border-radius: 0px 0px 10px 10px; */\n}\n\n@media screen and (min-width: 760px) {\n  .jobsContainer {\n    padding: 0%;\n  }\n  .cardJobContainer {\n    width: 360px;\n    margin-left: calc((25% - 180px));\n    margin-right: calc((25% - 180px));\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (min-width: 840px) {\n  .jobsContainer {\n    padding: 5%;\n  }\n  .cardJobContainer {\n    width: 360px;\n    margin-left: calc((25% - 180px));\n    margin-right: calc((25% - 180px));\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (min-width: 1140px) {\n  .jobsContainer {\n    padding: 0%;\n  }\n  .cardJobContainer {\n    width: 360px;\n    margin: 10px;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Contents.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Contents.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jobsContainer {\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  -webkit-justify-content: center;\n          justify-content: center;\n  margin: 0px auto 0px auto;\n  padding-top: 20px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.contentsContainer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  background-color: #ffffff;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n}\n\n.page {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  padding: 20px 0px;\n}\n\n@media screen and (min-width: 760px) {\n  .jobsContainer {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n  }\n}\n\n@media screen and (min-width: 1360px) {\n  .jobsContainer {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n  }\n}\n\n/* loading */\n@-webkit-keyframes bouncing-loader {\n  to {\n    opacity: 0.1;\n    -webkit-transform: translate3d(0, -1rem, 0);\n            transform: translate3d(0, -1rem, 0);\n  }\n}\n@keyframes bouncing-loader {\n  to {\n    opacity: 0.1;\n    -webkit-transform: translate3d(0, -1rem, 0);\n            transform: translate3d(0, -1rem, 0);\n  }\n}\n.bouncing-loader {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  margin: auto;\n}\n.bouncing-loader > div {\n  width: 1rem;\n  height: 1rem;\n  margin: 3rem 0.2rem;\n  background: #8385aa;\n  border-radius: 50%;\n  -webkit-animation: bouncing-loader 0.6s infinite alternate;\n          animation: bouncing-loader 0.6s infinite alternate;\n}\n.bouncing-loader > div:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.bouncing-loader > div:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Detail.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Detail.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail_container .bouncing-loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.detail_container .bouncing-loader > div {\n  width: 1rem;\n  height: 1rem;\n  margin: 3rem 0.2rem;\n  background: #8385aa;\n  border-radius: 50%;\n  -webkit-animation: bouncing-loader 0.6s infinite alternate;\n          animation: bouncing-loader 0.6s infinite alternate;\n}\n.detail_container .bouncing-loader > div:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.detail_container .bouncing-loader > div:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n.detail_container {\n  transition: none;\n}\n\n.detail_inside {\n  transition: none;\n  border: 1px solid #aaa;\n  padding: 30px;\n}\n\n.detail_inside * {\n  transition: none;\n}\n.detail_meetjobs_top,\n.detail_yourator_top {\n  margin-top: 20px;\n}\n\n.detail_yourator_img {\n  border-radius: 20px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.detail_meetjobs_img {\n  border-radius: 20px;\n  overflow: hidden;\n  width: 100px;\n  /* height: 100px; */\n}\n\n.detail_yourator_img img {\n  width: 100%;\n}\n\n.detail_meetjobs_img img {\n  width: 100px;\n  /* height: 100px; */\n}\n\n.detail_link_t {\n  margin-top: 30px;\n  font-size: 18px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 10px;\n  text-align: center;\n  border: 1px solid #443a42;\n  background-color: #443a42;\n  color: white;\n}\n\n.detail_link_block_none {\n  height: 0px;\n  overflow: hidden;\n}\n\na:visited {\n  text-decoration: none;\n}\n\n.map_area {\n  width: 100px;\n  max-width: 760px;\n  background-color: #00f;\n}\n\n.detail_s_block {\n  display: -webkit-flex;\n  display: flex;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.detail_s_block_title {\n  width: 100px;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  color: #3a443c;\n}\n.detail_s_block_title p {\n  line-height: 1.8em;\n}\n\n.detail_s_block p {\n  text-align: justify;\n}\n\na {\n  color: white;\n}\n\n.detail_link {\n  width: 100%;\n  height: 50px;\n  background-color: #e5710f;\n  cursor: pointer;\n  border-radius: 20px;\n  text-align: center;\n  line-height: 50px;\n}\n\n.detail_link_block a {\n  display: block;\n  margin-bottom: 20px;\n}\n\n.detail_link_block {\n  margin-top: 20px;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n}\n\n.detail_s_block_c {\n  color: #444;\n  line-height: 1.8em;\n}\n\n.detail_s_block_title {\n  font-weight: 500;\n}\n.detail_google_maps {\n  width: 100%;\n  height: 30vw;\n  border: 0px;\n}\n\n@media screen and (max-width: 760px) {\n  .detail_inside {\n    padding: 30px 10px;\n  }\n}\n\n@media screen and (min-width: 990px) {\n  .detail_yourator_text {\n  }\n  .detail_meetjobs_top,\n  .detail_yourator_top {\n    margin-top: 20px;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-evenly;\n            justify-content: space-evenly;\n  }\n\n  .detail_yourator_img_container {\n    position: relative;\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0;\n    width: 30%;\n    padding: 10px;\n  }\n\n  .detail_meetjobs_img {\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n\n  .detail_yourator_img {\n    border-radius: 20px;\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n\n  .detail_yourator_img img {\n    width: 100%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Favo.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Favo.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favo_container_all {\n  padding: 30px 0px;\n}\n\n.favo_container {\n  /* border: 2px solid #999; */\n  border-radius: 10px;\n}\n\n.favo_container:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.favo_title {\n  height: 40px;\n  line-height: 40px;\n  font-size: 20px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-left: 40px;\n  cursor: pointer;\n}\n\n.favo_title p {\n  pointer-events: none;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  width: 300px;\n  /* border-bottom: 3px solid black; */\n}\n\n.favo_title_meetjobs {\n  background-image: linear-gradient(-45deg, #52e5e7, #130cb7);\n}\n.favo_title_104 {\n  background-image: linear-gradient(-45deg, #fccf31, #f55555);\n}\n.favo_title_yourator {\n  background-image: linear-gradient(-45deg, #52e5e7, #130cb7);\n}\n\n.favo_title_meetjobs,\n.favo_title_104,\n.favo_title_yourator {\n  border-radius: 50%;\n  width: calc(100%-80px);\n  max-width: 1146px;\n  height: 3px;\n  margin-bottom: 10px;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n}\n\n.favo_job {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  overflow: hidden;\n  max-height: 0;\n  -webkit-animation-name: shrink;\n          animation-name: shrink;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.favo_job_expand {\n  -webkit-animation-name: expand;\n          animation-name: expand;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  max-height: 10000px;\n  /* justify-content: center; */\n}\n\n@-webkit-keyframes expand {\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 1000px;\n  }\n}\n\n@keyframes expand {\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 1000px;\n  }\n}\n\n@-webkit-keyframes shrink {\n  from {\n    max-height: 1000px;\n  }\n  to {\n    max-height: 0px;\n  }\n}\n\n@keyframes shrink {\n  from {\n    max-height: 1000px;\n  }\n  to {\n    max-height: 0px;\n  }\n}\n\n.jobsssss {\n  margin: 1.666%;\n}\n\n@media screen and (min-width: 760px) {\n  .favo_job_expand {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n  }\n  .favo_job {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n  }\n}\n\n@media screen and (min-width: 1140px) {\n  .favo_job_expand {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n  }\n\n  .favo_job {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n  }\n  .cardJobContainer {\n    margin: 10px 10px;\n    width: 360px;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Footer.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Footer.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #443a42;\n  /* height: 50px; */\n  color: white;\n  width: 100%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n.footer * {\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.footer p {\n  /* line-height: 50px; */\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Header.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Header.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link_home {\n  display: -webkit-inline-flex;\n  display: inline-flex;\n}\n\n.header {\n  /* position: fixed; */\n  top: 0px;\n  width: 100%;\n  background-color: #443a42;\n  height: 50px;\n  max-height: 50px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n\n.header_logo {\n  -webkit-align-content: center;\n          align-content: center;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.header_logo_img {\n  height: 70%;\n  margin-left: 20px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.header_logo p {\n  text-align: center;\n}\n\n.welcome_button,\n.login_button {\n  margin-right: 20px;\n  margin-top: auto;\n  margin-bottom: auto;\n  padding: 0px 10px;\n  border-radius: 20px;\n}\n\n.welcome_button:hover,\n.login_button:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.welcome_button p,\n.login_button p {\n  color: #fff;\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Login.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Login.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login_background {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  position: relative;\n  z-index: 9;\n  display: none;\n}\n.signup_prompt,\n.login_prompt {\n  width: 70%;\n  height: 70%;\n  max-width: 400px;\n  max-height: 400px;\n  background-color: #fff;\n  margin: auto;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  border-radius: 20px;\n}\n\n.signup_prompt {\n  display: none;\n}\n\n.signup_prompt_container,\n.login_prompt_container {\n  margin: 20px auto auto;\n  width: 80%;\n  padding: 10px;\n}\n\n.signup_prompt_container form input,\n.login_prompt_container form input {\n  margin-top: 5px;\n  /* margin-bottom: 25px; */\n  width: 100%;\n  height: 30px;\n  font-size: 18px;\n  border-radius: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-color: #eee;\n  border: 1px solid #aaa;\n}\n\n.signup_prompt_container form input {\n  margin-bottom: 25px;\n}\n\n.signup_prompt_container form input:focus,\n.login_prompt_container form input:focus {\n  border: transparent;\n  border-color: transparent;\n  background-color: #eee;\n}\n\n.signup_prompt_container form label,\n.login_prompt_container form label {\n  margin-bottom: 10px;\n  letter-spacing: 0.5px;\n}\n\n.signup_bottom_text,\n.login_bottom_text {\n  margin: auto auto 20px auto;\n}\n\n.signup_bottom_text p,\n.login_bottom_text p {\n  pointer-events: none;\n}\n\n.signup_submit,\n.login_submit {\n  outline: none !important;\n  border-radius: 10px;\n  border: 5px solid transparent;\n  background-color: #ffc107;\n  font-size: 20px;\n  padding: 5px 35px;\n  display: block;\n  margin: 0 auto;\n  position: relative;\n}\n\n.signup_submit:hover,\n.login_submit:hover {\n  border: 5px solid transparent;\n  background-color: #dba504;\n  transition: 0.1s;\n}\n.signup_submit:focus,\n.login_submit:focus {\n  box-shadow: 0 0 10px #ffc107;\n  background-color: #c19101;\n  transition: 0.1s;\n}\n\n.password_alert,\n.email_alert {\n  padding-left: 20px;\n  color: red;\n  visibility: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Logout.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Logout.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".log_out_container {\n  position: absolute;\n  padding: 20px 20px;\n  background-color: #443a42;\n  right: 0px;\n  top: 50px;\n  z-index: 5;\n  -webkit-animation-name: log_out_container_show;\n          animation-name: log_out_container_show;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  display: none;\n}\n\n.log_out_container div {\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  background-color: orange;\n  color: #443a42;\n  cursor: pointer;\n}\n\n.logout_check {\n  margin-top: 20px;\n}\n\n.log_out_container_disappear {\n  -webkit-animation-name: log_out_container_show_no_show;\n          animation-name: log_out_container_show_no_show;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n\n  -webkit-transform: translate(300px, 0);\n\n          transform: translate(300px, 0);\n}\n.check_favorite_div,\n.check_favorite {\n  text-decoration: none;\n}\n\n@-webkit-keyframes log_out_container_show_no_show {\n  from {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  to {\n    -webkit-transform: translate(100%, 0px);\n            transform: translate(100%, 0px);\n  }\n}\n\n@keyframes log_out_container_show_no_show {\n  from {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  to {\n    -webkit-transform: translate(100%, 0px);\n            transform: translate(100%, 0px);\n  }\n}\n@-webkit-keyframes log_out_container_show {\n  from {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n  }\n  to {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@keyframes log_out_container_show {\n  from {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n  }\n  to {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Nav.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Nav.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  /* width: 50px; */\n  z-index: 2;\n  width: 50px;\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NavTop.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/NavTop.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav_top {\n  width: 100%;\n  max-width: 1146px;\n  margin: 20px auto 0px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  text-align: center;\n  position: relative;\n}\n\n.nav_top_option {\n  position: relative;\n  width: 25%;\n  max-width: 200px;\n  font-size: 18px;\n  height: 5vw;\n  max-height: 50px;\n  min-height: 22px;\n  border-radius: 15px 15px 0px 0px;\n  color: white;\n}\n\n.nav_top_option_p {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.nav_top_yourator {\n  background-image: linear-gradient(-45deg, #6b73ff, #000dff);\n  /* box-shadow: 5px 5px 7px rgba(100, 100, 100, 0.7); */\n  /* z-index: 10; */\n}\n\n.nav_top_104 {\n  background-image: linear-gradient(-45deg, #fccf31, #f55555);\n  /* box-shadow: 5px 5px 7px rgba(100, 100, 100, 0.7); */\n  /* z-index: 10; */\n}\n\n.nav_top_meetjobs {\n  background-image: linear-gradient(-45deg, #52e5e7, #130cb7);\n  /* box-shadow: 5px 5px 7px rgba(100, 100, 100, 0.7); */\n  /* z-index: 10; */\n}\n\n.nav_top_search {\n  background-image: linear-gradient(-45deg, #eeeeee, #443a42);\n  /* box-shadow: 5px 5px 7px rgba(100, 100, 100, 0.7); */\n  /* z-index: 10; */\n}\n\n.nav_top_not_selected {\n  background-image: none;\n  background-color: #eee;\n  color: #888;\n}\n\n.nav_top_selected {\n  box-shadow: 5px 5px 7px rgba(100, 100, 100, 0.7);\n  z-index: 5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Pages.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Pages.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  background-color: #fff;\n}\n\n.pageButton {\n  width: 30px;\n  height: 30px;\n  background-color: #eee;\n  color: #443a42;\n  line-height: 30px;\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n.pageButton.onThisPage,\n.pageButton:hover {\n  background-color: #443a42;\n  color: #eee;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  position: relative;\n}\n\ninput:focus,\ntextarea {\n  outline: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/main.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  transition: all 0.5s;\n}\n\n.contentsContainer {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 1200px;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  position: relative;\n}\n\n.react_container {\n  width: 100%;\n  max-width: 1146px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  /* min-height: 100vh; */\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\nbody {\n  /* background-color: #eee; */\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/Header */ "./src/component/Header.js");
/* harmony import */ var _component_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/Banner */ "./src/component/Banner.js");
/* harmony import */ var _component_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/Nav */ "./src/component/Nav.js");
/* harmony import */ var _component_NavTop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/NavTop */ "./src/component/NavTop.js");
/* harmony import */ var _component_Contents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/Contents */ "./src/component/Contents.js");
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/Footer */ "./src/component/Footer.js");
/* harmony import */ var _component_Login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/Login */ "./src/component/Login.js");
/* harmony import */ var _component_Logout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/Logout */ "./src/component/Logout.js");
/* harmony import */ var _component_Favo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/Favo */ "./src/component/Favo.js");
/* harmony import */ var _component_Detail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/Detail */ "./src/component/Detail.js");
/* harmony import */ var _component_Banner_favo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/Banner_favo */ "./src/component/Banner_favo.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./action/index */ "./src/action/index.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_20__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/App.js";
 // import logo from './logo.svg';

















var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.logo_click = function (e) {
      if (window.location.href.indexOf('favo') === -1 && window.location.href.indexOf('jobs') === -1) {
        if (_this.props.user_status.status === 'login') {
          if (e.target.className.indexOf('welcome_button') == -1 && e.target.className.indexOf('log_out_container') == -1 && // e.target.className.indexOf('check_favorite') == -1 &&
          e.target.className.indexOf('logout_check') == -1) {
            document.querySelector('.log_out_container').classList.add('log_out_container_disappear');
          }
        }

        if (e.target.className.indexOf('nav_top_yourator') !== -1) {
          _this.props.fetch_jobs({
            page: 'pending',
            source: 'yourator'
          });

          _this.props.fetch_jobs({
            page: 1,
            source: 'yourator'
          }); // document.getElementById('jobsContainer').scrollIntoView();

        } else if (e.target.className.indexOf('nav_top_104') !== -1) {
          _this.props.fetch_jobs({
            page: 'pending',
            source: '104'
          });

          _this.props.fetch_jobs({
            page: 1,
            source: '104'
          }); // document.getElementById('jobsContainer').scrollIntoView();

        } else if (e.target.className.indexOf('nav_top_meetjobs') !== -1) {
          _this.props.fetch_jobs({
            page: 'pending',
            source: 'meetjobs'
          });

          _this.props.fetch_jobs({
            page: 1,
            source: 'meetjobs'
          }); // document.getElementById('jobsContainer').scrollIntoView();

        } else if (e.target.className.indexOf('nav_top_search') !== -1) {
          _this.props.fetch_jobs({
            page: 1,
            source: 'search'
          });
        } else {
          // let not_current_logo = document.querySelectorAll('.not_current_logo');
          // not_current_logo.forEach(e => {
          //   if (e.className.indexOf('down_to_buttom') == -1) {
          //     e.classList.toggle('down_to_buttom');
          //   }
          // });
          if (e.target.className.indexOf('login_button') != -1) {
            document.querySelector('.login_background').style.display = 'flex';
          } else if (e.target.className.indexOf('login_background') != -1) {
            document.querySelector('.login_background').style.display = 'none';
            document.querySelector('.password_alert').style.visibility = 'hidden';
            document.querySelector('.email_alert').style.visibility = 'hidden';
            document.querySelector('#email_login').value = '';
          }
        }
      } else {
        if (_this.props.user_status.status === 'login') {
          if (e.target.className.indexOf('welcome_button') === -1 && e.target.className.indexOf('log_out_container') === -1 && e.target.className.indexOf('logout_check') === -1) {
            document.querySelector('.log_out_container').classList.add('log_out_container_disappear');
          }
        }
      }
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      function getCookie(name) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

      var session_id = getCookie('session_id');
      console.log('cooke', session_id);

      if (session_id) {
        fetch('/checkSessionID', {
          // fetch('http://localhost:80/checkSessionID', {
          credentials: 'include',
          method: 'POST',
          // or 'PUT'
          body: JSON.stringify({
            session_id: session_id
          }),
          // data can be `string` or {object}!
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(function (response) {
          response.json().then(function (e) {
            if (e.result === 'found') {
              _this2.props.login_check_success({
                status: 'login',
                email: e.email,
                name: e.name,
                favorite_job: e.favorite_job || {
                  104: [],
                  yourator: [],
                  meetjobs: []
                },
                session_id: session_id
              });
            } else {
              _this2.props.login_check_fail();
            }
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var top_right;

      if (this.props.user_status.status === 'unknown') {
        top_right = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Login__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: this.logo_click,
        style: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, top_right, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        exact: true,
        component: _component_Banner_favo__WEBPACK_IMPORTED_MODULE_17__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        exact: true,
        component: _component_NavTop__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "react_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contentsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/jobs/:source/:id",
        component: function component(_ref) {
          var match = _ref.match;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Detail__WEBPACK_IMPORTED_MODULE_16__["default"], {
            source: match.params.source,
            id: match.params.id,
            loading: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        exact: true,
        component: _component_Contents__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/favo",
        component: _component_Favo__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    jobs_data: state.jobs,
    user_status: state.user_status
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps, {
  fetch_jobs: _action_index__WEBPACK_IMPORTED_MODULE_19__["fetch_jobs"],
  login_check_success: _action_index__WEBPACK_IMPORTED_MODULE_19__["login_check_success"],
  login_check_fail: _action_index__WEBPACK_IMPORTED_MODULE_19__["login_check_fail"]
})(App));

/***/ }),

/***/ "./src/action/index.js":
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/*! exports provided: fetch_jobs, login_success, login_check_success, login_check_fail, logout, remove_favo, add_favo, change_banner, change_banner_default, update_favo, update_detail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_jobs", function() { return fetch_jobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_success", function() { return login_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_check_success", function() { return login_check_success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_check_fail", function() { return login_check_fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove_favo", function() { return remove_favo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_favo", function() { return add_favo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_banner", function() { return change_banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_banner_default", function() { return change_banner_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_favo", function() { return update_favo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_detail", function() { return update_detail; });
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 // import { log } from 'util';

var fetch_jobs = function fetch_jobs(_ref) {
  var page = _ref.page,
      source = _ref.source;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response, _response, _response2;

        return _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(page === 'pending')) {
                  _context.next = 4;
                  break;
                }

                dispatch({
                  type: 'FETCH_JOBDATA',
                  payload: {
                    source: source,
                    job_list: '',
                    total_page: 1,
                    current_page: page || 1
                  }
                });
                _context.next = 26;
                break;

              case 4:
                if (!(source === 'yourator')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a // .get(`http://localhost:80/yourator?page=${page}`, { withCredentials: true })
                .get("/yourator?page=".concat(page), {
                  withCredentials: true
                }).then(function (e) {
                  return {
                    source: 'yourator',
                    job_list: e.data.jobs,
                    total_page: e.data.totalPage,
                    current_page: page || 1
                  };
                });

              case 7:
                response = _context.sent;
                dispatch({
                  type: 'FETCH_JOBDATA',
                  payload: response
                });
                _context.next = 26;
                break;

              case 11:
                if (!(source === '104')) {
                  _context.next = 18;
                  break;
                }

                _context.next = 14;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/104?page=".concat(page), {
                  withCredentials: true
                }).then(function (e) {
                  return {
                    source: '104',
                    job_list: e.data.jobs,
                    total_page: e.data.totalPage,
                    current_page: page || 1
                  };
                });

              case 14:
                _response = _context.sent;
                dispatch({
                  type: 'FETCH_JOBDATA',
                  payload: _response
                });
                _context.next = 26;
                break;

              case 18:
                if (!(source === 'meetjobs')) {
                  _context.next = 25;
                  break;
                }

                _context.next = 21;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/meetjobs?page=".concat(page), {
                  withCredentials: true
                }).then(function (e) {
                  return {
                    source: 'meetjobs',
                    job_list: e.data.jobs,
                    total_page: e.data.totalPage,
                    current_page: page || 1
                  };
                });

              case 21:
                _response2 = _context.sent;
                dispatch({
                  type: 'FETCH_JOBDATA',
                  payload: _response2
                });
                _context.next = 26;
                break;

              case 25:
                if (source === 'search') {
                  console.log('action search');
                  dispatch({
                    type: 'FETCH_JOBDATA',
                    payload: {
                      source: 'search',
                      job_list: '',
                      total_page: 1,
                      current_page: page || 1
                    }
                  });
                }

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var login_success = function login_success() {
  return {
    type: 'LOGIN_SUCCESS'
  };
};
var login_check_success = function login_check_success(obj) {
  return {
    type: 'LOGIN_CHECK_SUCCESS',
    payload: obj
  };
};
var login_check_fail = function login_check_fail() {
  return {
    type: 'INITIAL_CHECK_FAIL'
  };
};
var logout = function logout() {
  return {
    type: 'LOGOUT'
  };
};
var remove_favo = function remove_favo(obj) {
  return {
    type: 'REMOVE_FAVO',
    payload: obj
  };
};
var add_favo = function add_favo(obj) {
  return {
    type: 'ADD_FAVO',
    payload: obj
  };
};
var change_banner = function change_banner() {
  return {
    type: 'CHANGE_BANNER'
  };
};
var change_banner_default = function change_banner_default() {
  return {
    type: 'CHANGE_BANNER_DEFAULT'
  };
};
var update_favo = function update_favo(obj) {
  return {
    type: 'UPDATE_FAVO',
    payload: obj
  };
};
var update_detail = function update_detail(obj) {
  return {
    type: 'UPDATE_DETAIL',
    payload: obj
  };
};

/***/ }),

/***/ "./src/component/Banner.js":
/*!*********************************!*\
  !*** ./src/component/Banner.js ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action/index */ "./src/action/index.js");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Logout */ "./src/component/Logout.js");
/* harmony import */ var _img_banner_18_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/banner-18.png */ "./src/img/banner-18.png");
/* harmony import */ var _img_banner_18_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_banner_18_png__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Banner.js";



 // import './Banner.css';



var Banner =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner, _Component);

  function Banner() {
    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    return Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner).apply(this, arguments));
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "render",
    value: function render() {
      // let top_right;
      // if (this.props.user_status.status === 'login') {
      //   top_right = <Logout />;
      // }
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "banner",
        style: {
          backgroundImage: "url(".concat(_img_banner_18_png__WEBPACK_IMPORTED_MODULE_9___default.a, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bannerText",
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "WORK LIFE BALANCE"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "ARE YOU READY?")));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // export default Banner;


var mapStateToProps = function mapStateToProps(state) {
  return {
    jobs_data: state.jobs,
    user_status: state.user_status
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  fetch_jobs: _action_index__WEBPACK_IMPORTED_MODULE_7__["fetch_jobs"],
  login_check_success: _action_index__WEBPACK_IMPORTED_MODULE_7__["login_check_success"],
  login_check_fail: _action_index__WEBPACK_IMPORTED_MODULE_7__["login_check_fail"]
})(Banner));

/***/ }),

/***/ "./src/component/Banner_favo.css":
/*!***************************************!*\
  !*** ./src/component/Banner_favo.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Banner_favo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Banner_favo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Banner_favo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Banner_favo.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Banner_favo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Banner_favo.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Banner_favo.js":
/*!**************************************!*\
  !*** ./src/component/Banner_favo.js ***!
  \**************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action/index */ "./src/action/index.js");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Logout */ "./src/component/Logout.js");
/* harmony import */ var _Banner_favo_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Banner_favo.css */ "./src/component/Banner_favo.css");
/* harmony import */ var _Banner_favo_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Banner_favo_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_banner_18_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/banner-18.png */ "./src/img/banner-18.png");
/* harmony import */ var _img_banner_18_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_banner_18_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_banner2_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/banner2.jpeg */ "./src/img/banner2.jpeg");
/* harmony import */ var _img_banner2_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_banner2_jpeg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_banner3_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/banner3.jpeg */ "./src/img/banner3.jpeg");
/* harmony import */ var _img_banner3_jpeg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_banner3_jpeg__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Banner_favo.js";









var Banner =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner, _Component);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.banner_change = function () {
      _this.props.change_banner();

      var banner_status = _this.props.banner_status;
      var banner = document.querySelectorAll('.banner_control');
      banner.forEach(function (ele) {
        ele.classList.remove('default_banner');
        ele.classList.remove('not_default_banner');

        if (ele.className.indexOf(banner_status + 1) !== -1) {
          ele.classList.toggle('current_banner');
          ele.classList.toggle('not_current_banner');
        } else if (ele.className.indexOf((banner_status + 1) % 3 + 1) !== -1) {
          ele.classList.toggle('current_banner');
          ele.classList.toggle('not_current_banner');
        }
      });
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.interval1 = setInterval(this.banner_change, 10000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.interval1);
      this.props.change_banner_default();
    }
  }, {
    key: "render",
    value: function render() {
      var top_right;

      if (this.props.user_status.status === 'login') {
        top_right = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Logout__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      }

      var banner_condition = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "banner_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "current_banner banner_control default_banner banner_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_banner_18_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "banner_ani_2",
        style: {
          width: '100%',
          height: 'auto',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bannerText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "WORK LIFE BALANCE"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "ARE YOU READY?")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "not_current_banner banner_control not_default_banner banner_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_banner2_jpeg__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "banner_ani_2",
        style: {
          width: '100%',
          height: 'auto',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bannerText",
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "STUCK IN LIFE "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "OR"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "STUCK IN EVENT-LOOP")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "not_current_banner banner_control not_default_banner banner_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_banner3_jpeg__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "banner_ani_2",
        style: {
          width: '100%',
          height: 'auto',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bannerText",
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "STUCK IN LIFE "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "OR"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "STUCK IN EVENT-LOOP"))))));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, banner_condition);
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    jobs_data: state.jobs,
    user_status: state.user_status,
    banner_status: state.banner_status
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  fetch_jobs: _action_index__WEBPACK_IMPORTED_MODULE_7__["fetch_jobs"],
  login_check_success: _action_index__WEBPACK_IMPORTED_MODULE_7__["login_check_success"],
  login_check_fail: _action_index__WEBPACK_IMPORTED_MODULE_7__["login_check_fail"],
  change_banner: _action_index__WEBPACK_IMPORTED_MODULE_7__["change_banner"],
  change_banner_default: _action_index__WEBPACK_IMPORTED_MODULE_7__["change_banner_default"]
})(Banner));

/***/ }),

/***/ "./src/component/ButtonCompany.css":
/*!*****************************************!*\
  !*** ./src/component/ButtonCompany.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ButtonCompany.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ButtonCompany.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ButtonCompany.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ButtonCompany.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ButtonCompany.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ButtonCompany.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/ButtonCompany.js":
/*!****************************************!*\
  !*** ./src/component/ButtonCompany.js ***!
  \****************************************/
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
/* harmony import */ var _ButtonCompany_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ButtonCompany.css */ "./src/component/ButtonCompany.css");
/* harmony import */ var _ButtonCompany_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ButtonCompany_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/ButtonCompany.js";



var ButtonCompany =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ButtonCompany, _Component);

  function ButtonCompany() {
    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonCompany);

    return Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ButtonCompany).apply(this, arguments));
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonCompany, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "buttonCompanyContainer".concat(this.props.current_logo == undefined ? ' not_current_logo' : " ".concat(this.props.current_logo), " ").concat(this.props.className, " down_to_buttom"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.imgSRC,
        className: "logo",
        style: {
          pointerEvents: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return ButtonCompany;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ButtonCompany);

/***/ }),

/***/ "./src/component/CardJob.css":
/*!***********************************!*\
  !*** ./src/component/CardJob.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CardJob.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/CardJob.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CardJob.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/CardJob.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CardJob.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/CardJob.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/CardJob.js":
/*!**********************************!*\
  !*** ./src/component/CardJob.js ***!
  \**********************************/
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
/* harmony import */ var _CardJob_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardJob.css */ "./src/component/CardJob.css");
/* harmony import */ var _CardJob_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CardJob_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action/index */ "./src/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/CardJob.js";






var CardJob =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CardJob, _Component);

  function CardJob() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardJob);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CardJob)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.add_to_favo = function (e) {
      var source = e.target.getAttribute('source');
      var jobid = Number(e.target.getAttribute('jobid'));
      fetch('/addFavo', {
        credentials: 'include',
        method: 'POST',
        // or 'PUT'
        body: JSON.stringify({
          source: source,
          jobid: jobid
        }),
        // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function (response) {
        response.json().then(function (data) {
          _this.props.add_favo(JSON.parse(data.favo_list));
        });
      });
    };

    _this.remove_favo = function (e) {
      var source = e.target.getAttribute('source');
      var jobid = Number(e.target.getAttribute('jobid'));
      fetch('/removeFavo', {
        credentials: 'include',
        method: 'POST',
        // or 'PUT'
        body: JSON.stringify({
          source: source,
          jobid: jobid
        }),
        // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function (response) {
        response.json().then(function (data) {
          _this.props.remove_favo(JSON.parse(data.favo_list));
        });
      });
    };

    _this.show_iframe = function (e) {
      if (e.target.className.indexOf('removeFavo') === -1 && e.target.className.indexOf('addToFavo') === -1) {
        console.log('eeeee', e.target.className);
        window.open("/jobs/".concat(_this.props.source, "/").concat(_this.props.jobID), 'f2e_jobs', 'height=1000,width=800');
      }
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CardJob, [{
    key: "render",
    value: function render() {
      var source = this.props.source;
      var jobid = this.props.jobID;
      var isFavo;

      if (this.props.user_status.favorite_job) {
        if (this.props.user_status.favorite_job["".concat(source)].indexOf(Number(jobid)) === -1) {
          isFavo = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "addToFavo",
            jobid: this.props.jobID,
            source: this.props.source,
            onClick: this.add_to_favo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            style: {
              pointerEvents: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "\u52A0\u5165\u6536\u85CF"));
        } else {
          isFavo = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "removeFavo",
            jobid: this.props.jobID,
            source: this.props.source,
            onClick: this.remove_favo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            style: {
              pointerEvents: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, "\u53D6\u6D88\u6536\u85CF"));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cardJobContainer",
        onClick: this.show_iframe,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jobCard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jobCardImgContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.imgSRC,
        className: "jobCardImg",
        width: "100%",
        height: "auto",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jobCardText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "companyJobTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "companySpan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, this.props.company.length > 15 ? "".concat(this.props.company.slice(0, 15), "...") : this.props.company), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "jobTitleSpan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.props.jobTitle.length > 10 ? "".concat(this.props.jobTitle.slice(0, 10), "...") : this.props.jobTitle)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.props.company.length > 30 ? "".concat(this.props.company.slice(0, 30), "...") : this.props.company), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "jobTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.props.jobTitle.length > 20 ? "".concat(this.props.jobTitle.slice(0, 20), "...") : this.props.jobTitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "salary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, this.props.salary.length > 30 ? "".concat(this.props.salary.slice(0, 30), "...") : this.props.salary), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.props.location.length > 20 ? "".concat(this.props.location.slice(0, 20), "...") : this.props.location), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "description_wide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.props.description.length < 2 ? '無' : this.props.description.length > 30 ? "".concat(this.props.description.slice(0, 30), "...") : this.props.description), isFavo)));
    }
  }]);

  return CardJob;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user_status: state.user_status
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  add_favo: _action_index__WEBPACK_IMPORTED_MODULE_7__["add_favo"],
  remove_favo: _action_index__WEBPACK_IMPORTED_MODULE_7__["remove_favo"]
})(CardJob));

/***/ }),

/***/ "./src/component/Contents.css":
/*!************************************!*\
  !*** ./src/component/Contents.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Contents.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Contents.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Contents.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Contents.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Contents.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Contents.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Contents.js":
/*!***********************************!*\
  !*** ./src/component/Contents.js ***!
  \***********************************/
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
/* harmony import */ var _CardJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardJob */ "./src/component/CardJob.js");
/* harmony import */ var _Contents_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contents.css */ "./src/component/Contents.css");
/* harmony import */ var _Contents_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Contents_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../action/index */ "./src/action/index.js");
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages */ "./src/component/Pages.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_default_104_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/default_104.png */ "./src/img/default_104.png");
/* harmony import */ var _img_default_104_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_default_104_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_default_yourator_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/default_yourator.png */ "./src/img/default_yourator.png");
/* harmony import */ var _img_default_yourator_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_default_yourator_png__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Contents.js";










var Contents =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contents, _Component);

  function Contents() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contents)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.changePage = function (page, source) {
      document.getElementById('jobsContainer').scrollIntoView();

      _this.props.fetch_jobs({
        page: 'pending',
        source: source
      });

      _this.props.fetch_jobs({
        page: page,
        source: source
      });
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetch_jobs({
        source: 'yourator',
        page: 1
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {// document.getElementById('jobsContainer').scrollIntoView();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.jobs_data.jobs.job_list.length < 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "jobsContainer",
          id: "jobsContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "bouncing-loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }))));
      } else {
        var allJobs = this.props.jobs_data.jobs.job_list.map(function (e, id) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CardJob__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: id,
            imgSRC: (e.company_picture !== 'undefined' ? e.company_picture : _img_default_yourator_png__WEBPACK_IMPORTED_MODULE_13___default.a) || (e.picture !== 'undefined' ? e.picture : _img_default_104_png__WEBPACK_IMPORTED_MODULE_12___default.a),
            company: e.company_name,
            jobTitle: e.job_name,
            location: e.location,
            salary: e.salary,
            description: e.skill_tag || e.skill || e.job_description,
            jobID: e.job_id,
            source: e.job_source,
            link_job: e.link_job,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          });
        });
        var pageArea = [];

        if (this.props.jobs_data.jobs.total_page <= 9) {
          for (var i = 1; i <= this.props.jobs_data.jobs.total_page; i++) {
            if (this.props.jobs_data.jobs.current_page == i) {
              pageArea.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Pages__WEBPACK_IMPORTED_MODULE_10__["default"], {
                key: i,
                page: "".concat(i),
                source: this.props.jobs_data.jobs.source,
                changePage: this.changePage,
                focus: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                },
                __self: this
              }));
            } else {
              pageArea.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Pages__WEBPACK_IMPORTED_MODULE_10__["default"], {
                key: i,
                page: "".concat(i),
                source: this.props.jobs_data.jobs.source,
                changePage: this.changePage,
                focus: false,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              }));
            }
          }
        } else {
          for (var _i = this.props.jobs_data.jobs.current_page - 4; _i <= this.props.jobs_data.jobs.total_page; _i++) {
            if (_i > 0) {
              if (this.props.jobs_data.jobs.current_page == _i) {
                pageArea.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Pages__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  key: _i,
                  page: "".concat(_i),
                  source: this.props.jobs_data.jobs.source,
                  changePage: this.changePage,
                  focus: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  },
                  __self: this
                }));
              } else {
                pageArea.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Pages__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  key: _i,
                  page: "".concat(_i),
                  source: this.props.jobs_data.jobs.source,
                  changePage: this.changePage,
                  focus: false,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  },
                  __self: this
                }));
              }
            }

            if (pageArea.length >= 9) {
              break;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "jobsContainer",
          id: "jobsContainer",
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, allJobs), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, pageArea));
      }
    }
  }]);

  return Contents;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    jobs_data: state
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  fetch_jobs: _action_index__WEBPACK_IMPORTED_MODULE_9__["fetch_jobs"]
})(Contents));

/***/ }),

/***/ "./src/component/Detail.css":
/*!**********************************!*\
  !*** ./src/component/Detail.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Detail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Detail.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Detail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Detail.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Detail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Detail.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Detail.js":
/*!*********************************!*\
  !*** ./src/component/Detail.js ***!
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
/* harmony import */ var _Detail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Detail.css */ "./src/component/Detail.css");
/* harmony import */ var _Detail_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Detail_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../action/index */ "./src/action/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Detail.js";






var Detail =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Detail, _Component);

  function Detail() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Detail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Detail)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loading: _this.props.loading
    };
    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Detail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        loading: true
      });
      var source = this.props.source;
      var id = this.props.id;
      fetch("/find?source=".concat(source, "&id=").concat(id)).then(function (response) {
        return response.json();
      }).then(function (e) {
        _this2.props.update_detail(e.data[0]);

        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      var content;

      if (this.state.loading) {
        content = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "bouncing-loader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }));
      } else {
        if (this.props.detail.job_source === '104') {
          content = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_inside",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_t",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, "\u516C\u53F8\u8CC7\u8A0A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_company_name detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, "\u516C\u53F8\u540D\u7A31\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, this.props.detail.company_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_addr detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "\u516C\u53F8\u5730\u5740\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, this.props.detail.address)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_brief detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, "\u516C\u53F8\u7C21\u4ECB\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, this.props.detail.company_brief)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_brief detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, "\u516C\u53F8\u7522\u54C1\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, this.props.detail.company_product)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, "\u516C\u53F8\u898F\u6A21\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, " ", this.props.detail.company_scale === 'undefined' ? '未提供' : this.props.detail.company_scale))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_t",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, "\u8077\u7F3A\u8CC7\u8A0A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, "\u8077\u7F3A\u540D\u7A31\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, this.props.detail.job_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, "\u61C9\u5FB5\u4EBA\u6578\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, this.props.detail.apply_amount)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, "\u5B78\u6B77\u9650\u5236\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, this.props.detail.degree)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }, "\u79D1\u7CFB\u9650\u5236\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, this.props.detail.industry)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, "\u9700\u6C42\u4EBA\u6578\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, this.props.detail.require_amount)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, "\u9700\u8981\u6280\u80FD\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, this.props.detail.skill)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, "\u8A9E\u8A00\u80FD\u529B\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          }, this.props.detail.language)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, "\u5DE5\u4F5C\u7D93\u9A57\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, this.props.detail.work_exp)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }, "\u8077\u7F3A\u4ECB\u7D39\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            dangerouslySetInnerHTML: {
              __html: this.props.detail.job_description
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          }, "\u51FA\u5DEE\u5916\u6D3E\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, this.props.detail.trip)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, "\u798F\u5229\u653F\u7B56\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            dangerouslySetInnerHTML: {
              __html: this.props.detail.benefit
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, "\u4F11\u5047\u653F\u7B56\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, this.props.detail.holiday)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, "\u5DE5\u4F5C\u5F62\u5F0F\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, this.props.detail.type)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, "\u85AA\u8CC7\u7BC4\u570D\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, this.props.detail.salary)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, "\u66F4\u65B0\u65E5\u671F\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, this.props.detail.update_date.slice(0, 10))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "map_area",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
            className: "detail_google_maps",
            src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCHKoH-wKQEpEMniWfRrxcBblm0OEowDU0&q=".concat(this.props.detail.address, "&language=zh-TW\t"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: 'https://' + this.props.detail.link_job,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              textDecoration: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }, "\u5230 104 \u770B\u5DE5\u4F5C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: 'https://' + this.props.detail.link_company,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              textDecoration: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }, "\u5230 104 \u770B\u516C\u53F8"))));
        } else if (this.props.detail.job_source === 'yourator') {
          content = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_inside",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_t",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }, "\u516C\u53F8\u8CC7\u8A0A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_yourator_top",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_yourator_img_container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_yourator_img",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: this.props.detail.company_picture,
            alt: "",
            srcset: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_yourator_text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_company_name detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }, "\u516C\u53F8\u540D\u7A31\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          }, this.props.detail.company_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_addr detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }, "\u516C\u53F8\u5730\u5740\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 214
            },
            __self: this
          }, this.props.detail.address)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_brief detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }, "\u516C\u53F8\u7C21\u4ECB\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }, this.props.detail.company_description === null ? '未提供' : this.props.detail.company_description)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, "\u516C\u53F8\u898F\u6A21\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, " ", this.props.detail.company_scale === 'undefined' ? '未提供' : this.props.detail.company_scale)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 230
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }, "\u7522\u696D\u6A19\u7C64\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, " ", this.props.detail.company_tag === 'undefined' ? '未提供' : this.props.detail.company_tag)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_t",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 238
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          }, "\u8077\u7F3A\u8CC7\u8A0A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 242
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            },
            __self: this
          }, "\u8077\u7F3A\u540D\u7A31\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }, this.props.detail.job_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 248
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            },
            __self: this
          }, "\u9700\u8981\u6280\u80FD\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 252
            },
            __self: this
          }, this.props.detail.skill_tag)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          }, "\u689D\u4EF6\u8981\u6C42\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            dangerouslySetInnerHTML: {
              __html: this.props.detail.requirements
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 263
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 264
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            },
            __self: this
          }, "\u8077\u7F3A\u4ECB\u7D39\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            dangerouslySetInnerHTML: {
              __html: this.props.detail.job_description
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 272
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 273
            },
            __self: this
          }, "\u798F\u5229\u653F\u7B56\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            dangerouslySetInnerHTML: {
              __html: this.props.detail.benefits
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 276
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 281
            },
            __self: this
          }, "\u85AA\u8CC7\u7BC4\u570D\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 283
            },
            __self: this
          }, this.props.detail.salary)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "map_area",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
            className: "detail_google_maps",
            src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCHKoH-wKQEpEMniWfRrxcBblm0OEowDU0&q=".concat(this.props.detail.address, "&language=zh-TW\t"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 287
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 292
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: this.props.detail.link_job,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              textDecoration: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 294
            },
            __self: this
          }, "\u5230 yourator \u770B\u5DE5\u4F5C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: this.props.detail.link_company,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              textDecoration: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            },
            __self: this
          }, "\u5230 yourator \u770B\u516C\u53F8"))));
        } else if (this.props.detail.job_source === 'meetjobs') {
          content = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_inside",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_t",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            },
            __self: this
          }, "\u516C\u53F8\u8CC7\u8A0A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_meetjobs_top",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 309
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_meetjobs_img_container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 310
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_meetjobs_img",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 311
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: this.props.detail.picture,
            alt: "",
            srcset: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 312
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_yourator_text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 315
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_company_name detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 316
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 317
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 318
            },
            __self: this
          }, "\u516C\u53F8\u540D\u7A31\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            },
            __self: this
          }, this.props.detail.company_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_addr detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 322
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 323
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            },
            __self: this
          }, "\u516C\u53F8\u5730\u5740\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 326
            },
            __self: this
          }, this.props.detail.address)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 329
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 331
            },
            __self: this
          }, "\u516C\u53F8\u898F\u6A21\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 333
            },
            __self: this
          }, ' ', this.props.detail.company_scale === 'null' ? '未提供' : this.props.detail.company_scale.indexOf('not') === -1 ? this.props.detail.company_scale + ' 人' : '未提供')))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_t",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 345
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 346
            },
            __self: this
          }, "\u8077\u7F3A\u8CC7\u8A0A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 348
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 349
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 350
            },
            __self: this
          }, "\u8077\u7F3A\u540D\u7A31\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 352
            },
            __self: this
          }, this.props.detail.job_name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 355
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 356
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 357
            },
            __self: this
          }, "\u8077\u7F3A\u4ECB\u7D39\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            dangerouslySetInnerHTML: {
              __html: this.props.detail.job_description
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 362
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }, "\u6280\u80FD\u6A19\u7C64\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 366
            },
            __self: this
          }, this.props.detail.skill_tag ? this.props.detail.skill_tag : '未提供')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 369
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 370
            },
            __self: this
          }, "\u85AA\u8CC7\u7BC4\u570D\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372
            },
            __self: this
          }, this.props.detail.salary)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_job_scale detail_s_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 374
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_s_block_title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 375
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 376
            },
            __self: this
          }, "\u66F4\u65B0\u65E5\u671F\uFF1A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "detail_s_block_c",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 378
            },
            __self: this
          }, this.props.detail.appear_date.slice(0, 10))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "map_area",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 381
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
            className: "detail_google_maps",
            src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCHKoH-wKQEpEMniWfRrxcBblm0OEowDU0&q=".concat(this.props.detail.address).concat(this.props.detail.address.toString().match(/[\u3400-\u9FBF]/) ? '&language=zh-TW' : ''),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link_block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 389
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: this.props.detail.link_job,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              textDecoration: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 390
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 391
            },
            __self: this
          }, "\u5230 meetjobs \u770B\u5DE5\u4F5C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: this.props.detail.link_company,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              textDecoration: 'none'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 393
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "detail_link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 394
            },
            __self: this
          }, "\u5230 meetjobs \u770B\u516C\u53F8"))));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, content);
    }
  }]);

  return Detail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.detail
  };
}; // export default Contents;


var DetailWitRouter = Object(react_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Detail);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  update_detail: _action_index__WEBPACK_IMPORTED_MODULE_8__["update_detail"]
})(DetailWitRouter));

/***/ }),

/***/ "./src/component/Favo.css":
/*!********************************!*\
  !*** ./src/component/Favo.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Favo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Favo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Favo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Favo.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Favo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Favo.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Favo.js":
/*!*******************************!*\
  !*** ./src/component/Favo.js ***!
  \*******************************/
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
/* harmony import */ var _CardJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardJob */ "./src/component/CardJob.js");
/* harmony import */ var _Favo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Favo.css */ "./src/component/Favo.css");
/* harmony import */ var _Favo_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Favo_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../action/index */ "./src/action/index.js");
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages */ "./src/component/Pages.js");
/* harmony import */ var _img_default_104_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/default_104.png */ "./src/img/default_104.png");
/* harmony import */ var _img_default_104_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_default_104_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_default_yourator_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/default_yourator.png */ "./src/img/default_yourator.png");
/* harmony import */ var _img_default_yourator_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_default_yourator_png__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Favo.js";









var Favo =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Favo, _Component);

  function Favo() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Favo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Favo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.changePage = function (page, source) {
      _this.props.fetch_jobs({
        page: page,
        source: source
      });

      document.getElementById('jobsContainer').scrollIntoView(); // fetch
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Favo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.favo) {
        var favo = this.props.favo;
        fetch('/favo', {
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify({
            favo: favo
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(function (response) {
          console.log('rrrrr', response);
          response.json().then(function (e) {
            _this2.props.update_favo(e.data);
          });
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (this.props.favo_job.length === 0) {
        var favo = this.props.favo;
        fetch('/favo', {
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify({
            favo: favo
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(function (response) {
          console.log('eeeee', response);
          response.json().then(function (e) {
            _this3.props.update_favo(e.data);
          });
        });
      }
    }
  }, {
    key: "toggle_expand",
    value: function toggle_expand(e) {
      if (e.target.className.indexOf('favo_title') !== -1) {
        e.target.nextSibling.classList.toggle('favo_job_expand');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var favo_yourator = '';
      var length_favo_yourator = 0;

      if (this.props.favo_job) {
        length_favo_yourator = this.props.favo_job['yourator'].length;
        favo_yourator = this.props.favo_job['yourator'].map(function (e) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CardJob__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: e.id,
            imgSRC: e.company_picture,
            company: e.company_name,
            jobTitle: e.job_name,
            location: e.location,
            salary: e.salary,
            description: e.skill_tag,
            jobID: e.job_id,
            source: e.job_source,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          });
        });
      }

      var favo_104 = '';
      var length_favo_104 = 0;

      if (this.props.favo_job) {
        length_favo_104 = this.props.favo_job['104'].length;
        console.log('104', this.props.favo_job['104']);
        favo_104 = this.props.favo_job['104'].map(function (e) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CardJob__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: e.id,
            imgSRC: (e.company_picture !== 'undefined' ? e.company_picture : _img_default_yourator_png__WEBPACK_IMPORTED_MODULE_12___default.a) || (e.picture !== 'undefined' ? e.picture : _img_default_104_png__WEBPACK_IMPORTED_MODULE_11___default.a),
            company: e.company_name,
            jobTitle: e.job_name,
            location: e.location,
            salary: e.salary,
            description: e.skill_tag || e.job_description,
            jobID: e.job_id,
            source: e.job_source,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          });
        });
      }

      var favo_meetjobs = '';
      var length_favo_meetjobs = 0;

      if (this.props.favo_job) {
        length_favo_meetjobs = this.props.favo_job['meetjobs'].length;
        console.log('meetjobs', this.props.favo_job['meetjobs']);
        favo_meetjobs = this.props.favo_job['meetjobs'].map(function (e) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CardJob__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: e.id,
            imgSRC: (e.company_picture !== 'undefined' ? e.company_picture : _img_default_yourator_png__WEBPACK_IMPORTED_MODULE_12___default.a) || (e.picture !== 'undefined' ? e.picture : _img_default_104_png__WEBPACK_IMPORTED_MODULE_11___default.a),
            company: e.company_name,
            jobTitle: e.job_name,
            location: e.location,
            salary: e.salary,
            description: e.skill_tag || e.job_description,
            jobID: e.job_id,
            source: e.job_source,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_container_all",
        onClick: function onClick(e) {
          _this4.toggle_expand(e);

          console.log(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_yourator_container favo_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "yourator (", length_favo_yourator, ")"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_title_yourator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_job favo_job_expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, favo_yourator, " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_104_container favo_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "104 (", length_favo_104, ")"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_title_104",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_job favo_job_expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, favo_104)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_meetjobs_container favo_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "meetjobs (", length_favo_meetjobs, ")"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_title_meetjobs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "favo_job favo_job_expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, favo_meetjobs, " ")));
    } // render() {
    //   if (this.props.jobs_data.jobs.job_list.length < 1) {
    //     return (
    //       <>
    //         <div className='jobsContainer' id='jobsContainer' style={{}}>
    //           <div>loading</div>
    //         </div>
    //       </>
    //     );
    //   } else {
    //     let allJobs = this.props.jobs_data.jobs.job_list.map((e, id) => {
    //       return (
    //         <CardJob
    //           key={id}
    //           imgSRC={e.company_picture}
    //           company={e.company_name}
    //           jobTitle={e.job_name}
    //           location={e.location}
    //           salary={e.salary}
    //           description={e.skill_tag}
    //           jobID={e.job_id}
    //           source={e.job_source}
    //         />
    //       );
    //     });
    //     let pageArea = [];
    //     for (let i = 1; i <= this.props.jobs_data.jobs.total_page; i++) {
    //       if (this.props.jobs_data.jobs.current_page == i) {
    //         pageArea.push(
    //           <Pages
    //             key={i}
    //             page={`${i}`}
    //             source={this.props.jobs_data.jobs.source}
    //             changePage={this.changePage}
    //             focus={true}
    //           />
    //         );
    //       } else {
    //         pageArea.push(
    //           <Pages
    //             key={i}
    //             page={`${i}`}
    //             source={this.props.jobs_data.jobs.source}
    //             changePage={this.changePage}
    //             focus={false}
    //           />
    //         );
    //       }
    //     }
    //     return (
    //       <>
    //         <div
    //           className='jobsContainer'
    //           id='jobsContainer'
    //           style={{ backgroundColor: '#ffffff', display: 'flex', flexWrap: 'wrap' }}
    //         >
    //           {allJobs}
    //         </div>
    //         <div className='page'>{pageArea}</div>
    //       </>
    //     );
    //   }
    // }

  }]);

  return Favo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    favo: state.user_status.favorite_job,
    favo_job: state.favo_job
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  fetch_jobs: _action_index__WEBPACK_IMPORTED_MODULE_9__["fetch_jobs"],
  update_favo: _action_index__WEBPACK_IMPORTED_MODULE_9__["update_favo"]
})(Favo));

/***/ }),

/***/ "./src/component/Footer.css":
/*!**********************************!*\
  !*** ./src/component/Footer.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Footer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Footer.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Footer.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Footer.js":
/*!*********************************!*\
  !*** ./src/component/Footer.js ***!
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
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.css */ "./src/component/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Footer.js";




var logo = __webpack_require__(/*! ../img/logo-2.svg */ "./src/img/logo-2.svg");

var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer() {
    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: logo,
        alt: "",
        width: "50px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "\xA92019 ALL RIGHT RESERVED. "));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/component/Header.css":
/*!**********************************!*\
  !*** ./src/component/Header.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Header.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Header.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Header.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Header.js":
/*!*********************************!*\
  !*** ./src/component/Header.js ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.css */ "./src/component/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_logo_1_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/logo-1.svg */ "./src/img/logo-1.svg");
/* harmony import */ var _img_logo_1_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_logo_1_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Logout */ "./src/component/Logout.js");





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Header.js";







var Header =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.welcome_button_click = function () {
      document.querySelector('.log_out_container').style.display = 'block';
      document.querySelector('.log_out_container').classList.toggle('log_out_container_disappear');
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var top_right;

      if (this.props.user_status.status === 'login') {
        top_right = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Logout__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        });
      }

      var login_block;

      if (this.props.user_status.status === 'unknown') {
        login_block = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "login_button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          style: {
            pointerEvents: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "\u767B\u5165"), ' ');
      } else if (this.props.user_status.status === 'login') {
        login_block = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "welcome_button",
          onClick: this.welcome_button_click,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          style: {
            pointerEvents: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "hello, ", this.props.user_status.name));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "header",
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/",
        className: "link_home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "header_logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "header_logo_img",
        src: _img_logo_1_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))), login_block, top_right);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user_status: state.user_status
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {})(Header));

/***/ }),

/***/ "./src/component/Login.css":
/*!*********************************!*\
  !*** ./src/component/Login.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Login.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Login.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Login.js":
/*!********************************!*\
  !*** ./src/component/Login.js ***!
  \********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Login.css */ "./src/component/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Login.js";





var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.sign_change = function (e) {
      if (e.target.className.indexOf('login_bottom_text') != -1) {
        document.querySelector('.login_prompt').style.display = 'none';
        document.querySelector('.signup_prompt').style.display = 'flex';
      } else if (e.target.className.indexOf('signup_bottom_text') != -1) {
        document.querySelector('.login_prompt').style.display = 'flex';
        document.querySelector('.signup_prompt').style.display = 'none';
      }
    };

    _this.login_submit = function (e) {
      e.preventDefault();
      var email = document.querySelector('#email_login').value;
      var password = document.querySelector('#password_login').value;
      fetch('/signIn', {
        credentials: 'include',
        method: 'POST',
        // or 'PUT'
        body: JSON.stringify({
          email: email,
          password: password
        }),
        // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function (response) {
        response.json().then(function (e) {
          console.log(e.signIn);
          document.querySelector('#password_login').value = '';

          if (e.signIn == 'wrong_password') {
            document.querySelector('.password_alert').style.visibility = 'visible';
          } else if (e.signIn == 'email_not_found') {
            document.querySelector('.email_alert').style.visibility = 'visible';
          } else if (e.signIn == 'success') {
            console.log('sign', e);

            _this.props.login_check_success({
              status: 'login',
              email: e.email,
              name: e.name,
              favorite_job: JSON.parse(e.favorite_job)
            });

            window.alert('登入成功');
          }
        });
      });
    };

    _this.signup_submit = function (e) {
      e.preventDefault();
      var name = document.querySelector('#name_signup').value;
      var email = document.querySelector('#email_signup').value;
      var password = document.querySelector('#password_signup').value;
      fetch('/signup', {
        credentials: 'include',
        method: 'POST',
        // or 'PUT'
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function (response) {
        response.json().then(function (e) {
          console.log(e.signIn);
          document.querySelector('#password_login').value = '';

          if (e.signUp === 'already_singUp') {
            document.querySelector('.password_alert').style.visibility = 'visible';
          } else if (e.signUp == 'success') {
            var getCookie = function getCookie(name) {
              var value = '; ' + document.cookie;
              var parts = value.split('; ' + name + '=');
              if (parts.length === 2) return parts.pop().split(';').shift();
            };

            var session_id = getCookie('session_id');
            console.log('cooke', session_id);

            if (session_id) {
              fetch('/checkSessionID', {
                // fetch('http://localhost:80/checkSessionID', {
                credentials: 'include',
                method: 'POST',
                // or 'PUT'
                body: JSON.stringify({
                  session_id: session_id
                }),
                // data can be `string` or {object}!
                headers: new Headers({
                  'Content-Type': 'application/json'
                })
              }).then(function (response) {
                response.json().then(function (e) {
                  if (e.result === 'found') {
                    _this.props.login_check_success({
                      status: 'login',
                      email: e.email,
                      name: e.name,
                      favorite_job: e.favorite_job,
                      session_id: session_id
                    });

                    window.alert('註冊成功');
                  }
                });
              });
            }
          } else {
            window.alert(e.signUp);
          }
        });
      });
    };

    _this.hidden_email_alert = function () {
      document.querySelector('.email_alert').style.visibility = 'hidden';
    };

    _this.hidden_password_alert = function () {
      document.querySelector('.password_alert').style.visibility = 'hidden';
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      var login_message;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "login_background",
        onClick: this.sign_change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "login_prompt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "login_prompt_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: this.login_submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "email_login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        id: "email_login",
        placeholder: "jim123@gmail.com",
        required: true,
        onChange: this.hidden_email_alert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "email_alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "email \u5C1A\u672A\u8A3B\u518A"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "password_login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "password",
        id: "password_login",
        placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF",
        required: true,
        minLength: "4",
        maxLength: "16",
        onChange: this.hidden_password_alert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "password_alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "\u5BC6\u78BC\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "login_submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "\u767B\u5165"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "login_bottom_text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "\u9084\u6C92\u6709\u5E33\u865F\uFF1F\u6309\u9019\u88E1\u8A3B\u518A"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "signup_prompt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "signup_prompt_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: this.signup_submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "name_signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "name",
        id: "name_signup",
        placeholder: "jimjim",
        required: true,
        minLength: "4",
        maxLength: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "email_signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        id: "email_signup",
        placeholder: "jim123@gmail.com",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "password_signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "password",
        id: "password_signup",
        placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF",
        required: true,
        minLength: "4",
        maxLength: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "signup_submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "\u8A3B\u518A"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "signup_bottom_text",
        onClick: this.sign_change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "\u5DF2\u7D93\u6709\u5E33\u865F\uFF1F\u6309\u9019\u88E1\u767B\u5165"))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    login_status: state.login_status
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  login_check_success: _action__WEBPACK_IMPORTED_MODULE_7__["login_check_success"]
})(Login));

/***/ }),

/***/ "./src/component/Logout.css":
/*!**********************************!*\
  !*** ./src/component/Logout.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Logout.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Logout.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Logout.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Logout.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Logout.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Logout.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Logout.js":
/*!*********************************!*\
  !*** ./src/component/Logout.js ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Logout_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Logout.css */ "./src/component/Logout.css");
/* harmony import */ var _Logout_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Logout_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Logout.js";






var Logout =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Logout, _Component);

  function Logout() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Logout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Logout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.logout_button_click = function () {
      var session_id = _this.props.login_status.session_id;
      console.log(_this.props.login_status.session_id);
      fetch('/logout', {
        credentials: 'include',
        method: 'POST',
        // or 'PUT'
        body: JSON.stringify({
          session_id: session_id
        }),
        // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function (response) {
        response.json().then(function (e) {
          console.log(e);

          if (e.result === 'success') {
            _this.props.logout();
          }
        });
      });
      document.cookie = 'session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      window.alert('登出成功');
      window.location = '/';
    };

    return _this;
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Logout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "log_out_container log_out_container_disappear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/favo",
        className: "check_favorite_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "check_favorite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u67E5\u770B\u6536\u85CF")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logout_check",
        onClick: this.logout_button_click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\u767B\u51FA"));
    }
  }]);

  return Logout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    login_status: state.user_status
  };
}; // export default Contents;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  logout: _action__WEBPACK_IMPORTED_MODULE_7__["logout"]
})(Logout));

/***/ }),

/***/ "./src/component/Nav.css":
/*!*******************************!*\
  !*** ./src/component/Nav.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Nav.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Nav.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Nav.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Nav.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Nav.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Nav.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Nav.js":
/*!******************************!*\
  !*** ./src/component/Nav.js ***!
  \******************************/
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
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Nav.css */ "./src/component/Nav.css");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Nav_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Nav.js";





var logo_yourator = __webpack_require__(/*! ../img/youratorlogo.png */ "./src/img/youratorlogo.png");

var logo_104 = __webpack_require__(/*! ../img/104logo.png */ "./src/img/104logo.png");

var logo_meetjobs = __webpack_require__(/*! ../img/meetjobslogo.svg */ "./src/img/meetjobslogo.svg");

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav, _Component);

  function Nav() {
    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    return Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).apply(this, arguments));
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      var current_logo = '';

      if (this.props.jobs_data.source.length > 1) {
        switch (this.props.jobs_data.source) {
          case 'yourator':
            current_logo = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_yourator,
              current_logo: 'current_logo',
              className: "logo_0 yourator",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_104,
              className: "logo_1 104",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_meetjobs,
              className: "logo_2 meetjobs",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            }));
            break;

          case '104':
            current_logo = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_104,
              current_logo: 'current_logo',
              className: "logo_0 104",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_meetjobs,
              className: "logo_1 meetjobs",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_yourator,
              className: "logo_2 yourator",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            }));
            break;

          default:
            current_logo = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_meetjobs,
              current_logo: 'current_logo',
              className: "logo_0 meetjobs",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_yourator,
              className: "logo_1 yourator",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
              imgSRC: logo_104,
              className: "logo_2 104",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            }));
            break;
        }
      } else {
        current_logo = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
          imgSRC: logo_yourator,
          current_logo: 'current_logo',
          className: "logo_0 yourator",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
          imgSRC: logo_104,
          className: "logo_1 104",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ButtonCompany__WEBPACK_IMPORTED_MODULE_6__["default"], {
          imgSRC: logo_meetjobs,
          className: "logo_2 meetjobs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, current_logo);
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

/***/ }),

/***/ "./src/component/NavTop.css":
/*!**********************************!*\
  !*** ./src/component/NavTop.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NavTop.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NavTop.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NavTop.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NavTop.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NavTop.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NavTop.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

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

/***/ }),

/***/ "./src/component/Pages.css":
/*!*********************************!*\
  !*** ./src/component/Pages.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Pages.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Pages.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Pages.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Pages.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Pages.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Pages.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Pages.js":
/*!********************************!*\
  !*** ./src/component/Pages.js ***!
  \********************************/
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
/* harmony import */ var _Pages_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages.css */ "./src/component/Pages.css");
/* harmony import */ var _Pages_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Pages_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/component/Pages.js";



var Pages =
/*#__PURE__*/
function (_Component) {
  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Pages, _Component);

  function Pages() {
    Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pages);

    return Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pages).apply(this, arguments));
  }

  Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pages, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "PageButtonContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.props.focus == true ? 'pageButton onThisPage' : 'pageButton',
        onClick: function onClick() {
          _this.props.changePage(_this.props.page, _this.props.source);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, this.props.page));
    }
  }]);

  return Pages;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pages);

/***/ }),

/***/ "./src/img/104logo.png":
/*!*****************************!*\
  !*** ./src/img/104logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/104logo.05e63870.png";

/***/ }),

/***/ "./src/img/banner-18.png":
/*!*******************************!*\
  !*** ./src/img/banner-18.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/banner-18.8ab76751.png";

/***/ }),

/***/ "./src/img/banner2.jpeg":
/*!******************************!*\
  !*** ./src/img/banner2.jpeg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/banner2.b04b2ce4.jpeg";

/***/ }),

/***/ "./src/img/banner3.jpeg":
/*!******************************!*\
  !*** ./src/img/banner3.jpeg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/banner3.6dedf6a6.jpeg";

/***/ }),

/***/ "./src/img/default_104.png":
/*!*********************************!*\
  !*** ./src/img/default_104.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/default_104.eb1babd8.png";

/***/ }),

/***/ "./src/img/default_yourator.png":
/*!**************************************!*\
  !*** ./src/img/default_yourator.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/default_yourator.b031e74d.png";

/***/ }),

/***/ "./src/img/logo-1.svg":
/*!****************************!*\
  !*** ./src/img/logo-1.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-1.4246f79d.svg";

/***/ }),

/***/ "./src/img/logo-2.svg":
/*!****************************!*\
  !*** ./src/img/logo-2.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo-2.edc4ee33.svg";

/***/ }),

/***/ "./src/img/meetjobslogo.svg":
/*!**********************************!*\
  !*** ./src/img/meetjobslogo.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/meetjobslogo.d3635668.svg";

/***/ }),

/***/ "./src/img/youratorlogo.png":
/*!**********************************!*\
  !*** ./src/img/youratorlogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEo9JREFUeNrsnV+IXNUdx8dtQIvibi0oTUh3YysoJOwIVQpCd30yb5k82pcdyaMBR7APfakjfehDC7uCryGTl/qY2bf0yVlBKLbghAQU/JONYkQh6a4oVahs73f2XL3e+XfuOed3zu+c+/vBZZLNZmf23s/93u/vd37nnLsODg4aEvpx14tvNbOXpewovyLWDH7kfnYM1Z931bGnvrZ7sPnUrpz1CtdHgJ4Kbg7runpdyY7VQB9nR4EOyIcZ5AO5QgK0DsDrhWOV+Ue+mh2D/Mgg35OrWHOglX1oRwKwjor3FdxDAbp+ELeyYznRX/OmgrtXN7hrAXQGMfxvJ3GIZ8G9BcDrkGAmDXQGclup8VpDArGtVLsvQMeV3HXUsSgMz1TtXmrJZDJAK1vRzY4N4VU79hXYW6mAHT3QArKAnQTQylpsCcgCdvRAZzB3xSOTg93JoO4J0LQgt5SCLAtzXuKqAnsgQLv3yVALKb+FiUsK7D0B2h7mjkr6xF6EtyFt7jVstkCLKrONbQX2ngCtD3NbeWVRZb5q3eLorVkBLaW46OLVDOqOAD0Z5qayGKvCSVSBSsg6FwvCAmixGGJBkgE6gxkgvyBMJBHPhR6MCQa0+OVk41IGdbtWQCuYB+KX04W6EWggxjvQqr7cF5glWYweaFXJGEjyJ1BHD7TALFAnA7TALFD7gpocaIFZwifUpECrBHAoMEv4gpoMaCnNSYSA+kgdYG4eu7ex/uvFxtJPj2Sv93//9d07346O/rXbjeGnXwtqfgJMYECtHY1CZ0D3GgxGANtPPtjonv5lY/lnd8/93pv/+bbRe/uLxtbOrcbef/8n2NEHyYiic6A59GZAjXu/f0QL5HLsf/PdCOrulY8FOfpw3vvhFGjVNXcx1NlZeeDuxtbZhxtnTj5gb/Rufd1o//19sSL08bjLBSWdAR26PNdZOzqyF4v3/MTZz4Rady5/NLIiEmSB1tMVV0niEUcwIwnsh4AZiV7/3KONtV+5f2vcHBeffWT0Z4HazgIiMccxEp/LN4p5yqISwianKgd80HKIE9U/95hTVZ4UArW+uOQVpRzgSXkMKkulHGUViwdlKt0NbjlC+WbYi5efOe43g3n9fYG6kK80j92nAL5/9GddYTnx53+PoJ4QT9vOerECOsRIIFQAFQwXiZ9ArRe52uaHjb2bc/6s/bSt5ej5hnlw/mRj9ei9wS4uqiiofKRa/SjaBRwuz/Wrb96aJwaLiqmWd4VWKxpt+lQJ+GWT2rLrQEmv+de4ty4p+11YCEqh2L5+p9G68K7ut581XaHJCGjfVgMnfHD+lJPkb+fD/YIPvMf4BnnlH59EN/iC84jcY1qyRikA669drzICa2w9TC1HLyaYAfHWzmejno1JyQ0u8sYTD1b6mUhIe29/Pi25YWkl3nj+pPf3RS0fylyxnQBsoeJReRGbygqtlrS9HAPM6M/AaN/gg30SS4MbBcoTQyD3oKjVz4vH/za0yTcqVz0WKsKcLz3gpSxkAzNgg8/VgRmBk47vx+NRNwAIlC8KoD/4MkhFyDJ57lb9DwsVvx+PAPIBlMPRP/MBk0v/+qKqZxsFvh//rwrU3dPHowAaDVd4YvkKjYqGlmaocQ73QBc2r/TyeDTNuKHMsBmmkUMN75eSSuP38pXEoqKB4W1H0VXOwLlCd30kghg0MYUZytq68J6Ti1+hxDTqu44hoJhVnj6m18BGUCbEchUh1QJaqTN5wz7AqFptKGbTJjZjuufcH1kXncBnhufnHLBxW2dPkNaaDSsaWlZXV6V1FbpLfcJRZcAonGmsv3bN+YnEY1PXerSffIgtzIfVopONF353lBRmXAOiMuairkrPBdqHOuf9GaZJ4Iv9GyRD0bhBkEzFbDvQJ/7OS03ydgH0jRO3A2iptI5Ck6szKgWmJxwJiC50ptUBHZVG/bp16uesLAYqRZutE+TvhVFTDw1bWiq9EFqdUSEwfRQCNMcJSBIqnVsMHx2JyDM8tgDYAd0gmmpermoYJ5EZzD5maOsCDYCgjCEDAoEBKR8diahoOCzPaan0vLr0wgx1XmoQ1511lxiYZjUm9WZQqbRuxaN16oFgMOMJgX4N6hk8PySB10Ms+dA1VehWg7DujDIXEhbTk4kkxGf0r93RBDqMj0ZJLp8q5gfma6HWL1nOxHbdBGhydTZVElgA311ueBroJIchbAdsG2VJLkBFY+7DqBLQakkCsmW8kLSYDqCgH4GyqjEPam62AzCbnkvGFY15sTGthLcQIhnE49FY2bOMOtRSXdxsh0uYdYbEPVc0jFTaO9DIwk37cvP150KFru3w0azkEmZ0xqF1Fok2o4qGG6BVAz/ZFbGp1XJQBx3bgdyAUqVdwoye5RzUaYl2wIrGrFhV4yRzFbpF9QlQ2bBpPtJ95FOG7oSB4rK9HGHG+SwvKYBEGx6ZUUVjrrsLCrRpmW50Id/+nMVJDemjXcIMSCfZNyTcuZ8+nGJ2jfOSDWO240dzCqnnC+795bfGpboZq+34V2nN+XkuP7NrmBNaV+TEweZTu9MUep3SO5vCDMXgNLtaV6VdJYc2feKJwzzmKBZ82Q2bR3CourO9j150ArOLEcBEYR4T4YWC3UDGSDIBFiNnNp1fHJLBYgAKnQmntkBjAEpgnhtnpik0md2wGTmD3eCYYeuoNBqvTKdm5cs4CMzzo9jb4Qloc7vBTZ192A7bZRzqBHOZXS9A29mN27UD2mbmew1hHgea0j/bqDMuCtcLgqqLjo/Ot2HQDXQh2s40qRnMiLWyQjfJbh2LEbPhp1+xPos6Kg2l1W0nxc1vuytBDWHOfXTTE9CLFsB8yfok6kKjcw6QBNpMR6szzEWGF6j9s40X5H5hdD+fju2wTQJrDvMY0Cvc1PnQp34TveXQsV22KxoJzONAkySEVROi2BQaUdwRYGrGMqPvA77ZZvqUwFwCetaEQ9uwWe/N59KvoXy0C9/MYH4fl8ASB0tQ6CWyW8ZCobnbjaqJ66RzYbP8GUL2TRw/zQuUFQ5sypN66JYWywqN3nCbLSKYTFblFrQKbbPTEveS3Q9Pkm+15hkWFTrfjco0mE1WrYdCc18v2bdKFxuVbKwGwYLiScUC1Q+ug92omhhiP2xYDdMSXT5ZVWK6sztC6aHrErqzadCsb1ObZzxZlU0A6EU5DX4U2qbpiGpRd7Ecuu782L0CtKOgXtQ9oVgjAzr0Osk+g9IG+FjUXRRaYix0hsBNwtei7gI0dbpKtPIQnUp/5/xn+lzUXYCWIPXRYjWYAW3bixFbHdu1LQi5bLAAPRFou245m2Hz2BU65KLuAjRh1Kn0V1ZniQSBjsl26M5emReolkgXHUOgXTyC66jQ3SufCJUcgXaR0MRWurOdZQN1dqX0AjRB6GxEM1uh74vqZNpWdrZ2PhMiOQNtq9LoGa6L7YC6yyCKfQoCoMmecS5mnfjYUcrdDWw+WiiVDXcKPeT6CEaE3DvbVyKMUUGpbERgOVxUOjCRNJbOPVN7JIMo7kwBqUK7Gj2LQaUxX9C0gR87fEm4U+g9UpfuoK3SZrNOX2G6bDBmcHPaECnyGJIqtKvEELaD+yxy0z0Yue5QEGnskSu0q4GC9pMPsfbOJs1UUqojUOiDzacG1EDrLMRCpYA+wtQSCcxOYz9jeS+vctykfCcXFw6DLFy9tKl/luqGW3XOk0LELi3QbnyizfJZ3OwGt91xUwN6QAv0bSe2A+BwU2lzuxFfMojEHPu1M21H+BHQQ+p3c+UXuam06dB8jP4Z5x7Wz2Zns2SAdjW0C5XmkiBiBNNknTpUN2JbBQnqvPEE3/GALCH8AejsL7vUiSGqHa5W5YdScBgON330xtjzzLlsmsVO/odiL8eA+l1dZfV47GGjHQGaf67gKQZBgIbtcJEcIvD4C91aajp6GRvQsHjMZ+GHARoN/y4bcbBweEjrYarQMZXrcH7LiTg3/18cHFwofJHcR7u0HXmCyMF6VDJ7H8alzt3Tx8d2G2D2hNku/qXcD92nfneoEzrMXAWsRwzdeDEGnkDlPRQxIMRsRafBLKAHXu76Kx8789Ij1T/7cDRzD2PZDAlWY9Ieigxn1vSnAp3ZDvwj+fMEKu3SeuCRGNpPpxbTtmtmBvRVZZWnKrQX25F7aZcqjZM/OH/S69lMtRcDSeCkQRRYRWZ2o1f+QjCgcWJcLxcLqG23Gq470MhHXn7m+FSryNluTATal+0YfZprt51n/VAWX1CbZPucV4MCzBefnXzusHMtsxt4zG5MU+iJUk52EjOVdmk9fEKd0rJds2BGZYOhOk9kNDjQuOspTpYvqLFtRJWw2d87BMy56DAMfaBV59JVbxl1liBWBaMK1JTVD5Osn1P7JYa1Z8HMdH/ES5huVUWhR5x5VQkC65FDjeoHFdTIA6p2EXbWfsFD4rKbfbM1faQV+Q3TaWJTHcTCnAzSm0lE1QNb/1IEqh+7f/oN2eBL5/KNyrYjZGMVbm7c5LP6m3GTti68xxHmm7Mmdk8FWkm6V5XGo+2512n8GgZf3nmpSTI5ACpd1TL1zz0WZHQTNxJu7lleHk/K1oV3uW5a1J31j/PWtuv5/rTwpC57PcqBRyyFBYFlqrIeNm6wwflTXqHGgMkbz58cazYaf+J8xHVGDZYq6BkDrep8l7xn3RkcFEli8ZEPlXLZ1HRoma5Xhho+lnpVKNw0wz80pw6YlJNAxiuhznUMdx0cHMz+hhffWslebvj+5LnPM5mzVyWQ+OAGcjVoYPK58YiHKroG6bCX+fhYx9zU0kH2ZGS82SfyuZVp1Q1toBXUkPmNVKFGvPrmrdGGPS58Iz43mnuqTirFZ6iaYE6vpBz9fpZ2AjAjXslg7lordEiV9g01lBJlKhwuwEa9GWDrTl/C+y/98Z92di2zUQC5ypSpCGDWUmdtoEOqtG+oc7BQucAIpq0VwWeHWuKYp5amYOE9ALLJ3L8IYNZW56pAQ6UxgrgYCur+uUe9Dx3nG2Ha+lt8fizcDtWetDC6ieVBsgeI8TN1rQWVxSEMTAts6qhzJaAV1LhLXg7526EqEGLBk1y1sYSXi1WP8oEVAFylRAaIocaA2GYmNur9kezr8ty8Up0N0EtKpZdD/oZQpVlDtj4CZUV02+GgrNmipAf4cZgqcfnGxKBJJJ2COxnM61X+QyWgFdSt7OVy6N8UFxijbbYX2KU1AdjY2i2HpQo0UF7YkvwVfdPYeNTl74caOWCOaGLC01XXL68MtIIab7IW+reFesGCcGzJnART2R/7/Nwuy5K+PnIGc6cym4ZAB00Qy4Eylc4oWB0DFgNVjMhWO9Uu0zkBWkGNu2eTyxnAoxpq7au0F0PA5wPmiFQ5j7NqKmDDG9CcrEdZrXVqvikHWj9Rjot0D5ftDOaWMZOWQLOyHkVvPW0qfur2wuVIZ0xWwwnQCup29nKR49mBDcHQcwxJo21gxA+qHCnIxlUN50ArqOF3znA9SyjxoessRbABsoshegahPbztA2gWAy66VsTFAEVoj4xRvoitRTmwxkbTxQ9yArSCGh9owM1PT4q8mQdHTFURVC2Q6EUyZO3NN5MAzd1Pz1JtVEVgSzjCjRFI9I8A4kTUuByP5xv+sANaQY1pMi/EeGYBN+xI3jsRwpbATuQ9IgA5UYjzqNR4FARoBTU+5EbsZxtVkh8fbnsrAO/unW9Ga0ajD2T46Vd12l0Wi8W0nbNHBPSS8tOrqV2FvIEor54U1X3SZNe8YQlRbBVNaV08LjCTAZ061BJ2FQ1ogask0BvQCuqVBsORRIk0YSYHWkEdTTlPIm6YvQAtUEv4gtkb0AK1wOwDZq9AC9QCc3JAFxJFNDNJ9UNgjh9oBbWU9NIOLPDZ8Q1zMKALUGOYfEOuf1owUw2asAa6AHa0vR8SY+G8NyM6oBXUbaXWkizGGRjHb9nONkkGaAU1KiA98dWS/CUBtPjqKMNoMZjaAC0WRCxGkkArqFeUBVkTfljFdna0uViMaIAugI1HWlfUmoUqt01XNBKgRa05RbCBkiSBLoDdUt56WRjzElcVyINoGIkJ6ALYsCAdsSGk9qITepCkNkArqKXERwMyzulWDPYiKaBL/rorYNcb5GSAFrAF5CSBLlmRjnjsmXFTgdxLBeRkgS7B3c5ecEi57zC2FcT9ZK95ykCX7AgUG2W/upX8cjXuZyDvJn+t6wB0Ce6mUu2U4QbEfaXGw1pd37oBPQXu9Ub8bas7CuJB3SAWoKcnk+uFgzvgGMUb5EdqyZ0ATQN4U8GN15WAkEN94X+hvMOYhqIF6DhsSg578RVhUk3ZV6A2FLQ49tTXduuQyLmM/wswACuCiLk0LLreAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/index */ "./src/reducers/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/index.js";










var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_6__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7__["default"])));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}))), document.querySelector('#root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_9__["unregister"]();

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



var jobs = function jobs() {
  var jobs_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    source: '',
    job_list: '',
    total_page: '',
    current_page: 1
  };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  console.log('reducer', action);

  if (action.type === 'FETCH_JOBDATA') {
    return action.payload;
  }

  if (action.type === 'CHANGE_PAGE') {
    return action.payload;
  }

  return jobs_data;
};

var user_status = function user_status() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    status: 'unknown'
  };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (action.type === 'INITIAL_CHECK_LOGIN_STATUS') {} else if (action.type === 'LOGIN_CHECK_SUCCESS') {
    return action.payload;
  } else if (action.type === 'LOGIN_CHECK_FAIL') {
    return {
      status: 'unknown'
    };
  } else if (action.type === 'LOGOUT') {
    return {
      status: 'unknown'
    };
  } else if (action.type === 'ADD_FAVO') {
    var all_favo = action.payload;
    return Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, status, {
      favorite_job: action.payload
    });
  } else if (action.type === 'REMOVE_FAVO') {
    var _all_favo = action.payload;
    return Object(_Users_xujinbin_AppWorks_project_f2e_job_frontend_pages_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, status, {
      favorite_job: action.payload
    });
  }

  return status;
};

var banner_status = function banner_status() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (action.type === 'CHANGE_BANNER') {
    status++;
    return status % 3;
  } else if (action.type === 'CHANGE_BANNER_DEFAULT') {
    return 2;
  }

  return status;
};

var favo_job = function favo_job() {
  var job = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (action.type === 'UPDATE_FAVO') {
    return action.payload;
  }

  return job;
};

var detail = function detail() {
  var detail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (action.type === 'UPDATE_DETAIL') {
    return action.payload;
  }

  return detail;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  jobs: jobs,
  user_status: user_status,
  banner_status: banner_status,
  favo_job: favo_job,
  detail: detail
}));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/xujinbin/AppWorks/project_f2e_job/frontend/pages/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map