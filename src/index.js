let cityName = document.querySelector('.form-control').value
const card = document.querySelector('.card')
const loader = document.querySelector('.loader')
const cardBody = document.getElementById('card-body')
const errorMsg = document.querySelector('.error-msg')
card.style.display = 'none'
loader.style.display = 'none'
errorMsg.style.display = 'none'
document.getElementById('button-addon').onclick = () => {
    loader.style.display = 'block'
    errorMsg.style.display = 'none'
    cityName = document.querySelector('.form-control')
    let link = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&appid=5209bc1af9247ca22a92579a25e11d72'
    const getWeatherInfo = async () => {
        const response = await fetch(link, { mode: 'cors' });
        return await response.json();
    }
    cityName.value = ""
    if (document.getElementById('flag-par') !== null && document.getElementById('flag-par') !== undefined)
        document.getElementById('flag-par').remove()
    const cityTitle = document.querySelector('.card-title')
    const cityText = document.querySelector('.card-text')
    getWeatherInfo().then(data => {
        card.appendChild(cardBody)
        const parentElement = document.getElementById("title-div");
        const flag = new CountryFlag(parentElement);
        flag.selectByAlpha2(data.sys.country.toLowerCase())
        cityTitle.innerHTML = data.name + ", " + CountryFlag.getCountryByAlpha2(data.sys.country.toLowerCase()).name
        cityText.innerHTML = "Main temp: " + data.main.temp
            + "<br> Feels_like: " + data.main.feels_like
            + "<br> Wind speed: " + data.wind.speed
        loader.style.display = 'none'
        card.style.display = 'block'
        cardBody.style.display = 'block'
    }).catch(err => {
        card.style.display = 'block'
        loader.style.display = 'none'
        cardBody.style.display = 'none'
        errorMsg.style.display = 'block'
    })
}

