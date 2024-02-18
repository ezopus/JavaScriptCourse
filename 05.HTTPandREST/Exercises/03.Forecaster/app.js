function attachEvents() {
    const userInput = document.querySelector("#location");
    const getWeatherButton = document.querySelector("#submit");
    getWeatherButton.addEventListener("click", getWeather);

    async function getWeather() {
        //show forecast element
        document.querySelector("#forecast").style.display = "block";

        //clear previous forecast if existing
        document.querySelectorAll("#current :not(.label)").forEach(el => el.remove());
        document.querySelectorAll("#upcoming :not(.label)").forEach(el => el.remove());

        //remove previous errors if existing
        document.querySelectorAll("#forecast > :not(div#current, div#upcoming)").forEach(el => el.remove());


        //get locations
        const locationsResponse = await fetch("http://localhost:3030/jsonstore/forecaster/locations");
        const locations = await locationsResponse.json();
        const location = locations.find(l => l.name.toLowerCase() === userInput.value.toLowerCase());

        let currentForecast;
        let currentForecastResponse;

        //check if location exists and get current forecast, if not print error and return
        try {
            currentForecastResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`);
            currentForecast = await currentForecastResponse.json();
        } catch {
            const error = document.createElement("div");
            error.textContent = "Error";
            document.querySelector("#forecast").appendChild(error);
            return;
        }

        //get upcoming forecast
        const threeDayForecastResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`);
        const threeDayForecast = await threeDayForecastResponse.json();


        const currentWeatherWrapper = document.createElement("div");
        currentWeatherWrapper.classList.add("forecasts");

        document.querySelector("#current").appendChild(currentWeatherWrapper);

        const upcomingWeatherWrapper = document.createElement("span");
        upcomingWeatherWrapper.classList.add("forecast-info");
        document.querySelector("#upcoming").appendChild(upcomingWeatherWrapper);

        createCurrentWeatherElements(currentForecast, currentWeatherWrapper);
        for (let upcoming of threeDayForecast.forecast) {
            createUpcomingWeatherElements(upcoming, upcomingWeatherWrapper);
        }
    }

    function createCurrentWeatherElements(forecast, parent) {
        const currentWeatherIcon = document.createElement("span");
        currentWeatherIcon.classList.add("condition", "symbol");
        currentWeatherIcon.innerHTML = weatherIcons[forecast.forecast.condition];
        parent.appendChild(currentWeatherIcon);

        const conditionWrapper = document.createElement("span");
        conditionWrapper.classList.add("condition");

        const city = document.createElement("span");
        city.classList.add("forecast-data");
        city.textContent = forecast.name;
        conditionWrapper.appendChild(city);

        const degrees = document.createElement("span");
        degrees.classList.add("forecast-data");
        degrees.innerHTML = `${forecast.forecast.low}${weatherIcons.degrees}/${forecast.forecast.high}${weatherIcons.degrees}`
        conditionWrapper.appendChild(degrees);

        const condition = document.createElement("span");
        condition.classList.add("forecast-data");
        condition.textContent = forecast.forecast.condition;
        conditionWrapper.appendChild(condition)

        parent.appendChild(conditionWrapper);
    }

    function createUpcomingWeatherElements(forecast, parent) {
        const upcomingWrapper = document.createElement("span");
        upcomingWrapper.classList.add("upcoming");

        const symbol = document.createElement("span");
        symbol.classList.add("symbol");
        symbol.innerHTML = weatherIcons[forecast.condition];
        upcomingWrapper.appendChild(symbol);

        const degrees = document.createElement("span");
        degrees.classList.add("forecast-data");
        degrees.innerHTML = `${forecast.low}${weatherIcons.degrees}/${forecast.high}${weatherIcons.degrees}`
        upcomingWrapper.appendChild(degrees);

        const condition = document.createElement("span");
        condition.classList.add("forecast-data");
        condition.textContent = forecast.condition;
        upcomingWrapper.appendChild(condition)

        parent.appendChild(upcomingWrapper);
    }

    const weatherIcons = {
        "Sunny": "&#x2600;",
        "Partly sunny": "&#x26C5;",
        "Overcast": "&#x2601;",
        "Rain": "&#x2614;",
        degrees: "&#176;"
    }
}

attachEvents();