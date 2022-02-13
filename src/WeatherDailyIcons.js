import React from "react";

import "./Weather.css";

export default function WeatherDailyIcons(props) {
  if (props.data === "01d") {
    return (
      <div>
        <i class="fas fa-sun"></i>
      </div>
    );
  }

  if (props.data === "01n") {
    return (
      <div>
        <i class="fas fa-moon"></i>
      </div>
    );
  }

  if (props.data === "02d") {
    return (
      <div>
        <i class="fas fa-cloud-sun"></i>
      </div>
    );
  }

  if (props.data === "02n") {
    return (
      <div>
        <i class="fas fa-cloud-moon"></i>
      </div>
    );
  }

  if (
    props.data === "03d" ||
    props.data === "03n" ||
    props.data === "04d" ||
    props.data === "04n"
  ) {
    return (
      <div>
        <i class="fas fa-cloud"></i>
      </div>
    );
  }

  if (props.data === "09d" || props.data === "09n") {
    return (
      <div>
        <i class="fas fa-cloud-rain"></i>
      </div>
    );
  }

  if (props.data === "10d") {
    return (
      <div>
        <i class="fas fa-cloud-sun-rain"></i>
      </div>
    );
  }

  if (props.data === "10n") {
    return (
      <div>
        <i class="fas fa-cloud-moon-rain"></i>
      </div>
    );
  }

  if (props.data === "11d" || props.data === "11n") {
    return (
      <div>
        <i class="fas fa-cloud-showers-heavy"></i>
      </div>
    );
  }

  if (props.data === "13d" || props.data === "13n") {
    return (
      <div>
        <i class="far fa-snowflake"></i>
      </div>
    );
  }

  if (props.data === "50d" || props.data === "50n") {
    return (
      <div>
        <i class="fas fa-smog"></i>
      </div>
    );
  } else {
    return null;
  }
}
