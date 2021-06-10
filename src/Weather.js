import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconSrc: `/img/${response.data.weather[0].icon}.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = `17a639a638a4bfe25417abb69ec4868d`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        if (error.response.status === 404) alert("Not a city");
      });
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
        type="ThreeDots"
        color="#FABF58"
        height={200}
        width={200}
        timeout={3000} //3 secs
      />
    );
  }
}
