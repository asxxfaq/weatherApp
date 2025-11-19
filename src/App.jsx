import React, { useState, useEffect } from 'react';
import SearchBar from '../src/Components/SearchBar';
import WeatherDisplay from '../src/Components/WeatherDisplay';
import './App.css'; 


const API_KEY = '0554bcd3392c4fa1a10133314251811'; 

const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

function App() {
  const [city, setCity] = useState('Kozhikode'); 
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    
    const url = `${BASE_URL}?key=${API_KEY}&q=${cityName}`; 

    try {
      const response = await fetch(url);
      
    
      if (!response.ok) {
        throw new Error('API request failed. Check your API key or network.');
      }

      const data = await response.json();
      
      if (data.error) {
          throw new Error(`Error: ${data.error.message}`);
      }
      
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchWeather(city);
  }, [city]); 

  
  const handleCitySubmit = (newCity) => {
    if (newCity.trim()) {
      setCity(newCity.trim());
    }
  };

  return (
    <div className="App">
      <h1> Weather App </h1>
      <SearchBar onSearch={handleCitySubmit} /> 
      
      {loading && <p className="loading-message">Loading weather data...</p>}
      
      {error && <p className="error-message">Error: {error}</p>}
      
      {weatherData && !loading && !error && (
        <WeatherDisplay data={weatherData} />
      )}

      {!weatherData && !loading && !error && (
        <p>Enter a city name to see the weather!</p>
      )}
    </div>
  );
}

export default App;