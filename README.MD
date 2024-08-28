# Weather API

A simple Express server that fetches weather information using the Weatherstack API.

## Overview

This project is a basic Node.js Express application that provides a weather information endpoint. The server uses the Weatherstack API to retrieve weather data based on user input.

## Features

- **Fetch weather information**: Query the weather information for a specific location using the `/weather` endpoint.
- **Error handling**: Returns error messages for invalid requests or API errors.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/thamim-ansari/adaptnxt-weather-api-backend.git
   cd adaptnxt-weather-api-backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your Weatherstack API key and URL:

   ```dotenv
   API_KEY=your_weatherstack_api_key
   API_URL=http://api.weatherstack.com/current
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

5. **Access the server**:
   Open your browser or use a tool like `curl` or Postman to navigate to `http://localhost:3000/weather?search=city_name` to get weather information for a specific city.

## Example

To get weather information for New York City, you would make a GET request to: `http://localhost:3000/weather?search=New York`

- **Response 200**
  ```
    {
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2024-08-28 12:00",
        "localtime_epoch": 1724846400,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "04:00 PM",
        "temperature": 27,
        "weather_code": 113,
        "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 4,
        "wind_degree": 278,
        "wind_dir": "W",
        "pressure": 1016,
        "precip": 0,
        "humidity": 62,
        "cloudcover": 0,
        "feelslike": 28,
        "uv_index": 8,
        "visibility": 16,
        "is_day": "yes"
    }
  }
  ```

## API Documentation

For more details about the Weatherstack API, including available endpoints and parameters, visit the [Weatherstack API Documentation](https://weatherstack.com/documentation).
