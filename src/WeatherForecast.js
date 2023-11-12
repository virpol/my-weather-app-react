import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    const weatherCode = "04d";
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code={weatherCode} height={48} />
            
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}