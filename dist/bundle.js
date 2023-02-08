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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #061144;\n  font-family: \"Poppins\", cursive;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid gray;\n}\n\nnav {\n  width: 100%;\n}\n\n.header-img {\n  width: 100px;\n  height: 100px;\n\n  /* background: url(\"google_books.png\") no-repeat; */\n  border-radius: 50%;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-gap: 25px;\n  max-width: 1084px;\n  margin: 2% auto;\n}\n\n.bookCard {\n  width: 350px;\n  height: 480px;\n  background-color: #828bdb;\n  margin: 2%;\n  color: #fff;\n  display: inline-block;\n  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;\n  border-radius: 24px;\n  box-sizing: border-box;\n}\n\n.heading {\n  font-size: 4rem;\n  text-align: center;\n  text-shadow: rgba(255, 255, 255, 0.3) -2px 4px 0;\n  color: white;\n  letter-spacing: normal;\n  letter-spacing: 6px;\n  font-family: \"Unbounded\", cursive;\n}\n\n.text-center {\n  text-align: center;\n}\n\np {\n  letter-spacing: 0;\n  font-size: 400;\n  color: #242a33;\n}\n\n.book-cover {\n  width: 200px;\n  height: 250px;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n}\n\n.para {\n  font-size: 2rem;\n  color: #fff;\n  letter-spacing: 0;\n  text-align: center;\n}\n\ninput {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\n\ninput[type=\"text\"]:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n.search,\n.heart {\n  background-color: #ff1ebb;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.total-books {\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n\n  /*    border-bottom: 2px solid white; */\n}\n\n.total-books:hover {\n  color: #ff1ebb;\n  font-size: 34px;\n  transition: 1s ease-in-out;\n}\n\n.title {\n  background-color: #ff1ebb;\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 6px;\n  padding: 7px;\n  margin-top: 0;\n  height: 8vh;\n  border-radius: 24px 24px 0 0;\n  box-sizing: border-box;\n}\n\na {\n  color: #2b2e4a;\n  font-weight: bold;\n  font-size: 1.5rem;\n  letter-spacing: 0;\n  text-decoration: none;\n}\n\n.add-comment {\n  background-color: #061144;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n  transition: 1s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: #ff1ebb;\n}\n\n.heart:hover,\n.search:hover {\n  background-color: #061144;\n}\n\n.likes,\n.likes-counter {\n  font-size: 20px;\n  font-weight: bold;\n}\n\narticle#pop-up {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #ffffff29;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pop-container {\n  background: #f8f8f8;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  height: 60%;\n  overflow-y: scroll;\n  padding: 20px;\n  box-sizing: border-box;\n  gap: 30px;\n  box-shadow: 2px 3px 3px 4px #00000061;\n}\n\n.pop-up-header {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.pop-up-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n\n.pop-up-content {\n  display: flex;\n  justify-content: center;\n  padding: 0 60px;\n  gap: 40px;\n}\n\n.left-content,\n.rigth-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.book-data {\n  padding-left: 30px;\n  margin-bottom: 8;\n}\n\nlabel {\n  font-size: 14px;\n  opacity: 0.7;\n}\n\nbutton#close-modal-btn {\n  background: transparent;\n  border: none;\n  height: 36px;\n  width: auto;\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.pop-up-comments,\n.pop-up-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nform#new-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  resize: none;\n  width: 270px;\n  height: 150px;\n}\n\ntextarea:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n#comments-list {\n  flex-direction: column;\n}\n\nfooter {\n  border-top: 2px solid gray;\n  box-sizing: border-box;\n  margin-top: 24px;\n  font-size: 20px;\n  color: gray;\n  text-align: center;\n}\n\nfooter p {\n  color: gray;\n}\n\nfooter a {\n  text-decoration: none;\n  color: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: #061144;\n  font-family: \"Poppins\", cursive;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid gray;\n}\n\nnav {\n  width: 100%;\n}\n\n.header-img {\n  width: 100px;\n  height: 100px;\n\n  /* background: url(\"google_books.png\") no-repeat; */\n  border-radius: 50%;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-gap: 25px;\n  max-width: 1084px;\n  margin: 2% auto;\n}\n\n.bookCard {\n  width: 350px;\n  height: 480px;\n  background-color: #828bdb;\n  margin: 2%;\n  color: #fff;\n  display: inline-block;\n  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;\n  border-radius: 24px;\n  box-sizing: border-box;\n}\n\n.heading {\n  font-size: 4rem;\n  text-align: center;\n  text-shadow: rgba(255, 255, 255, 0.3) -2px 4px 0;\n  color: white;\n  letter-spacing: normal;\n  letter-spacing: 6px;\n  font-family: \"Unbounded\", cursive;\n}\n\n.text-center {\n  text-align: center;\n}\n\np {\n  letter-spacing: 0;\n  font-size: 400;\n  color: #242a33;\n}\n\n.book-cover {\n  width: 200px;\n  height: 250px;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n}\n\n.para {\n  font-size: 2rem;\n  color: #fff;\n  letter-spacing: 0;\n  text-align: center;\n}\n\ninput {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\n\ninput[type=\"text\"]:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n.search,\n.heart {\n  background-color: #ff1ebb;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.total-books {\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n\n  /*    border-bottom: 2px solid white; */\n}\n\n.total-books:hover {\n  color: #ff1ebb;\n  font-size: 34px;\n  transition: 1s ease-in-out;\n}\n\n.title {\n  background-color: #ff1ebb;\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 6px;\n  padding: 7px;\n  margin-top: 0;\n  height: 8vh;\n  border-radius: 24px 24px 0 0;\n  box-sizing: border-box;\n}\n\na {\n  color: #2b2e4a;\n  font-weight: bold;\n  font-size: 1.5rem;\n  letter-spacing: 0;\n  text-decoration: none;\n}\n\n.add-comment {\n  background-color: #061144;\n  color: white;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 1rem;\n  padding: 10px;\n  font-size: 20px;\n  transition: 1s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: #ff1ebb;\n}\n\n.heart:hover,\n.search:hover {\n  background-color: #061144;\n}\n\n.likes,\n.likes-counter {\n  font-size: 20px;\n  font-weight: bold;\n}\n\narticle#pop-up {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #ffffff29;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pop-container {\n  background: #f8f8f8;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  height: 60%;\n  overflow-y: scroll;\n  padding: 20px;\n  box-sizing: border-box;\n  gap: 30px;\n  box-shadow: 2px 3px 3px 4px #00000061;\n}\n\n.pop-up-header {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.pop-up-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n\n.pop-up-content {\n  display: flex;\n  justify-content: center;\n  padding: 0 60px;\n  gap: 40px;\n}\n\n.left-content,\n.rigth-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.book-data {\n  padding-left: 30px;\n  margin-bottom: 8;\n}\n\nlabel {\n  font-size: 14px;\n  opacity: 0.7;\n}\n\nbutton#close-modal-btn {\n  background: transparent;\n  border: none;\n  height: 36px;\n  width: auto;\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.pop-up-comments,\n.pop-up-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nform#new-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  font-size: 1.5rem;\n  border: 3px solid dodgerblue;\n  box-shadow:\n    rgba(70, 70, 90, 0.25) 0 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;\n  border-radius: 20px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  resize: none;\n  width: 270px;\n  height: 150px;\n}\n\ntextarea:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n#comments-list {\n  flex-direction: column;\n}\n\nfooter {\n  border-top: 2px solid gray;\n  box-sizing: border-box;\n  margin-top: 24px;\n  font-size: 20px;\n  color: gray;\n  text-align: center;\n}\n\nfooter p {\n  color: gray;\n}\n\nfooter a {\n  text-decoration: none;\n  color: gray;\n}\n"],"sourceRoot":""}]);
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
  const hearts = await response.json();
  window.location.reload();
  return hearts;
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
  const { totalItems } = data;
  return { data, totalItems, search };
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
          <textarea id="comment" name="user" placeholder="Your name" required></textarea>
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
  });

  const commentList = document.getElementById('comments-list');
  if (item.comments.length > 0) {
    item.comments.map((item) => {
      const itemList = document.createElement('li');
      itemList.innerHTML = `
        <div>${item.comment}</div>
      `;
      return commentList.append(itemList);
    });
  }
};

