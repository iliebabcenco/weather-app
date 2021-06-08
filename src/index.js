let cityName = document.querySelector('.form-control').value;
const card = document.querySelector('.card');
const loader = document.querySelector('.loader');
const cardBody = document.getElementById('card-body');
const errorMsg = document.querySelector('.error-msg');
const cityTextTop = document.querySelector('.card-text-top');
const navBar = document.querySelector('.top-nav');
let temp = 0;
let tempFeels = 0;
card.style.display = 'none';
loader.style.display = 'none';
errorMsg.style.display = 'none';
const img = document.querySelector('.card-img-top');
const flag = document.querySelector('.flag-img');
const getImg = (weather) => fetch(`https://api.giphy.com/v1/gifs/translate?api_key=h8rR4RwX5BHSbpgpY866vFAQTa2xENrG&s=${weather}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
        img.src = response.data.images.original.url;
    });
const changeBtn = document.querySelector('.btn-primary');
const switchKelvin = (kelvins, kelvinFeels) => {
    if (changeBtn.textContent.includes('Fahrenheit')) {
        changeBtn.innerHTML = 'Show in Celsius';
        cityTextTop.innerHTML = `Main temperature: ${((Number.parseInt(kelvins, 10) - 273.15) * 1.8 + 32).toFixed(2)} \u00B0F <br>`
            + `Feels like: ${((Number.parseInt(kelvinFeels, 10) - 273.15) * 1.8 + 32).toFixed(2)} \u00B0F`;
    } else {
        changeBtn.innerHTML = 'Show in Fahrenheit';
        cityTextTop.innerHTML = `Main temperature: ${(Number.parseInt(kelvins, 10) - 273.15).toFixed(2)} \u00B0C <br>`
            + `Feels like: ${(Number.parseInt(kelvinFeels, 10) - 273.15).toFixed(2)} \u00B0C`;

    }
};
changeBtn.onclick = () => switchKelvin(temp, tempFeels);
document.getElementById('button-addon').onclick = () => {
    navBar.style.display = 'none';
    loader.style.display = 'block';
    errorMsg.style.display = 'none';
    cityName = document.querySelector('.form-control');
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=5209bc1af9247ca22a92579a25e11d72`;
    const getWeatherInfo = async () => {
        const response = await fetch(link, { mode: 'cors' });
        return response.json();
    };
    cityName.value = '';
    if (document.getElementById('flag-par') !== null && document.getElementById('flag-par') !== undefined) document.getElementById('flag-par').remove();
    const cityTitle = document.querySelector('.card-title');

    const cityText = document.querySelector('.card-text-bottom');
    getWeatherInfo().then((data) => {
        card.appendChild(cardBody);
        cityTitle.innerHTML = `${data.name}, ${data.sys.country}`;
        flag.src = `https://www.countryflags.io/${data.sys.country.toLowerCase()}/shiny/64.png`;
        temp = data.main.temp;
        tempFeels = data.main.feels_like;
        cityTextTop.innerHTML = `Main temperature: ${(Number.parseInt(temp, 10) - 273.15).toFixed(2)} \u00B0C <br>`
            + `Feels like: ${(Number.parseInt(tempFeels, 10) - 273.15).toFixed(2)} \u00B0C`;

        cityText.innerHTML = `Humidity: ${data.main.humidity} %`
            + `<br> Wind speed: ${data.wind.speed} m/s`
            + `<br> Description: ${data.weather[0].description}`;
        getImg(data.weather[0].description);
        loader.style.display = 'none';
        card.style.display = 'block';
        cardBody.style.display = 'block';
    }).catch((err) => {
        console.log(err)
        getImg('error');
        card.style.display = 'block';
        loader.style.display = 'none';
        cardBody.style.display = 'none';
        errorMsg.style.display = 'block';
    });
};
