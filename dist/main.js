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

eval("let cityName = document.querySelector('.form-control').value\r\nconsole.log(cityName)\r\ndocument.getElementById('button-addon').onclick = () => {\r\n    cityName = document.querySelector('.form-control')\r\n    let link = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&appid=5209bc1af9247ca22a92579a25e11d72'\r\n    const getWeatherInfo = async () => {\r\n        const response = await fetch(link, { mode: 'cors' });\r\n        return await response.json();\r\n    }\r\n    cityName.value = \"\"\r\n    if (document.getElementById('flag-par') !== null && document.getElementById('flag-par') !== undefined)\r\n        document.getElementById('flag-par').remove()\r\n    const cityTitle = document.querySelector('.card-title')\r\n    const cityText = document.querySelector('.card-text')\r\n    getWeatherInfo().then(data => {\r\n        const parentElement = document.getElementById(\"title-div\");\r\n        const flag = new CountryFlag(parentElement);\r\n        flag.selectByAlpha2(data.sys.country.toLowerCase())\r\n        cityTitle.innerHTML = data.name + \", \" + CountryFlag.getCountryByAlpha2(data.sys.country.toLowerCase()).name\r\n        cityText.innerHTML = \"Main temp: \" + data.main.temp\r\n            + \"<br> Feels_like: \" + data.main.feels_like\r\n            + \"<br> Wind speed: \" + data.wind.speed\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://week-17-weather-app/./src/index.js?");

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