import React from "react";
import { ReactComponent as RainIcon } from "./rainIcon.svg";
import { ReactComponent as DayIcon } from "./dayIcon.svg";
import { ReactComponent as LightSunIcon } from "./lightSunIcon.svg";
import { ReactComponent as SnowIcon } from "./snowIcon.svg";
import { ReactComponent as SunIcon } from "./sunIcon.svg";

import "./Weather.css";

export default function WeatherIcon(props) {
  if (props.data.temperature >= -30 && props.data.temperature <= 0) {
    return <SnowIcon className="current-icon-snow" />;
  }

  if (props.data.temperature >= 1 && props.data.temperature <= 17) {
    return <DayIcon className="current-icon" />;
  }
  if (props.data.temperature >= 18 && props.data.temperature <= 29) {
    return <LightSunIcon className="current-icon" />;
  }

  if (props.data.temperature >= 30 && props.data.temperature <= 60) {
    return <SunIcon className="current-icon-sun" />;
  } else {
    return <RainIcon className="current-icon" />;
  }
}
