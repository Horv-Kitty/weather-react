import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

import { ReactComponent as RainIcon } from "./rainIcon.svg";
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

      <div className="currentTemperature">
        <span>{Math.round(props.data.temperature)}</span>
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
      <div className="Weather-type">{props.data.description}</div>

      <RainIcon alt={props.data.type} className="current-icon" />

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