const getTotal = async () => {
  const { data, totalItems, search } = await (0,_modules_totalItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return { data, totalItems, search };
};

const bookDetails = async () => {
  const { data, totalItems, search } = await getTotal();

  const totalBooks = document.querySelector('.total-books');

  totalBooks.innerHTML = `(${totalItems}) Books about ${search}`;

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
    heartBtn.addEventListener('click', () => {
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

function loadLogo() {
  const googleLogo = document.querySelector('.header-img');
  googleLogo.src = _images_google_books_png__WEBPACK_IMPORTED_MODULE_1__["default"];
  googleLogo.alt = 'google books Logo';
}

window.onload = async () => {
  likesData = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__.getAllLikes)();
  loadLogo();
  retrieveBooks();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLE9BQU8sYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVywrQkFBK0IsOEJBQThCLHNDQUFzQyxHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyxrQ0FBa0MsR0FBRyxTQUFTLGdCQUFnQixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLDBEQUEwRCx5QkFBeUIsR0FBRyxRQUFRLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsVUFBVSxrQkFBa0IsZ0VBQWdFLG1CQUFtQixzQkFBc0Isb0JBQW9CLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLDhCQUE4QixlQUFlLGdCQUFnQiwwQkFBMEIsNkVBQTZFLHdCQUF3QiwyQkFBMkIsR0FBRyxjQUFjLG9CQUFvQix1QkFBdUIscURBQXFELGlCQUFpQiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxPQUFPLHNCQUFzQixtQkFBbUIsbUJBQW1CLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0Isb0dBQW9HLHdCQUF3QixHQUFHLFdBQVcsb0JBQW9CLGdCQUFnQixzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyxzQkFBc0IsaUNBQWlDLG9HQUFvRyx3QkFBd0Isa0JBQWtCLGtCQUFrQixpQkFBaUIsMkJBQTJCLHFCQUFxQixHQUFHLGdDQUFnQyw2QkFBNkIscUNBQXFDLEdBQUcsc0JBQXNCLDhCQUE4QixpQkFBaUIsb0dBQW9HLHdCQUF3QixrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLGlCQUFpQixvQkFBb0IscUJBQXFCLDRDQUE0QyxLQUFLLHdCQUF3QixtQkFBbUIsb0JBQW9CLCtCQUErQixHQUFHLFlBQVksOEJBQThCLGdCQUFnQixvQkFBb0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsZ0JBQWdCLGlDQUFpQywyQkFBMkIsR0FBRyxPQUFPLG1CQUFtQixzQkFBc0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsR0FBRyxrQkFBa0IsOEJBQThCLGlCQUFpQixvR0FBb0csd0JBQXdCLGtCQUFrQixvQkFBb0IsK0JBQStCLEdBQUcsd0JBQXdCLDhCQUE4QixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRyw2QkFBNkIsb0JBQW9CLHNCQUFzQixHQUFHLG9CQUFvQixvQkFBb0IsZ0JBQWdCLGlCQUFpQiwwQkFBMEIsV0FBVyxZQUFZLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3Qix1QkFBdUIsa0JBQWtCLDJCQUEyQixlQUFlLGdCQUFnQix1QkFBdUIsa0JBQWtCLDJCQUEyQixjQUFjLDBDQUEwQyxHQUFHLG9CQUFvQixrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0QixvQkFBb0IsY0FBYyxHQUFHLG9DQUFvQyxrQkFBa0IsMkJBQTJCLGdDQUFnQyw0QkFBNEIsR0FBRyxnQkFBZ0IsdUJBQXVCLHFCQUFxQixHQUFHLFdBQVcsb0JBQW9CLGlCQUFpQixHQUFHLDRCQUE0Qiw0QkFBNEIsaUJBQWlCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLGtCQUFrQix3QkFBd0IsdUJBQXVCLFdBQVcsYUFBYSxHQUFHLHFDQUFxQyxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsY0FBYyxzQkFBc0IsaUNBQWlDLG9HQUFvRyx3QkFBd0Isa0JBQWtCLGtCQUFrQixpQkFBaUIsMkJBQTJCLHFCQUFxQixpQkFBaUIsaUJBQWlCLGtCQUFrQixHQUFHLG9CQUFvQiw2QkFBNkIscUNBQXFDLEdBQUcsb0JBQW9CLDJCQUEyQixHQUFHLFlBQVksK0JBQStCLDJCQUEyQixxQkFBcUIsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxjQUFjLGdCQUFnQixHQUFHLGNBQWMsMEJBQTBCLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNsdWE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQy9FLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwySUFBMkksT0FBTztBQUNsSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsT0FBTztBQUN0RTtBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7VUNYOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7QUFDUztBQUNrQjs7QUFFUjs7QUFFaEU7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUIsc0VBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzQkFBc0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJCQUEyQjtBQUNoRTtBQUNBLHFDQUFxQyw4QkFBOEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDhCQUE4QjtBQUNuRTtBQUNBLHFDQUFxQyx5QkFBeUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBYTtBQUNqQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsVUFBVSwyQkFBMkIsUUFBUSxrRUFBZTtBQUM1RCxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxVQUFVLDJCQUEyQjs7QUFFckM7O0FBRUEsNkJBQTZCLFdBQVcsZ0JBQWdCLE9BQU87O0FBRS9ELGtCQUFrQix1QkFBdUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQ0FBcUM7QUFDakUsZ0NBQWdDLDhDQUE4QztBQUM5RTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsaUJBQWlCO0FBQ3pGLGtCQUFrQixNQUFNLE1BQU07QUFDOUIsOENBQThDLGlCQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTSxNQUFNO0FBQzlCLDBDQUEwQyx3Q0FBd0M7QUFDbEYsa0JBQWtCLE1BQU07QUFDeEI7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGlCQUFpQjtBQUMvRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxzREFBc0QsaUJBQWlCO0FBQ3ZFO0FBQ0EsTUFBTSxnRUFBVTtBQUNoQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsZ0VBQUk7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpRUFBVztBQUMvQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL3NyYy9pbWFnZXMvZ29vZ2xlX2Jvb2tzLnBuZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi8uL3NyYy9tb2R1bGVzL2dldExpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9zcmMvbW9kdWxlcy90b3RhbENvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9zcmMvbW9kdWxlcy90b3RhbEl0ZW1zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lbW9kdWxlMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmVtb2R1bGUyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZW1vZHVsZTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjExNDQ7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmF5O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXFxcImdvb2dsZV9ib29rcy5wbmdcXFwiKSBuby1yZXBlYXQ7ICovXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbnVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyNXB4O1xcbiAgbWF4LXdpZHRoOiAxMDg0cHg7XFxuICBtYXJnaW46IDIlIGF1dG87XFxufVxcblxcbi5ib29rQ2FyZCB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyOGJkYjtcXG4gIG1hcmdpbjogMiU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDAgM3B4IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIC0ycHggNHB4IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVW5ib3VuZGVkXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGZvbnQtc2l6ZTogNDAwO1xcbiAgY29sb3I6ICMyNDJhMzM7XFxufVxcblxcbi5ib29rLWNvdmVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDcwLCA3MCwgOTAsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnBhcmEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg3MCwgNzAsIDkwLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIGRvZGdlcmJsdWU7XFxufVxcblxcbi5zZWFyY2gsXFxuLmhlYXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjFlYmI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b3RhbC1ib29rcyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgLyogICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG5cXG4udG90YWwtYm9va3M6aG92ZXIge1xcbiAgY29sb3I6ICNmZjFlYmI7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjFlYmI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAwIDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMmIyZTRhO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTE0NDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMCAzcHggN3B4IC0zcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMWViYjtcXG59XFxuXFxuLmhlYXJ0OmhvdmVyLFxcbi5zZWFyY2g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MTE0NDtcXG59XFxuXFxuLmxpa2VzLFxcbi5saWtlcy1jb3VudGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5hcnRpY2xlI3BvcC11cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYyOTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGdhcDogMzBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDRweCAjMDAwMDAwNjE7XFxufVxcblxcbi5wb3AtdXAtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcC11cC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5wb3AtdXAtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDYwcHg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5sZWZ0LWNvbnRlbnQsXFxuLnJpZ3RoLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmJvb2stZGF0YSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmJ1dHRvbiNjbG9zZS1tb2RhbC1idG4ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5wb3AtdXAtY29tbWVudHMsXFxuLnBvcC11cC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtI25ldy1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGRvZGdlcmJsdWU7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDcwLCA3MCwgOTAsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IGRvZGdlcmJsdWU7XFxuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgZG9kZ2VyYmx1ZTtcXG59XFxuXFxuI2NvbW1lbnRzLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmF5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogZ3JheTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0VBRWIsbURBQW1EO0VBQ25ELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix3RUFBd0U7RUFDeEUsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2I7O3FDQUVtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCOztxQ0FFbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGFB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IixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYxMTQ0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcXG59XFxuXFxubmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyLWltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcblxcbiAgLyogYmFja2dyb3VuZDogdXJsKFxcXCJnb29nbGVfYm9va3MucG5nXFxcIikgbm8tcmVwZWF0OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjVweDtcXG4gIG1heC13aWR0aDogMTA4NHB4O1xcbiAgbWFyZ2luOiAyJSBhdXRvO1xcbn1cXG5cXG4uYm9va0NhcmQge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiA0ODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MjhiZGI7XFxuICBtYXJnaW46IDIlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwIDNweCA2cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAtMnB4IDRweCAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlVuYm91bmRlZFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnAge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBmb250LXNpemU6IDQwMDtcXG4gIGNvbG9yOiAjMjQyYTMzO1xcbn1cXG5cXG4uYm9vay1jb3ZlciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg3MCwgNzAsIDkwLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5wYXJhIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYmEoNzAsIDcwLCA5MCwgMC4yNSkgMCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMCAzcHggN3B4IC0zcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCBkb2RnZXJibHVlO1xcbn1cXG5cXG4uc2VhcmNoLFxcbi5oZWFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxZWJiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG90YWwtYm9va3Mge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gIC8qICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG59XFxuXFxuLnRvdGFsLWJvb2tzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmYxZWJiO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxZWJiO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzJiMmU0YTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjExNDQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAgM3B4IDdweCAtM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1jb21tZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjFlYmI7XFxufVxcblxcbi5oZWFydDpob3ZlcixcXG4uc2VhcmNoOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjExNDQ7XFxufVxcblxcbi5saWtlcyxcXG4ubGlrZXMtY291bnRlciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYXJ0aWNsZSNwb3AtdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMjk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNjAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBnYXA6IDMwcHg7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCA0cHggIzAwMDAwMDYxO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wb3AtdXAtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCA2MHB4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ubGVmdC1jb250ZW50LFxcbi5yaWd0aC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5ib29rLWRhdGEge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogODtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5idXR0b24jY2xvc2UtbW9kYWwtYnRuIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucG9wLXVwLWNvbW1lbnRzLFxcbi5wb3AtdXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSNuZXctY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSg3MCwgNzAsIDkwLCAwLjI1KSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDNweCA3cHggLTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIGRvZGdlcmJsdWU7XFxufVxcblxcbiNjb21tZW50cy1saXN0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JheTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTY1ODMyNWY5NDMxYTNmMGVhMzc0MjlmOGM3YTkzMGQucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldEFsbExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZ2N4T25SN091NnNBeFdkZm5BUXcvbGlrZXMnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZ2V0SXRlbUxpa2VzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCBsaWtlc0RhdGEgPSBhd2FpdCBnZXRBbGxMaWtlcygpO1xuICBjb25zdCBmaWx0ZXJlZEl0ZW0gPSBsaWtlc0RhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xuICByZXR1cm4gZmlsdGVyZWRJdGVtLmxpa2VzO1xufTtcblxuY29uc3QgY3JlYXRlTGlrZSA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZ2N4T25SN091NnNBeFdkZm5BUXcvbGlrZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGhlYXJ0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICByZXR1cm4gaGVhcnRzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0QWxsTGlrZXMsXG4gIGdldEl0ZW1MaWtlcyxcbiAgY3JlYXRlTGlrZSxcbn07IiwiY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jIChib29rSWQsIHVzZXIsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZ2N4T25SN091NnNBeFdkZm5BUXcvY29tbWVudHMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYm9va0lkLFxuICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb25SZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldEJvb2tEYXRhID0gYXN5bmMgKGJvb2tJZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZ2N4T25SN091NnNBeFdkZm5BUXcvY29tbWVudHM/aXRlbV9pZD0ke2Jvb2tJZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmICghZGF0YS5lcnJvcikge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUNvbW1lbnQsXG4gIGdldEJvb2tEYXRhLFxufTsiLCJjb25zdCB0b3RhbEJvb2tzSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSBbJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnLCAncnVieScsICdyZWFjdCcsICdub2RlJywgJ2pva2VzJywgJ2phdmEnLCAnbWF0aHMnLCAnYXJ0JywgJ3NwYW5pc2gnLCAnZW5nbGlzaCcsICdweXRob24nLCAnc3FsJ107XG4gIGNvbnN0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEzKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlIHx8IG9wdGlvbnNbbnVtXTtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT0ke3NlYXJjaH1gO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgeyB0b3RhbEl0ZW1zIH0gPSBkYXRhO1xuICByZXR1cm4geyBkYXRhLCB0b3RhbEl0ZW1zLCBzZWFyY2ggfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdGFsQm9va3NJdGVtczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9nb29nbGVfYm9va3MucG5nJztcbmltcG9ydCB0b3RhbEJvb2tzSXRlbXMgZnJvbSAnLi9tb2R1bGVzL3RvdGFsSXRlbXMuanMnO1xuaW1wb3J0IHsgZ2V0Qm9va0RhdGEsIGNyZWF0ZUNvbW1lbnQgfSBmcm9tICcuL21vZHVsZXMvdG90YWxDb21tZW50cy5qcyc7XG5cbmltcG9ydCB7IGdldEFsbExpa2VzLCBjcmVhdGVMaWtlIH0gZnJvbSAnLi9tb2R1bGVzL2dldExpa2VzLmpzJztcblxubGV0IGxpa2VzRGF0YSA9IFtdO1xuXG5jb25zdCBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLWxpc3QnKTtcblxuY29uc3QgcG9wVXAgPSBhc3luYyAoaXRlbSkgPT4ge1xuICBpdGVtLmNvbW1lbnRzID0gYXdhaXQgKGdldEJvb2tEYXRhKGl0ZW0uaWQpKTtcbiAgY29uc3QgcG9wVXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gIHBvcFVwQ29udGFpbmVyLmlkID0gJ3BvcC11cCc7XG4gIHBvcFVwQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicG9wLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcC11cC1oZWFkZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwiYm9vay10aXRsZVwiPiR7aXRlbS52b2x1bWVJbmZvLnRpdGxlfTwvaDI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1tb2RhbC1idG5cIj54PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9JyR7aXRlbS52b2x1bWVJbmZvLmltYWdlTGlua3MudGh1bWJuYWlsfScgY2xhc3M9XCJib29rLWltYWdlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8bGFiZWw+QXV0aG9yOjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vay1kYXRhXCI+JHtpdGVtLnZvbHVtZUluZm8uYXV0aG9yc1swXX08L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbD5DYXRlZ29yeTo8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2stZGF0YVwiPiR7aXRlbS52b2x1bWVJbmZvLmNhdGVnb3JpZXNbMF19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ3RoLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxsYWJlbD5QdWJsaXNoZWQgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2stZGF0YVwiPiR7aXRlbS52b2x1bWVJbmZvLnB1Ymxpc2hlZERhdGV9PC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+TGFuZ3VhZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rLWRhdGFcIj4ke2l0ZW0udm9sdW1lSW5mby5sYW5ndWFnZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAtY29tbWVudHNcIj5cbiAgICAgICAgPGgzPkNvbW1lbnRzICgke2l0ZW0uY29tbWVudHMubGVuZ3RofSk8L2gzPlxuICAgICAgICA8dWwgaWQ9XCJjb21tZW50cy1saXN0XCI+PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBvcC11cC1mb3JtXCI+XG4gICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cbiAgICAgICAgPGZvcm0gaWQ9XCJuZXctY29tbWVudFwiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbW1lbnRcIiBuYW1lPVwidXNlclwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWNvbW1lbnRcIiBpZD1cImNvbW1lbnQtYnRuXCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocG9wVXBDb250YWluZXIpO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1tb2RhbC1idG4nKTtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wVXBDb250YWluZXIucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZENvbWVudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWJ0bicpO1xuICBhZGRDb21lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcicpLnZhbHVlO1xuICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpLnZhbHVlO1xuICAgIGNyZWF0ZUNvbW1lbnQoaXRlbS5pZCwgdXNlcklucHV0LCB0ZXh0QXJlYUlucHV0KTtcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMtbGlzdCcpO1xuICBpZiAoaXRlbS5jb21tZW50cy5sZW5ndGggPiAwKSB7XG4gICAgaXRlbS5jb21tZW50cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGl0ZW1MaXN0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj4ke2l0ZW0uY29tbWVudH08L2Rpdj5cbiAgICAgIGA7XG4gICAgICByZXR1cm4gY29tbWVudExpc3QuYXBwZW5kKGl0ZW1MaXN0KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VG90YWwgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgdG90YWxJdGVtcywgc2VhcmNoIH0gPSBhd2FpdCB0b3RhbEJvb2tzSXRlbXMoKTtcbiAgcmV0dXJuIHsgZGF0YSwgdG90YWxJdGVtcywgc2VhcmNoIH07XG59O1xuXG5jb25zdCBib29rRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCB0b3RhbEl0ZW1zLCBzZWFyY2ggfSA9IGF3YWl0IGdldFRvdGFsKCk7XG5cbiAgY29uc3QgdG90YWxCb29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1ib29rcycpO1xuXG4gIHRvdGFsQm9va3MuaW5uZXJIVE1MID0gYCgke3RvdGFsSXRlbXN9KSBCb29rcyBhYm91dCAke3NlYXJjaH1gO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxpa2VzID0gbGlrZXNEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBkYXRhLml0ZW1zW2ldLmlkKTtcblxuICAgIGNvbnN0IGJvb2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stbGlzdCcpO1xuICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGVudENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgYm9va0NhcmRDb250ZW50ID0gYFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgIGhyZWY9JyR7ZGF0YS5pdGVtc1tpXS52b2x1bWVJbmZvLnByZXZpZXdMaW5rfSc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2RhdGEuaXRlbXNbaV0udm9sdW1lSW5mby5pbWFnZUxpbmtzLnRodW1ibmFpbH0nIGNsYXNzPVwiYm9vay1jb3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnI+TW9yZSBkZXRhaWxzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGQtY29tbWVudFwiIGlkPVwiY29tbWVudC1idG4tJHtkYXRhLml0ZW1zW2ldLmlkfVwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICYjMTYwOyYjMTYwOyYjMTYwOyYjMTYwO1xuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImhlYXJ0XCIgaWQ9XCJoZWFydC0ke2RhdGEuaXRlbXNbaV0uaWR9XCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cIndoaXRlXCIgY2xhc3M9XCJiaSBiaS1oZWFydC1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMS4zMTRDMTIuNDM4LTMuMjQ4IDIzLjUzNCA0LjczNSA4IDE1LTcuNTM0IDQuNzM2IDMuNTYyLTMuMjQ4IDggMS4zMTR6XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAmIzE2MDsmIzE2MDsmIzE2MDsmIzE2MDtcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtY291bnRlclwiPiR7bGlrZXMubGVuZ3RoID09PSAwID8gMCA6IGxpa2VzWzBdLmxpa2VzfTwvc3Bhbj5cbiAgICAgICAgICAgICYjMTYwOyYjMTYwOyYjMTYwO1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlc1wiPmxpa2VzPC9zcGFuPmA7XG4gICAgY29uc3QgdGl0bGUxID0gYCR7ZGF0YS5pdGVtc1tpXS52b2x1bWVJbmZvLnRpdGxlfWA7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZTE7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGJvb2tDYXJkLmNsYXNzTGlzdC5hZGQoJ2Jvb2tDYXJkJyk7XG4gICAgY29udGVudENhcmQuaW5uZXJIVE1MID0gYm9va0NhcmRDb250ZW50O1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGNvbnRlbnRDYXJkKTtcbiAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rQ2FyZCk7XG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb21tZW50LWJ0bi0ke2RhdGEuaXRlbXNbaV0uaWR9YCk7XG4gICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwKGRhdGEuaXRlbXNbaV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaGVhcnQtJHtkYXRhLml0ZW1zW2ldLmlkfWApO1xuICAgIGhlYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlTGlrZShkYXRhLml0ZW1zW2ldLmlkKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgcmV0cmlldmVCb29rcyA9ICgpID0+IHtcbiAgYm9va0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGJvb2tEZXRhaWxzKCk7XG59O1xuXG5jb25zdCBzZWFyY2hJbnB1dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2VhcmNoJyk7XG5zZWFyY2hJbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldHJpZXZlQm9va3MpO1xuXG5mdW5jdGlvbiBsb2FkTG9nbygpIHtcbiAgY29uc3QgZ29vZ2xlTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItaW1nJyk7XG4gIGdvb2dsZUxvZ28uc3JjID0gTG9nbztcbiAgZ29vZ2xlTG9nby5hbHQgPSAnZ29vZ2xlIGJvb2tzIExvZ28nO1xufVxuXG53aW5kb3cub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICBsaWtlc0RhdGEgPSBhd2FpdCBnZXRBbGxMaWtlcygpO1xuICBsb2FkTG9nbygpO1xuICByZXRyaWV2ZUJvb2tzKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9