import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="01d" height={48} />
            
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}