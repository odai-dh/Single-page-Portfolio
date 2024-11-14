/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* GLOBAL */\n\n:root {\n  --bg-body: hsl(0, 0%, 8%);\n  --bg-body2: #242424;\n  --accent: hsl(153, 71%, 59%);\n  --text1: hsl(0, 0%, 100%);\n  --text2: hsl(0, 0%, 85%);\n  --invalid: hsl(7, 100%, 68%);\n  --fs-18: 1.125rem;\n  --fs-88: 5.5rem;\n  --fs-72: 4.5rem;\n  --fs-40: 2.5rem;\n  --fs-48: 3rem;\n  --fs-36: 2.25rem;\n  --fs-32: 2rem;\n  --fs-24: 1.5rem;\n  --fs-20: 1.25rem;\n  --container: 69.375rem;\n  --transition: 250ms ease-in-out;\n}\n\nhtml,\nbody {\n  overflow-x: hidden;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody,\ninput,\ntextarea,\nbutton {\n  font-family: 'Space Grotesk', sans-serif;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--bg-body);\n  color: var(--text1);\n  font-size: var(--fs-18);\n  line-height: 1.56;\n  padding-bottom: 25rem;\n}\n\n.bg-less-dark {\n  background-color: var(--bg-body2);\n}\n\nh1,\nh2,\nh3,\np {\n  margin-block-start: 0;\n}\n\nh1,\nh2,\nh3 {\n  line-height: 1;\n}\n\n.header-xl {\n  font-size: 2.5rem;\n  font-size: clamp(2.5rem, 0.7rem + 7.68vw, 5.5rem);\n  letter-spacing: -0.028em;\n  line-height: 1.1;\n}\n\np {\n  font-size: 1rem;\n  font-size: clamp(1rem, 0.79rem + 0.89vw, 1.125rem);\n  line-height: 1.5;\n  color: var(--text2);\n}\n\na {\n  transition: color var(--transition);\n}\n\na:focus-visible,\ninput:focus-visible,\ntextarea:focus-visible {\n  outline: 2px dashed var(--accent);\n  outline-offset: 2px;\n}\n\ninput:invalid,\ntextarea:invalid {\n  outline-color: var(--invalid);\n}\n\na.underline,\nbutton {\n  display: inline-block;\n  padding-bottom: 0.625rem;\n  font-size: 1rem;\n  line-height: 1.625;\n  letter-spacing: 0.143em;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text1);\n  text-decoration: none;\n  background-image: linear-gradient(\n    to right,\n    var(--accent) 75%,\n    var(--accent) 75%\n  );\n  background-position: 0 2.1em;\n  background-repeat: repeat-x;\n  background-size: 8px 2px;\n}\n\na:hover {\n  color: var(--accent);\n}\n\nimg,\nsvg {\n  display: block;\n}\n\n.visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.wrapper {\n  width: calc(100% - 2rem);\n  max-width: var(--container);\n  margin-inline: auto;\n}\n\n/* 600px */\n@media (min-width: 37.5em) {\n  .wrapper {\n    width: calc(100% - 3.75rem);\n  }\n}\n\n/* UTILITY */\n\n.bottom-border {\n  border-bottom: 1px solid var(--text2);\n}\n\n/* HEADER */\n\n.header {\n  position: relative;\n  z-index: 1;\n  margin-block-start: 20px;\n}\n\n.header__nav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  gap: 20px 25px;\n}\n\n.header__home {\n  font-size: 1.5rem;\n  font-size: clamp(1.5rem, 1.02rem + 2.04vw, 2rem);\n  line-height: 1;\n  color: var(--text1);\n  text-decoration: none;\n  flex: 1 0 100%;\n}\n\n.header__social > svg > path {\n  transition: fill var(--transition);\n}\n\n.header__social:hover > svg > path {\n  fill: var(--accent);\n}\n\n@media (min-width: 37.5em) {\n  .header {\n    margin-block-start: 30px;\n    /* margin-block-end: 90px; */\n  }\n\n  .header__nav {\n    justify-content: flex-start;\n    align-items: center;\n    text-align: left;\n    gap: 32px;\n  }\n\n  .header__home {\n    flex: 0 1 auto;\n    margin-inline-end: auto;\n  }\n}\n\n@media (min-width: 62.5em) {\n  .header {\n    margin-block-start: 40px;\n    margin-block-end: 127px;\n  }\n\n  .header__nav {\n    padding-right: 30px;\n  }\n}\n\n/*  HERO */\n\n.hero__wrapper {\n  padding-bottom: 80px;\n}\n\n.hero__image {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  translate: -50%;\n  width: 174px;\n  height: auto;\n}\n\n.hero__rings {\n  position: absolute;\n  right: 50%;\n  top: 130px;\n  /* 8.125rem; */\n  z-index: -1;\n  /* width: 33.125rem; */\n  height: auto;\n}\n\n.hero__circle {\n  position: relative;\n  top: 171px;\n  margin-bottom: -129px;\n  translate: calc(100vw - 64px - 16px);\n}\n\n.hero__text {\n  position: relative;\n  text-align: center;\n  margin-block-start: 335px;\n}\n\n.hero__headline {\n  margin-block-end: 24px;\n}\n\n.hero__headline > br {\n  display: none;\n}\n\nh1 > span {\n  background-image: linear-gradient(\n    to right,\n    var(--accent) 75%,\n    var(--accent) 75%\n  );\n  background-position: 0 1.18em;\n  background-repeat: repeat-x;\n  background-size: 8px 4px;\n}\n\n.hero__description {\n  margin-block-end: 24px;\n}\n\n@media (min-width: 37.5em) {\n  .hero {\n    position: relative;\n    margin-block-start: -62px;\n  }\n\n  .hero__wrapper {\n    padding-bottom: 60px;\n  }\n\n  .hero__content {\n    display: flex;\n    align-items: center;\n  }\n\n  .hero__content picture {\n    order: 2;\n  }\n\n  .hero__image {\n    position: relative;\n    width: 42vw;\n    max-width: 445px;\n    /* width: 322px; */\n    height: auto;\n    left: auto;\n    right: 0;\n    translate: 0;\n  }\n\n  .hero__rings {\n    top: 90px;\n    right: auto;\n    left: 0;\n    translate: -50%;\n  }\n\n  .hero__circle {\n    position: absolute;\n    top: auto;\n    right: 0;\n    bottom: 190px;\n    translate: 50%;\n    z-index: 1;\n  }\n\n  .hero__text {\n    /* width: 62vw; */\n    margin-block-start: 90px;\n    margin-right: -30px;\n    flex: 1 0 58vw;\n    text-align: left;\n    z-index: 1;\n  }\n\n  .hero__headline {\n    margin-block-end: 60px;\n  }\n\n  .hero__headline > br {\n    display: inline-block;\n  }\n\n  .hero__description {\n    /* width: 70%; */\n    margin-block-end: 34px;\n  }\n}\n\n@media (min-width: 62.5em) {\n  .hero {\n    margin-block-start: 0px;\n  }\n\n  .hero__wrapper {\n    position: relative;\n    padding-bottom: 100px;\n  }\n\n  .hero__content {\n    align-items: flex-start;\n  }\n\n  .hero__content picture {\n    margin-left: -80px;\n  }\n\n  .hero__image {\n    margin-block-start: -199px;\n  }\n\n  .hero__rings {\n    top: 0px;\n    translate: -50% -50%;\n  }\n\n  .hero__circle {\n    top: 322px;\n    right: 445px;\n  }\n\n  .hero__text {\n    margin-block-start: 0;\n    margin-right: 0;\n    flex: 1;\n  }\n\n  .hero__headline {\n    margin-block-end: 43px;\n  }\n\n  .hero__headline > br {\n    display: none;\n  }\n\n  .hero__description {\n    width: 38ch;\n    margin-block-end: 66px;\n  }\n}\n\n/* SKILLS */\n\n.skills {\n  position: relative;\n}\n\n.skills__wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n  padding-block: 40px;\n}\n\n.skills__item {\n  text-align: center;\n}\n\n.skills__title {\n  font-size: 2rem;\n  font-size: clamp(2rem, 0.33rem + 7.11vw, 3rem);\n  line-height: 1.17;\n  margin-block-end: 2px;\n}\n\n.skills__description {\n  margin-block-end: 0;\n}\n\n.skills__rings {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  translate: 0 50%;\n}\n\n@media (min-width: 37.5em) {\n  .skills__wrapper {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 52px 24px;\n    border: none;\n    padding-block: 52px 0;\n  }\n\n  .skills__item {\n    text-align: left;\n  }\n\n  .skills__rings {\n    translate: 40% 50%;\n  }\n}\n\n@media (min-width: 62.5em) {\n  .skills__wrapper {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 58px 30px;\n    padding-block-start: 72px;\n  }\n\n  .skills__rings {\n    translate: -40% 50%;\n    left: 100%;\n  }\n}\n\n/* PROJECTS */\n\n.projects__wrapper {\n  padding-block: 140px;\n}\n\n.projects__grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 40px;\n  justify-items: center;\n  text-align: center;\n}\n\n.projects__headline {\n  grid-column: 1 / span 2;\n  margin-block-end: 0;\n}\n\n.projects__contact {\n  grid-column: 1 / span 2;\n}\n\n.projects__item {\n  grid-column: 1 / span 2;\n}\n\n.projects__picture {\n  display: block;\n  margin-block-end: 20px;\n}\n\n.projects__image {\n  width: 100%;\n  height: auto;\n}\n\n.projects__name {\n  font-size: 1.5rem;\n  line-height: 1.3;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-block-end: 7px;\n}\n\n.projects__tags {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-block-end: 20px;\n  text-transform: uppercase;\n}\n\n.projects__links {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n@media (min-width: 37.5em) {\n  .projects__grid {\n    gap: 60px 24px;\n    justify-items: start;\n    text-align: left;\n  }\n\n  .projects__contact {\n    justify-self: end;\n  }\n\n  .projects__item {\n    grid-column: span 1;\n  }\n\n  .projects__headline,\n  .projects__contact {\n    grid-column: span 1;\n  }\n\n  .projects__contact {\n    align-self: center;\n  }\n\n  .projects__tags,\n  .projects__links {\n    display: block;\n  }\n\n  .projects__tags span {\n    margin-inline-end: 18px;\n  }\n\n  .projects__links a {\n    margin-inline-end: 30px;\n  }\n\n  .project__links {\n    display: block;\n  }\n}\n\n@media (min-width: 62.5em) {\n  .projects__grid {\n    gap: 70px 30px;\n  }\n\n  .projects__item {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, auto);\n  }\n\n  .projects__picture {\n    position: relative;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n  }\n\n  .projects__picture::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    background-color: hsl(0, 0%, 0%);\n    opacity: 0;\n    transition: opacity 150ms ease-in-out;\n  }\n\n  .projects__item:hover .projects__picture::after {\n    opacity: 0.5;\n  }\n\n  .projects__item:hover .projects__links {\n    opacity: 1;\n  }\n  .projects__item:focus-within .projects__links {\n    opacity: 1;\n  }\n\n  .projects__item:focus-within .projects__picture::after {\n    opacity: 0.5;\n  }\n\n  .projects__image {\n    width: 100%;\n    height: auto;\n  }\n\n  .projects__links {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    justify-self: center;\n    align-self: center;\n    z-index: 1;\n    opacity: 0;\n    transition: opacity 400ms ease-in-out;\n  }\n\n  .projects__links:hover ~ .projects__picture::after {\n    opacity: 0.5;\n  }\n\n  .projects__tags {\n    margin-block-end: 0;\n  }\n}\n\n/* CONTACT */\n\n.contact {\n  position: relative;\n}\n\n.contact__wrapper {\n  padding-block: 84px;\n}\n\n.contact__headline {\n  margin-block-end: var(--fs-20);\n}\n\n.contact__control {\n  position: relative;\n  margin-block-end: 16px;\n}\n\n.contact__control input,\n.contact__control textarea {\n  width: 100%;\n  padding-block: 16px;\n  padding-inline: 24px;\n  border: none;\n  border-bottom: 1px solid var(--text1);\n  background: transparent;\n  font-size: 1rem;\n  line-height: 1.625;\n  color: var(--text1);\n}\n\n.contact__control > *::placeholder {\n  color: var(--text1);\n  opacity: 0.5;\n  text-transform: uppercase;\n}\n\n.contact__control textarea {\n  margin-block-end: 32px;\n}\n\n.contact__control.align-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.contact__control button {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.contact__control button:hover{\n  color: var(--accent);\n}\n\n.contact__invalid-icon {\n  display: none;\n  width: var(--fs-24);\n  height: var(--fs-24);\n  position: absolute;\n  top: 50%;\n  right: 0;\n  translate: -50% -50%;\n}\n\n.contact input:focus-visible:invalid ~ .contact__invalid-icon,\n.contact textarea:focus-visible:invalid ~ .contact__invalid-icon {\n  display: inline-block;\n}\n\n.contact textarea:focus-visible:invalid ~ .contact__invalid-icon {\n  top: 1.2rem;\n  right: 1.5rem;\n  translate: none;\n}\n\n.contact__rings {\n  position: absolute;\n  left: 0;\n  bottom: 97px;\n  translate: -75%;\n}\n\n@media (min-width: 37.5em) {\n  .contact__rings {\n    bottom: 47px;\n    translate: -75%;\n  }\n}\n\n@media (min-width: 62.5em) {\n  .contact__wrapper {\n    display: grid;\n    grid-template-columns: repeat(2, 27.8rem);\n    justify-content: space-between;\n  }\n\n  .contact__headline {\n    margin-block-end: var(--fs-36);\n  }\n\n  .contact__rings {\n    translate: -40%;\n  }\n}\n\n/* 999.98px */\n@media (max-width: 62.49875em) {\n  .contact__wrapper {\n    max-width: 27.8rem;\n  }\n\n  .contact__text {\n    text-align: center;\n  }\n}\n\nfooter {\n  padding-block: 40px 60px;\n}\n\n@media (min-width: 37.5em) {\n  footer {\n    padding-block: 30px 40px;\n  }\n}\n\n@media (min-width: 62.5em) {\n  footer {\n    padding-block: 47px 92px;\n  }\n}\n#confirmationMessage {\n  font-size: var(--fs-18);\n  color: var(--accent);\n  margin-top: 5px;\n  display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://single-page-portfolio/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://single-page-portfolio/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://single-page-portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ (() => {

eval("document.getElementById('contactForm').addEventListener('submit', function (e) {\n    e.preventDefault(); // Prevent the default form submission\n  \n    const form = e.target;\n    const formData = new FormData(form);\n  \n    fetch(form.action, {\n      method: form.method,\n      body: formData,\n      headers: {\n        'Accept': 'application/json'\n      }\n    }).then(response => {\n      if (response.ok) {\n        // Show confirmation message\n        const confirmationMessage = document.getElementById('confirmationMessage');\n        confirmationMessage.style.display = 'block';\n        form.reset(); // Clear the form fields\n  \n        // Hide the confirmation message after 5 seconds\n        setTimeout(() => {\n          confirmationMessage.style.display = 'none';\n        }, 3000); // 5000 milliseconds = 5 seconds\n      } else {\n        alert(\"Oops! There was a problem with your submission.\");\n      }\n    }).catch(error => {\n      alert(\"Oops! There was a problem with your submission.\");\n      console.error(error);\n    });\n  });\n\n//# sourceURL=webpack://single-page-portfolio/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_1__);\n // Import your CSS file\n   // Import your form functionality\n\n//# sourceURL=webpack://single-page-portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;