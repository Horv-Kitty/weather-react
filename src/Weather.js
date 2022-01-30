import React from "react";

import { ReactComponent as RainIcon } from "./rainIcon.svg";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Rotterdam",
    time: "19:00",
    date: "09 January",
    type: "Rainy weather",
    temperature: "10",
    wind: "3",
    humidity: "70",
    uvIndex: "0",
  };
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
        <span>{weatherData.temperature}</span>
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
      <div className="Weather-type">{weatherData.type}</div>

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
}
