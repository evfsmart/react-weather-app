import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.weatherData.city}, {props.weatherData.country}
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li>{props.weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.weatherData.iconSrc}
              alt={props.weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.weatherData.temperature)}
              </span>
              <span className="unit">ºC</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
