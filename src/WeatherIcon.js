import React from "react";

export default function WeatherIcon(props) {
    console.log(props);
    if (props.code === "01d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
          alt="Clear Day"
          height="48"
        />
      );
    } else if (props.code === "01n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg"
          alt="Clear Night"
          height="48"
        />
      );
    } else if (props.code === "02d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg"
          alt="Partly Cloudy Day"
          height="48"
        />
      );
    } else if (props.code === "02n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg"
          alt="Partly Cloudy Night"
          height="48"
        />
      );
    } else if (props.code === "03d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg"
          alt="Cloudy Day"
          height="48"
        />
      );
    } else if (props.code === "03n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg"
          alt="Cloudy Night"
          height="48"
        />
      );
    } else if (props.code === "04d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg"
          alt="Overcast Day"
          height="48"
        />
      );
    } else if (props.code === "04n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg"
          alt="Overcast Night"
          height="48"
        />
      );
    } else if (props.code === "09d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg"
          alt="Drizzle Day"
          height="48"
        />
      );
    } else if (props.code === "09n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg"
          alt="Drizzle Night"
          height="48"
        />
      );
    } else if (props.code === "10d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg"
          alt="Rain Day"
          height="48"
        />
      );
    } else if (props.code === "10n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg"
          alt="Rain Night"
          height="48"
        />
      );
    } else if (props.code === "11d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme.svg"
          alt="Thunderstorms Day"
          height="48"
        />
      );
    } else if (props.code === "11n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme.svg"
          alt="Thunderstorms Night"
          height="48"
        />
      );
    } else if (props.code === "13d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg"
          alt="Snow Day"
          height="48"
        />
      );
    } else if (props.code === "13n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg"
          alt="Snow Night"
          height="48"
        />
      );
    } else if (props.code === "50d") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg"
          alt="Mist Day"
          height="48"
        />
      );
    } else if (props.code === "50n") {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg"
          alt="Mist Night"
          height="48"
        />
      );
    }  else {
      return (
        <img
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg"
          alt="Fog"
          height={48}
        />
      );
    }



    
}