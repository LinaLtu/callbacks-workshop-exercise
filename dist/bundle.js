/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ \"./src/posts.js\");\n\n\nconst displayPosts = () => {\n  _posts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPosts(function(posts) {\n    let output = \"\";\n    posts.forEach(post => {\n      output += `<li>${post.title} <button class=\"delete-button\" data-id=\"${\n        post.id\n      }\">Delete Item</button></li>`;\n    });\n    document.getElementById(\"posts\").innerHTML = output;\n    addOnClickToDeleteButtons();\n  });\n};\n\nconst addOnClickToDeleteButtons = () => {\n  // const deleteButtons = [...document.getElementsByClassName(\"delete-button\")];\n  // deleteButtons.forEach((deleteButton, idx) => {\n  //   deleteButton.addEventListener(\"click\", () => deletePost(idx));\n  // });\n  document.getElementById(\"posts\").addEventListener(\"click\", () => {\n    if (event) {\n      const elem = event.target;\n      console.log(event.target);\n      if (elem.className === \"delete-button\") {\n        console.log(\"Hello\");\n        let postId = elem.dataset.id;\n        console.log(\"Data id\", postId);\n        _posts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deletePost(postId);\n        displayPosts();\n      }\n    }\n  });\n\n  console.log(\"From add on click to delete buttons\");\n};\n\nconst addPost = () => {\n  let title = document.getElementById(\"title\").value;\n  let content = document.getElementById(\"content\").value;\n\n  _posts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setPost({ title, content }, displayPosts);\n  console.log(_posts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].posts);\n};\n\ndocument.getElementById(\"add-post\").addEventListener(\"click\", addPost);\n\n// const deletePost = idx => {\n//   Posts.deletePost(idx);\n//   displayPosts();\n// };\n\ndisplayPosts();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//event bubbling\n// generating id on backend\n\nconst idGenerator = () => {\n  let c = 0;\n  return () => {\n    return c++;\n  };\n};\n\nlet generateId = idGenerator();\n\nconst posts = [\n  {\n    id: generateId(),\n    title: \"Post One\",\n    body: \"This is the content of post one\"\n  },\n  {\n    id: generateId(),\n    title: \"Post Two\",\n    body: \"This is the content of post two\"\n  }\n];\n\nconst getPosts = callback => {\n  setTimeout(() => {\n    callback(posts);\n  }, 1000);\n};\n\nconst setPost = (post, callback) => {\n  setTimeout(() => {\n    posts.push({ ...post, id: generateId() });\n    callback(post);\n  }, 1000);\n};\n\nconst deletePost = postIdx => {\n  setTimeout(() => {\n    posts.splice(postIdx, 1);\n    return posts;\n  }, 1000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ setPost, getPosts, deletePost });\n\n\n//# sourceURL=webpack:///./src/posts.js?");

/***/ })

/******/ });