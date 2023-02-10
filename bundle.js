/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #061144;\n  font-family: \"Poppins\", cursive;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid gray;\n}\n\nnav {\n  width: 100%;\n}\n\n.header-img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  padding-left: 0;\n}\n\n.box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-gap: 25px;\n  max-width: 1084px;\n  margin: 2% auto;\n}\n\n.bookCard {\n  width: 350px;\n  height: 480px;\n  background-color: #828bdb;\n  margin: 2%;\n  color: #fff;\n  display: inline-block;\n  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;\n  border-radius: 24px;\n  box-sizing: border-box;\n}\n\n.heading {\n  font-size: 4rem;\n  text-align: center;\n  text-shadow: rgba(255, 255, 255, 0.3) -2px 4px 0;\n  color: white;\n  letter-spacing: normal;\n  letter-spacing: 6px;\n  font-family: \"Unbounded\", cursive;\n}\n\n.text-center {\n  text-align: center;\n}\n\np {\n  letter-spacing: 0;\n  font-size: 400;\n  color: #242a33;\n}\n\n.book-cover {\n  width: 200px;\n  height: 250px;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n}\n\n.para {\n  font-size: 2rem;\n  color: #fff;\n  letter-spacing: 0;\n  text-align: center;\n}\n\ninput {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\n\ninput[type=\"text\"]:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n.search,\n.heart {\n  background-color: #ff1ebb;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.total-books {\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.total-books:hover {\n  color: #ff1ebb;\n  font-size: 34px;\n  transition: 1s ease-in-out;\n}\n\n.title {\n  background-color: #ff1ebb;\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 6px;\n  padding: 7px;\n  margin-top: 0;\n  height: 8vh;\n  border-radius: 24px 24px 0 0;\n  box-sizing: border-box;\n}\n\na {\n  color: #2b2e4a;\n  font-weight: bold;\n  font-size: 1.5rem;\n  letter-spacing: 0;\n  text-decoration: none;\n}\n\n.add-comment {\n  background-color: #061144;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n  transition: 1s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: #ff1ebb;\n}\n\n.heart:hover,\n.search:hover {\n  background-color: #061144;\n}\n\n.likes,\n.likes-counter {\n  font-size: 20px;\n  font-weight: bold;\n}\n\narticle#pop-up {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #ffffff29;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pop-container {\n  background: #f8f8f8;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  height: 60%;\n  overflow-y: scroll;\n  padding: 20px;\n  box-sizing: border-box;\n  gap: 30px;\n  box-shadow: 2px 3px 3px 4px #00000061;\n}\n\n.pop-up-header {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.pop-up-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n\n.pop-up-content {\n  display: flex;\n  justify-content: center;\n  padding: 0 60px;\n  gap: 40px;\n}\n\n.left-content,\n.rigth-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.book-data {\n  padding-left: 30px;\n  margin-bottom: 8;\n}\n\nlabel {\n  font-size: 14px;\n  opacity: 0.7;\n}\n\nbutton#close-modal-btn {\n  background: transparent;\n  border: none;\n  height: 36px;\n  width: auto;\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.pop-up-comments,\n.pop-up-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nform#new-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  resize: none;\n  width: 270px;\n  height: 150px;\n}\n\ntextarea:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n#comments-list {\n  flex-direction: column;\n}\n\nfooter {\n  border-top: 2px solid gray;\n  box-sizing: border-box;\n  margin-top: 24px;\n  font-size: 20px;\n  color: gray;\n  text-align: center;\n}\n\nfooter p {\n  color: gray;\n}\n\nfooter a {\n  text-decoration: none;\n  color: gray;\n}\n\n.user-name {\n  font-size: 18px;\n  font-weight: 700;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: #061144;\n  font-family: \"Poppins\", cursive;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid gray;\n}\n\nnav {\n  width: 100%;\n}\n\n.header-img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  padding-left: 0;\n}\n\n.box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-gap: 25px;\n  max-width: 1084px;\n  margin: 2% auto;\n}\n\n.bookCard {\n  width: 350px;\n  height: 480px;\n  background-color: #828bdb;\n  margin: 2%;\n  color: #fff;\n  display: inline-block;\n  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;\n  border-radius: 24px;\n  box-sizing: border-box;\n}\n\n.heading {\n  font-size: 4rem;\n  text-align: center;\n  text-shadow: rgba(255, 255, 255, 0.3) -2px 4px 0;\n  color: white;\n  letter-spacing: normal;\n  letter-spacing: 6px;\n  font-family: \"Unbounded\", cursive;\n}\n\n.text-center {\n  text-align: center;\n}\n\np {\n  letter-spacing: 0;\n  font-size: 400;\n  color: #242a33;\n}\n\n.book-cover {\n  width: 200px;\n  height: 250px;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n}\n\n.para {\n  font-size: 2rem;\n  color: #fff;\n  letter-spacing: 0;\n  text-align: center;\n}\n\ninput {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\n\ninput[type=\"text\"]:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n.search,\n.heart {\n  background-color: #ff1ebb;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.total-books {\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.total-books:hover {\n  color: #ff1ebb;\n  font-size: 34px;\n  transition: 1s ease-in-out;\n}\n\n.title {\n  background-color: #ff1ebb;\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 6px;\n  padding: 7px;\n  margin-top: 0;\n  height: 8vh;\n  border-radius: 24px 24px 0 0;\n  box-sizing: border-box;\n}\n\na {\n  color: #2b2e4a;\n  font-weight: bold;\n  font-size: 1.5rem;\n  letter-spacing: 0;\n  text-decoration: none;\n}\n\n.add-comment {\n  background-color: #061144;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n  transition: 1s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: #ff1ebb;\n}\n\n.heart:hover,\n.search:hover {\n  background-color: #061144;\n}\n\n.likes,\n.likes-counter {\n  font-size: 20px;\n  font-weight: bold;\n}\n\narticle#pop-up {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #ffffff29;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pop-container {\n  background: #f8f8f8;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  height: 60%;\n  overflow-y: scroll;\n  padding: 20px;\n  box-sizing: border-box;\n  gap: 30px;\n  box-shadow: 2px 3px 3px 4px #00000061;\n}\n\n.pop-up-header {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.pop-up-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n\n.pop-up-content {\n  display: flex;\n  justify-content: center;\n  padding: 0 60px;\n  gap: 40px;\n}\n\n.left-content,\n.rigth-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.book-data {\n  padding-left: 30px;\n  margin-bottom: 8;\n}\n\nlabel {\n  font-size: 14px;\n  opacity: 0.7;\n}\n\nbutton#close-modal-btn {\n  background: transparent;\n  border: none;\n  height: 36px;\n  width: auto;\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.pop-up-comments,\n.pop-up-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nform#new-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  resize: none;\n  width: 270px;\n  height: 150px;\n}\n\ntextarea:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n#comments-list {\n  flex-direction: column;\n}\n\nfooter {\n  border-top: 2px solid gray;\n  box-sizing: border-box;\n  margin-top: 24px;\n  font-size: 20px;\n  color: gray;\n  text-align: center;\n}\n\nfooter p {\n  color: gray;\n}\n\nfooter a {\n  text-decoration: none;\n  color: gray;\n}\n\n.user-name {\n  font-size: 18px;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/images/google_books.png":
/*!*************************************!*\
  !*** ./src/images/google_books.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e658325f9431a3f0ea37429f8c7a930d.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLike": () => (/* binding */ createLike),
