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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let city = 'balti'\r\nconst link = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5209bc1af9247ca22a92579a25e11d72'\r\n\r\nfetch(link, {\r\n    mode: 'cors'\r\n})\r\n    .then((response) => {\r\n        return response.json()\r\n    })\r\n    .then((obj) => {\r\n        console.log(obj)\r\n    })\r\n    .catch((err) => {\r\n        console.error(err)\r\n    });\n\n//# sourceURL=webpack://week-17-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;