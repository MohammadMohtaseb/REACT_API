import React, { useState, useEffect } from 'react';
import axios from 'axios';

const cities = [
  { name: 'Amman', id: 1 },
  { name: 'Irbid', id: 2 },
  { name: 'Salt', id: 3 },
];

const WeatherPage = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0].name);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '215bb5c43413234f97b409021c0dbd41'; // أدخل مفتاح API الخاص بك هنا

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, [selectedCity]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
      <h1 className="text-4xl font-bold mb-8 shadow-lg p-4 bg-blue-900 rounded-lg">Weather Application</h1>
      <div className="mb-6">
        <label className="mr-4 font-semibold text-lg">Select City:</label>
        <select
          className="p-3 border-2 border-white rounded-lg bg-white text-gray-700"
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        >
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      {weatherData && (
        <div className="bg-white shadow-xl rounded-lg p-8 w-full h-60  max-w-md text-center transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">{weatherData.name}</h2>
          <p className="text-2xl font-semibold text-gray-800">
            Temperature: <span className="text-blue-600">{Math.round(weatherData.main.temp)}°C</span>
          </p>
          <p className="text-lg text-gray-600">Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
