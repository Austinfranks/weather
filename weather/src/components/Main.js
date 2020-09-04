import React, { useState } from "react";
import axios from "axios";

// Wraps all components to pass data through
import Context from "../Context";

import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";
import Results from "./Results";
import Error from "./Error";
import DateTime from "./DateTime";
import Title from "./Title";
import Footer from "./Footer";

const Styles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=B612&display=swap");

  .main {
    box-shadow: 0px 13px 40px -13px rgba(0, 0, 0, 0.75);
    font-family: "B612", sans-serif;
    text-align: center;
  }
`;

const Main = () => {
  // weather is the name, setweather is the funciton
  const [weather, setWeather] = useState();

  const [city, setCity] = useState();

  const [description, setMain] = useState();

  const [error, setError] = useState();
  // arrow function
  const api_call = async (e) => {
    // Tells the method to make sure the page doesn't refresh when the form is submitted, because default method page refreshes
    e.preventDefault();

    const location = e.target.elements.location.value;
    // Error if no location is entered
    // remeber set return to stop the api from running the rest of lines of code
    // setWeather to null so no error in console log
    if (!location)
      return setError("Please enter the name of the city !"), setWeather(null);

    // API KEY REMEBER TO DOTENV ***
    const API_KEY = "39c0323e061397eb0f3951e624aea9d4";
    // API KEY REMEBER TO DOTENV ***

    // Use backticks `` for template literals to add the api key to the api url, must add https:// to the api link to tell axios it is a secured link
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`;
    // axios to use request to the api
    const request = axios.get(url);

    const response = await request;
    // sets value to weather response from api
    // setWeather(response.data.weather); ********** come back to this to make dynamic backgrounds based on the weather type clouds rain clear sky etc......
    setWeather(response.data.main);
    setCity(response.data.name);
    // setMain(response.data.weather);
    // If an error occurs but than user corrects mistake the error will dissapear
    setError(null);
  };
  weather && console.log(weather);

  return (
    <Styles>
      <div className="main">
        {/* these items are rendered outside the context because they do not require
        the data in the context */}
        <Header />
        <DateTime />

        <Title />
        {/* Provider gives access to property called value */}
        {/* Value takes all the data that is nested in the content */}
        {/* passing api_call gives component access to api_call as well as weather */}
        <Context.Provider value={{ api_call, weather, city, error }}>
          <Content />
          {/* Weather state only gets called when the submit button is press */}
          {/* And operator */}
          {weather && <Results />}
          {/* If error render out this component */}
          {error && <Error error={error} />}
          {/* error set up as prop rather through context */}
          <Error error={error} />
        </Context.Provider>
        <Footer />
      </div>
    </Styles>
  );
};

export default Main;
