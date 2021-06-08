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

eval("let cityName = document.querySelector('.form-control').value;\nconst card = document.querySelector('.card');\nconst loader = document.querySelector('.loader');\nconst cardBody = document.getElementById('card-body');\nconst errorMsg = document.querySelector('.error-msg');\nconst cityTextTop = document.querySelector('.card-text-top');\nconst navBar = document.querySelector('.top-nav');\nlet temp = 0;\nlet tempFeels = 0;\ncard.style.display = 'none';\nloader.style.display = 'none';\nerrorMsg.style.display = 'none';\nconst img = document.querySelector('.card-img-top');\nconst flag = document.querySelector('.flag-img');\nconst getImg = (weather) => fetch(`https://api.giphy.com/v1/gifs/translate?api_key=h8rR4RwX5BHSbpgpY866vFAQTa2xENrG&s=${weather}`, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => {\n        img.src = response.data.images.original.url;\n    });\nconst changeBtn = document.querySelector('.btn-primary');\nconst switchKelvin = (kelvins, kelvinFeels) => {\n    if (changeBtn.textContent.includes('Fahrenheit')) {\n        changeBtn.innerHTML = 'Show in Celsius';\n        cityTextTop.innerHTML = `Main temperature: ${(Number.parseInt(kelvins, 10) - 273.15).toFixed(2)} \\u00B0C <br>`\n            + `Feels like: ${(Number.parseInt(kelvinFeels, 10) - 273.15).toFixed(2)} \\u00B0C`;\n    } else {\n        changeBtn.innerHTML = 'Show in Fahrenheit';\n        cityTextTop.innerHTML = `Main temperature: ${((Number.parseInt(kelvins, 10) - 273.15) * 1.8 + 32).toFixed(2)} \\u00B0F <br>`\n            + `Feels like: ${((Number.parseInt(kelvinFeels, 10) - 273.15) * 1.8 + 32).toFixed(2)} \\u00B0F`;\n    }\n};\nchangeBtn.onclick = () => switchKelvin(temp, tempFeels);\ndocument.getElementById('button-addon').onclick = () => {\n    navBar.style.display = 'none';\n    loader.style.display = 'block';\n    errorMsg.style.display = 'none';\n    cityName = document.querySelector('.form-control');\n    const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=5209bc1af9247ca22a92579a25e11d72`;\n    const getWeatherInfo = async () => {\n        const response = await fetch(link, { mode: 'cors' });\n        return response.json();\n    };\n    cityName.value = '';\n    if (document.getElementById('flag-par') !== null && document.getElementById('flag-par') !== undefined) document.getElementById('flag-par').remove();\n    const cityTitle = document.querySelector('.card-title');\n\n    const cityText = document.querySelector('.card-text-bottom');\n    getWeatherInfo().then((data) => {\n        card.appendChild(cardBody);\n        cityTitle.innerHTML = `${data.name}, ${data.sys.country}`;\n        flag.src = `https://www.countryflags.io/${data.sys.country.toLowerCase()}/shiny/64.png`;\n        temp = data.main.temp;\n        tempFeels = data.main.feels_like;\n        switchKelvin(temp, tempFeels);\n\n        cityText.innerHTML = `Humidity: ${data.main.humidity} %`\n            + `<br> Wind speed: ${data.wind.speed} m/s`\n            + `<br> Description: ${data.weather[0].description}`;\n        getImg(data.weather[0].description);\n        loader.style.display = 'none';\n        card.style.display = 'block';\n        cardBody.style.display = 'block';\n    }).catch(() => {\n        getImg('error');\n        card.style.display = 'block';\n        loader.style.display = 'none';\n        cardBody.style.display = 'none';\n        errorMsg.style.display = 'block';\n    });\n};\n\n\n//# sourceURL=webpack://week-17-weather-app/./src/index.js?");

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