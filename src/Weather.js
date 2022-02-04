import React, { useState } from "react";
import axios from "axios";

import { ReactComponent as RainIcon } from "./rainIcon.svg";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      time: "19:00",
      date: "09 January",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      uvIndex: "0",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="row searching-head">
          <div className="col-6">
            <input
              type="search"
              placeholder="Look around elsewhere..."
              className="form-control"
            />
          </div>
          <span className="col-1">
            <button type="submit" className="searchingbutton">
              <i className="fas fa-search-location"></i>
            </button>
          </span>
          <span className="col-1">
            <button type="submit" className="searchingCurrentLocation">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </span>
        </form>

        <h1>{weatherData.city}</h1>

        <div className="current-time">{weatherData.time}</div>
        <div className="current-date">{weatherData.date}</div>

        <div className="currentTemperature">
          <span>{Math.round(weatherData.temperature)}</span>
          <span className="units">
            <span>
              <a href="/" className="Celsius-link">
                °C
              </a>
              |{" "}
            </span>
            <a href="/" className="Fahrenheit-link">
              °F
            </a>
          </span>
        </div>
        <div className="Weather-type">{weatherData.description}</div>

        <RainIcon alt={weatherData.type} className="current-icon" />

        <div className="row weather-informations">
          <div className="col-sm-4">
            <div className="wind">
              <strong>Wind</strong> <span>{weatherData.wind}</span>km/h
            </div>
          </div>
          <div className="col-sm-4">
            <div className="humidity">
              <strong>Humidity:</strong> <span>{weatherData.humidity}</span>%
            </div>
          </div>
          <div className="col-sm-4">
            <div className="uv-index">
              <strong>UV index:</strong> <span>{weatherData.uvIndex}</span>
            </div>
          </div>
        </div>

        <div className="openSource">
          <a
            href="https://github.com/Horv-Kitty/weather-react"
            target="_blank"
            rel="noreferrer"
            className="openSourceLink"
          >
            Open-source code
          </a>
          <span> by Kitti Horvath</span>
        </div>
      </div>
    );
  } else {
    const apiKey = "311f1f45fee82242ab4086372ab360f5";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
