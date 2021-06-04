let city = 'balti'
const link = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5209bc1af9247ca22a92579a25e11d72'

// fetch(link, {
//     mode: 'cors'
// })
//     .then((response) => {
//         return response.json()
//     })
//     .then((obj) => {
//         console.log(obj)
//     })
//     .catch((err) => {
//         console.error(err)
//     });

const getWeatherInfo = async () => {
    const response = await fetch(link, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData)
}
