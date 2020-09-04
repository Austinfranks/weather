import React, { useContext } from "react";

import Context from "../Context";

const Results = () => {
  const { weather, city } = useContext(Context);
  const { temp, humidity, main } = weather;
  //   const { description } = useContext(Context);
  //   const { main } = description;
  return (
    <div className="results">
      <p className="cityName">
        Weather for <span className="cityNameInput">{city}</span>
      </p>
      <div className="weatherData">
        <span className="weatherDataProp">
          <p className="temp">Temperature</p>
          <p className="tempValue">{temp}</p>
        </span>
        <span className="weatherData">
          <p className="humidity">Humidity</p>
          <p className="humidityValue">{humidity}</p>
        </span>
        {/* REVIST FOR LATER */}
        <span className="weatherData">
          <p className="type">Weather</p>
          <p className="typeValue">{main}</p>
        </span>
      </div>
    </div>
  );
};

export default Results;
