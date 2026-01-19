const apiKey = "856ded96468bcff86c130183e4dc391f";
const errorMsg = document.querySelector('#error-msg');

//fetch weather data through api
async function getWeatherData(city) {
    try {
        loading.classList.remove('hidden')
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error('Invalid city name')
        }
        if (!errorMsg.classList.contains('hidden')) {
            errorMsg.classList.add('hidden')
        }
        let data = await response.json()
        
        localStorage.setItem('cityName', city)
        updateUI(data)
        getWeeklyData(data.coord.lat, data.coord.lon)
        loading.classList.add('hidden')
    } catch (err) {
        loading.classList.add('hidden')
        if (errorMsg.classList.contains('hidden')) {
            errorMsg.classList.remove('hidden')
        }
        errorMsg.innerText = `${err}`
    }
}

// update ui as per the data
async function updateUI(data) {
    document.querySelector('#city')
        .innerText = `${data.name}, ${data.sys.country}`;
    document.querySelector('#temperature')
        .innerHTML = `${Math.round(data.main.temp - 273.15)}&deg`
    document.querySelector('#weather-condition')
        .innerText = `${data.weather[0].main} | ${isDay(data.sys.sunrise, data.sys.sunset)}`
    document.querySelector('#air-quality')
        .innerText = await getdata(data.coord.lat, data.coord.lon, 'quality')
    document.querySelector('#air-quality-description')
        .innerText = await getdata(data.coord.lat, data.coord.lon, 'description')
    document.querySelector('#UV')
        .innerText = false || `Not Available`
    document.querySelector('#feels-like')
        .innerHTML = `${Math.round(data.main.feels_like - 273.15)}&deg`;
    document.querySelector('#humidity')
        .innerText = `${data.main.humidity} %`;
    document.querySelector('#wind')
        .innerText = `${(data.wind.speed * 2.237).toFixed()} mph`
    document.querySelector('#air-pressure')
        .innerText = `${data.main.pressure} hPa`
    document.querySelector('#visibility')
        .innerText = `${(data.visibility / 1000).toFixed(1)} km`
}


let weeklyTempContainer = document.querySelector('#weekly-temp-container')
function updateWeeklyUI(data){
    const list = data.list

    for(let items of list){
        let element = document.createElement('div');
        element.classList.add("flex","flex-col","items-center","h-30","w-90","rounded-2xl","py-4","px-3.5","space-y-2","lg:backdrop-blur-2xl");
         element.innerHTML =
        `
        <p class="text-gray-300 truncate">${getDayByDate(items.dt_txt)}</p>
        <span><i class="fa-solid fa-cloud text-xl"></i></span>
        <p id="today" class="truncate">${Math.round(items.main.temp_min - 273.15)}&deg-${Math.round(items.main.temp_max - 273.15)}&deg</p>
        `
        weeklyTempContainer.appendChild(element)
    }
    
}

function getDayByDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}



async function getWeeklyData(lat, lon) {
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        
        if(!response.ok){
            throw new Error('Unable to get weekly data')
        }

        let data = await response.json();
        updateWeeklyUI(data);

    }catch(err){
        console.log(err)
    }
}

// check is day or night
function isDay(sunrise, sunset) {
    let currentTime = new Date().getTime() / 1000;
    const isDay = currentTime > sunrise && currentTime < sunset;
    return isDay ? `Day` : `Night`;
}
// event listener to the search button
const input = document.querySelector('#input');
document.querySelector('#search-btn')
    .addEventListener('click', () => {
        const cityName = input.value.trim();
        if (cityName) {
            getWeatherData(cityName);
        } else {
            errorMsg.innerText = `Please enter something`
            errorMsg.classList.remove('hidden')
        }
        input.value = ''
    })
// click search button by pressing Enter
input.addEventListener('keypress', (e) => {
    if (e.key === `Enter`) {
        document.querySelector('#search-btn').click();
    }
});

// get air quality through api
async function getdata(lat, lon, value) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error(`Unable to get air quality`)
        }

        let data = await response.json()
        let aqi = data.list[0].main.aqi;
        let aqiQuality = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
        let aqiDescription = ['Air quality is excellent. No health concerns.',
            '	Air quality is acceptable. Some pollutants may be a concern for very sensitive individuals.',
            'Air quality is acceptable, but sensitive individuals (e.g., children, elderly) may experience discomfort.',
            'Health effects may be felt by everyone. Sensitive individuals may experience more serious effects.',
            'Health warnings issued. Everyone may experience serious health effects.']

        return (value == 'description') ? aqiDescription[aqi - 1] : aqiQuality[aqi - 1];
    } catch (err) {
        document.querySelector('#air-quality')
            .innerText = `${err.message}`
    }
};

window.addEventListener('load', () => {
    let city = localStorage.getItem('cityName')
    if(city){
        getWeatherData(city)
    }else{
        getWeatherData('gurugram')
    }
})