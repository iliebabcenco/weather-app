let cityName = document.querySelector('.form-control').value
console.log(cityName)
document.getElementById('button-addon').onclick = () => {
    cityName = document.querySelector('.form-control')
    let link = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&appid=5209bc1af9247ca22a92579a25e11d72'
    const getWeatherInfo = async () => {
        const response = await fetch(link, { mode: 'cors' });
        return await response.json();
    }
    cityName.value = ""
    const cityTitle = document.querySelector('.card-title')
    const cityText = document.querySelector('.card-text')
    getWeatherInfo().then(data => {
        const parentElement = document.getElementById("title-div");
        const flag = new CountryFlag(parentElement);
        flag.selectByAlpha2(data.sys.country)
        cityTitle.innerHTML = data.name + " Country: " + data.sys.country
        cityText.innerHTML = "Main temp: " + data.main.temp
            + "<br> Feels_like: " + data.main.feels_like
            + "<br> Wind speed: " + data.wind.speed
    })
}

