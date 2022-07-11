//selecting elements

const search = document.querySelector(".search-bar").querySelector("input");

const temperature = document.querySelector(".temperature");
const weather_condition = document.querySelector(".weather-condition");
const day_night = document.querySelector(".day-night");
const weather_icon = document.querySelector(".weather-icon");
const search_btn = document.querySelector('.search-btn');

// Search bar placeholder functionality
search.addEventListener("focus", () => {
    search.placeholder = "";
});

search.addEventListener("blur", () => {
    search.placeholder = "enter a city...";
});


//API CODE

const query_results = () => {
    let query = search.value;

    const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
        q: query,
        lat: '0',
        lon: '0',
        callback: 'result',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml'
    },
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
    };

    axios.request(options).then(response => {
        console.log(response.data);
        print_results(response.data);
    }).catch(error => {
        console.error(error);
    });
}

/*response.data will have main which will have temp it will also have weather which has an icon and main it will also have dt which might be the time?*/

const print_results = (data) => {

}

const test = () => {
    console.log(search.value);
}


//Search button & enter event

search_btn.addEventListener('click', query_results);



