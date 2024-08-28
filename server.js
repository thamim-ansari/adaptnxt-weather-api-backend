const express = require("express");
const app = express();

require("dotenv").config();
const port = 3000;

const WEATHERSTACK_API_KEY = process.env.API_KEY;
const WEATHERSTACK_API_URL = process.env.API_URL;

// Start the server
const initializeDBAndServer = () => {
  try {
    app.listen(port, () => {
      console.log(`Server Running at http://localhost:${port}/`);
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// Endpoint to get weather information
app.get("/weather", async (request, response) => {
  try {
    const searchInput = request.query.search;
    if (searchInput === "") {
      return response
        .status(400)
        .json({ message: "Enter a City or Location in search parameter" });
    }
    const getWeatherApiUrl = `${WEATHERSTACK_API_URL}?access_key=${WEATHERSTACK_API_KEY}&query=${searchInput}`;
    const weatherResponse = await fetch(getWeatherApiUrl);
    const weatherApiData = await weatherResponse.json();
    response.status(200).json(weatherApiData);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
