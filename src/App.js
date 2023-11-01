import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCity="Lviv" />

        <footer>
          This project was coded by Vira Dovhalska and is{" "}
          <a
            href="https://github.com/virpol/my-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
