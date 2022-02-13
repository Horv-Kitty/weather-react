import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <div className="current-time">
        <FormattedTime date={props.data.time} />
      </div>
      <div className="current-date">
        <FormattedDate date={props.data.date} />
      </div>

      <WeatherTemperature celsius={props.data.temperature} />

      <div className="Weather-type">{props.data.description}</div>

      <WeatherIcon data={props.data} />

      <div className="row weather-informations">
        <div className="col-sm-4">
          <div className="wind">
            <strong>Wind</strong> <span>{props.data.wind}</span>km/h
          </div>
        </div>
        <div className="col-sm-4">
          <div className="humidity">
            <strong>Humidity:</strong> <span>{props.data.humidity}</span>%
          </div>
        </div>
        <div className="col-sm-4">
          <div className="uv-index">
            <strong>UV index:</strong> <span>{props.data.uvIndex}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
