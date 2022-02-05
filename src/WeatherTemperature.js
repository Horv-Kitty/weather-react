import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="currentTemperature">
        <span>{Math.round(props.celsius)}</span>

        <span className="units">
          <span>
            <a href="/" className="Celsius-link">
              °C
            </a>
            |{" "}
          </span>
          <a href="/" className="Fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="currentTemperature">
        <span>{Math.round(fahrenheit())}</span>

        <span className="units">
          <span>
            <a href="/" className="Celsius-link" onClick={showCelsius}>
              °C
            </a>
            |{" "}
          </span>
          <a href="/" className="Fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    );
  }
}
