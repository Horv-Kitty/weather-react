import React from "react";

export default function FormattedDate(props) {
  let months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];
  let month = months[props.date.getMonth()];
  let day = props.date.getDay();
  if (day < 10) {
    day = `0${day}`;
  }

  return (
    <div>
      {day} {month}
    </div>
  );
}
