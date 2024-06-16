import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-app">
        <div className="row">
          <div className="col-4">
            <div className="City">
              <div className="current-data">
                <h1>{props.data.city}</h1>
                <ul>
                  <li>
                    <FormattedDate date={props.data.date} />
                  </li>
                  <li>{props.data.description}</li>
                </ul>
              </div>
            </div>
            <div className="Conditions">
              <ul className="weather-conditions">
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)}km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            <div className="Temperature">
              <div className="current-temperature">
                <span>
                  <img
                    src={props.data.iconUrl}
                    alt={props.data.description}
                  />
                </span>
                <span>{Math.round(props.data.temperature)}</span>
                <span className="units">°C |°F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
