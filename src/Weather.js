import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      time: new Date(response.data.dt * 1000),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      uvIndex: "0",
    });
  }

  function search() {
    const apiKey = "311f1f45fee82242ab4086372ab360f5";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="row searching-head" onSubmit={handleSubmit}>
          <div className="col-6">
            <input
              type="search"
              placeholder="Look around elsewhere..."
              className="form-control"
              onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
