import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter city"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="weather-app">
          <div className="row">
            <div className="col-4">
              <div className="City">
                <div className="current-data">
                  <h1>{weatherData.city}</h1>
                  <ul>
                    <li>Friday 16:30</li>
                    <li>{weatherData.description}</li>
                  </ul>
                </div>
              </div>
              <div className="Conditions">
                <ul className="weather-conditions">
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                </ul>
              </div>
            </div>
            <div className="col-8">
              <div className="Temperature">
                <div className="current-temperature">
                  <span>
                    <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                    />
                  </span>
                  <span>{Math.round(weatherData.temperature)}</span>
                  <span className="units">°C |°F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f388b055e9fa4ta275o3155340404ccb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
