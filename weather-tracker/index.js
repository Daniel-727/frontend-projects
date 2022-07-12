//selecting elements

const search = document.querySelector(".search-bar").querySelector("input");

const temperature = document.querySelector(".temperature");
const weather_condition = document.querySelector(".weather-condition");
const current_time = document.querySelector(".current-time");
const weather_icon = document.querySelector(".weather-icon");
const search_btn = document.querySelector('.search-btn');


const results = document.querySelector('.results');
const title = results.querySelector('h1');

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
        lat: '',
        lon: '',
        callback: '',
        id: '',
        lang: '',
        units: 'imperial',
        mode: 'json'
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

/*response.data will have main which will have temp it will also have weather which has an icon and main it will also have dt which is the unix timestamp*/

const print_results = (data) => {
    temperature.textContent = `${data.main.temp}\u2109`;
    weather_condition.textContent = data.weather[0].main;
    
    const utc_seconds = data.dt;
    const timezone_offset = data.timezone;
    const time_object = calcTime(utc_seconds, timezone_offset);

    current_time.textContent = `Local Time: ${time_object.converted_hours}:${time_object.minutes} ${time_object.day_night}`;

    title.textContent = search.value;

    results.classList.remove('hidden');
}

/* const test = () => {
    console.log(search.value);
} */

//calculate if it is daytime or nighttime

const calcTime = (unix, timezone) => {
    
    let dateObj = new Date((unix + timezone) * 1000);
    let day_night = 'am';
    
    //make our clock display 12 and not 0 
    let hours = dateObj.getUTCHours() % 12;
    if (hours === 0){
        hours = 12;
    }

    //keep track of am or pm
    if (dateObj.getUTCHours() <= 12){

    } else {
        day_night = 'pm';
    }

    //formatting our clock to look nice
    let converted_hours = hours.toString().padStart(2, '0');
    let minutes = dateObj.getUTCMinutes().toString().padStart(2,'0');

    
    return {converted_hours,minutes,day_night};
}

//Search button & enter event
const body = document.querySelector('body'); 

body.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        query_results();
    }
});
search_btn.addEventListener('click', query_results);



