import React from "react";

export default function WeatherForecastDay(props) {
  let icon = `/img/${props.data.weather[0].icon}.png`;

  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}º`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-day">{day()}</div>

      <img src={icon} alt="description" className="Forecast-img" />
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">{maxTemp()}</span>{" "}
        <span className="Forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
