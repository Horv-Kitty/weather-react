import React from "react";
import "./WeatherForecast.css";
import "./WeatherDailyIcons.css";

export default function WeatherDailyIcon(props) {
  if (props.icon === "01d") {
    return (
      <div>
        <i class="fas fa-sun"></i>
      </div>
    );
  }

  if (props.icon === "01n") {
    return (
      <div>
        <i class="fas fa-moon"></i>
      </div>
    );
  }

  if (props.icon === "02d") {
    return (
      <div>
        <i class="fas fa-cloud-sun"></i>
      </div>
    );
  }

  if (props.icon === "02n") {
    return (
      <div>
        <i class="fas fa-cloud-moon"></i>
      </div>
    );
  }

  if (
    props.icon === "03d" ||
    props.icon === "03n" ||
    props.icon === "04d" ||
    props.icon === "04n"
  ) {
    return (
      <div>
        <i class="fas fa-cloud"></i>
      </div>
    );
  }

  if (props.icon === "09d" || props.icon === "09n") {
    return (
      <div>
        <i class="fas fa-cloud-rain"></i>
      </div>
    );
  }

  if (props.icon === "10d") {
    return (
      <div>
        <i class="fas fa-cloud-sun-rain"></i>
      </div>
    );
  }

  if (props.icon === "10n") {
    return (
      <div>
        <i class="fas fa-cloud-moon-rain"></i>
      </div>
    );
  }

  if (props.icon === "11d" || props.icon === "11n") {
    return (
      <div>
        <i class="fas fa-cloud-showers-heavy"></i>
      </div>
    );
  }

  if (props.icon === "13d" || props.icon === "13n") {
    return (
      <div>
        <i class="far fa-snowflake"></i>
      </div>
    );
  }

  if (props.icon === "50d" || props.icon === "50n") {
    return (
      <div>
        <i class="fas fa-smog"></i>
      </div>
    );
  } else {
    return null;
  }
}