/* harmony export */   "getAllLikes": () => (/* binding */ getAllLikes),
/* harmony export */   "getItemLikes": () => (/* binding */ getItemLikes)
/* harmony export */ });
const getAllLikes = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/likes');
  const data = await res.json();
  return data;
};

const getItemLikes = async (itemId) => {
  const likesData = await getAllLikes();
  const filteredItem = likesData.filter((item) => item.id === itemId);
  return filteredItem.likes;
};

const createLike = async (itemId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.ok) {
    window.location.reload();
  }
};



/***/ }),

/***/ "./src/modules/totalComments.js":
/*!**************************************!*\
  !*** ./src/modules/totalComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "getBookData": () => (/* binding */ getBookData)
/* harmony export */ });
const createComment = async (bookId, user, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: bookId,
      username: user,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const getBookData = async (bookId) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/comments?item_id=${bookId}`);
  const data = await res.json();
  if (!data.error) {
    return data;
  }
  return [];
};



/***/ }),

/***/ "./src/modules/totalItems.js":
/*!***********************************!*\
  !*** ./src/modules/totalItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const totalBooksItems = async () => {
  const options = ['html', 'css', 'javascript', 'ruby', 'react', 'node', 'jokes', 'java', 'maths', 'art', 'spanish', 'english', 'python', 'sql'];
  const num = Math.floor(Math.random() * 13);
  const search = document.getElementById('search').value || options[num];
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  const { items } = data;
  return { data, items, search };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalBooksItems);

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_google_books_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/google_books.png */ "./src/images/google_books.png");
/* harmony import */ var _modules_totalItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/totalItems.js */ "./src/modules/totalItems.js");
/* harmony import */ var _modules_totalComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/totalComments.js */ "./src/modules/totalComments.js");
/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getLikes.js */ "./src/modules/getLikes.js");







let likesData = [];

const bookList = document.getElementById('book-list');

const popUp = async (item) => {
  item.comments = await ((0,_modules_totalComments_js__WEBPACK_IMPORTED_MODULE_3__.getBookData)(item.id));
  const popUpContainer = document.createElement('article');
  popUpContainer.id = 'pop-up';
  popUpContainer.innerHTML = `
    <div class="pop-container">
      <div class="pop-up-header">
        <h2 class="book-title">${item.volumeInfo.title}</h2>
        <button id="close-modal-btn">x</button>
      </div>
      <div class="pop-up-body">
        <div class="image-container">
          <img src='${item.volumeInfo.imageLinks.thumbnail}' class="book-image">
        </div>
        <div class="pop-up-content">
          <div class="left-content">
            <label>Author:</label>
            <div class="book-data">${item.volumeInfo.authors[0]}</div>
            <label>Category:</label>
            <div class="book-data">${item.volumeInfo.categories[0]}</div>
          </div>
          <div class="rigth-content">
            <label>Published date:</label>
            <div class="book-data">${item.volumeInfo.publishedDate}</div>
            <label>Language:</label>
            <div class="book-data">${item.volumeInfo.language}</div>
          </div>
        </div>
      </div>
      <div class="pop-up-comments">
        <h3>Comments (${item.comments.length})</h3>
        <ul id="comments-list"></ul>
      </div>
      <div class="pop-up-form">
        <h3>Add a comment</h3>
        <form id="new-comment">
          <input id="user" type="text" name="user" placeholder="Your name" required></input>
          <textarea id="comment" name="user" placeholder="Add your comment" required></textarea>
          <button class="add-comment" id="comment-btn">Comment</button>
        </form>
      </div>
    </div>
  `;
  document.body.append(popUpContainer);
  const closeBtn = document.getElementById('close-modal-btn');
  closeBtn.addEventListener('click', () => {
    popUpContainer.remove();
  });

  const addComentBtn = document.getElementById('comment-btn');
  addComentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user').value;
    const textAreaInput = document.getElementById('comment').value;
    (0,_modules_totalComments_js__WEBPACK_IMPORTED_MODULE_3__.createComment)(item.id, userInput, textAreaInput);
    popUpContainer.remove();
  });

  const commentList = document.getElementById('comments-list');
  if (item.comments.length > 0) {
    item.comments.map((item) => {
      const itemList = document.createElement('li');
      itemList.innerHTML = `
        <div>
          <span>${item.creation_date} </span>
          <span class="user-name">${item.username}: </span>
          <span>${item.comment}</span>
        </div>
      `;
      return commentList.append(itemList);
    });
  }
};

const getTotal = async () => {
  const { data, items, search } = await (0,_modules_totalItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return { data, items, search };
};

const bookDetails = async () => {
  const { data, items, search } = await getTotal();

  const totalBooks = document.querySelector('.total-books');

  totalBooks.innerHTML = `(${items.length}) Books about ${search}`;

  for (let i = 0; i < data.items.length; i += 1) {
    const likes = likesData.filter((item) => item.item_id === data.items[i].id);

    const bookList = document.getElementById('book-list');
    const bookCard = document.createElement('div');
    const contentCard = document.createElement('p');

    const title = document.createElement('h4');
    const bookCardContent = `
            <p>
                <a  href='${data.items[i].volumeInfo.previewLink}'>
                    <img src='${data.items[i].volumeInfo.imageLinks.thumbnail}' class="book-cover">
                    <br>More details
                </a>
            </p>
            <button type="submit" class="add-comment" id="comment-btn-${data.items[i].id}">Comment</button>
            &#160;&#160;&#160;&#160;
            <button class="heart" id="heart-${data.items[i].id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </button>
            &#160;&#160;&#160;&#160;
            <span class="likes-counter">${likes.length === 0 ? 0 : likes[0].likes}</span>
            &#160;&#160;&#160;
            <span class="likes">likes</span>`;
    const title1 = `${data.items[i].volumeInfo.title}`;
    title.classList.add('title');
    title.innerHTML = title1;
    bookCard.appendChild(title);
    bookCard.classList.add('bookCard');
    contentCard.innerHTML = bookCardContent;
    bookCard.appendChild(contentCard);
    bookList.appendChild(bookCard);
    const commentBtn = document.getElementById(`comment-btn-${data.items[i].id}`);
    commentBtn.addEventListener('click', () => {
      popUp(data.items[i]);
    });

    const heartBtn = document.getElementById(`heart-${data.items[i].id}`);
    heartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__.createLike)(data.items[i].id);
    });
  }
};

const retrieveBooks = () => {
  bookList.innerHTML = '';
  bookDetails();
};

const searchInputBtn = document.getElementById('btn-search');
searchInputBtn.addEventListener('click', retrieveBooks);

const loadLogo = () => {
  const googleLogo = document.querySelector('.header-img');
  googleLogo.src = _images_google_books_png__WEBPACK_IMPORTED_MODULE_1__["default"];
  googleLogo.alt = 'google books Logo';
};

window.onload = async (e) => {
  e.preventDefault();
  likesData = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__.getAllLikes)();
  loadLogo();
  retrieveBooks();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixHQUFHLGdCQUFnQixvQkFBb0IscUJBQXFCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxPQUFPLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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QUE4QyxpQkFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU0sTUFBTTtBQUM5QiwwQ0FBMEMsd0NBQXdDO0FBQ2xGLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBLEtBQUs7O0FBRUwsc0RBQXNELGlCQUFpQjtBQUN2RTtBQUNBO0FBQ0EsTUFBTSxnRUFBVTtBQUNoQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsZ0VBQUk7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFXO0FBQy9CO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vc3JjL2ltYWdlcy9nb29nbGVfYm9va3MucG5nIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vc3JjL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL3NyYy9tb2R1bGVzL3RvdGFsQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL3NyYy9tb2R1bGVzL3RvdGFsSXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTE0NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIGN1cnNpdmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyYXk7XFxufVxcblxcbm5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlci1pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4uYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyNXB4O1xcbiAgbWF4LXdpZHRoOiAxMDg0cHg7XFxuICBtYXJnaW46IDIlIGF1dG87XFxufVxcblxcbi5ib29rQ2FyZCB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyOGJkYjtcXG4gIG1hcmdpbjogMiU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDAgM3B4IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIC0ycHggNHB4IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVW5ib3VuZGVkXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGZvbnQtc2l6ZTogNDAwO1xcbiAgY29sb3I6ICMyNDJhMzM7XFxufVxcblxcbi5ib29rLWNvdmVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDcwLCA3MCwgOTAsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnBhcmEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg3MCwgNzAsIDkwLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIGRvZGdlcmJsdWU7XFxufVxcblxcbi5zZWFyY2gsXFxuLmhlYXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjFlYmI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b3RhbC1ib29rcyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG90YWwtYm9va3M6aG92ZXIge1xcbiAgY29sb3I6ICNmZjFlYmI7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjFlYmI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAwIDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMmIyZTRhO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTE0NDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMCAzcHggN3B4IC0zcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMWViYjtcXG59XFxuXFxuLmhlYXJ0OmhvdmVyLFxcbi5zZWFyY2g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTE0NDtcXG59XFxuXFxuLmxpa2VzLFxcbi5saWtlcy1jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5hcnRpY2xlI3BvcC11cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYyOTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGdhcDogMzBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDRweCAjMDAwMDAwNjE7XFxufVxcblxcbi5wb3AtdXAtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcC11cC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5wb3AtdXAtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDYwcHg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5sZWZ0LWNvbnRlbnQsXFxuLnJpZ3RoLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmJvb2stZGF0YSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmJ1dHRvbiNjbG9zZS1tb2RhbC1idG4ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5wb3AtdXAtY29tbWVudHMsXFxuLnBvcC11cC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtI25ldy1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGRvZGdlcmJsdWU7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDcwLCA3MCwgOTAsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IGRvZGdlcmJsdWU7XFxuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgZG9kZ2VyYmx1ZTtcXG59XFxuXFxuI2NvbW1lbnRzLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmF5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogZ3JheTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udXNlci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix3RUFBd0U7RUFDeEUsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2I7O3FDQUVtQztF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MEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjExNDQ7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmF5O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbnVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLmJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjVweDtcXG4gIG1heC13aWR0aDogMTA4NHB4O1xcbiAgbWFyZ2luOiAyJSBhdXRvO1xcbn1cXG5cXG4uYm9va0NhcmQge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiA0ODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MjhiZGI7XFxuICBtYXJnaW46IDIlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwIDNweCA2cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAtMnB4IDRweCAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlVuYm91bmRlZFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnAge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBmb250LXNpemU6IDQwMDtcXG4gIGNvbG9yOiAjMjQyYTMzO1xcbn1cXG5cXG4uYm9vay1jb3ZlciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg3MCwgNzAsIDkwLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5wYXJhIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYmEoNzAsIDcwLCA5MCwgMC4yNSkgMCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMCAzcHggN3B4IC0zcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCBkb2RnZXJibHVlO1xcbn1cXG5cXG4uc2VhcmNoLFxcbi5oZWFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxZWJiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG90YWwtYm9va3Mge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvdGFsLWJvb2tzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmYxZWJiO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxZWJiO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzJiMmU0YTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjExNDQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1jb21tZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjFlYmI7XFxufVxcblxcbi5oZWFydDpob3ZlcixcXG4uc2VhcmNoOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjExNDQ7XFxufVxcblxcbi5saWtlcyxcXG4ubGlrZXMtY291bnRlciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYXJ0aWNsZSNwb3AtdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMjk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNjAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBnYXA6IDMwcHg7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCA0cHggIzAwMDAwMDYxO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wb3AtdXAtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCA2MHB4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ubGVmdC1jb250ZW50LFxcbi5yaWd0aC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5ib29rLWRhdGEge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogODtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5idXR0b24jY2xvc2UtbW9kYWwtYnRuIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucG9wLXVwLWNvbW1lbnRzLFxcbi5wb3AtdXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSNuZXctY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg3MCwgNzAsIDkwLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIGRvZGdlcmJsdWU7XFxufVxcblxcbiNjb21tZW50cy1saXN0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JheTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnVzZXItbmFtZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNjU4MzI1Zjk0MzFhM2YwZWEzNzQyOWY4YzdhOTMwZC5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2V0QWxsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9nY3hPblI3T3U2c0F4V2RmbkFRdy9saWtlcycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBnZXRJdGVtTGlrZXMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IGdldEFsbExpa2VzKCk7XG4gIGNvbnN0IGZpbHRlcmVkSXRlbSA9IGxpa2VzRGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XG4gIHJldHVybiBmaWx0ZXJlZEl0ZW0ubGlrZXM7XG59O1xuXG5jb25zdCBjcmVhdGVMaWtlID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9nY3hPblI3T3U2c0F4V2RmbkFRdy9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBnZXRBbGxMaWtlcyxcbiAgZ2V0SXRlbUxpa2VzLFxuICBjcmVhdGVMaWtlLFxufTsiLCJjb25zdCBjcmVhdGVDb21tZW50ID0gYXN5bmMgKGJvb2tJZCwgdXNlciwgY29tbWVudCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9nY3hPblI3T3U2c0F4V2RmbkFRdy9jb21tZW50cycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBib29rSWQsXG4gICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4ganNvblJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0Qm9va0RhdGEgPSBhc3luYyAoYm9va0lkKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9nY3hPblI3T3U2c0F4V2RmbkFRdy9jb21tZW50cz9pdGVtX2lkPSR7Ym9va0lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgaWYgKCFkYXRhLmVycm9yKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlQ29tbWVudCxcbiAgZ2V0Qm9va0RhdGEsXG59OyIsImNvbnN0IHRvdGFsQm9va3NJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IFsnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICdydWJ5JywgJ3JlYWN0JywgJ25vZGUnLCAnam9rZXMnLCAnamF2YScsICdtYXRocycsICdhcnQnLCAnc3BhbmlzaCcsICdlbmdsaXNoJywgJ3B5dGhvbicsICdzcWwnXTtcbiAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTMpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWUgfHwgb3B0aW9uc1tudW1dO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPSR7c2VhcmNofWA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCB7IGl0ZW1zIH0gPSBkYXRhO1xuICByZXR1cm4geyBkYXRhLCBpdGVtcywgc2VhcmNoIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3RhbEJvb2tzSXRlbXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWFnZXMvZ29vZ2xlX2Jvb2tzLnBuZyc7XG5pbXBvcnQgdG90YWxCb29rc0l0ZW1zIGZyb20gJy4vbW9kdWxlcy90b3RhbEl0ZW1zLmpzJztcbmltcG9ydCB7IGdldEJvb2tEYXRhLCBjcmVhdGVDb21tZW50IH0gZnJvbSAnLi9tb2R1bGVzL3RvdGFsQ29tbWVudHMuanMnO1xuXG5pbXBvcnQgeyBnZXRBbGxMaWtlcywgY3JlYXRlTGlrZSB9IGZyb20gJy4vbW9kdWxlcy9nZXRMaWtlcy5qcyc7XG5cbmxldCBsaWtlc0RhdGEgPSBbXTtcblxuY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1saXN0Jyk7XG5cbmNvbnN0IHBvcFVwID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgaXRlbS5jb21tZW50cyA9IGF3YWl0IChnZXRCb29rRGF0YShpdGVtLmlkKSk7XG4gIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICBwb3BVcENvbnRhaW5lci5pZCA9ICdwb3AtdXAnO1xuICBwb3BVcENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBvcC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAtaGVhZGVyXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImJvb2stdGl0bGVcIj4ke2l0ZW0udm9sdW1lSW5mby50aXRsZX08L2gyPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtbW9kYWwtYnRuXCI+eDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0udm9sdW1lSW5mby5pbWFnZUxpbmtzLnRodW1ibmFpbH0nIGNsYXNzPVwiYm9vay1pbWFnZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgPGxhYmVsPkF1dGhvcjo8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2stZGF0YVwiPiR7aXRlbS52b2x1bWVJbmZvLmF1dGhvcnNbMF19PC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcnk6PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rLWRhdGFcIj4ke2l0ZW0udm9sdW1lSW5mby5jYXRlZ29yaWVzWzBdfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWd0aC1jb250ZW50XCI+XG4gICAgICAgICAgICA8bGFiZWw+UHVibGlzaGVkIGRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rLWRhdGFcIj4ke2l0ZW0udm9sdW1lSW5mby5wdWJsaXNoZWREYXRlfTwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsPkxhbmd1YWdlOjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vay1kYXRhXCI+JHtpdGVtLnZvbHVtZUluZm8ubGFuZ3VhZ2V9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwLWNvbW1lbnRzXCI+XG4gICAgICAgIDxoMz5Db21tZW50cyAoJHtpdGVtLmNvbW1lbnRzLmxlbmd0aH0pPC9oMz5cbiAgICAgICAgPHVsIGlkPVwiY29tbWVudHMtbGlzdFwiPjwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAtZm9ybVwiPlxuICAgICAgICA8aDM+QWRkIGEgY29tbWVudDwvaDM+XG4gICAgICAgIDxmb3JtIGlkPVwibmV3LWNvbW1lbnRcIj5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlclwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50XCIgbmFtZT1cInVzZXJcIiBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtY29tbWVudFwiIGlkPVwiY29tbWVudC1idG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3BVcENvbnRhaW5lcik7XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsLWJ0bicpO1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BVcENvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkQ29tZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtYnRuJyk7XG4gIGFkZENvbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyJykudmFsdWU7XG4gICAgY29uc3QgdGV4dEFyZWFJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50JykudmFsdWU7XG4gICAgY3JlYXRlQ29tbWVudChpdGVtLmlkLCB1c2VySW5wdXQsIHRleHRBcmVhSW5wdXQpO1xuICAgIHBvcFVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cy1saXN0Jyk7XG4gIGlmIChpdGVtLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICBpdGVtLmNvbW1lbnRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgaXRlbUxpc3QuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPiR7aXRlbS5jcmVhdGlvbl9kYXRlfSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyLW5hbWVcIj4ke2l0ZW0udXNlcm5hbWV9OiA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+JHtpdGVtLmNvbW1lbnR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICByZXR1cm4gY29tbWVudExpc3QuYXBwZW5kKGl0ZW1MaXN0KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VG90YWwgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgaXRlbXMsIHNlYXJjaCB9ID0gYXdhaXQgdG90YWxCb29rc0l0ZW1zKCk7XG4gIHJldHVybiB7IGRhdGEsIGl0ZW1zLCBzZWFyY2ggfTtcbn07XG5cbmNvbnN0IGJvb2tEZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGl0ZW1zLCBzZWFyY2ggfSA9IGF3YWl0IGdldFRvdGFsKCk7XG5cbiAgY29uc3QgdG90YWxCb29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1ib29rcycpO1xuXG4gIHRvdGFsQm9va3MuaW5uZXJIVE1MID0gYCgke2l0ZW1zLmxlbmd0aH0pIEJvb2tzIGFib3V0ICR7c2VhcmNofWA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGlrZXMgPSBsaWtlc0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGRhdGEuaXRlbXNbaV0uaWQpO1xuXG4gICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1saXN0Jyk7XG4gICAgY29uc3QgYm9va0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBib29rQ2FyZENvbnRlbnQgPSBgXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSAgaHJlZj0nJHtkYXRhLml0ZW1zW2ldLnZvbHVtZUluZm8ucHJldmlld0xpbmt9Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7ZGF0YS5pdGVtc1tpXS52b2x1bWVJbmZvLmltYWdlTGlua3MudGh1bWJuYWlsfScgY2xhc3M9XCJib29rLWNvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5Nb3JlIGRldGFpbHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZC1jb21tZW50XCIgaWQ9XCJjb21tZW50LWJ0bi0ke2RhdGEuaXRlbXNbaV0uaWR9XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgJiMxNjA7JiMxNjA7JiMxNjA7JiMxNjA7XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaGVhcnRcIiBpZD1cImhlYXJ0LSR7ZGF0YS5pdGVtc1tpXS5pZH1cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwid2hpdGVcIiBjbGFzcz1cImJpIGJpLWhlYXJ0LWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxLjMxNEMxMi40MzgtMy4yNDggMjMuNTM0IDQuNzM1IDggMTUtNy41MzQgNC43MzYgMy41NjItMy4yNDggOCAxLjMxNHpcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICYjMTYwOyYjMTYwOyYjMTYwOyYjMTYwO1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlcy1jb3VudGVyXCI+JHtsaWtlcy5sZW5ndGggPT09IDAgPyAwIDogbGlrZXNbMF0ubGlrZXN9PC9zcGFuPlxuICAgICAgICAgICAgJiMxNjA7JiMxNjA7JiMxNjA7XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpa2VzXCI+bGlrZXM8L3NwYW4+YDtcbiAgICBjb25zdCB0aXRsZTEgPSBgJHtkYXRhLml0ZW1zW2ldLnZvbHVtZUluZm8udGl0bGV9YDtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlMTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgYm9va0NhcmQuY2xhc3NMaXN0LmFkZCgnYm9va0NhcmQnKTtcbiAgICBjb250ZW50Q2FyZC5pbm5lckhUTUwgPSBib29rQ2FyZENvbnRlbnQ7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoY29udGVudENhcmQpO1xuICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tDYXJkKTtcbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbW1lbnQtYnRuLSR7ZGF0YS5pdGVtc1tpXS5pZH1gKTtcbiAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9wVXAoZGF0YS5pdGVtc1tpXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBoZWFydC0ke2RhdGEuaXRlbXNbaV0uaWR9YCk7XG4gICAgaGVhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY3JlYXRlTGlrZShkYXRhLml0ZW1zW2ldLmlkKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgcmV0cmlldmVCb29rcyA9ICgpID0+IHtcbiAgYm9va0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGJvb2tEZXRhaWxzKCk7XG59O1xuXG5jb25zdCBzZWFyY2hJbnB1dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2VhcmNoJyk7XG5zZWFyY2hJbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldHJpZXZlQm9va3MpO1xuXG5jb25zdCBsb2FkTG9nbyA9ICgpID0+IHtcbiAgY29uc3QgZ29vZ2xlTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItaW1nJyk7XG4gIGdvb2dsZUxvZ28uc3JjID0gTG9nbztcbiAgZ29vZ2xlTG9nby5hbHQgPSAnZ29vZ2xlIGJvb2tzIExvZ28nO1xufTtcblxud2luZG93Lm9ubG9hZCA9IGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGlrZXNEYXRhID0gYXdhaXQgZ2V0QWxsTGlrZXMoKTtcbiAgbG9hZExvZ28oKTtcbiAgcmV0cmlldmVCb29rcygpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==