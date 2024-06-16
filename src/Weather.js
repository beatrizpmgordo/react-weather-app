import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "f388b055e9fa4ta275o3155340404ccb";
  let city = "Lisbon";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
                <h1>Lisbon</h1>
                <ul>
                  <li>Friday 16:30</li>
                  <li>Light rain</li>
                </ul>
              </div>
            </div>
            <div className="Conditions">
              <ul className="weather-conditions">
                <li>Precipitation: 20%</li>
                <li>Humidity: 78%</li>
                <li>Wind: 4km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            <div className="Temperature">
              <div className="current-temperature">
                <span>☀️ </span>
                <span>18</span>
                <span class="units">°C |°F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
